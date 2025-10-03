import react, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import BlogsPage from "./pages/BlogsPage";
import AdminLayout from "./pages/Admin/AdminLayout";
import AdminDashboard from "./Admin/AdminDashboard";
import { AdminAuthProvider } from "./context/AdminAuthContext";
import AdminSubLayout from "./pages/Admin/AdminSubLayout";
import { AdminProvider } from "./context/AdminContext";
import UploadBlog from "./Admin/UploadBlog";
import SignIn from "./Admin/Auth/SignIn";
import AdminProtectedRoute from "./ProtectedRoutes/AdminProtectedRoute";
import { ToastContainer } from "react-toastify";
import { UploadCloud } from "lucide-react";
import UploadData from "./Admin/UploadData";
import UploadImageArticle from "./Admin/UploadImageArticle";

function App() {
  const [lang, setLang] = useState("hi");

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <Routes>
        <Route path="/" element={<Home lang={lang} />} />
        <Route path="/services" element={<Services lang={lang} />} />
        <Route path="/about" element={<About lang={lang} />} />
        <Route path="/blogs" element={<BlogsPage lang={lang} />} />
        <Route path="/contact" element={<Contact lang={lang} />} />

        <Route
          path="/admin"
          element={
            <AdminAuthProvider>
              <AdminProvider>
                <AdminLayout />
              </AdminProvider>
            </AdminAuthProvider>
          }
        >
          <Route index element={<Navigate to="panel" replace />} />

          <Route
            path="panel"
            element={
              <AdminProtectedRoute>
                <AdminSubLayout />
              </AdminProtectedRoute>
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path="upload-blog" element={<UploadBlog />} />
            <Route path="upload-data" element={<UploadData />} />
            <Route path="upload-image-article" element={<UploadImageArticle/>} />

          </Route>

          <Route path="signin" element={<SignIn />} />

          <Route path="*" element={<Navigate to="/admin/panel" replace />} />

          {/* works for /admin/* */}
        </Route>

        {/* global fallback */}
        <Route path="*" element={<Navigate to="/admin/panel" replace />} />
      </Routes>

      <Footer lang={lang} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored" // or "light", "dark"
      />
      <ScrollToTop />
    </>
  );
}

export default App;
