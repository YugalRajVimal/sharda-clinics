import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BlogsComp = ({ lang }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUploadedBlogs = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/admin/videos`
      );
      return Array.isArray(response.data?.videos) ? response.data.videos : [];
    } catch (error) {
      console.error("Failed to fetch data:", error);
      // toast.error("Failed to fetch data");
      return [];
    }
  };

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const data = await getUploadedBlogs();
      setBlogs(data);
    } catch (err) {
      console.error(err);
      // toast.error("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Separate blogs by type
  const videoBlogs = blogs.filter((b) => b.videoPath);
  const imageBlogs = blogs.filter((b) => b.imagePath && !b.videoPath);
  const textBlogs = blogs.filter((b) => !b.imagePath && !b.videoPath);

  const renderBlogCard = (blog) => {
    const mediaUrl = blog.imagePath
      ? `${import.meta.env.VITE_API_URL}/${blog.imagePath}`
      : blog.videoPath
      ? `${import.meta.env.VITE_API_URL}/${blog.videoPath}`
      : null;

    return (
      <div className="bg-white rounded-2xl shadow-md mb-4 overflow-hidden flex flex-col h-full">
        {/* Media */}
        {blog.videoPath ? (
          <video src={mediaUrl} className="w-full h-48 object-cover" muted />
        ) : blog.imagePath ? (
          <img
            src={mediaUrl}
            alt={blog.title}
            className="w-full h-48 object-cover"
          />
        ) : null}

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            {blog.title}
          </h2>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {blog.description}
          </p>
          <div className="flex gap-2 items-center mt-auto text-gray-500 text-sm">
            <img
              src="/doctor.jpg"
              alt="Author"
              className="w-7 h-7 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <p className="whitespace-nowrap">Dr. Vishwa Deepak (R)</p>
              <span className="text-xs">
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
  };

  return (
    <div className=" px-4 sm:px-6 lg:px-20 py-10 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Blogs</h1>

      {loading && <p className="text-gray-500">Loading blogs...</p>}

      {/* Video Blogs */}
      {videoBlogs.length > 0 && (
        <section className="mb-12 ">
          <h2 className="text-2xl font-semibold mb-4">🎥 Video Blogs</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
          >
            {videoBlogs.map((blog, idx) => (
              <SwiperSlide key={idx}>{renderBlogCard(blog)}</SwiperSlide>
            ))}
          </Swiper>
        </section>
      )}

      {/* Image Blogs */}
      {imageBlogs.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">🖼️ Image Blogs</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
          >
            {imageBlogs.map((blog, idx) => (
              <SwiperSlide key={idx}>{renderBlogCard(blog)}</SwiperSlide>
            ))}
          </Swiper>
        </section>
      )}

      {/* Text Only Blogs */}
      {/* {textBlogs.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">✍️ Text Blogs</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
          >
            {textBlogs.map((blog, idx) => (
              <SwiperSlide key={idx}>{renderBlogCard(blog)}</SwiperSlide>
            ))}
          </Swiper>
        </section>
      )} */}
    </div>
  );
};

export default BlogsComp;
