import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [isOTPFieldsVisible, setIsOTPFormVisible] = useState(false);

  const [alert, setAlert] = useState({
    isEnable: false,
    variant: "info",
    title: "",
    message: "",
  });

  const clearAlert = () =>
    setAlert({ isEnable: false, variant: "info", title: "", message: "" });

  // Send OTP
  const handleGetOTP = async () => {
    clearAlert();
    if (!email) {
      console.log("Validation Error: Email is empty."); // Added console.log
      return setAlert({
        isEnable: true,
        variant: "error",
        title: "Validation Error",
        message: "Please enter your email address.",
      });
    }

    console.log("API URL:", import.meta.env.VITE_API_URL); // Existing console.log, kept for context
    console.log("Attempting to send OTP for email:", email); // Added console.log

    try {
        const api = axios.create({
            baseURL: import.meta.env.VITE_API_URL + "/api",
            headers: { "Content-Type": "application/json" },
          });
          
          const res = await api.post("/admin/signin", { email });
          
      console.log("OTP request successful. Response:", res.data); // Added console.log

      setAlert({
        isEnable: true,
        variant: "success",
        title: "Success",
        message: res.data.message || "OTP sent to your email!",
      });
      setIsOTPFormVisible(true);
    } catch (err) {
      console.error("Error sending OTP:", err); // Added console.log for error
      setAlert({
        isEnable: true,
        variant: "error",
        title: "Error",
        message: err.response?.data?.message || "Failed to send OTP.",
      });
    }
  };

  // Verify OTP
  const handleLogIn = async () => {
    clearAlert();
    if (!email || !otp) {
      return setAlert({
        isEnable: true,
        variant: "error",
        title: "Validation Error",
        message: "Please enter both email and OTP.",
      });
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/admin/verify-account`,
        { email, otp }
      );

      setAlert({
        isEnable: true,
        variant: "success",
        title: "Success",
        message: res.data.message || "OTP verified successfully!",
      });

      if (res.data.token) {
        localStorage.setItem("admin-token", res.data.token);
      }

      setTimeout(() => navigate("/admin/panel"), 1000);
    } catch (err) {
      setAlert({
        isEnable: true,
        variant: "error",
        title: "OTP Verification Failed",
        message:
          err.response?.data?.message || "Invalid OTP. Please try again.",
      });
    }
  };

  return (
    <div className="relative flex flex-col justify-center w-full h-full bg-white">
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto p-6">
        {/* Custom Meta Head (replace PageMeta) */}
        <title>Admin Sign In</title>
        <meta
          name="description"
          content="Admin Sign In page with OTP verification"
        />

        {/* Logo & Header */}
        <div className="mb-6 text-center">
          <h1 className="mb-2 font-semibold text-gray-800 text-xl dark:text-white">
            Admin Sign In
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Enter your email to sign in!
          </p>
        </div>

        {/* Alert Box (replace Alert component) */}
        {alert.isEnable && (
          <div
            className={`mb-4 p-3 rounded text-sm ${
              alert.variant === "success"
                ? "bg-green-100 text-green-700"
                : alert.variant === "error"
                ? "bg-red-100 text-red-700"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            <strong>{alert.title}: </strong>
            {alert.message}
          </div>
        )}

        {/* Email Field */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-700 ">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="info@gmail.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              clearAlert();
            }}
            className="w-full px-3 py-2 border rounded-md  "
          />
        </div>

        {/* OTP Field */}
        {isOTPFieldsVisible && (
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-700 ">
              OTP <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => {
                setOTP(e.target.value);
                clearAlert();
              }}
              className="w-full px-3 py-2 border rounded-md "
            />
          </div>
        )}

        {/* Buttons */}
        <button
          onClick={isOTPFieldsVisible ? handleLogIn : handleGetOTP}
          className="w-full py-2 mt-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          {isOTPFieldsVisible ? "Verify & Sign In" : "Get OTP"}
        </button>
      </div>
    </div>
  );
}
