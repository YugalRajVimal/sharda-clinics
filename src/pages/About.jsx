import React from "react";

const About = ({ lang }) => {
  const texts = {
    title: {
      en: "About (Dr.) Vishwa Deepak",
      hi: "डॉ. विश्व दीपक के बारे में",
    },

    tagline: {
      en: "Trusted Healthcare, Compassionate Care — Right Here in Agra.",
      hi: "विश्वसनीय स्वास्थ्य सेवा, सहानुभूतिपूर्ण देखभाल — आगरा में।",
    },
    paragraphs: {
      en: [
        "Maj (Dr.) Vishwa Deepak (Retd.) is a highly respected physician with decades of experience in delivering trusted, compassionate, and holistic healthcare. A retired Army doctor, he brings the discipline, precision, and dedication of military medical service into civilian practice, ensuring that patients at Sharda Clinic receive the highest standards of care.",
        "Throughout his career, Dr. Deepak has been deeply committed to patient well-being, specializing in critical care, chronic disease management, musculoskeletal conditions, diabetes, hypertension, and preventive healthcare. His approach integrates modern medical advancements with traditional wisdom, focusing not just on treating illness but also on improving lifestyle, immunity, and overall quality of life.",
        "Known for his patient-first philosophy, Dr. Deepak takes the time to listen, understand, and design personalized treatment plans that address the unique needs of each individual. His compassionate and holistic approach has earned him the trust of countless patients in Agra and beyond.",
        "Beyond clinical care, he is passionate about guiding people toward healthier living through preventive strategies, rehabilitation programs, and wellness therapies. His vision for Sharda Clinic is to provide a comprehensive healthcare destination where patients find not only treatment but also empathy, guidance, and lasting solutions.",
      ],
      hi: [
        "मेजर (डॉ.) विश्व दीपक (से.नि.) एक सम्मानित और अनुभवी चिकित्सक हैं, जिन्होंने वर्षों तक समर्पण और करुणा के साथ मरीजों की सेवा की है। आर्मी मेडिकल कॉर्प्स से सेवानिवृत्त होने के बाद उन्होंने सैन्य चिकित्सा सेवा का अनुशासन, निष्ठा और उत्कृष्टता को आमजन की स्वास्थ्य सेवाओं में समर्पित किया है।",
        "डॉ. दीपक को क्रिटिकल केयर, पुरानी बीमारियों का प्रबंधन, मस्क्युलोस्केलेटल समस्याएँ, डायबिटीज़, हाई ब्लड प्रेशर तथा निवारक स्वास्थ्य देखभाल में विशेष अनुभव है। वे आधुनिक चिकित्सा विज्ञान और पारंपरिक ज्ञान का संतुलित उपयोग कर मरीजों को न केवल उपचार प्रदान करते हैं बल्कि उनकी जीवनशैली, रोग प्रतिरोधक क्षमता और संपूर्ण स्वास्थ्य में भी सुधार पर ध्यान केंद्रित करते हैं।",
        "उनकी मरीज-प्रथम सोच और करुणामयी व्यवहार उन्हें विशिष्ट बनाते हैं। वे हर मरीज को ध्यान से सुनते हैं, समझते हैं और फिर उसके अनुसार व्यक्तिगत उपचार योजना तैयार करते हैं ताकि सर्वोत्तम स्वास्थ्य परिणाम मिल सकें।",
        "शारदा क्लिनिक के माध्यम से उनका उद्देश्य एक ऐसा स्वास्थ्य केंद्र स्थापित करना है जहाँ मरीजों को केवल इलाज ही नहीं बल्कि सहानुभूति, मार्गदर्शन और दीर्घकालिक समाधान भी प्राप्त हों।",
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
