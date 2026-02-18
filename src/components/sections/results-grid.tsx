"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

function useCountUp(target: number, inView: boolean, duration = 1800) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const iv = setInterval(() => {
      start += step;
      if (start >= target) { setValue(target); clearInterval(iv); }
      else setValue(Math.floor(start));
    }, 16);
    return () => clearInterval(iv);
  }, [inView, target, duration]);
  return value;
}

const resultsData = [
  { icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/nbF8E6vj0W01XalsJDmeBX1qhCA-15.svg", metric: "10+", suffix: " Hours Saved Weekly", description: "On average, students reclaim a full workday using AI-powered workflows.", target: 10 },
  { icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/SX4jbFogH7FuJomOuJFbLrZFs-16.svg", metric: "88%", suffix: " Career Acceleration", description: "Graduates report promotions, raises, or new opportunities within 3 months.", target: 88 },
  { icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/22goEz9gsdxvFQOgJsQm2yapQs-17.svg", metric: "4.9", suffix: "/5 Course Rating", description: "Consistently rated \"Excellent\" across thousands of verified reviews.", target: 49, decimal: true },
  { icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/d6m9TA9VJcWC81A5Cd463zkR1E-18.svg", metric: "92%", suffix: " Course Completion Rate", description: "This industry-leading completion rate is a testament to our engaging.", target: 92 },
  { icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/87X2pajaYeK2WqDYNyghvROswl0-19.svg", metric: "88%", suffix: " Career Acceleration", description: "Graduates report promotions, raises, or new opportunities within 3 months.", target: 88 },
  { icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/JM2Xea24TJbYdSTCkNEyA8Kbas-20.svg", metric: "5+", suffix: " Portfolio-Ready Projects", description: "Graduate with a professional portfolio of over 5 completed projects.", target: 5 },
];

function ResultCard({ item, index, inView }: { item: typeof resultsData[0]; index: number; inView: boolean }) {
  const count = useCountUp(item.target, inView, 1600 + index * 100);
  const display = item.decimal ? (count / 10).toFixed(1) : count;
  const symbol = item.metric.includes("+") ? "+" : item.metric.includes("%") ? "%" : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ backgroundColor: "rgba(255,122,0,0.03)", transition: { duration: 0.2 } }}
      className={`p-10 flex flex-col items-center text-center border-[#E8E8E8]
        ${index < 3 ? "border-b" : ""}
        ${(index + 1) % 3 !== 0 ? "border-r" : ""}
      `}
    >
      <motion.div
        className="w-[44px] h-[44px] mb-6 flex items-center justify-center"
        whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
      >
        <Image src={item.icon} alt={item.metric} width={44} height={44} className="object-contain" />
      </motion.div>
      <h3 className="text-[20px] font-bold text-[#1A1A1A] mb-4 tabular-nums">
        {display}{symbol}{item.suffix.replace(/^\d+[+%]/, "")}
      </h3>
      <p className="text-[14px] leading-[1.6] text-[#A1A1A1] max-w-[280px]">{item.description}</p>
    </motion.div>
  );
}

export default function ResultsGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#F2F1EE] py-[120px] px-5 flex flex-col items-center">
      <div ref={ref} className="max-w-[1200px] w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-[60px] relative"
        >
          <p className="text-[14px] font-medium text-[#1A1A1A] mb-4 uppercase tracking-wider">Why choose us?</p>
          <h2 className="text-[48px] font-bold leading-[1.2] text-[#1A1A1A] max-w-[600px] mx-auto">
            The <span className="text-[#FF7A00]">Results</span> Speak for Themselves
          </h2>
          <div className="absolute right-[10%] top-[70%] hidden lg:block">
            <div className="flex flex-col items-center -rotate-12 translate-y-4 translate-x-12">
              <span className="font-['Inter'] text-[14px] text-[#1A1A1A] opacity-70 mb-1 leading-none uppercase italic">
                This can be you
              </span>
              <svg width="40" height="25" viewBox="0 0 40 25" fill="none" className="opacity-40">
                <path d="M5 5C5 5 15 20 35 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M30 10L35 15L30 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white/40 rounded-[24px] overflow-hidden border border-[#E8E8E8]">
          {resultsData.map((item, index) => (
            <ResultCard key={index} item={item} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
