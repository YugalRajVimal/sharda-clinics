import axios from "axios";
import React, { useState, useEffect } from "react";
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

  const renderBlogCard = (blog) => {
    const mediaUrl = blog.imagePath
      ? `${import.meta.env.VITE_API_URL}/${blog.imagePath}`
      : blog.videoPath
      ? `${import.meta.env.VITE_API_URL}/${blog.videoPath}`
      : null;

    return (
      <div className="bg-white max-w-[350px] mx-auto rounded-2xl shadow-md overflow-hidden flex flex-col h-full hover:shadow-lg transition-all duration-300">
        {/* Media */}
        {blog.videoPath ? (
          <video
            src={mediaUrl}
            className="w-full h-48 sm:h-56 md:h-60 object-cover"
            autoPlay
            muted
            loop
            controls
            playsInline
          />
        ) : blog.imagePath ? (
          <img
            src={mediaUrl}
            alt={blog.title}
            className="w-full h-48 sm:h-56 md:h-60 object-cover"
          />
        ) : null}

        {/* Content */}
        <div className="p-4 flex flex-col flex-grow">
          <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
            {blog.title}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-3">
            {blog.description}
          </p>

          {/* Author */}
          <div className="flex gap-2 items-center mt-auto text-gray-500 text-sm">
            <img
              src="/doctor.jpg"
              alt="Author"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <p className="whitespace-nowrap font-medium">
                Dr. Vishwa Deepak (R)
              </p>
              <span className="text-xs sm:text-sm">
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
    <div className="px-4 sm:px-6 lg:px-16 xl:px-24 py-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-800">
        Articles
      </h1>

      {loading && <p className="text-gray-500">Loading blogs...</p>}

      {/* Video Blogs */}
      {videoBlogs.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-700">
            🎥 Video Articles
          </h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {videoBlogs.map((blog, idx) => (
              <SwiperSlide key={idx}>{renderBlogCard(blog)}</SwiperSlide>
            ))}
          </Swiper>
        </section>
      )}

      {/* Image Blogs */}


      {imageBlogs.length > 0 && (
        <section className="mb-12 m">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-700">
            🖼️ Image Articles
          </h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {imageBlogs.map((blog, idx) => (
              <SwiperSlide key={idx}>{renderBlogCard(blog)}</SwiperSlide>
            ))}
          </Swiper>
        </section>
      )}
    </div>
  );
};

export default BlogsComp;
