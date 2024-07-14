import Link from "next/link";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneSquareAlt,
  FaYoutube,
} from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="pt-12 relative bg-black text-white">
      <div className="mx-auto max-w-7xl p-6 lg:px-8">
        <div className="flex justify-between items-center md:items-start gap-y-8 flex-col sm:flex-row text-center md:text-start border-t border-white pt-6">
          <div className="flex-1 sm:text-left">
            <h2 className="text-2xl md:text-3xl font-medium">
              Interested To Get Our Featured Service
            </h2>
          </div>
          <div className="text-center sm:text-center">
            <a href="tel:+918451951123">
              <button className="primary-btn border border-white rounded-full py-2 px-4 text-lg hover:bg-white hover:text-black transition-all duration-300 shadow-lg">
                Call us Now
              </button>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 pt-20">
          <div className="lg:pr-8 text-center md:text-start flex flex-col items-center md:flex-row md:items-center">
            <Image
              src="/logo/logo3.png"
              alt="WebDev"
              className="mx-auto pb-4 md:pb-0 md:mx-0"
              width={50}
              height={20}
            />
            <div className="ml-3 text-center md:text-left">
              <div className="text-white text-xl md:text-2xl">
                Social Pulse Agency
              </div>
              <p className="text-base mt-2 hover:text-gray-300 transition-all duration-300">
                We&apos;re Social Pulse, a digital marketing agency fueled by
                passion and powered by expertise.
              </p>
            </div>
          </div>

          <div className="mx-auto text-center md:text-start sm:text-center">
            <h3 className="text-xl font-medium mb-6">Quick Links</h3>
            <ul className="list-inside md:list-outside">
              <li className="my-2 text-lg hover:text-gray-300 transition-all duration-300">
                <Link href="/">Home</Link>
              </li>
              <li className="my-2 text-lg hover:text-gray-300 transition-all duration-300">
                <Link href="/">About Us</Link>
              </li>
              <li className="my-2 text-lg hover:text-gray-300 transition-all duration-300">
                <Link href="/contact">Contact us</Link>
              </li>
              {/* <li className="my-2 text-lg hover:text-gray-300 transition-all duration-300">
                <Link href="/portfolio">Portfolio</Link>
              </li> */}
            </ul>
          </div>

          <div className="mx-auto text-center md:text-start sm:text-center">
            <h3 className="text-2xl font-medium mb-6">Get In Touch</h3>
            <ul>
              <li className="my-2 hover:text-gray-300 transition-all duration-300">
                <a
                  className="text-base flex items-center justify-center md:justify-start gap-2"
                  href="tel:+918451951123"
                >
                  <FaPhoneSquareAlt className="text-xl" /> +91-8451951123
                </a>
              </li>
              <li className="my-2 hover:text-gray-300 transition-all duration-300">
                <a
                  className="text-base flex items-center justify-center md:justify-start gap-2"
                  href="mailto:socialpulse23@gmail.com"
                >
                  <FaEnvelope className="text-xl" /> socialpulse23@gmail.com
                </a>
              </li>
              <li className="mt-8">
                <ul className="flex justify-center gap-6 md:gap-6 items-center">
                  <li>
                    <a
                      className="flex items-center justify-center w-10 h-10 text-xl rounded-full border border-white transition-all duration-300 hover:bg-gradient-to-r from-purple-500 to-indigo-500"
                      href="https://www.facebook.com/profile.php?id=61553120560771&mibextid=ZbWKwL"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook className="w-5 h-5 text-white" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center justify-center w-10 h-10 text-xl rounded-full border border-white transition-all duration-300 hover:bg-gradient-to-r from-purple-500 to-indigo-500"
                      href="https://www.threads.net/@socialpulseagency.in"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaThreads className="w-5 h-5 text-white" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center justify-center w-10 h-10 text-xl rounded-full border border-white transition-all duration-300 hover:bg-gradient-to-r from-purple-500 to-indigo-500"
                      href="https://www.instagram.com/socialpulseagency.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="w-5 h-5 text-white" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center justify-center w-10 h-10 text-xl rounded-full border border-white transition-all duration-300 hover:bg-gradient-to-r from-purple-500 to-indigo-500"
                      href="https://www.linkedin.com/company/social-pulse-agency/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn className="w-5 h-5 text-white" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center justify-center w-10 h-10 text-xl rounded-full border border-white transition-all duration-300 hover:bg-gradient-to-r from-purple-500 to-indigo-500"
                      href="https://www.youtube.com/@SocialPulse23"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaYoutube className="w-5 h-5 text-white" />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center py-6 mt-4 md:mt-8 lg:mt-12 mb-0 border-t border-white pt-6">
        <p className="text-sm">
          © Copyright{" "}
          <a
            href="#"
            className="hover:text-gray-300 transition-all duration-300"
          >
            Socialpulse.in
          </a>{" "}
          2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

