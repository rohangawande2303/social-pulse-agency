"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ } from "../../app/data/services";

interface ServiceFAQProps {
  title: string;
  faqs: FAQ[];
}

export default function ServiceFAQ({ title, faqs }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate JSON-LD Schema
  // const faqSchema = {
  //   "@context": "https://schema.org",
  //   "@type": "FAQPage",
  //   "mainEntity": faqs.map((faq) => ({
  //     "@type": "Question",
  //     "name": faq.question,
  //     "acceptedAnswer": {
  //       "@type": "Answer",
  //       "text": faq.answer,
  //     },
  //   })),
  // };

  return (
    <section className="py-24 bg-[#111] text-white">
      {/* Inject JSON-LD Schema here */}
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      /> */}

      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-[#1a1a1a] rounded-3xl p-12 md:p-16 flex flex-col md:flex-row gap-16">
          {/* Left Side Heading */}
          <div className="md:w-1/3 border-r border-white/10 pr-0 md:pr-10">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8103FF] to-[#b34dff] text-sm font-semibold tracking-wide uppercase">
              FAQs
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
              {title}
            </h2>
          </div>

          {/* Right Side FAQs */}
          <div className="md:w-2/3 space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-white/10 pb-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left group"
                  aria-expanded={openIndex === index}
                >
                  {/* Question text */}
                  <h3
                    className={`text-lg md:text-xl font-medium transition-colors ${
                      openIndex === index
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-[#8103FF] to-[#b34dff]"
                        : "text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#8103FF] group-hover:to-[#b34dff]"
                    }`}
                  >
                    {faq.question}
                  </h3>

                  {/* Chevron Icon */}
                  <ChevronDown
                    className={`w-6 h-6 transition-transform duration-300 ${
                      openIndex === index
                        ? "rotate-180 text-transparent bg-clip-text bg-gradient-to-r from-[#8103FF] to-[#b34dff]"
                        : "text-gray-400 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#8103FF] group-hover:to-[#b34dff]"
                    }`}
                  />
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="text-gray-300 mt-3 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
