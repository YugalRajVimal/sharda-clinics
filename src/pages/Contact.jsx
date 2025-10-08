import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import {
  MdOutlineMail,
  MdOutlinePhone,
  MdOutlineLocationOn,
} from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify"; // Changed from react-hot-toast

const Contact = ({ lang }) => {
  const texts = {
    en: {
      heading: "Let's Start a Conversation",
      subText:
        "Have a health query or need medical guidance? Fill out the form, and our expert team at Sharda Clinic, led by Maj (Dr.) Vishwa Deepak, will get back to you promptly.",
      fullName: "Full Name",
      fullNamePlaceholder: "John Doe",
      email: "Email Address",
      emailPlaceholder: "john@example.com",
      phoneNumber: "Phone Number",
      phonePlaceholder: "12345 67890",
      message: "Message",
      messagePlaceholder: "Your health query or message...",
      sendButton: "Send Message",
      contactInfo: "Contact Information",
      emailLabel: "Email",
      phoneLabel: "Phone",
      locationLabel: "Location",
      workingHours: "Working Hours",
      workingHoursText:
        "Monday to Friday: 8:00 AM - 11:00 PM\nSaturday: 9:00 AM - 11:00 PM\nSunday: 9:00 AM - 11:00 PM",
      getInTouch: "Get in Touch",
    },
    hi: {
      heading: "बातचीत शुरू करें",
      subText:
        "क्या आपके पास स्वास्थ्य संबंधी प्रश्न हैं या चिकित्सा मार्गदर्शन की आवश्यकता है? फॉर्म भरें, और शारदा क्लिनिक की हमारी विशेषज्ञ टीम, मेज (डॉ.) विश्व दीपक के नेतृत्व में, आपसे शीघ्र संपर्क करेगी।",
      fullName: "पूरा नाम",
      fullNamePlaceholder: "जॉन डो",
      email: "ईमेल पता",
      emailPlaceholder: "john@example.com",
      phoneNumber: "फोन नंबर",
      phonePlaceholder: "12345 67890",
      message: "संदेश",
      messagePlaceholder: "आपका स्वास्थ्य प्रश्न या संदेश...",
      sendButton: "संदेश भेजें",
      contactInfo: "संपर्क जानकारी",
      emailLabel: "ईमेल",
      phoneLabel: "फोन",
      locationLabel: "स्थान",
      workingHours: "कार्य समय",
      workingHoursText:
        "सोमवार से शुक्रवार: 8:00 AM - 11:00 PM\nशनिवार: 9:00 AM - 11:00 PM\nरविवार: 9:00 AM - 11:00 PM",
      getInTouch: "संपर्क करें",
    },
  };

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("India (+91)");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check consent
    if (!consent) {
      toast.error(
        lang === "hi"
          ? "कृपया गोपनीयता नीति से सहमत हों।"
          : "Please accept the privacy policy."
      );
      return;
    }

    // ✅ Validation rules

    // 1. Name length
    if (fullName.length > 30) {
      toast.error(
        lang === "hi"
          ? "नाम 30 अक्षरों से अधिक नहीं होना चाहिए।"
          : "Name must not exceed 30 characters."
      );
      return;
    }

    // 2. Email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error(
        lang === "hi"
          ? "कृपया मान्य ईमेल पता दर्ज करें।"
          : "Please enter a valid email address."
      );
      return;
    }

    // 3. Phone: 10 digits, starts with 6/7/8/9
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      toast.error(
        lang === "hi"
          ? "कृपया एक मान्य 10 अंकों का मोबाइल नंबर दर्ज करें जो 6, 7, 8 या 9 से शुरू होता हो।"
          : "Please enter a valid 10-digit phone number starting with 6, 7, 8, or 9."
      );
      return;
    }

    // 4. Message word limit (500 words max)
    const wordCount = message.trim().split(/\s+/).length;
    if (wordCount > 500) {
      toast.error(
        lang === "hi"
          ? "संदेश 500 शब्दों से अधिक नहीं होना चाहिए।"
          : "Message must not exceed 500 words."
      );
      return;
    }

    // ✅ Data to send
    const formData = {
      fullName,
      email,
      countryCode,
      phone,
      company: "Appointment Form",
      message,
    };

    // Toast messages
    const loadingMsg =
      lang === "hi" ? "अपॉइंटमेंट भेजा जा रहा है..." : "Sending appointment...";
    const successMsg =
      lang === "hi"
        ? "अपॉइंटमेंट सफलतापूर्वक भेजा गया।"
        : "Appointment sent successfully.";
    const errorMsg =
      lang === "hi" ? "भेजने में विफल ❌" : "Failed to send appointment ❌";
    const somethingWrongMsg =
      lang === "hi" ? "कुछ गलत हुआ।" : "Something went wrong.";

    const toastId = toast.loading(loadingMsg);

    try {
      const response = await axios.post(
        "https://api.shardaclinics.in/send-mail",
        formData
      );

      if (response.status === 200) {
        toast.update(toastId, {
          render: successMsg,
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });

        // Reset form
        setFullName("");
        setEmail("");
        setCountryCode("India (+91)");
        setPhone("");
        setMessage("");
        setConsent(false);
      } else {
        toast.update(toastId, {
          render: somethingWrongMsg,
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      }
    } catch (err) {
      toast.update(toastId, {
        render: errorMsg,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!consent) {
  //     toast.error(
  //       lang === "hi"
  //         ? "कृपया गोपनीयता नीति से सहमत हों।"
  //         : "Please accept the privacy policy."
  //     );
  //     return;
  //   }

  //   const formData = {
  //     fullName,
  //     email,
  //     countryCode,
  //     phone,
  //     company: "Appointment Form", // static label
  //     message,
  //   };

  //   const loadingMsg =
  //     lang === "hi" ? "अपॉइंटमेंट भेजा जा रहा है..." : "Sending appointment...";
  //   const successMsg =
  //     lang === "hi"
  //       ? "अपॉइंटमेंट सफलतापूर्वक भेजा गया।"
  //       : "Appointment sent successfully.";
  //   const errorMsg =
  //     lang === "hi" ? "भेजने में विफल ❌" : "Failed to send appointment ❌";
  //   const somethingWrongMsg =
  //     lang === "hi" ? "कुछ गलत हुआ।" : "Something went wrong.";

  //   const toastId = toast.loading(loadingMsg); // Use toast.loading and get toastId

  //   try {
  //     const response = await axios.post(
  //       "https://api.shardaclinics.in/send-mail",
  //       formData
  //     );

  //     if (response.status === 200) {
  //       toast.update(toastId, {
  //         render: successMsg,
  //         type: "success",
  //         isLoading: false,
  //         autoClose: 3000,
  //       }); // Update existing toast
  //       // Reset form
  //       setFullName("");
  //       setEmail("");
  //       setCountryCode("India (+91)");
  //       setPhone("");
  //       setMessage("");
  //       setConsent(false);
  //     } else {
  //       toast.update(toastId, {
  //         render: somethingWrongMsg,
  //         type: "error",
  //         isLoading: false,
  //         autoClose: 3000,
  //       }); // Update existing toast
  //     }
  //   } catch (err) {
  //     toast.update(toastId, {
  //       render: errorMsg,
  //       type: "error",
  //       isLoading: false,
  //       autoClose: 3000,
  //     }); // Update existing toast
  //   }
  // };

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
      <section className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Form Section */}
            <div className="flex-1">
              <h2 className="text-sm uppercase tracking-widest text-danger mb-2 font-montserrat">
                {texts[lang].getInTouch}
              </h2>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-montserrat">
                {texts[lang].heading}
              </h3>
              <p className="text-gray-light mb-6 font-roboto">
                {texts[lang].subText}
              </p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 font-semibold">
                      {texts[lang].fullName}
                    </label>
                    <input
                      type="text"
                      placeholder={texts[lang].fullNamePlaceholder}
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-white border px-4 py-2 rounded-md focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-semibold">
                      {texts[lang].email}
                    </label>

                    <input
                      type="email"
                      placeholder={texts[lang].emailPlaceholder}
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white border px-4 py-2 rounded-md focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex gap-4 items-end">
                  <div className="flex flex-col">
                    <label className="mb-2 font-semibold">
                      {texts[lang].phoneNumber}
                    </label>
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
                      {texts[lang].phoneNumber}
                    </label>
                    <input
                      type="text"
                      placeholder={texts[lang].phonePlaceholder}
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white border px-4 py-2 rounded-md focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 font-semibold">
                    {texts[lang].message}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={texts[lang].messagePlaceholder}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white border px-4 py-2 rounded-md focus:outline-none resize-none"
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-700">
                    {lang === "hi"
                      ? "मैं शारदा क्लिनिक की गोपनीयता नीति से सहमत हूँ।"
                      : "I agree to Sharda Clinic's privacy policy."}
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 flex items-center justify-center gap-3 border border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white px-5 py-2 rounded-md transition-all duration-300"
                >
                  <FiSend size={18} />
                  <span className="font-semibold text-sm">
                    {texts[lang].sendButton}
                  </span>
                </button>
              </form>
            </div>

            {/* Contact Info Section */}
            <div className="flex-1 bg-white p-6 md:p-8 rounded-lg shadow-lg border border-danger/20">
              <h3 className="text-2xl font-bold font-montserrat mb-6">
                {texts[lang].contactInfo}
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MdOutlineMail className="w-6 h-6 text-danger mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium font-montserrat mb-1">
                      {texts[lang].emailLabel}
                    </h4>
                    <p className="text-gray-light font-roboto">
                      {contactInfo.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MdOutlinePhone className="w-6 h-6 text-danger mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium font-montserrat mb-1">
                      {texts[lang].phoneLabel}
                    </h4>
                    <p className="text-gray-light font-roboto">
                      {contactInfo.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MdOutlineLocationOn className="w-6 h-6 text-danger mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium font-montserrat mb-1">
                      {texts[lang].locationLabel}
                    </h4>
                    <p className="text-gray-light font-roboto">
                      {contactInfo.location.address1}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-medium font-montserrat mb-2">
                  {texts[lang].workingHours}
                </h4>
                <p className="text-gray-light font-roboto whitespace-pre-line">
                  {texts[lang].workingHoursText}
                </p>
              </div>
            <div className="mt-8">
               
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.1422743134563!2d77.97660467615185!3d27.214682576468462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397477979c4f7e29%3A0x4f72e22389b74416!2sSharda%20Clinic!5e0!3m2!1sen!2sin!4v1759907494551!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow-md"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
