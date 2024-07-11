"use client";

import Image from "next/image";
import React from "react";

export function ThreeDCardExample() {
  return (
    <div className="relative group w-auto sm:w-[40rem] md:w-[50rem] lg:w-[20rem] h-auto rounded-xl p-6 border bg-gradient-to-b from-[#171717] via-[#1E1E1E] to-[#171717] dark:border-white/[0.2] border-black/[0.1] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
      <div className="w-full transform transition-transform duration-500 group-hover:translate-z-10">
        <Image
          src="/images/founder-img-small.jpg"
          height="1500"
          width="1500"
          className="h-60 md:h-80 lg:h-96 w-full object-cover rounded-xl mb-2"
          alt="thumbnail"
        />
        {/* <div className="text-center mt-2 text-lg font-bold text-neutral-300">
          Founder - Rishabh Mishra
        </div> */}
      </div>
    </div>
  );
}

// "use client";

// import Image from "next/image";
// import React from "react";
// import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

// export function ThreeDCardExample() {
//   return (
//     <CardContainer className="inter-var">
//       <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
//         <CardItem
//           translateZ="50"
//           className="text-xl font-bold text-neutral-600 dark:text-white"
//         >
//           Make things float in air
//         </CardItem>
//         <CardItem
//           as="p"
//           translateZ="60"
//           className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
//         >
//           Hover over this card to unleash the power of CSS perspective
//         </CardItem>
//         <CardItem translateZ="100" className="w-full mt-4">
//           <Image
//             src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             height="1000"
//             width="1000"
//             className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
//             alt="thumbnail"
//           />
//         </CardItem>
//         <div className="flex justify-between items-center mt-20">
//           <CardItem
//             translateZ={20}
//             as="button"
//             className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
//           >
//             Try now →
//           </CardItem>
//           <CardItem
//             translateZ={20}
//             as="button"
//             className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
//           >
//             Sign up
//           </CardItem>
//         </div>
//       </CardBody>
//     </CardContainer>
//   );
// }
