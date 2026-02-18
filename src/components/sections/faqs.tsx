"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Plus, X, ArrowRight } from "lucide-react";

const faqData = [
  { question: "How much time do I need each week?", answer: "The curriculum is designed to fit into a busy professional's schedule. Most students spend 3-4 hours per week and complete all coursework within the 6-week window, though you can move faster or slower as needed." },
  { question: "Do I need a tech or coding background?", answer: "No technical background is required. The course is designed to take you from a complete beginner to a proficient prompt engineer using accessible, high-level AI tools that don't require writing code." },
  { question: "What makes this better than free tutorials?", answer: "While YouTube offers fragments, we provide a structured methodology. You're not just learning tools; you're learning a strategic workflow that has been tested in enterprise environments for maximum productivity." },
  { question: "Can I take a break if life gets busy?", answer: "Absolutely. You get lifetime access to all course materials. You can move through the modules at your own pace and return to them whenever you need a refresher." },
  { question: "Will I get all course updates for free?", answer: "Yes! The AI landscape moves fast. When we add new modules, update strategy guides, or release new prompt libraries, you'll get immediate access at no extra cost." },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="faqs"
      ref={ref}
      className="bg-[#0a0a0a] text-white py-[120px] px-5 relative overflow-hidden"
      style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px" }}
    >
      <div className="container max-w-[800px] mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-12 text-center"
        >
          <p className="text-[#a1a1a1] uppercase tracking-[0.2em] text-sm font-semibold mb-4">FAQ</p>
          <h2 className="text-[48px] md:text-[56px] font-bold leading-[1.1] tracking-tight">
            Got Questions? <span className="text-[#FF7A00]">We've got answers.</span>
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="w-full space-y-2">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              className="border border-[#262626] rounded-xl overflow-hidden bg-[#141414]"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#1a1a1a] transition-colors focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg md:text-xl font-medium text-white">{item.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.25, ease: [0.34, 1.56, 0.64, 1] }}
                  className="flex-shrink-0 ml-4 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center"
                >
                  <Plus className="w-4 h-4 text-[#a1a1a1]" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-[#a1a1a1] leading-relaxed text-[16px] md:text-[18px]">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-white max-w-[400px] mx-auto">
            Still got questions? Reach out, we&apos;re here to help
          </h3>
          <motion.a
            href="mailto:help@aiuni.com"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-[#FF7A00] to-[#FF9533] px-8 py-4 rounded-full text-white font-bold text-lg"
          >
            Reach out to us
            <div className="bg-white rounded-full p-1 ml-1 group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4 text-[#FF7A00]" />
            </div>
          </motion.a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#262626] to-transparent" />
    </section>
  );
}
