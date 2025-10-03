import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <>
      <h1 className="my-6 text-3xl font-serif text-center w-full border-b-2 border-black">
        Admin Panel
      </h1>
      <div className="w-full max-w-6xl mx-auto px-4 py-10">
        {loading ? (
          <p className="text-center text-gray-600">Loading dashboard data...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-bold text-blue-600">Blogs</h2>
              <p className="text-3xl mt-2">{dashboardData.blogCount}</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-bold text-green-600">
                Video Articles
              </h2>
              <p className="text-3xl mt-2">{dashboardData.videoArticleCount}</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-bold text-purple-600">
                Image Articles
              </h2>
              <p className="text-3xl mt-2">{dashboardData.imageArticleCount}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AdminDashboard;
