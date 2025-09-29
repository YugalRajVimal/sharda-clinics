import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const servicesData = {
  en: [
    {
      title: "Critical Care & Heart Disease",
      desc: "Advanced treatment for cardiac conditions, heart attack, and life-threatening medical emergencies.",
    },
    {
      title: "Diabetes Management",
      desc: "Comprehensive care for diabetes including diagnosis, treatment, and long-term health monitoring.",
    },
    {
      title: "Hypertension Control",
      desc: "Specialized plans to manage and control high blood pressure effectively and safely.",
    },
    {
      title: "Thyroid Disorders",
      desc: "Diagnosis and treatment for hypothyroidism, hyperthyroidism, and other thyroid conditions.",
    },
    {
      title: "Asthma & Respiratory Diseases",
      desc: "Expert care for asthma, COPD, allergies, and other respiratory problems.",
    },
    {
      title: "Joint Pain & Arthritis",
      desc: "Relief and treatment for arthritis, sciatica, frozen shoulder, and chronic joint pain.",
    },
    {
      title: "Neurological Disorders",
      desc: "Treatment for stroke, migraine, epilepsy, neuropathy, and other neurological issues.",
    },
    {
      title: "Gastrointestinal Disorders",
      desc: "Care for colitis, ulcers, pancreatitis, constipation, acidity, and abdominal pain.",
    },
    {
      title: "Liver & Kidney Diseases",
      desc: "Management of liver problems, jaundice, hepatitis, and kidney-related issues.",
    },
    {
      title: "Infectious Diseases",
      desc: "Treatment for dengue, malaria, typhoid, fever, and other acute infections.",
    },
    {
      title: "General Health & Preventive Care",
      desc: "Routine check-ups, allergy care, and holistic management for overall wellness.",
    },
  ],
  hi: [
    {
      title: "क्रिटिकल केयर और हृदय रोग",
      desc: "हृदय की स्थितियों, दिल के दौरे और जीवन-धमकी देने वाली चिकित्सा आपात स्थितियों के लिए उन्नत उपचार।",
    },
    {
      title: "मधुमेह प्रबंधन",
      desc: "मधुमेह के लिए व्यापक देखभाल, जिसमें निदान, उपचार और दीर्घकालिक स्वास्थ्य निगरानी शामिल है।",
    },
    {
      title: "उच्च रक्तचाप नियंत्रण",
      desc: "उच्च रक्तचाप को प्रभावी और सुरक्षित रूप से प्रबंधित करने के लिए विशेष योजनाएँ।",
    },
    {
      title: "थायरॉइड विकार",
      desc: "हाइपोथायरॉइडिज्म, हाइपरथायरॉइडिज्म और अन्य थायरॉइड स्थितियों का निदान और उपचार।",
    },
    {
      title: "अस्थमा और श्वसन रोग",
      desc: "अस्थमा, COPD, एलर्जी और अन्य श्वसन समस्याओं के लिए विशेषज्ञ देखभाल।",
    },
    {
      title: "संधि दर्द और अर्थराइटिस",
      desc: "अर्थराइटिस, सायटिका, फ्रोज़न शोल्डर और पुरानी जोड़ के दर्द के लिए राहत और उपचार।",
    },
    {
      title: "स्नायु और तंत्रिका रोग",
      desc: "स्ट्रोक, माइग्रेन, एपिलेप्सी, न्यूरोपैथी और अन्य तंत्रिका संबंधी समस्याओं का उपचार।",
    },
    {
      title: "जठरांत्र संबंधी विकार",
      desc: "कोलाइटिस, अल्सर, पैनक्रियाटाइटिस, कब्ज, अम्लता और पेट दर्द के लिए देखभाल।",
    },
    {
      title: "यकृत और गुर्दे के रोग",
      desc: "यकृत समस्याएँ, पीलिया, हेपेटाइटिस और गुर्दे से संबंधित समस्याओं का प्रबंधन।",
    },
    {
      title: "संक्रामक रोग",
      desc: "डेंगू, मलेरिया, टाइफाइड, बुखार और अन्य तीव्र संक्रमणों का उपचार।",
    },
    {
      title: "सामान्य स्वास्थ्य और रोकथाम देखभाल",
      desc: "नियमित जांच, एलर्जी देखभाल, और समग्र स्वास्थ्य के लिए समग्र प्रबंधन।",
    },
  ],
};

const Services = ({ lang }) => {
  const services = servicesData[lang] || servicesData.en;

  return (
    <section className="py-16 md:py-24 bg-blue-50">
      <div className="py-10 px-4 sm:px-8 md:px-16 lg:px-24 rounded-2xl shadow-sm">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
          {lang === "hi" ? "हमारी " : "Our "}
          <span className="text-medical-gradient">
            {lang === "hi" ? "सेवाएँ" : "Services"}
          </span>
        </h2>

        {/* Description */}
        <p className="text-center text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10">
          {lang === "hi"
            ? "आगरा के शारदा क्लिनिक में, हम व्यापक चिकित्सा देखभाल प्रदान करते हैं — नियमित जांच से लेकर हृदय रोग, मधुमेह, न्यूरोलॉजी और गंभीर देखभाल में उन्नत उपचार तक। आपका स्वास्थ्य हमारी प्राथमिकता है।"
            : "At Sharda Clinic, Agra, we provide comprehensive medical care — from routine check-ups to advanced treatment in cardiology, diabetes, neurology, and critical care. Your health is our priority."}
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-medical-gradient mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
