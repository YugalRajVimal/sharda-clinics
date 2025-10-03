import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

// Doctor images (replace with real ones if available)
import doc2 from "../assets/Doc/doc2.avif";

const doctorsData = {
  en: [
    {
      id: 1,
      name: "Dr. Vishwa Deepak (R)",
      specialty: "Critical Care & Internal Medicine",
      desc: "Founder of Sharda Clinic, Agra. MBBS, MD with extensive expertise in Internal Medicine and Critical Care. Dedicated to providing compassionate and comprehensive healthcare.",
      img: "doctor.jpg",
      socials: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    // {
    //   id: 2,
    //   name: "Sharda Clinic Team",
    //   specialty: "Specialists & Supporting Doctors",
    //   desc: "A multidisciplinary team of experienced physicians and specialists ensuring quality care in cardiology, neurology, diabetes, hypertension, and general medicine.",
    //   socials: {
    //     facebook: "#",
    //     twitter: "#",
    //     linkedin: "#",
    //   },
    // },
  ],
  hi: [
    {
      id: 1,
      name: "डॉ. विश्व दीपक (R)",
      specialty: "गंभीर चिकित्सा और आंतरिक चिकित्सा",
      desc: "शारदा क्लिनिक, आगरा के संस्थापक। MBBS, MD, आंतरिक चिकित्सा और गंभीर देखभाल में व्यापक विशेषज्ञता। सहानुभूतिपूर्ण और समग्र स्वास्थ्य सेवा प्रदान करने के लिए समर्पित।",
      img: "doctor.jpg",
      socials: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    // {
    //   id: 2,
    //   name: "शारदा क्लिनिक टीम",
    //   specialty: "विशेषज्ञ और सहायक डॉक्टर",
    //   desc: "अनुभवी चिकित्सकों और विशेषज्ञों की बहुविध टीम, जो कार्डियोलॉजी, न्यूरोलॉजी, डायबिटीज, उच्च रक्तचाप और सामान्य चिकित्सा में गुणवत्तापूर्ण देखभाल सुनिश्चित करती है।",
    //   socials: {
    //     facebook: "#",
    //     twitter: "#",
    //     linkedin: "#",
    //   },
    // },
  ],
};

const Doctors = ({ lang }) => {
  const doctors = doctorsData[lang] || doctorsData.en;

  return (
    <section className="py-20 bg-white-custom">
      <div className="mx-auto container px-6">
        <div className="mx-auto max-w-3xl mb-16 text-center">
          <h2 className="font-bold text-3xl mb-4">
            {lang === "hi" ? "हमारे डॉक्टर से मिलें" : "Meet Our "}
            <span className="text-medical-gradient">
              {lang === "hi" ? "" : "Doctor"}
            </span>
          </h2>
          <p className="text-gray-600">
            {lang === "hi"
              ? "शारदा क्लिनिक में, हमारे मुख्य डॉक्टर और मेडिकल टीम सहानुभूतिपूर्ण और विशेषज्ञता के साथ उन्नत, रोगी-केंद्रित स्वास्थ्य सेवा प्रदान करने के लिए समर्पित हैं।"
              : "At Sharda Clinic, our lead doctor and medical team are dedicated to providing advanced, patient-centered healthcare with compassion and expertise."}
          </p>
        </div>

        <div className="grid grid-cols-1  gap-8  max-w-3xl mx-auto">
          {doctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white shadow-lg rounded-xl hover:shadow-xl transition-shadow border border-gray-200 overflow-hidden flex flex-col justify-center items-center"
            >
              {/* Image */}
              {doc.img && (
                <>
                  <div className="overflow-hidden h-64">
                    <img
                      src={doc.img}
                      alt={doc.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <hr className="text-zinc-300" />
                </>
              )}

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="font-bold text-xl">{doc.name}</h3>
                <p className="text-blue-500 mb-3">{doc.specialty}</p>
                <p className="text-gray-600 mb-4">{doc.desc}</p>

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  <a
                    href={doc.socials.facebook}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaFacebookF className="h-5 w-5" />
                  </a>
                  <a
                    href={doc.socials.twitter}
                    className="text-blue-400 hover:text-blue-600"
                  >
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a
                    href={doc.socials.linkedin}
                    className="hover:text-blue-900 text-blue-700"
                  >
                    <FaLinkedinIn className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
