import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaLaptopMedical } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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
        <div className="flex items-center">
          <a href="" className="flex items-center">
            <img src="/logo.png" className="h-[8vh]" />
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="space-x-4 hidden items-center lg:flex">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="transition font-medium px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="text-blue-600 md:hidden focus:outline-none`"
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
                key={item.name}
                to={item.path}
                className="block transition text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
