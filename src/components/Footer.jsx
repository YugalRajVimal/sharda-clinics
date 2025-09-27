import React from "react";
import { Link } from "react-router-dom";
import { FaLaptopMedical } from "react-icons/fa";
import { IoMdMail, IoMdCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FiInstagram, FiFacebook, FiLinkedin, FiYoutube } from "react-icons/fi";

const services = [
  {
    title: "Critical Care & Cardiology",
    desc: "Expert management of heart diseases, cardiac emergencies, and critical medical conditions.",
  },
  {
    title: "Diabetes Management",
    desc: "Comprehensive care for diabetes, including lifestyle guidance and long-term monitoring.",
  },
  {
    title: "Hypertension Control",
    desc: "Effective treatment plans to manage and control high blood pressure safely.",
  },
  {
    title: "Thyroid Disorders",
    desc: "Diagnosis and treatment for thyroid-related conditions with personalized care.",
  },
  {
    title: "Asthma & Respiratory Care",
    desc: "Advanced management of asthma, allergies, and other lung-related disorders.",
  },
  {
    title: "Joint Pain & Arthritis",
    desc: "Relief and treatment for arthritis, sciatica, and musculoskeletal problems.",
  },
  {
    title: "Neurological Disorders",
    desc: "Care for conditions such as headache, epilepsy, stroke, and neuropathies.",
  },
  {
    title: "Gastrointestinal Issues",
    desc: "Treatment for colitis, ulcers, pancreatitis, abdominal pain, and digestive disorders.",
  },
  {
    title: "Infectious Diseases",
    desc: "Specialized care for dengue, malaria, typhoid, and other acute infections.",
  },
];

const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="mx-auto container px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand & Socials */}
          <div>
            <div className="flex items-center mb-4">
              <a href="" className="flex items-center">
                <img src="/logo.png" className="h-[8vh]" />
              </a>
            </div>
            <p className="mb-6 text-gray-300">
              Trusted medical care by Maj (Dr.) Vishwa Deepak (Retd.) —
              combining experience, compassion, and dedication to patient
              well-being.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: FiInstagram, link: "/" },
                { icon: FiFacebook, link: "/" },
                { icon: FiLinkedin, link: "/" },
                { icon: FiYoutube, link: "/" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-colors hover:text-gray-300"
                  onClick={handleLinkClick}
                >
                  <item.icon size={18} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-lg !text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Home", link: "/" },
                { name: "About Us", link: "/about" },
                { name: "Services", link: "/services" },
                { name: "Contact", link: "/contact" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="text-gray-400 transition-colors hover:text-white"
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-semibold text-lg !text-white">Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 transition-colors hover:text-white">
                    {service.title}
                  </span>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-blue-400 hover:underline text-sm"
                >
                  View All →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex justify-center">
            <div className="w-fit">
              <h3 className="text-lg font-semibold mb-6 !text-white inline-flex items-center">
                <span className="w-6 h-px bg-danger mr-2"></span>
                Contact Us
              </h3>

              <ul className="space-y-4">
                <li className="flex items-start group">
                  <IoMdMail className="w-5 h-5 text-white mr-3 mt-0.5 group-hover:animate-pulse" />
                  <a
                    href="mailto:shardaclinicagra@gmail.com"
                    className="text-gray-400 group-hover:text-white transition-colors"
                  >
                    shardaclinicagra@gmail.com
                  </a>
                </li>
                <li className="flex items-start group">
                  <IoMdCall className="w-5 h-5 text-white mr-3 mt-0.5 group-hover:animate-pulse" />
                  <a
                    href="tel:+917742863725"
                    className="text-gray-400 group-hover:text-white transition-colors"
                  >
                    +91 90276 69380
                  </a>
                </li>
                <li className="flex items-start group">
                  <IoLocationSharp className="w-5 h-5 text-white mr-3 mt-0. shrink-0 group-hover:animate-pulse" />
                  <span className="text-gray-400 group-hover:text-white transition-colors ">
                    Gailana Rd, in front of ISBT, near Asopa Hospital, Tiraha,
                    Kakraita, Agra, Uttar Pradesh 282007
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between border-gray-800 border-t mt-12 pt-6">
          <p className="text-white md:text-left text-center">
            © {new Date().getFullYear()} Sharda Clinic, Agra. All rights
            reserved.
          </p>

          <div className="flex justify-center md:justify-start md:mt-0 mt-4 space-x-6">
            <a href="#" className="text-white text-sm hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="#" className="text-white text-sm hover:text-gray-300">
              Terms of Service
            </a>
            <a href="#" className="text-white text-sm hover:text-gray-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
