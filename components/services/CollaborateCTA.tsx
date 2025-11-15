"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function CollaborateCTA() {
  const router = useRouter();

  const handleCollaborate = () => {
    router.push("/contact");
  };

  return (
    <section
      id="collaborate-section"
      className="relative bg-black text-white py-20 px-6 md:px-12 flex justify-center items-center overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl w-full rounded-[3rem] flex flex-col md:flex-row justify-between items-center p-10 md:p-16 
        bg-gradient-to-br from-[#8103FF] to-[#b34dff]"
      >
        {/* Left section */}
        <div className="text-left mb-10 md:mb-0">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Make The Move</h2>
          <button
            onClick={handleCollaborate}
            className="border border-[#00E5FF] text-white px-8 py-4 rounded-lg text-sm font-semibold tracking-widest hover:bg-[#00E5FF] hover:text-black transition-all duration-300"
          >
            LET&apos;S COLLABORATE
          </button>
        </div>

        {/* Right section */}
        <div className="text-center md:text-left max-w-md">
          <h3 className="text-[#00E5FF] font-bold mb-4 text-lg uppercase">
            Reach Out
          </h3>
          <p className="text-lg leading-relaxed text-gray-200">
            If you’re looking for a holistic agency to work on your big dream,
            just say the magic words!
          </p>
        </div>
      </motion.div>
    </section>
  );
}
