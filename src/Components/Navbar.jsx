import { ChevronDown, Globe, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      animate={{ backgroundColor: scrolled ? "#f8f8f8" : "white" }}
      transition={{ duration: 0.3 }}
      className="fixed w-full top-0 z-50 p-4 shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side */}
        <div className="flex items-center space-x-4">
          {/* Mobile Menu Button with Rotation */}
          <motion.button
            className="md:hidden p-2 order-first"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>

          <h1 className="text-3xl font-bold">miro</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
          {["Product", "Solutions", "Resources"].map((item) => (
            <div key={item} className="relative group">
              <button className="flex items-center cursor-pointer hover:text-gray-500">
                {item} <ChevronDown size={16} className="ml-1" />
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg hidden group-hover:block"
                >
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    Option 1
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    Option 2
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          ))}

          <a href="#" className="cursor-pointer hover:text-gray-500">
            Enterprise
          </a>
          <a href="#" className="cursor-pointer hover:text-gray-500">
            Pricing
          </a>
        </div>

        {/* Right Side: Language, Contact, and Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-1 cursor-pointer">
            <Globe size={18} />
            <span className="text-sm font-medium">EN</span>
          </div>
          <a href="#" className="cursor-pointer hover:text-gray-500">
            Contact Sales
          </a>

          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#e5e7eb" }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-md bg-gray-100 cursor-pointer"
          >
            Login
          </motion.button>

          {/* Sign Up Button */}
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer"
          >
            Sign Up
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col items-start space-y-4 mt-4 bg-white p-4 shadow-md"
          >
            {["Product", "Solutions", "Resources", "Enterprise", "Pricing"].map(
              (item) => (
                <a key={item} href="#" className="cursor-pointer hover:text-gray-500">
                  {item}
                </a>
              )
            )}

            <div className="flex items-center space-x-1 cursor-pointer">
              <Globe size={18} />
              <span className="text-sm font-medium">EN</span>
            </div>
            <a href="#" className="cursor-pointer hover:text-gray-500">
              Contact Sales
            </a>

            {/* Login Button */}
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#e5e7eb" }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-md bg-gray-100 cursor-pointer"
            >
              Login
            </motion.button>

            {/* Sign Up Button */}
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer"
            >
              Sign Up
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
