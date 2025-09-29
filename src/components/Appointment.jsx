import React from "react";
import { PiShoppingBagOpenLight } from "react-icons/pi";

const Appointment = ({ lang }) => {
  // Texts according to language
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

              <form action="" className="space-y-6">
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
                      className="w-full rounded-lg py-2 border focus:border-blue-500 px-4 border-gray-300 focus:ring-blue-500 focus:outline-none"
                      placeholder={t.fullNamePlaceholder}
                      id="name"
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
                      className="w-full rounded-lg py-2 border focus:border-blue-500 px-4 border-gray-300 focus:ring-blue-500 focus:outline-none"
                      placeholder={t.emailPlaceholder}
                      id="email"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="font-medium text-gray-700 block mb-1 text-sm"
                  >
                    {t.phone}
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded-lg py-2 border focus:border-blue-500 px-4 border-gray-300 focus:ring-blue-500 focus:outline-none"
                    placeholder={t.phonePlaceholder}
                    id="phone"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="font-medium text-gray-700 block mb-1 text-sm"
                  >
                    {t.message}
                  </label>
                  <textarea
                    className="w-full rounded-lg py-2 border focus:border-blue-500 px-4 border-gray-300 focus:ring-blue-500 focus:outline-none"
                    placeholder={t.messagePlaceholder}
                    name="message"
                    id="message"
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      className="text-blue-600 border-gray-300 focus:ring-blue-500 h-4 rounded w-4"
                      name=""
                      id="terms"
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
