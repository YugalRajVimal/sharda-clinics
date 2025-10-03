import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { useAdmin } from "../context/AdminContext";

export default function UploadBlog() {
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
  const { uploadBlog, getUploadedBlogs, deleteBlog } = useAdmin();

  // Fetch uploads with pagination
  const fetchUploads = async (pageNum) => {
    if (loading || pageNum > totalPages) return;
    setLoading(true);
    try {
      const response = await getUploadedBlogs(pageNum, 10); // page, limit
      if (response) {
        setUploads((prev) => [...prev, ...response]);
        setTotalPages(response.totalPages || 1);
      }
    } catch (err) {
      console.error("Failed to fetch blogs", err);
      toast.error("Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchUploads(page);
  }, [page]);

  // Infinite scroll
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

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [loader, page, totalPages]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("video/") && !file.type.startsWith("image/")) {
      toast.error("Please select a video or image only.");
      return;
    }

    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!title.trim()) return toast.error("Please enter a title.");
    if (!description.trim()) return toast.error("Please enter a description.");

    const response = await uploadBlog(selectedFile, title, description);
    if (response) {
      // Add newly uploaded blog to top
      setUploads((prev) => [response.blog, ...prev]);
      setSelectedFile(null);
      setPreview(null);
      setTitle("");
      setDescription("");
      toast.success("Uploaded successfully!");
    }
  };

  const handleDeleteBlog = async (blogId) => {
    if (!blogId) return toast.error("Blog ID is required to delete a blog");

    const isConfirmed = window.confirm(
      "Are you sure you want to delete this blog?"
    );
    if (!isConfirmed) {
      return; // User cancelled the deletion
    }

    try {
      const response = await deleteBlog(blogId); // API call to delete the blog
      if (response?.success) {
        // Remove the deleted blog from the frontend list
        setUploads((prev) => prev.filter((blog) => blog._id !== blogId));
        toast.success("Blog deleted successfully!");
      } else {
        toast.error(response?.message || "Failed to delete blog");
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      toast.error("Failed to delete blog");
    }
  };

  return (
    <>
      <h1 className="my-6 text-3xl font-serif text-center w-full border-b-2 border-black">
        Admin Panel
      </h1>
    <div className="w-full flex flex-col pt-20 items-center px-6">
      {/* Upload Input */}

      <h1 className="mb-4 text-2xl">Upload Blogs</h1>

      {/* Preview Section */}
      <div className="w-full max-w-7xl bg-white dark:bg-zinc-300 rounded-lg shadow-lg p-4 mb-6">
        <label
          htmlFor="blog-title"
          className="block text-base font-medium text-black mb-1"
        >
          Title
        </label>
        <input
          type="text"
          id="blog-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title..."
          className="w-full border text-black rounded-md p-2 mb-3"
        />

        <label
          htmlFor="blog-description"
          className="block text-base font-medium text-black mb-1"
        >
          Description
        </label>
        <textarea
          id="blog-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description..."
          className="w-full border text-black rounded-md p-2 mb-3"
        />

        <input
          type="file"
          id="upload-file"
          accept="video/*,image/*"
          className="hidden"
          onChange={handleFileChange}
        />
        <label
          htmlFor="upload-file"
          className="cursor-pointer mb-6 w-fit bg-blue-900 text-white  flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-white-500  hover:bg-blue-400 hover:text-white transition font-medium"
        >
          + Upload Video / Image (Optional)
        </label>

        <button
          onClick={handleUpload}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Upload
        </button>
      </div>

      {preview ? (
        selectedFile.type.startsWith("video/") ? (
          <video src={preview} controls className="w-full rounded-lg mb-4" />
        ) : (
          <img src={preview} alt="preview" className="w-full rounded-lg mb-4" />
        )
      ) : (
        <div className="w-full py-4 flex items-center justify-center bg-gray-100 text-gray-500 rounded-lg mb-4 text-center">
          Select an image or video to preview (optional)
        </div>
      )}

      {/* Previous Uploads */}
      <div className="flex justify-between w-full max-w-5xl items-center mb-4">
        <h2 className="font-bold text-lg">Previous Blogs</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full max-w-5xl mb-24">
        {uploads.map((item, idx) => {
          const fileUrl = item.imagePath
            ? `${import.meta.env.VITE_API_URL}/${item.imagePath}`
            : item.videoPath
            ? `${import.meta.env.VITE_API_URL}/${item.videoPath}`
            : null;

          return (
            <div
              key={idx}
              className="relative border rounded-lg shadow overflow-hidden"
            >
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
                <p className="text-xs text-gray-500 truncate">
                  {item.description}
                </p>
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
                onClick={() => handleDeleteBlog(item._id)}
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded shadow hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>

      {/* Infinite scroll loader */}
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
