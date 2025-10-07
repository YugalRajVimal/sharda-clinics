import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";

const BlogsPage = ({ lang }) => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(null);

  const loader = useRef(null);

  const getUploadedBlogs = async (pageNum = 1, limit = 6) => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }/api/admin/blogs?page=${pageNum}&limit=${limit}`
      );
      return {
        blogs: Array.isArray(response.data?.blogs) ? response.data.blogs : [],
        totalPages: Number(response.data?.totalPages) || 1,
      };
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
      toast.error("Failed to fetch blogs");
      return { blogs: [], totalPages: 1 };
    }
  };

  const fetchBlogs = async (pageNum) => {
    if (loading || pageNum > totalPages) return;
    setLoading(true);
    try {
      const data = await getUploadedBlogs(pageNum);
      const newBlogs = Array.isArray(data?.blogs) ? data.blogs : [];

      setBlogs((prev) => [...prev, ...newBlogs]);
      setTotalPages(Number(data?.totalPages) || 1);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs(page);
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
    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [loader, page, totalPages]);

  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-20 min-h-screen bg-gray-50">
      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 tracking-tight">
          Discover Our Blogs
        </h1>
        <p className="mt-2 text-gray-600 text-lg">
          Stay updated with our latest news, tips, and insights
        </p>
        <hr className="mt-6 border-gray-300 w-1/3 mx-auto" />
      </header>

      {/* Blog grid: auto layout with dynamic heights */}
      <main className="grid  grid-cols-1 gap-20 auto-rows-min">
        {blogs?.map((blog, idx) => {
          const mediaUrl = blog.imagePath
            ? `${import.meta.env.VITE_API_URL}/${blog.imagePath}`
            : blog.videoPath
            ? `${import.meta.env.VITE_API_URL}/${blog.videoPath}`
            : null;

          return (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md overflow-hidden transform hover:scale-105 transition duration-300 cursor-pointer flex flex-col"
              onClick={() =>
                mediaUrl && setExpanded({ ...blog, url: mediaUrl })
              }
            >
              {/* Media */}
              {mediaUrl && (
                <>
                  {blog.videoPath ? (
                    <video
                      src={mediaUrl}
                      className="w-full max-h-[60vh] md:max-h-[80vh] object-contain rounded-t-2xl"
                      muted
                    />
                  ) : (
                    <img
                      src={mediaUrl}
                      alt={blog.title}
                      className="w-full max-h-[60vh] md:max-h-[80vh] object-contain rounded-t-2xl"
                    />
                  )}
                </>
              )}

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{blog.description}</p>

                <div className="flex gap-2 items-center mt-auto text-gray-500 text-sm">
                  <img
                    src="/doctor.jpg"
                    alt="Author"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <p className="whitespace-nowrap">Dr. Vishwa Deepak (R)</p>
                    <span className=" text-xs">
                      {new Date(blog.createdAt).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </main>

      {/* Loader */}
      <div ref={loader} className="h-12 flex justify-center items-center my-10">
        {loading && <p className="text-gray-500">Loading more blogs...</p>}
      </div>

      {/* Expanded Modal */}
      {expanded && (
        <div
          onClick={() => setExpanded(null)}
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-xl w-full max-w-4xl p-4 relative overflow-auto"
          >
            {expanded.videoPath ? (
              <video
                src={expanded.url}
                controls
                className="w-full max-h-[70vh] rounded-lg"
              />
            ) : expanded.imagePath ? (
              <img
                src={expanded.url}
                alt={expanded.title}
                className="w-full max-h-[70vh] object-contain rounded-lg"
              />
            ) : null}

            <h2 className="text-2xl font-bold mt-4">{expanded.title}</h2>
            <p className="text-gray-700 mt-2">{expanded.description}</p>

            <button
              onClick={() => setExpanded(null)}
              className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full text-lg"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogsPage;
