import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = ({ lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Text for navigation items in Hinglish/Hindi and English
  const navItems = [
    { key: "home", path: "/" },
    { key: "about", path: "/about" },
    { key: "services", path: "/services" },
    { key: "blogs", path: "/blogs" },
    { key: "contact", path: "/contact" },
  ];

  const navTexts = {
    home: { hi: "होम", en: "Home" },
    about: { hi: "हमारे बारे में", en: "About" },
    services: { hi: "सेवाएं", en: "Services" },
    blogs: { hi: "ब्लॉग्स", en: "Blogs" },
    contact: { hi: "संपर्क करें", en: "Contact" },
  };

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed px-6 py-4 transition-all duration-300 z-50 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" className="h-[8vh]" alt="Logo" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="space-x-4 hidden lg:flex items-center">
          {navItems.map((item) => (
            <li key={item.key}>
              <Link
                to={item.path}
                className="transition font-medium px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                {navTexts[item.key][lang]}
              </Link>
            </li>
          ))}

          {/* Language Toggle */}
          <li>
            <button
              onClick={() => setLang(lang === "hi" ? "en" : "hi")}
              className="ml-4 px-3 py-1 border rounded hover:bg-blue-600 hover:text-white transition"
            >
              {lang === "hi" ? "English" : "हिंदी"}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="text-blue-600 md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="transition-all duration-200 ease-out lg:hidden">
          <div className="p-6 backdrop-blur-md mt-4 rounded-lg shadow-lg space-y-4 bg-white/95">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className="block transition text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {navTexts[item.key][lang]}
              </Link>
            ))}

            {/* Mobile Language Toggle */}
            <button
              onClick={() => setLang(lang === "hi" ? "en" : "hi")}
              className="mt-4 w-full px-4 py-2 border rounded hover:bg-blue-600 hover:text-white transition"
            >
              {lang === "hi" ? "English" : "हिंदी"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
