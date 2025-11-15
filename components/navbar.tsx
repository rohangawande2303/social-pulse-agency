"use client";

import { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import DropDownMenu from "./drop-down-menu";
import ShinyText from "../components/ui/ShinyText";

interface NavbarProps {
  scrollToWebsiteDesign?: () => void;
  scrollToGraphicDesign?: () => void;
  scrollToShopifyStores?: () => void;
  scrollToBrands?: () => void;
  scrollToServices?: () => void;
}

export const projects = [
  {
    icon: (
      <div className="bg-[#F2E8FF] p-4 rounded-full flex items-center justify-center">
        <Image
          src="/images/services/social-media.webp"
          alt="Social Media Marketing"
          width={32}
          height={32}
        />
      </div>
    ),
    title: "Social Media Marketing",
    description:
      "We build strong online presence and grow your brand across social platforms.",
  },
  {
    icon: (
      <div className="bg-[#F2E8FF] p-4 rounded-full flex items-center justify-center">
        <Image
          src="/images/services/google.webp"
          alt="Google My Business"
          width={32}
          height={32}
        />
      </div>
    ),
    title: "Google My Business (GMB)",
    description:
      "We optimize and manage your GMB profile to get you more local customers.",
  },
  {
    icon: (
      <div className="bg-[#F2E8FF] p-4 rounded-full flex items-center justify-center">
        <Image
          src="/images/services/web-development.webp"
          alt="Web Development"
          width={32}
          height={32}
        />
      </div>
    ),
    title: "Web Development",
    description:
      "We design fast, modern, and user-friendly websites that drive sales.",
  },
  {
    icon: (
      <div className="bg-[#F2E8FF] p-4 rounded-full flex items-center justify-center">
        <Image
          src="/images/services/meta.webp"
          alt="Meta Ads"
          width={32}
          height={32}
        />
      </div>
    ),
    title: "Meta Ads",
    description:
      "We run targeted Meta ads to reach the right audience at the right time.",
  },
  {
    icon: (
      <div className="bg-[#F2E8FF] p-4 rounded-full flex items-center justify-center">
        <Image
          src="/images/services/video-edition.webp"
          alt="Creatives & Video Editing"
          width={32}
          height={32}
        />
      </div>
    ),
    title: "Creatives & Video Editing",
    description:
      "We produce eye-catching designs and videos that connect with your audience.",
  },
  {
    icon: (
      <div className="bg-[#F2E8FF] p-4 rounded-full flex items-center justify-center">
        <Image
          src="/images/services/seo.webp"
          alt="SEO"
          width={32}
          height={32}
        />
      </div>
    ),
    title: "Search Engine Optimization (SEO)",
    description:
      "We improve your rankings on Google to bring you consistent organic traffic.",
  },
];

const Navbar = ({
  scrollToWebsiteDesign,
  scrollToGraphicDesign,
  scrollToShopifyStores,
  scrollToBrands,
  scrollToServices,
}: NavbarProps) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const router = useRouter();

  const toggleDropDown = () => setIsDropDownVisible(!isDropDownVisible);
  const closeDropDown = () => setIsDropDownVisible(false);

  const handleScrollOrRedirect = (scrollFunction?: () => void) => {
    if (!scrollFunction) return; // if not passed, do nothing
    if (window.location.pathname === "/") {
      scrollFunction();
    } else {
      router.push("/");
      setTimeout(() => {
        if (window.location.pathname === "/") {
          scrollFunction();
        }
      }, 500);
    }
  };

  return (
    <>
      <nav
        className="fixed top-0 w-full z-50 bg-black"
        aria-label="Main Navigation"
      >
        <div className="p-4 md:p-6 lg:px-8 flex items-center justify-between md:justify-around">
          {/* Logo */}
          <div className="flex items-center">
            <Link className="cursor-pointer" href="/" aria-label="Homepage">
              <Image
                priority
                src="/logo/logo3.png"
                alt="Social Pulse Agency Logo"
                width={90}
                height={90}
                className="w-auto h-10 md:w-auto md:h-16"
              />
            </Link>
            <Link
              href="/"
              aria-label="Visit Social Pulse Agency"
              className="ml-3"
            >
              <ShinyText
                text="Social Pulse Agency"
                speed={4}
                className="text-xl md:text-2xl font-semibold"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12 items-center text-slate-300 text-lg relative">
            {/* <Link href="/" className="hover:text-gray-50" aria-label="Home">
              Home
            </Link> */}
            <Link
              href="/rishabhmishra"
              className="hover:text-gray-50"
              aria-label="About Us"
            >
              About Us
            </Link>

            {/* Services link with dropdown */}
            <div className="relative group">
              <div
                onClick={() => handleScrollOrRedirect(scrollToServices)}
                className="hover:text-gray-50 cursor-pointer flex items-center space-x-1"
                aria-label="Services"
              >
                <span>Services</span>
                <svg
                  className="w-4 h-4 mt-1 transition-transform duration-300 group-hover:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {/* Dropdown */}
              <div
                className="absolute left-1/2 top-full mt-10 -translate-x-1/2 w-[900px] 
  bg-black text-white rounded-xl shadow-lg 
  opacity-0 translate-y-4 scale-y-95 invisible 
  group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-y-100 
  group-hover:visible transition-all duration-700 ease-in-out 
  p-6 grid grid-cols-2 gap-6 border border-gray-800"
              >
                <Link
                  href="/services/social-media-marketing"
                  className="flex items-start space-x-4 hover:bg-neutral-800 p-3 rounded-lg transition"
                >
                  {projects[0].icon}
                  <div>
                    <h3 className="text-base font-semibold">
                      {projects[0].title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {projects[0].description}
                    </p>
                  </div>
                </Link>

                <Link
                  href="/services/google-my-business"
                  className="flex items-start space-x-4 hover:bg-neutral-800 p-3 rounded-lg transition"
                >
                  {projects[1].icon}
                  <div>
                    <h3 className="text-base font-semibold">
                      {projects[1].title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {projects[1].description}
                    </p>
                  </div>
                </Link>

                <Link
                  href="/services/web-development"
                  className="flex items-start space-x-4 hover:bg-neutral-800 p-3 rounded-lg transition"
                >
                  {projects[2].icon}
                  <div>
                    <h3 className="text-base font-semibold">
                      {projects[2].title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {projects[2].description}
                    </p>
                  </div>
                </Link>

                <Link
                  href="/services/meta-ads"
                  className="flex items-start space-x-4 hover:bg-neutral-800 p-3 rounded-lg transition"
                >
                  {projects[3].icon}
                  <div>
                    <h3 className="text-base font-semibold">
                      {projects[3].title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {projects[3].description}
                    </p>
                  </div>
                </Link>

                <Link
                  href="/services/creatives"
                  className="flex items-start space-x-4 hover:bg-neutral-800 p-3 rounded-lg transition"
                >
                  {projects[4].icon}
                  <div>
                    <h3 className="text-base font-semibold">
                      {projects[4].title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {projects[4].description}
                    </p>
                  </div>
                </Link>

                <Link
                  href="/services/seo"
                  className="flex items-start space-x-4 hover:bg-neutral-800 p-3 rounded-lg transition"
                >
                  {projects[5].icon}
                  <div>
                    <h3 className="text-base font-semibold">
                      {projects[5].title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {projects[5].description}
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            <Link
              href="/contact"
              className="hover:text-gray-50"
              aria-label="Contact Us"
            >
              Contact
            </Link>
          </div>

          {/* Call Us Now */}
          <div className="hidden md:block text-center sm:text-centerx">
            <a href="tel:+918451951123" aria-label="Call us now">
              <button className="primary-btn border border-white text-white rounded-full py-2 px-4 text-base hover:bg-white hover:text-black transition-all duration-300 shadow-lg">
                +91-8451951123
              </button>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden">
            {isDropDownVisible ? (
              <div
                onClick={toggleDropDown}
                className="w-8 h-8 text-slate-300 cursor-pointer"
              >
                <X />
                <DropDownMenu
                  onClose={closeDropDown}
                  scrollToServices={scrollToServices}
                />
              </div>
            ) : (
              <AlignJustify
                onClick={toggleDropDown}
                className="w-8 h-8 text-slate-300 cursor-pointer"
              />
            )}
          </div>

          {/* WhatsApp Button */}
          <div className="hidden md:flex">
            <a
              href="https://api.whatsapp.com/send?phone=8451951123&text=I%20came%20across%20your%20website%20,I%20would%20like%20to%20have%20more%20information%20about%20your%20business"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 
              bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 
              transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              aria-label="Contact us via WhatsApp"
            >
              What&apos;s App
            </a>
          </div>
        </div>
      </nav>

      <div className="pt-20 md:pt-24">{/* Main content starts here */}</div>
    </>
  );
};

export default Navbar;
