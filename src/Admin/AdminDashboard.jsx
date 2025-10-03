import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaRegNewspaper, FaVideo, FaImage } from "react-icons/fa";

const AdminDashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDashboardDetails = async () => {
    const adminToken = localStorage.getItem("admin-token");

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/admin/dashboard-details`,
        {
          headers: {
            Authorization: `${adminToken}`,
          },
        }
      );
      if (response.data.success) {
        setDashboardData(response.data);
      } else {
        setError("Failed to load dashboard data.");
      }
    } catch (err) {
      console.error("Dashboard API error:", err);
      setError("Error fetching dashboard details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardDetails();
  }, []);

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4">
      <h1 className="text-4xl font-bold text-center text-green-900 mb-12 border-b pb-4">
        Admin Dashboard
      </h1>

      <div className="max-w-6xl mx-auto">
        {loading ? (
          <p className="text-center text-gray-600 text-lg">Loading dashboard data...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blogs */}
            <div className="bg-white rounded-xl shadow hover:shadow-lg p-6 border-l-4 border-blue-600 transition duration-300">
              <div className="flex items-center gap-4 mb-4">
                <FaRegNewspaper className="text-4xl text-blue-600" />
                <h2 className="text-xl font-semibold text-blue-800">Blogs</h2>
              </div>
              <p className="text-5xl font-bold text-blue-700">{dashboardData.blogCount}</p>
            </div>

            {/* Video Articles */}
            <div className="bg-white rounded-xl shadow hover:shadow-lg p-6 border-l-4 border-green-600 transition duration-300">
              <div className="flex items-center gap-4 mb-4">
                <FaVideo className="text-4xl text-green-600" />
                <h2 className="text-xl font-semibold text-green-800">Video Articles</h2>
              </div>
              <p className="text-5xl font-bold text-green-700">{dashboardData.videoArticleCount}</p>
            </div>

            {/* Image Articles */}
            <div className="bg-white rounded-xl shadow hover:shadow-lg p-6 border-l-4 border-purple-600 transition duration-300">
              <div className="flex items-center gap-4 mb-4">
                <FaImage className="text-4xl text-purple-600" />
                <h2 className="text-xl font-semibold text-purple-800">Image Articles</h2>
              </div>
              <p className="text-5xl font-bold text-purple-700">{dashboardData.imageArticleCount}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminDashboard;
