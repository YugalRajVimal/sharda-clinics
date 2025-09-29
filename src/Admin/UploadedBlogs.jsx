import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { useAdmin } from "../context/AdminContext";

export default function UploadedBlog() {
  const [uploads, setUploads] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const loader = useRef(null);
  const { getUploadedBlogs } = useAdmin();

  const fetchUploads = async (pageNum) => {
    if (loading || pageNum > totalPages) return;
    setLoading(true);
    try {
      const response = await getUploadedBlogs(pageNum, 10); // page, limit
      console.log(response);
      if (response) {
        setUploads((prev) => [...prev, ...response]);
        setTotalPages(response.totalPages);
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

  // Intersection Observer for infinite scroll
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

  return (
    <div>
      <h2>Previous Blogs</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {uploads.map((item, idx) => {
          const fileUrl = item.imagePath
            ? `${import.meta.env.VITE_API_URL}/${item.imagePath}`
            : item.videoPath
            ? `${import.meta.env.VITE_API_URL}/${item.videoPath}`
            : null;
          return (
            <div key={idx}>
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
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>

      {/* loader div for infinite scroll */}
      <div
        ref={loader}
        className="h-10 w-full flex justify-center items-center"
      >
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
}
