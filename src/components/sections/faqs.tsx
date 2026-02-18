"use client";

import React, { useState } from "react";
import { Plus, X, ArrowRight } from "lucide-react";
import Image from "next/image";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How much time do I need each week?",
    answer: "A digital one-stop shop offering premium Framer & Figma templates, resources, and digital designs. Specializing in web design, we deliver stunning and functional UI/UX solutions for B2B and B2C brands looking to make a lasting impact."
  },
  {
    question: "Do I need a tech or coding background?",
    answer: "No technical background is required. The course is designed to take you from a complete beginner to a proficient prompt engineer using accessible, high-level AI tools that don't require writing code."
  },
  {
    question: "What makes this better than free tutorials?",
    answer: "While YouTube offers fragments, we provide a structured methodology. You're not just learning tools; you're learning a strategic workflow that has been tested in enterprise environments for maximum productivity."
  },
  {
    question: "Can I take a break if life gets busy?",
    answer: "Absolutely. You get lifetime access to all course materials. You can move through the modules at your own pace and return to them whenever you need a refresher."
  },
  {
    question: "Will I get all course updates for free?",
    answer: "Yes! The AI landscape moves fast. When we add new modules, update strategy guides, or release new prompt libraries, you'll get immediate access at no extra cost."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faqs" 
      className="bg-[#0a0a0a] text-white py-[120px] px-5 relative overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
        backgroundSize: "40px 40px"
      }}
    >
      <div className="container max-w-[800px] mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="text-[#a1a1a1] uppercase tracking-[0.2em] text-sm font-semibold mb-4">FAQ</p>
          <div className="flex justify-center gap-4 relative mb-4">
            {/* These are the subtle diamond shapes seen in the background grid of the FAQ section */}
            <div className="absolute top-0 left-[-100px] w-3 h-3 bg-[#1a1a1a] transform rotate-45 border border-[#262626]"></div>
            <div className="absolute top-20 right-[-140px] w-3 h-3 bg-[#1a1a1a] transform rotate-45 border border-[#262626]"></div>
          </div>
        </div>

        {/* Accordion Container */}
        <div className="w-full space-y-2">
          {faqData.map((item, index) => (
            <div 
              key={index}
              className="border border-[#262626] rounded-xl overflow-hidden bg-[#141414] transition-all duration-300"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#1a1a1a] transition-colors focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg md:text-xl font-medium text-[#ffffff]">
                  {item.question}
                </span>
                <div className="flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <div className="w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center">
                      <X className="w-4 h-4 text-[#a1a1a1]" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center">
                      <Plus className="w-4 h-4 text-[#a1a1a1]" />
                    </div>
                  )}
                </div>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out px-6 overflow-hidden ${
                  openIndex === index ? "max-height-[500px] pb-6 opacity-100" : "max-height-0 opacity-0"
                }`}
                style={{
                  maxHeight: openIndex === index ? "500px" : "0px",
                }}
              >
                <p className="text-[#a1a1a1] leading-relaxed text-[16px] md:text-[18px]">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-white max-w-[400px] mx-auto">
            Still got questions? Reach out, we&apos;re here to help
          </h3>
          <a 
            href="mailto:help@aiuni.com"
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-[#FF7A00] to-[#FF9533] px-8 py-4 rounded-full text-white font-bold text-lg hover:opacity-90 transition-all duration-300"
          >
            Reach out to us
            <div className="bg-white rounded-full p-1 ml-1 group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4 text-[#FF7A00]" />
            </div>
          </a>
        </div>
      </div>

      {/* Subtle bottom divider for the page sectioning */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#262626] to-transparent"></div>
    </section>
  );
}