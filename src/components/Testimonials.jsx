import React from "react";
import { FaStar, FaUserCircle } from "react-icons/fa";

const testimonialsData = {
  en: [
    {
      name: "Kiran Bhadoriya",
      role: "Patient",
      testimonial:
        "Dr. Vishwa Deepak is one of the best physicians I've visited. They truly care about your health and don’t rush through appointments. I always leave the clinic feeling reassured and well taken care of.",
      rating: 5,
    },
    {
      name: "Abhishek Bhadoriya",
      role: "Patient",
      testimonial:
        "Had a great experience here. The doctor was attentive and diagnosed my issue quickly. The medicines prescribed worked perfectly. I would highly recommend this clinic to family and friends.",
      rating: 5,
    },
    {
      name: "Ajay Rawat",
      role: "Patient",
      testimonial:
        "This clinic stands out for its exceptional patient care. The physician is approachable and thorough. Booking an appointment is easy, and follow-ups are handled well.",
      rating: 5,
    },
    {
      name: "Ajay Kumar",
      role: "Patient",
      testimonial:
        "Clean and well-maintained clinic with minimal wait times. Dr. Vishwa Deepak is calm, composed, and listens patiently. A very reassuring and skilled physician.",
      rating: 5,
    },
    {
      name: "Amit Tomer",
      role: "Patient",
      testimonial:
        "Excellent doctor with a great attitude. The diagnosis was spot on, and I recovered quickly. Thank you for the outstanding care and attention to detail.",
      rating: 5,
    },
    {
      name: "Archana Mishra",
      role: "Patient",
      testimonial:
        "Very thankful for the excellent service. Dr. Vishwa Deepak is experienced and compassionate. It’s rare to find doctors who combine expertise with a personal touch these days.",
      rating: 5,
    },
    {
      name: "Pravesh Kumar",
      role: "Patient",
      testimonial:
        "Honest and genuine opinion as he is an ex-Indian Army Officer. Always trustworthy.",
      rating: 5,
    },
  ],
  hi: [
    {
      name: "किरण भदोरिया",
      role: "रोगी",
      testimonial:
        "डॉ. विश्व दीपक मेरे द्वारा मिले बेहतरीन चिकित्सकों में से एक हैं। वे आपकी सेहत की सच्ची परवाह करते हैं और अपॉइंटमेंट्स में जल्दबाज़ी नहीं करते। मैं हमेशा क्लिनिक से संतुष्ट और सुरक्षित महसूस करता हूँ।",
      rating: 5,
    },
    {
      name: "अभिषेक भदोरिया",
      role: "रोगी",
      testimonial:
        "यहाँ अनुभव शानदार रहा। डॉक्टर सतर्क थे और मेरी समस्या जल्दी पहचान ली। दवाइयाँ पूरी तरह से प्रभावी रहीं। मैं इस क्लिनिक को परिवार और मित्रों को ज़रूर सुझाऊँगा।",
      rating: 5,
    },
    {
      name: "अजय रावत",
      role: "रोगी",
      testimonial:
        "यह क्लिनिक अपने उत्कृष्ट रोगी देखभाल के लिए अलग है। चिकित्सक मिलनसार और पूरी तरह से समर्पित हैं। अपॉइंटमेंट बुक करना आसान है और फॉलो-अप अच्छी तरह से संभाले जाते हैं।",
      rating: 5,
    },
    {
      name: "अजय कुमार",
      role: "रोगी",
      testimonial:
        "स्वच्छ और अच्छी तरह से मेंटेन की गई क्लिनिक, जहाँ प्रतीक्षा समय कम है। डॉ. विश्व दीपक शांत, संयत और धैर्यपूर्वक सुनते हैं। अत्यंत भरोसेमंद और कुशल चिकित्सक।",
      rating: 5,
    },
    {
      name: "अमित तोमर",
      role: "रोगी",
      testimonial:
        "उत्कृष्ट डॉक्टर और बेहतरीन दृष्टिकोण। निदान बिल्कुल सही था और मैं जल्दी स्वस्थ हो गया। शानदार देखभाल और विवरण पर ध्यान देने के लिए धन्यवाद।",
      rating: 5,
    },
    {
      name: "अर्चना मिश्रा",
      role: "रोगी",
      testimonial:
        "बेहतरीन सेवा के लिए बहुत आभारी हूँ। डॉ. विश्व दीपक अनुभवी और सहानुभूतिपूर्ण हैं। आजकल ऐसे चिकित्सक मिलना दुर्लभ है जो विशेषज्ञता और व्यक्तिगत ध्यान दोनों प्रदान करें।",
      rating: 5,
    },
    {
      name: "प्रवेश कुमार",
      role: "रोगी",
      testimonial:
        "ईमानदार और सच्ची राय, क्योंकि वे पूर्व भारतीय सेना के अधिकारी हैं। हमेशा भरोसेमंद।",
      rating: 5,
    },
  ],
};

const Testimonials = ({ lang }) => {
  const testimonials = testimonialsData[lang] || testimonialsData.en;

  return (
    <section className="py-20 bg-blue-50">
      <div className="mx-auto container px-6">
        <div className="mx-auto max-w-3xl mb-16 text-center">
          <h2 className="font-bold text-3xl mb-4">
            {lang === "hi" ? "हमारे रोगी क्या कहते हैं" : "What Our "}
            <span className="text-medical-gradient">
              {lang === "hi" ? "" : "Patients Say"}
            </span>
          </h2>
          <p className="text-gray-600">
            {lang === "hi"
              ? "शारदा क्लिनिक, आगरा में हमारे रोगियों के अनुभवों को सुनें।"
              : "Hear from our patients about their experiences at Sharda Clinic, Agra."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl border p-8 border-gray-100"
            >
              {/* Star Rating */}
              <div className="flex items-center mb-4 gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < testimonial.rating
                        ? "text-yellow-400 h-4 w-4"
                        : "text-yellow-400 opacity-30 h-4 w-4"
                    }`}
                  />
                ))}
              </div>

              {/* Card */}
              <p className="text-gray-600 mb-6">"{testimonial.testimonial}"</p>

              <div className="flex items-center">
                <FaUserCircle className="h-10 w-10 mr-3 text-gray-400" />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