// import Link from "next/link";
// import { FaEnvelope } from "react-icons/fa6";
// import { FaFacebook } from "react-icons/fa6";
// // import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
// import { FaThreads } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa6";
// import { FaLinkedinIn } from "react-icons/fa6";
// import { FaPhoneSquareAlt } from "react-icons/fa";
// import Image from "next/image";
// // import image from "../Images/image";

// const Footer = () => {
//   return (
//     <footer className="pt-12 relative bg-black text-white">
//       <div className="mx-auto max-w-7xl p-6 lg:px-8">
//         <div className="flex justify-between items-center md:items-start gap-y-8 flex-col sm:flex-row text-center md:text-start border-t border-white pt-6">
//           <div className="flex-1">
//             <h2 className="text-2xl md:text-3xl font-medium">
//               Interested To Get Our Featured Service
//             </h2>
//           </div>
//           <div>
//             <a href="tel:+918451951123">
//               <button className="primary-btn shadow-lg">Call us Now</button>
//             </a>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-4 gap-y-8 pt-20">
//           <div className="lg:pr-8 text-center md:text-start">
//             <Image
//               src="/logo/logo3.png"
//               alt="WebDev"
//               className="mx-auto md:mx-0"
//               width={80}
//               height={40}
//             />
//             <p className="text-base mt-4 hover:text-gray-300 transition-all duration-300">
//               We&apos;re Social Pulse, a digital marketing agency fueled by
//               passion and powered by expertise. We craft magnetic campaigns and
//               data-driven strategies to amplify your brand voice and ignite
//               growth.
//             </p>
//           </div>
//           <div className="mx-auto text-center md:text-start">
//             <div>
//               <h3 className="text-xl font-medium mb-6">Quick Links</h3>
//             </div>
//             <ul className="list-disc list-inside">
//               <li className="my-2 text-sm hover:text-gray-300 transition-all duration-300">
//                 <Link href="/">Home</Link>
//               </li>
//               <li className="my-2 text-sm hover:text-gray-300 transition-all duration-300">
//                 <Link href="/about">About Us</Link>
//               </li>
//               <li className="my-2 text-sm hover:text-gray-300 transition-all duration-300">
//                 <Link href="/contact">Contact us</Link>
//               </li>
//               {/* <li className="my-2 text-sm hover:text-gray-300 transition-all duration-300">
//                 <Link href="/portfolio">Portfolio</Link>
//               </li> */}
//             </ul>
//           </div>

//           <div className="mx-auto text-center md:text-start">
//             <div>
//               <div className="pb-50 animate get-bottom">
//                 <h3 className="text-capital text-2xl font-medium mb-6">
//                   Get In Touch
//                 </h3>
//               </div>
//               <ul>
//                 <li className="my-2 hover:text-gray-300 transitio   n-all duration-300">
//                   <a
//                     className="text-m flex items-center justify-center md:justify-start gap-2"
//                     href="tel:1234567890"
//                   >
//                     <FaPhoneSquareAlt /> +91-8451951123
//                   </a>
//                 </li>
//                 <li className="my-2 hover:text-gray-300 transition-all duration-300">
//                   <a
//                     className="text-sm flex items-center justify-center md:justify-start gap-2"
//                     href="mailto:webdevstudio1@gmail.com"
//                   >
//                     <FaEnvelope /> socialpulse23@gmail.com
//                   </a>
//                 </li>
//                 <li className="mt-8">
//                   <ul className="flex justify-start gap-4 items-center">
//                     <li className="social">
//                       <a
//                         className="social-icon"
//                         href="https://www.facebook.com/profile.php?id=61553120560771&mibextid=ZbWKwL"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <FaFacebook />
//                       </a>
//                     </li>
//                     <li className="social">
//                       <a
//                         className="social-icon"
//                         href="https://www.threads.net/@socialpulseagency.in"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <FaThreads />
//                       </a>
//                     </li>
//                     <li className="social">
//                       <a
//                         className="social-icon"
//                         href="https://www.instagram.com/socialpulseagency.in/"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <FaInstagram />
//                       </a>
//                     </li>
//                     <li className="social">
//                       <a
//                         className="social-icon"
//                         href="https://www.linkedin.com/company/social-pulse-agency/"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <FaLinkedinIn />
//                       </a>
//                     </li>
//                   </ul>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="text-center py-6 mt-4 md:mt-8 lg:mt-12 mb-[4.5rem] md:mb-0 border-t border-white pt-6">
//         <p className="text-sm">
//           © Copyright <a href="#">Socialpulse.in</a> 2024. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
