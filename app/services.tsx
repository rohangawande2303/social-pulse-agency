"use client";

import { CardHoverEffectDemo } from "./snippets/card-hover-effect-snippet";

const Services = () => {
  return (
    <div className="max-w-5xl mx-auto py-20">
      <div
        className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-[#8103FF] to-neutral-50 bg-opacity-50 mt-20"
      >
        Streamline your business with our services
      </div>
      <p
        className="mt-4 text-lg font-normal
          text-neutral-300 max-w-lg 
          text-center mx-auto"
      >
        Social Pulse is your one-stop shop for growing your business online. We
        offer these powerful tools:
      </p>

      <CardHoverEffectDemo />
    </div>
  );
};

export default Services;

// "use client";

// import { CardHoverEffectDemo } from "./snippets/card-hover-effect-snippet";

// const Services = () => {
//   return (
//     <div className="max-w-5xl mx-auto py-20">
//       <div
//         className="text-4xl pb-5 md:text-7xl text-center
//          bg-clip-text text-transparent bg-gradient-to-b
//           from-blue-500 to-neutral-50 bg-opacity-50 mt-20"
//       >
//         Streamline your business with our services
//       </div>
//       <p
//         className="mt-4 text-lg font-normal
//           text-neutral-300 max-w-lg
//           text-center mx-auto"
//       >
//         Social Pulse is your one-stop shop for growing your business online. We
//         offer these powerful tools:
//       </p>

//       <CardHoverEffectDemo />
//     </div>
//   );
// };

// export default Services;
