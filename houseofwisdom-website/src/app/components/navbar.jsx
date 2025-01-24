"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; // Next.js 13 navigation hooks
import Popup from "./Popup"; // Import the Popup component

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [popupMessage, setPopupMessage] = useState(null); // State for popup message

  const pathname = usePathname(); // Get current route
  const router = useRouter(); // Navigate programmatically

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup listener
  }, []);

  const handleSmoothScroll = async (e, targetId) => {
    e.preventDefault();

    if (pathname !== "/") {
      await router.push("/"); // Navigate to the homepage
    }

    // Smoothly scroll to the target element
    setTimeout(() => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const handlePopup = (message) => {
    setPopupMessage(message); 
  };

  const closePopup = () => {
    setPopupMessage(null); 
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-50 py-6 transition-all duration-300 backdrop-blur-md ${
          isScrolled ? "bg-orange-100 shadow-md bg-opacity-30" : "bg-orange-200"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <img
            src="/HOW-Logo.png"
            className="w-24 h-auto"
            alt="House of Wisdom Logo"
          />
          <Link href="/" className="text-2xl font-bold text-gray-800">
            House of Wisdom
          </Link>

          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-gray-600 hover:text-gray-800">
                Home
              </Link>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => handleSmoothScroll(e, "about")}
                className="text-gray-600 hover:text-gray-800"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#programs"
                onClick={(e) => handleSmoothScroll(e, "about")}
                className="text-gray-600 hover:text-gray-800"
              >
                Programs
              </a>
            </li>
            <li>
              <button
                onClick={() => handlePopup("We're working on it! On the way...")}
                className="text-gray-600 hover:text-gray-800"
              >
                Publications
              </button>
            </li>
            <li>
              <button
                onClick={() => handlePopup("We're working on it! On the way...")}
                className="text-gray-600 hover:text-gray-800"
              >
                Team
              </button>
            </li>
            <li>
              <Link
                href="/donate"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
              >
                Donate
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {popupMessage && <Popup message={popupMessage} onClose={closePopup} />}
    </>
  );
};

export default Navbar;
