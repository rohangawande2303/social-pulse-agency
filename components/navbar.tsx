"use client";

import { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter
import DropDownMenu from "./drop-down-menu";

interface NavbarProps {
  scrollToWebsiteDesign: () => void;
  scrollToGraphicDesign: () => void;
  scrollToShopifyStores: () => void;
  scrollToBrands: () => void;
  scrollToServices: () => void;
}

const Navbar = ({
  scrollToWebsiteDesign,
  scrollToGraphicDesign,
  scrollToShopifyStores,
  scrollToBrands,
  scrollToServices,
}: NavbarProps) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const router = useRouter();

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const closeDropDown = () => {
    setIsDropDownVisible(false);
  };

  const handleScrollOrRedirect = (scrollFunction: () => void) => {
    if (window.location.pathname === "/") {
      // If on homepage, scroll to the section
      scrollFunction();
    } else {
      // If not on homepage, redirect to homepage and then scroll
      router.push("/"); // Redirect to homepage

      // Wait for the navigation to complete, then scroll
      setTimeout(() => {
        if (window.location.pathname === "/") {
          scrollFunction();
        }
      }, 500); // Adjust the timeout as needed
    }
  };

  return (
    <>
      <div className="fixed top-0 w-full z-50 bg-black">
        <div className="p-4 md:p-6 lg:px-8 flex items-center justify-between md:justify-around">
          <div className="flex items-center">
            <Link className="cursor-pointer" href="/">
              <Image
                priority
                src="/logo/logo3.png"
                alt="Logo"
                width={90}
                height={90}
                className="w-10 h-10 md:w-16 md:h-16"
              />
            </Link>
            <Link href="/" className="text-white text-xl md:text-2xl ml-3">
              Social Pulse Agency
            </Link>
          </div>
          <div
            className="cursor-pointer hidden 
              md:flex space-x-12 items-center
               text-slate-300 text-center 
               bg-clip-text text-transparent 
               bg-gradient-to-b from-neutral-50
                to bg-neutral-400 bg-opacity-50 text-lg"
          >
            <Link href="/" className="hover:text-gray-50">
              Home
            </Link>
            <div
              onClick={() => handleScrollOrRedirect(scrollToGraphicDesign)}
              className="hover:text-gray-50"
            >
              About Us
            </div>
            <div
              onClick={() => handleScrollOrRedirect(scrollToBrands)}
              className="hover:text-gray-50"
            >
              Services
            </div>
            <Link href="/contact" className="hover:text-gray-50">
              Contact
            </Link>
          </div>

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

          <div className="hidden md:flex">
            <a
              href="https://api.whatsapp.com/send?phone=8451951123&text=I%20came%20across%20your%20website%20,I%20would%20like%20to%20have%20more%20information%20about%20your%20business"
              target="_blank"
              rel="noopener noreferrer"
              className="
              inline-flex h-12 animate-shimmer items-center justify-center 
              rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
              bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors
               focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
                focus:ring-offset-slate-50
              "
            >
              What&apos;s App
            </a>
          </div>
        </div>
      </div>
      <div className="pt-20 md:pt-24">{/* Main content starts here */}</div>
    </>
  );
};

export default Navbar;

// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { AlignJustify, X } from "lucide-react";

// import Image from "next/image";
// import Link from "next/link";
// import DropDownMenu from "./drop-down-menu";

// interface NavbarProps {
//   scrollToWebsiteDesign: () => void;
//   scrollToGraphicDesign: () => void;
//   scrollToShopifyStores: () => void;
//   scrollToBrands: () => void;
//   scrollToServices: () => void; // Define scrollToServices function
// }

// const Navbar = ({
//   scrollToWebsiteDesign,
//   scrollToGraphicDesign,
//   scrollToShopifyStores,
//   scrollToBrands,
//   scrollToServices, // Add scrollToServices to props
// }: NavbarProps) => {
//   const [isDropDownVisible, setIsDropDownVisible] = useState(false);

//   const toggleDropDown = () => {
//     setIsDropDownVisible(!isDropDownVisible);
//   };

//   const closeDropDown = () => {
//     setIsDropDownVisible(false);
//   };

//   return (
//     <div>
//       <div className="p-6 md:p-10 flex items-center justify-between z-50">
//         <div>
//           <Link className="cursor-pointer" href="/">
//             <Image
//               priority
//               src="/logo/logo3.png"
//               alt="Logo"
//               width={100}
//               height={100}
//               className="w-10 h-10 md:w-14 md:h-14"
//             />
//           </Link>
//         </div>
//         <div
//           className="cursor-pointer hidden
//             md:flex space-x-10 items-center
//              text-slate-300 text-center
//              bg-clip-text text-transparent
//              bg-gradient-to-b from-neutral-50
//               to bg-neutral-400 bg-opacity-50"
//         >
//           <div onClick={scrollToWebsiteDesign} className="hover:text-gray-50">
//             Home
//           </div>
//           <div onClick={scrollToGraphicDesign} className="hover:text-gray-50">
//             About Us
//           </div>

//           {/* <div onClick={scrollToShopifyStores} className="hover:text-gray-50">
//             Shopify Stores
//           </div> */}
//           <div onClick={scrollToBrands} className="hover:text-gray-50">
//             Testimonials
//           </div>

//           <Link href="/contact" className="hover:text-gray-50">
//             Contact
//           </Link>
//         </div>

//         <div className="flex md:hidden">
//           {isDropDownVisible ? (
//             // display an x icon when the drop is visible
//             <div
//               onClick={toggleDropDown}
//               className="w-8 h-8 text-slate-300 cursor-pointer"
//             >
//               <X />
//               <DropDownMenu
//                 onClose={closeDropDown}
//                 scrollToServices={scrollToServices} // Pass scrollToServices
//               />
//             </div>
//           ) : (
//             <AlignJustify
//               onClick={toggleDropDown}
//               className="w-8 h-8 text-slate-300 cursor-pointer"
//             />
//           )}
//         </div>

//         <div className="hidden md:flex">
//           <Link
//             href="/contact"
//             className="
//             inline-flex h-12 animate-shimmer items-center justify-center
//             rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]
//             bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors
//              focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
//               focus:ring-offset-slate-50

//             "
//           >
//             Contact
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
