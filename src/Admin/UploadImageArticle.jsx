import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { useAdmin } from "../context/AdminContext";

export default function UploadImageArticle() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [uploads, setUploads] = useState([]);
  const [expanded, setExpanded] = useState(null);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const loader = useRef(null);
  const { uploadData, getUploadedData, deleteData } = useAdmin();

  // Fetch uploads with pagination
  const fetchUploads = async (pageNum) => {
    if (loading || pageNum > totalPages) return;
    setLoading(true);
    try {
      const response = await getUploadedData(pageNum, 10);
      if (response) {
        setUploads((prev) => [...prev, ...response]);
        setTotalPages(response.totalPages || 1);
      }
    } catch (err) {
      console.error("Failed to fetch Data", err);
      toast.error("Failed to fetch Data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUploads(page);
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && page < totalPages) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );
    if (loader.current) observer.observe(loader.current);
    return () => loader.current && observer.unobserve(loader.current);
  }, [loader, page, totalPages]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image only.");
      return;
    }

    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!title.trim()) return toast.error("Please enter a title.");
    if (!description.trim()) return toast.error("Please enter a description.");
    if (!selectedFile) return toast.error("Please select an image.");

    const response = await uploadData(selectedFile, title, description);
    if (response) {
      setUploads((prev) => [response.data, ...prev]);
      setSelectedFile(null);
      setPreview(null);
      setTitle("");
      setDescription("");
      toast.success("Uploaded successfully!");
    }
  };

  const handleDelete = async (id) => {
    if (!id) return;
    if (!window.confirm("Are you sure you want to delete this Data?")) return;

    try {
      const response = await deleteData(id);
      if (response?.success) {
        setUploads((prev) => prev.filter((item) => item._id !== id));
        toast.success("Deleted successfully!");
      } else {
        toast.error("Failed to delete Data");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete Data");
    }
  };

  // 🔹 Separate uploads into three categories
  const imageUploads = uploads.filter((u) => u.imagePath);
  const videoUploads = uploads.filter((u) => u.videoPath);
  const textUploads = uploads.filter((u) => !u.imagePath && !u.videoPath);

  return (
    <>
    <h1 className="my-6 text-3xl font-serif text-center w-full border-b-2 border-black">
      Admin Panel
    </h1>
    <div className="w-full flex flex-col  items-center px-6">
      <h1 className="mb-4 text-2xl">Upload Image Article</h1>
      {/* Preview */}
      <div className="w-full max-w-7xl bg-white rounded-lg shadow-lg p-4 mb-6">
        <label htmlFor="article-title" className="block text-base font-medium text-black mb-1">Title</label>
        <input
          type="text"
          id="article-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title..."
          className="w-full border text-black rounded-md p-2 mb-3"
        />

        <label htmlFor="article-description" className="block text-base font-medium text-black mb-1">Description</label>
        <textarea
          id="article-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description..."
          className="w-full border text-black rounded-md p-2 mb-3"
        />

        {/* Upload Input */}
        <input
          type="file"
          id="upload-file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
        <label
          htmlFor="upload-file"
          className="cursor-pointer mb-6 w-fit bg-blue-900 text-white  flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-white-500  hover:bg-blue-400 hover:text-white transition font-medium"
        >
          + Upload Image
        </label>

        <button
          onClick={handleUpload}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Upload
        </button>
      </div>

      {preview ? (
        <img src={preview} alt="preview" className="w-full rounded-lg mb-4" />
      ) : (
        <div className="w-full py-4 text-center bg-gray-100 text-gray-500 rounded-lg mb-4">
          Select an image to preview (optional)
        </div>
      )}

      {/* Image Cards */}
      <h2 className="font-bold text-xl mb-3">📷 Image Uploads</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full max-w-5xl mb-10">
        {imageUploads.map((item) => (
          <Card
            key={item._id}
            item={item}
            setExpanded={setExpanded}
            handleDelete={handleDelete}
          />
        ))}
      </div>

      {/* Video Cards */}
      {/* <h2 className="font-bold text-xl mb-3">🎥 Video Uploads</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full max-w-5xl mb-10">
        {videoUploads.map((item) => (
          <Card
            key={item._id}
            item={item}
            setExpanded={setExpanded}
            handleDelete={handleDelete}
          />
        ))}
      </div> */}

      {/* Text-Only Cards */}
      {/* <h2 className="font-bold text-xl mb-3">📝 Text-Only Uploads</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full max-w-5xl mb-24">
        {textUploads.map((item) => (
          <Card
            key={item._id}
            item={item}
            setExpanded={setExpanded}
            handleDelete={handleDelete}
          />
        ))}
      </div> */}

      {/* Infinite Scroll Loader */}
      <div
        ref={loader}
        className="h-10 w-full flex justify-center items-center"
      >
        {loading && <p>Loading...</p>}
      </div>

      {/* Expanded Modal */}
      {expanded && (
        <div
          onClick={() => setExpanded(null)}
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
        >
          <div
            className="relative max-w-3xl w-full p-4 bg-white rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {expanded.videoPath ? (
              <video
                src={expanded.url}
                controls
                className="w-full rounded-lg"
              />
            ) : expanded.imagePath ? (
              <img
                src={expanded.url}
                alt={expanded.title}
                className="w-full rounded-lg"
              />
            ) : null}
            <h2 className="font-bold text-lg mt-3">{expanded.title}</h2>
            <p className="text-gray-700">{expanded.description}</p>
            <button
              onClick={() => setExpanded(null)}
              className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  );
}

// 🔹 Card Component
function Card({ item, setExpanded, handleDelete }) {
  const fileUrl = item.imagePath
    ? `${import.meta.env.VITE_API_URL}/${item.imagePath}`
    : item.videoPath
    ? `${import.meta.env.VITE_API_URL}/${item.videoPath}`
    : null;

  return (
    <div className="relative border rounded-lg shadow overflow-hidden">
      {fileUrl ? (
        item.videoPath ? (
          <video src={fileUrl} className="w-full h-32 object-cover" />
        ) : (
          <img
            src={fileUrl}
            alt={item.title}
            className="w-full h-32 object-cover"
          />
        )
      ) : (
        <div className="w-full h-32 flex items-center justify-center bg-gray-100 text-gray-500">
          No media
        </div>
      )}
      <div className="p-2">
        <h3 className="font-semibold text-sm">{item.title}</h3>
        <p className="text-xs text-gray-500 truncate">{item.description}</p>
      </div>
      {fileUrl && (
        <button
          onClick={() => setExpanded({ url: fileUrl, ...item })}
          className="absolute bottom-2 right-2 bg-white px-2 py-1 text-xs rounded shadow hover:bg-gray-100"
        >
          View
        </button>
      )}
      <button
        onClick={() => handleDelete(item._id)}
        className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded shadow hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
}
