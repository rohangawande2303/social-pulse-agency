/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import { ThreeDCardExample } from "./snippets/3d-card-snippet";

const GraphicDesign = () => {
  return (
    <div className="p-4 mx-auto relative z-10 w-full pt-20 md:pt-24 bg-gradient-to-b from-[#171717] via-[#1E1E1E] to-[#171717]">
      <div className="text-4xl md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-[#8103FF] to-sky-200 bg-opacity-50">
        About Us <br />
      </div>

      <div className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto">
        We Build Brands that Captivate: Meet the Visionary Behind It All
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center mt-10 md:space-x-1 pb-24">
        {/* Reduced spacing */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-full md:w-1/3 flex flex-col items-center justify-center"
        >
          <ThreeDCardExample />
          <div className="text-lg md:text-2xl font-bold text-neutral-300 text-center pt-8">
            Founder - Rishabh Mishra
          </div>
        </motion.div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex flex-col justify-center">
          <div className="text-l md:text-xl text-neutral-300 text-center md:text-left md:pb-12">
            Rishabh Mishra, our founder, has always been passionate about the
            power of visual storytelling. With a keen eye for design and a deep
            understanding of branding principles, he established Social Pulse
            Agency to empower businesses to connect with their audience through
            impactful visuals. Our team of passionate creatives, led by Rishabh
            Mishra's vision, brings that passion to life every day.{" "}
          </div>
          <br />

          <div className="text-l md:text-xl text-neutral-300 text-center md:text-left">
            We're Social Pulse, a digital marketing agency fueled by passion and
            powered by expertise. We craft magnetic campaigns and data-driven
            strategies to amplify your brand voice and ignite growth. Think of
            us as your secret weapon in the ever-evolving digital jungle.
          </div>
          <div className="text-l md:text-xl text-neutral-300 text-center md:text-left mt-4">
            Ready to conquer the online world? Let&apos;s chat!
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesign;

// "use client";

// import { motion } from "framer-motion";
// import { ThreeDCardExample } from "./snippets/3d-card-snippet";
// import { EvervaultCardSnippet } from "./snippets/evervault-card-snippet";

// const GraphicDesign = () => {
//   return (
//     <div>
//       <div className=" p-4   mx-auto relative z-10  w-full pt-20 md:pt-32">
//         <div className="text-4xl md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
//           About Us <br />
//         </div>

//         <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto">
//           We create stunning visuals for your brand. From logos to social media
//           posts, we&apos;ve got you covered.
//         </p>
//         <div className="items-center md:flex justify-center md:mx-auto md:space-x-10">
//           <motion.div
//             initial={{ y: 100, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             className="px-10 md:px-0"
//           >
//             <ThreeDCardExample />
//           </motion.div>

//           {/* <motion.div
//             initial={{ y: 100, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             className="px-10 md:px-0"
//           >
//             <EvervaultCardSnippet />
//           </motion.div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GraphicDesign;
