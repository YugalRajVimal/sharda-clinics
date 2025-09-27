import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import {
  MdOutlineMail,
  MdOutlinePhone,
  MdOutlineLocationOn,
} from "react-icons/md";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("India (+91)");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = { fullName, email, countryCode, phone, company, message };
    toast.loading("Sending your message...");

    try {
      const response = await axios.post(
        "https://peswani-pixels-mailer.onrender.com/send-mailkkkkh",
        formData
      );
      toast.dismiss();
      if (response.status === 200) {
        toast.success("Message sent successfully.");
        setFullName("");
        setEmail("");
        setCountryCode("India (+91)");
        setPhone("");
        setCompany("");
        setMessage("");
      } else {
        toast.error("Something went wrong.");
      }
    } catch (error) {
      toast.dismiss();
      toast.error("Failed to send message ❌");
    }
  };

  const contactInfo = {
    email: "shardaclinicagra@gmail.com",
    phone: "+919027669380",
    location: {
      address1:
        "Gailana Rd, in front of ISBT, near Asopa Hospital, Tiraha, Kakraita, Agra, Uttar Pradesh 282007",
    },
  };

  return (
    <div className="pt-20 px-4 md:px-6 lg:px-12">
      <Toaster position="top-right" reverseOrder={false} />

      <section className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Form Section */}
            <div className="flex-1">
              <h2 className="text-sm uppercase tracking-widest text-danger mb-2 font-montserrat">
                Get in Touch
              </h2>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-montserrat">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-light mb-6 font-roboto">
                Have a health query or need medical guidance? Fill out the form,
                and our expert team at Sharda Clinic, led by Maj (Dr.) Vishwa
                Deepak, will get back to you promptly.
              </p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 font-semibold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-white border px-4 py-2 rounded-md focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white border px-4 py-2 rounded-md focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex gap-4 items-end">
                  <div className="flex flex-col">
                    <label className="mb-2 font-semibold">Phone Number</label>
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="w-full bg-white border px-4 py-2 rounded-md"
                    >
                      <option>India (+91)</option>
                      <option>USA (+1)</option>
                      <option>UK (+44)</option>
                    </select>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <label className="mb-2 font-semibold invisible">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      placeholder="12345 67890"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white border px-4 py-2 rounded-md focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 font-semibold">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Your health query or message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white border px-4 py-2 rounded-md focus:outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 flex items-center justify-center gap-3 border border-blue-500 text-black hover:bg-blue-500 hover:text-black px-5 py-2 rounded-md transition-all duration-300"
                >
                  <FiSend size={18} />
                  <span className="font-semibold text-sm">Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Info Section */}
            <div className="flex-1 bg-white p-6 md:p-8 rounded-lg shadow-lg border border-danger/20">
              <h3 className="text-2xl font-bold font-montserrat mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MdOutlineMail className="w-6 h-6 text-danger mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium font-montserrat mb-1">Email</h4>
                    <p className="text-gray-light font-roboto">
                      {contactInfo.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MdOutlinePhone className="w-6 h-6 text-danger mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium font-montserrat mb-1">Phone</h4>
                    <p className="text-gray-light font-roboto">
                      {contactInfo.phone}
                    </p>
                    <p className="text-gray-light font-roboto">
                      <span>Clinic: </span>
                      <span>+91 7742863725</span>
                    </p>
                    <p className="text-gray-light font-roboto">
                      <span>Dr.Manoj Yadav: </span>
                      <span>+91 7742863720</span>
                    </p>
                    <p className="text-gray-light font-roboto">
                      <span>Dr.Rahul Mehra: </span>
                      <span>+91 7742863721</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MdOutlineLocationOn className="w-6 h-6 text-danger mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium font-montserrat mb-1">
                      Location
                    </h4>
                    <p className="text-gray-light font-roboto">
                      {contactInfo.location.address1}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-medium font-montserrat mb-2">
                  Working Hours
                </h4>
                <p className="text-gray-light font-roboto">
                  Monday to Friday: 8:00 AM - 11:00 PM
                  <br />
                  Saturday: 9:00 AM - 11:00 PM
                  <br />
                  Sunday: 9:00 AM - 11:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
