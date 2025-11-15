import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

interface DropDownMenuProps {
  onClose: () => void;
  scrollToServices?: () => void; // 👈 optional now
}

const services = [
  { title: "Social Media Marketing", href: "/social-media-marketing" },
  { title: "Google My Business (GMB)", href: "/google-my-business" },
  { title: "Web Development", href: "/web-development" },
  { title: "Meta Ads", href: "/meta-ads" },
  { title: "Creatives & Video Editing", href: "/creatives-video-editing" },
  {
    title: "Search Engine Optimization (SEO)",
    href: "/search-engine-optimization",
  },
];

const DropDownMenu: React.FC<DropDownMenuProps> = ({
  onClose,
  scrollToServices,
}) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleServices = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsServicesOpen(!isServicesOpen);

    // 👇 if you want to trigger scrollToServices when opening
    if (!isServicesOpen && scrollToServices) {
      scrollToServices();
    }
  };

  return (
    <motion.div
      className="w-screen h-screen bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 text-slate-300 p-6 space-y-4 absolute top-28 left-0 right-0 z-50 rounded-t-3xl overflow-y-auto"
      initial={{ opacity: 0, y: "-80%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex-col flex space-y-10">
        <Link
          href="/#GraphicDesign"
          className="text-black text-2xl"
          onClick={onClose}
        >
          About Us
        </Link>
        <Link href="/contact" className="text-black text-2xl" onClick={onClose}>
          Contact
        </Link>
        <Link href="/book" className="text-black text-2xl" onClick={onClose}>
          Book a call
        </Link>

        {/* Services with dropdown */}
        <div>
          <button
            className="flex items-center justify-between cursor-pointer text-black text-2xl w-full text-left"
            onClick={toggleServices}
            onTouchEnd={toggleServices}
            type="button"
          >
            <span>Services</span>
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-300 ${
                isServicesOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Animate services dropdown */}
          <AnimatePresence>
            {isServicesOpen && (
              <motion.div
                className="mt-4 ml-4 space-y-3 overflow-hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {services.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="block text-lg text-gray-700 hover:text-black py-2"
                    onClick={onClose}
                  >
                    {service.title}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile-only Call us Now button */}
        <div className="sm:hidden mt-6">
          <a href="tel:+918451951123" aria-label="Call us now">
            <button className="primary-btn border border-white text-white rounded-full py-2 px-4 text-lg hover:bg-white hover:text-black transition-all duration-300 shadow-lg">
              +91-8451951123
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default DropDownMenu;
