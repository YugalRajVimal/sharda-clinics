import React from "react";

const About = ({ lang }) => {
  const texts = {
    title: {
      en: "About Sharda Clinic",
      hi: "शारदा क्लिनिक के बारे में",
    },
    tagline: {
      en: "Trusted Healthcare, Compassionate Care — Right Here in Agra.",
      hi: "विश्वसनीय स्वास्थ्य सेवा, सहानुभूतिपूर्ण देखभाल — आगरा में।",
    },
    paragraphs: {
      en: [
        "Sharda Clinic, led by Maj (Dr.) Vishwa Deepak (Retd.), is a premier healthcare facility in Agra, Uttar Pradesh. We are dedicated to providing personalized and holistic care, combining years of medical expertise with a patient-centered approach.",
        "Our clinic specializes in managing a wide range of conditions including critical care, chronic illnesses, musculoskeletal problems, diabetes, hypertension, and holistic wellness therapies. Every patient receives an individualized treatment plan to ensure optimal health outcomes.",
        "At Sharda Clinic, we believe that true healing comes from a combination of modern medical practice, traditional knowledge, and compassionate care. Our team is committed to guiding patients through every step of their healthcare journey.",
        "From preventive care and disease management to rehabilitation and lifestyle guidance, we aim to restore balance, enhance immunity, and improve the overall quality of life for our patients.",
        "Our services include consultations, diagnostic support, chronic disease management, musculoskeletal care, respiratory care, and wellness programs. We strive to ensure that each patient feels confident, cared for, and supported at every visit.",
      ],
      hi: [
        "शारदा क्लिनिक, मेजर (डॉ.) विश्व दीपक (सेवानिवृत्त) के नेतृत्व में, आगरा, उत्तर प्रदेश में एक प्रमुख स्वास्थ्य सुविधा है। हम व्यक्तिगत और समग्र देखभाल प्रदान करने के लिए प्रतिबद्ध हैं, जो वर्षों के चिकित्सा अनुभव और रोगी-केंद्रित दृष्टिकोण का संयोजन है।",
        "हमारा क्लिनिक गंभीर देखभाल, पुरानी बीमारियों, मस्कुलोस्केलेटल समस्याओं, मधुमेह, उच्च रक्तचाप और समग्र कल्याण चिकित्सा सहित कई स्थितियों के प्रबंधन में विशेषज्ञ है। प्रत्येक रोगी को सर्वोत्तम स्वास्थ्य परिणाम सुनिश्चित करने के लिए व्यक्तिगत उपचार योजना दी जाती है।",
        "शारदा क्लिनिक में, हम मानते हैं कि सच्चा उपचार आधुनिक चिकित्सा अभ्यास, पारंपरिक ज्ञान और सहानुभूतिपूर्ण देखभाल के संयोजन से आता है। हमारी टीम रोगियों को उनके स्वास्थ्य यात्रा के हर चरण में मार्गदर्शन करने के लिए प्रतिबद्ध है।",
        "रोकथाम, रोग प्रबंधन, पुनर्वास और जीवनशैली मार्गदर्शन से लेकर, हम अपने रोगियों के लिए संतुलन बहाल करने, प्रतिरक्षा बढ़ाने और जीवन की गुणवत्ता में सुधार करने का लक्ष्य रखते हैं।",
        "हमारी सेवाओं में परामर्श, निदान सहायता, पुरानी बीमारी प्रबंधन, मस्कुलोस्केलेटल देखभाल, श्वसन देखभाल और वेलनेस कार्यक्रम शामिल हैं। हम यह सुनिश्चित करने का प्रयास करते हैं कि प्रत्येक रोगी हर दौरे पर आत्मविश्वासी, देखभाल किया गया और समर्थ महसूस करे।",
      ],
    },
    footer: {
      en: "Experience expert healthcare — Trust, Care, and Healing at Sharda Clinic.",
      hi: "विशेषज्ञ स्वास्थ्य सेवा का अनुभव करें — विश्वास, देखभाल और उपचार शारदा क्लिनिक में।",
    },
    years: {
      en: "Years of Trusted Care",
      hi: "विश्वसनीय देखभाल के वर्ष",
    },
  };

  return (
    <div className="pt-16">
      <section className="py-24 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
            {/* Text Section */}
            <div className="md:w-[60%] prose prose-invert max-w-none">
              <h3 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 tracking-tight">
                {texts.title[lang]}
              </h3>

              <p className="text-black font-roboto mb-6 text-lg italic">
                {texts.tagline[lang]}
              </p>

              {texts.paragraphs[lang].map((para, index) => (
                <p key={index} className="text-black font-roboto mb-4">
                  {para}
                </p>
              ))}

              <p className="text-black font-roboto italic text-right">
                {texts.footer[lang]}
              </p>
            </div>

            {/* Image Section */}
            <div className="w-[80%] md:w-[40%] relative aspect-square md:aspect-auto md:h-[600px]">
              <img
                src="banner0.webp"
                alt="Sharda Clinic"
                className="w-full h-full object-contain rounded-lg"
              />

              <div className="absolute -bottom-20 md:-bottom-4 -right-4 w-36 h-36 md:w-56 md:h-56 bg-neutral-900 border border-danger/40 rounded-lg p-4 md:p-6 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-3xl md:text-5xl font-bold font-montserrat text-danger shadow-text">
                    15+
                  </p>
                  <p className="text-xs md:text-base text-gray-light font-roboto mt-1 md:mt-2">
                    {texts.years[lang]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
