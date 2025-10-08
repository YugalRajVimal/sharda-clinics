import React from "react";
import {
  FiShield,
  FiZap,
  FiUsers,
  FiClock,
  FiHeart,
  FiBarChart2,
} from "react-icons/fi";


const features = {
  en: [
    {
      icon: <FiShield className="text-blue-600 h-8 w-8" />,
      title: "Experienced Leadership",
      desc: "Led by Maj. (Dr.) Vishwa Deepak (R), with years of experience at Army Hospital (R&R) and top hospitals in Agra.",
    },
    {
      icon: <FiZap className="h-8 w-8 text-green-600" />,
      title: "Comprehensive Care",
      desc: "From diabetes, hypertension, and thyroid to heart disease, asthma, and critical care — all under one roof.",
    },
    {
      icon: <FiUsers className="h-8 w-8 text-purple-600" />,
      title: "Trusted by Thousands",
      desc: "A clinic built on credibility, expertise, and the trust of patients across Agra and beyond.",
    },
    {
      icon: <FiClock className="h-8 w-8 text-yellow-600" />,
      title: "Accessible & Fast",
      desc: "Conveniently located near ISBT, Agra with smooth appointment scheduling and prompt services.",
    },
    {
      icon: <FiHeart className="h-8 w-8 text-red-600" />,
      title: "Compassionate Team",
      desc: "Dedicated staff providing personalized, patient-first care with empathy at every step.",
    },
    {
      icon: <FiBarChart2 className="h-8 w-8 text-teal-600" />,
      title: "Proven Outcomes",
      desc: "Effective diagnosis and treatments with a track record of successful recovery and patient satisfaction.",
    },
  ],
  hi: [
    {
      icon: <FiShield className="text-blue-600 h-8 w-8" />,
      title: "अनुभवी नेतृत्व",
      desc: "Maj. (Dr.) Vishwa Deepak (R) के नेतृत्व में, आर्मी हॉस्पिटल और आगरा के प्रमुख अस्पतालों का वर्षों का अनुभव।",
    },
    {
      icon: <FiZap className="h-8 w-8 text-green-600" />,
      title: "सम्पूर्ण देखभाल",
      desc: "डायबिटीज़, हाई ब्लड प्रेशर, थायरॉइड से लेकर हृदय रोग, अस्थमा और गंभीर देखभाल तक — सभी एक ही स्थान पर।",
    },
    {
      icon: <FiUsers className="h-8 w-8 text-purple-600" />,
      title: "हजारों का भरोसा",
      desc: "एक क्लिनिक जो विश्वसनीयता, विशेषज्ञता और आगरा तथा आस-पास के रोगियों के विश्वास पर आधारित है।",
    },
    {
      icon: <FiClock className="h-8 w-8 text-yellow-600" />,
      title: "सुलभ और त्वरित सेवा",
      desc: "ISBT के पास सुविधाजनक स्थान पर, आसान अपॉइंटमेंट और शीघ्र सेवाओं के साथ।",
    },
    {
      icon: <FiHeart className="h-8 w-8 text-red-600" />,
      title: "दयालु टीम",
      desc: "समर्पित स्टाफ जो हर कदम पर सहानुभूति के साथ व्यक्तिगत और रोगी-केंद्रित देखभाल प्रदान करता है।",
    },
    {
      icon: <FiBarChart2 className="h-8 w-8 text-teal-600" />,
      title: "साबित परिणाम",
      desc: "सटीक निदान और उपचार के साथ सफल रिकवरी और रोगी संतुष्टि का प्रमाणित रिकॉर्ड।",
    },
  ],
};

const titles = {
  en: {
    heading: "Why Choose",
    subheading:
      "Delivering trusted medical care in Agra — where your health is our top priority, combining expertise with compassionate treatment.",
  },
  hi: {
    heading: "क्यों चुनें",
    subheading:
      "आगरा में विश्वसनीय चिकित्सा देखभाल — आपकी सेहत हमारी प्राथमिकता, विशेषज्ञता और दयालु उपचार के साथ।",
  },
};



const WhyChooseUs = ({ lang }) => {
  const selectedFeatures = features[lang] || features.en;
  const selectedTitles = titles[lang] || titles.en;

  return (
    <section className="py-10 md:pt-6 bg-white-custom">
      <div className="mx-auto container px-6"> 
        {/* Title */}
        <div className="mx-auto max-w-3xl mb-16 text-center">
          <h2
            className={`font-bold text-3xl mb-4 ${
              lang === "hi" ? "font-hindi" : ""
            }`}
          >
            {selectedTitles.heading}{" "}
            <span className="text-medical-gradient">Sharda Clinic</span>
          </h2>
          <p
            className={`text-gray-600 ${
              lang === "hi" ? "font-hindi" : ""
            }`}
          >
            {selectedTitles.subheading}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3">
          {selectedFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl hover:shadow-xl transition-shadow border border-gray-200 p-8"
            >
              <div className="mb-4 inline-block p-3 rounded-lg bg-blue-100">
                {feature.icon}
              </div>
              <h3
                className={`font-bold text-xl mb-3 ${
                  lang === "hi" ? "font-hindi" : ""
                }`}
              >
                {feature.title}
              </h3>
              <p
                className={`text-gray-600 ${
                  lang === "hi" ? "font-hindi" : ""
                }`}
              >
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
