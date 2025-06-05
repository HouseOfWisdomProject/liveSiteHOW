"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Popup from "./Popup";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState(null);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = async (e, targetId) => {
    e.preventDefault();
    if (pathname !== "/") {
      await router.push("/");
    }
    setTimeout(() => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
    setIsMenuOpen(false);
  };

  const handlePopup = (message) => {
    setPopupMessage(message);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-md ${
          isScrolled ? "bg-orange-100 shadow-md bg-opacity-30" : "bg-orange-200"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img
                src="/HOW-Logo.png"
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                alt="House of Wisdom Logo"
              />
              <Link 
                href="/" 
                className="text-lg sm:text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors"
              >
                House of Wisdom
              </Link>
            </div>
            <button
              className="md:hidden p-2 rounded-lg hover:bg-orange-300 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            <div className="hidden md:flex items-center space-x-6">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "#about", scroll: true },
                { label: "Programs", href: "#prog", scroll: true },
                { label: "Publications", href: "/PublicationsPage" },
                { label: "Team", href: "/TeamPage" },
              ].map((item) => (
                <div key={item.label}>
                  {item.popup ? (
                    <button
                      onClick={() => handlePopup(item.popup)}
                      className="text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      {item.label}
                    </button>
                  ) : item.scroll ? (
                    <a
                      href={item.href}
                      onClick={(e) => handleSmoothScroll(e, item.href.slice(1))}
                      className="text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="https://www.zeffy.com/en-US/embed/donation-form/donate-to-make-a-difference-11511?modal=true"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition-colors"
              >
                Donate
              </Link>
            </div>
          </div>

          <div
            className={`md:hidden transition-all duration-300 overflow-hidden ${
              isMenuOpen ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="pt-2 pb-3 space-y-1">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "#about", scroll: true },
                { label: "Programs", href: "#prog", scroll: true },
                { label: "Publications", href: "/PublicationsPage" },
                { label: "Team", href:"/TeamPage" },
              ].map((item) => (
                <div key={item.label} className="block px-3 py-2">
                  {item.popup ? (
                    <button
                      onClick={() => handlePopup(item.popup)}
                      className="w-full text-left text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      {item.label}
                    </button>
                  ) : item.scroll ? (
                    <a
                      href={item.href}
                      onClick={(e) => handleSmoothScroll(e, item.href.slice(1))}
                      className="block text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="px-3 py-2">
                <Link
                  href="https://www.zeffy.com/en-US/embed/donation-form/donate-to-make-a-difference-11511?modal=true"
                  className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition-colors"
                >
                  Donate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {popupMessage && <Popup message={popupMessage} onClose={() => setPopupMessage(null)} />}
      
      <div className="h-20 sm:h-24" />
    </>
  );
};

export default Navbar;
