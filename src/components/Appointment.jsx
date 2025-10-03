import { PiShoppingBagOpenLight } from "react-icons/pi";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify"; // Changed from react-hot-toast

const Appointment = ({ lang }) => {
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

  const texts = {
    en: {
      scheduleTitle: "Schedule Your Visit",
      scheduleDesc: "We're here to provide the care you deserve.",
      formTitle: "Book an Appointment",
      fullName: "Full Name",
      fullNamePlaceholder: "Enter Your Name",
      email: "Email Address",
      emailPlaceholder: "Enter Your Email",
      phone: "Phone Number",
      phonePlaceholder: "Enter Your Phone Number",
      message: "Additional Information",
      messagePlaceholder:
        "Please share any specific concerns or information that might help us prepare for your visit...",
      consent:
        "I consent to Sharda Clinic's privacy policy and understand that my information will be used only for appointment scheduling purposes.",
      submit: "Schedule Appointment",
    },
    hi: {
      scheduleTitle: "अपना दौरा निर्धारित करें",
      scheduleDesc: "हम यहाँ आपकी स्वास्थ्य देखभाल के लिए हैं।",
      formTitle: "अपॉइंटमेंट बुक करें",
      fullName: "पूरा नाम",
      fullNamePlaceholder: "अपना नाम दर्ज करें",
      email: "ईमेल पता",
      emailPlaceholder: "अपना ईमेल दर्ज करें",
      phone: "फ़ोन नंबर",
      phonePlaceholder: "अपना फ़ोन नंबर दर्ज करें",
      message: "अतिरिक्त जानकारी",
      messagePlaceholder:
        "कृपया कोई विशेष चिंता या जानकारी साझा करें जो आपके दौरे की तैयारी में हमारी मदद कर सके...",
      consent:
        "मैं शारदा क्लिनिक की गोपनीयता नीति के लिए सहमत हूँ और समझता हूँ कि मेरी जानकारी केवल अपॉइंटमेंट शेड्यूलिंग के लिए उपयोग की जाएगी।",
      submit: "अपॉइंटमेंट निर्धारित करें",
    },
  };

  const t = texts[lang] || texts.en;

  return (
    <section className="py-20" id="appointment">
      <div className="mx-auto container px-6">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col lg:flex-row overflow-hidden rounded-xl shadow-xl">
            {/* Left side */}
            <div className="relative lg:w-2/5">
              <img
                src="/banner0.webp"
                className="w-full h-full object-cover"
                alt="Doctor with patient"
              />
              <div className="flex flex-col absolute bg-gradient-to-t from-blue-900 inset-0 justify-end p-8 to-transparent">
                <h3 className="font-bold mb-2 text-2xl !text-white">
                  {t.scheduleTitle}
                </h3>
                <p className="text-blue-100">{t.scheduleDesc}</p>
              </div>
            </div>

            {/* Right side */}
            <div className="bg-white lg:w-3/5 p-8">
              <h3 className="font-bold mb-6 text-2xl">{t.formTitle}</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="font-medium text-gray-700 block mb-1 text-sm"
                    >
                      {t.fullName}
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-lg py-2 border px-4 border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                      placeholder={t.fullNamePlaceholder}
                      id="name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="font-medium text-gray-700 block mb-1 text-sm"
                    >
                      {t.email}
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-lg py-2 border px-4 border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                      placeholder={t.emailPlaceholder}
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Country Code + Phone */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <select
                      className="w-full rounded-lg py-2 border px-3 border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                    >
                      <option>India (+91)</option>
                      <option>USA (+1)</option>
                      <option>UK (+44)</option>
                      <option>UAE (+971)</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <input
                      type="tel"
                      className="w-full rounded-lg py-2 border px-4 border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                      placeholder={t.phonePlaceholder}
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="font-medium text-gray-700 block mb-1 text-sm"
                  >
                    {t.message}
                  </label>
                  <textarea
                    className="w-full rounded-lg py-2 border px-4 border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                    placeholder={t.messagePlaceholder}
                    name="message"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      className="text-blue-600 border-gray-300 focus:ring-blue-500 h-4 rounded w-4"
                      id="terms"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                    />
                  </div>
                  <label htmlFor="terms" className="text-gray-600 ml-2 text-sm">
                    {t.consent}
                  </label>
                </div>

                <button
                  className="flex items-center justify-center text-white bg-medical-gradient font-medium py-3 rounded-lg w-full shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                  type="submit"
                >
                  <PiShoppingBagOpenLight className="h-5 w-5 mr-2 !text-white" />
                  {t.submit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
