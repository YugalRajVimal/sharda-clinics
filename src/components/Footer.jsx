import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaLaptopMedical } from "react-icons/fa";
import { IoMdMail, IoMdCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FiInstagram, FiFacebook, FiLinkedin, FiYoutube } from "react-icons/fi";

const servicesData = {
  en: [
    "Critical Care & Cardiology",
    "Diabetes Management",
    "Hypertension Control",
    "Thyroid Disorders",
    "Asthma & Respiratory Care",
    "Joint Pain & Arthritis",
  ],
  hi: [
    "क्रिटिकल केयर और कार्डियोलॉजी",
    "डायबिटीज मैनेजमेंट",
    "हाई ब्लड प्रेशर कंट्रोल",
    "थायरॉइड डिसऑर्डर्स",
    "अस्थमा और रेस्पिरेटरी केयर",
    "जॉइंट पेन और आर्थराइटिस",
  ],
};

const texts = {
  en: {
    quickLinks: "Quick Links",
    home: "Home",
    about: "About Us",
    services: "Services",
    contact: "Contact",
    viewAll: "View All →",
    contactUs: "Contact Us",
    email: "shardaclinicagra@gmail.com",
    phone: "+91 90276 69380",
    address:
      "Gailana Rd, in front of ISBT, near Asopa Hospital, Tiraha, Kakraita, Agra, Uttar Pradesh 282007",
    description:
      "Trusted medical care by Maj (Dr.) Vishwa Deepak (Retd.) — combining experience, compassion, and dedication to patient well-being.",
    copyright: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    cookie: "Cookie Policy",
    servicesTitle: "Services",
  },
  hi: {
    quickLinks: "त्वरित लिंक",
    home: "होम",
    about: "हमारे बारे में",
    services: "सेवाएँ",
    contact: "संपर्क करें",
    viewAll: "सभी देखें →",
    contactUs: "संपर्क करें",
    email: "shardaclinicagra@gmail.com",
    phone: "+91 90276 69380",
    address:
      "गैलाना रोड, ISBT के सामने, आसोपा हॉस्पिटल के पास, तिराहा, ककरैता, आगरा, उत्तर प्रदेश 282007",
    description:
      "श्री (डॉ.) विश्व दीपक (सेवानिवृत्त) द्वारा भरोसेमंद चिकित्सा देखभाल — अनुभव, करुणा और रोगी कल्याण के प्रति समर्पण के साथ।",
    copyright: "सर्वाधिकार सुरक्षित।",
    privacy: "गोपनीयता नीति",
    terms: "सेवा की शर्तें",
    cookie: "कुकी नीति",
    servicesTitle: "सेवाएँ",
  },
};

const Footer = ({ lang }) => {
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith("/admin");
  if (isAdminPath) return null;

  const t = texts[lang] || texts.en;
  const services = servicesData[lang] || servicesData.en;

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="mx-auto container px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand & Socials */}
          <div>
            <div className="flex items-center mb-4">
              <a href="" className="flex items-center">
                <img src="/logo.png" className="h-[8vh]" alt="Logo" />
              </a>
            </div>
            <p className="mb-6 text-gray-300">{t.description}</p>
            <div className="flex space-x-4">
              {[FiInstagram, FiFacebook, FiLinkedin, FiYoutube].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white transition-colors hover:text-gray-300"
                    onClick={handleLinkClick}
                  >
                    <Icon size={18} className="h-5 w-5" />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-lg !text-white">
              {t.quickLinks}
            </h3>
            <ul className="space-y-2">
              {[t.home, t.about, t.services, t.contact].map((item, index) => (
                <li key={index}>
                  <Link
                    to={["/", "/about", "/services", "/contact"][index]}
                    className="text-gray-400 transition-colors hover:text-white"
                    onClick={handleLinkClick}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-semibold text-lg !text-white">
              {t.servicesTitle}
            </h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link
                    to="/services"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {service}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-blue-400 hover:underline text-sm"
                >
                  {t.viewAll}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex justify-center">
            <div className="w-fit">
              <h3 className="text-lg font-semibold mb-6 !text-white inline-flex items-center">
                <span className="w-6 h-px bg-danger mr-2"></span>
                {t.contactUs}
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <IoMdMail className="w-5 h-5 text-white mr-3 mt-0.5 group-hover:animate-pulse" />
                  <a
                    href={`mailto:${t.email}`}
                    className="text-gray-400 group-hover:text-white transition-colors"
                  >
                    {t.email}
                  </a>
                </li>
                <li className="flex items-start group">
                  <IoMdCall className="w-5 h-5 text-white mr-3 mt-0.5 group-hover:animate-pulse" />
                  <a
                    href={`tel:${t.phone}`}
                    className="text-gray-400 group-hover:text-white transition-colors"
                  >
                    {t.phone}
                  </a>
                </li>
                <li className="flex items-start group">
                  <IoLocationSharp className="shrink-0 w-5 h-5 text-white mr-3 mt-0.5 group-hover:animate-pulse" />
                  <span className="text-gray-400 group-hover:text-white transition-colors">
                    {t.address}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-gray-800 border-t mt-12 pt-6">
          <p className="text-white md:text-left text-center">
            © {new Date().getFullYear()} Sharda Clinic, Agra. {t.copyright}
          </p>

          <p className="md:text-left text-center text-sm">
            <span className="text-gray-400 mr-1">Our Tech Partner</span>
            <a
              href="https://gowappily.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:text-gray-300 transition-colors"
            >
              GoWappily Infotech
            </a>
          </p>

          <div className="flex justify-center md:justify-start md:mt-0 mt-4 space-x-6">
            {[t.privacy, t.terms, t.cookie].map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-white text-sm hover:text-gray-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
