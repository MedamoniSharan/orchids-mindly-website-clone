"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Plus, Check, ArrowRight } from "lucide-react";

interface Week {
  id: string;
  number: string;
  title: string;
  content: string;
}

const weeks: Week[] = [
  { id: "01", number: "Week 01", title: "The Generative AI Landscape", content: "Master the macro view of the AI revolution and how to position yourself strategically." },
  { id: "02", number: "Week 02", title: "The Anatomy of a Perfect Prompt", content: "Learn the foundational structure that forces AI to give you high-quality outputs every single time." },
  { id: "03", number: "Week 03", title: "Advanced Prompting Techniques", content: "Deep dive into chain-of-thought, few-shot, and role-based prompting systems." },
  { id: "04", number: "Week 04", title: "AI for Creativity & Content", content: "How to use AI to generate ideas, write copy, and create visual assets without losing your voice." },
  { id: "05", number: "Week 05", title: "AI for Productivity & Workflow", content: "Automate repetitive tasks and save 10+ hours a week by integrating AI into your daily schedule." },
  { id: "06", number: "Week 06", title: "The Responsible AI Operator", content: "Understanding ethics, security, and how to stay relevant as the technology continues to evolve." },
];

const partners = [
  { name: "LogiTech", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/BtfMCqbG1GWtBBbWDm9pfxeIE-12.svg" },
  { name: "BuildPro", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/uF2M5DGlba8g1a4tyRQ7KFRlgY4-13.svg" },
  { name: "Bitwise", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/Z4y4TQ4ejKbn3HDwLe8GNO2Q-14.svg" },
];

export default function CurriculumSection() {
  const [openWeek, setOpenWeek] = useState<string | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const toggleWeek = (id: string) => setOpenWeek(openWeek === id ? null : id);

  return (
    <section id="curriculum" className="relative py-[120px] bg-[#F2F0E9] text-[#1A1A1A] overflow-hidden">
      <div ref={ref} className="container mx-auto px-5 max-w-[1200px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-[60px]"
        >
          <p className="text-[#A1A1A1] text-[14px] font-medium uppercase tracking-wider mb-4">Curriculum Overview</p>
          <h2 className="text-[48px] md:text-[56px] font-bold leading-[1.1] tracking-tight">
            Unlock the secret sauce <br />
            behind <span className="text-[#FF7A00]">world-class products.</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {weeks.map((week, i) => (
              <motion.div
                key={week.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="bg-white rounded-[16px] border border-[#E8E8E8] overflow-hidden"
              >
                <button
                  onClick={() => toggleWeek(week.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#FAF9F6] transition-colors"
                >
                  <div className="flex flex-col">
                    <span className="text-[18px] font-semibold text-[#1A1A1A]">{week.title}</span>
                    <span className="text-[14px] text-[#A1A1A1] mt-1">{week.number}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: openWeek === week.id ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: [0.34, 1.56, 0.64, 1] }}
                    className="p-2 rounded-full border border-[#E8E8E8] flex-shrink-0"
                  >
                    <Plus className="w-5 h-5 text-[#1A1A1A]" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openWeek === week.id && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-[#A1A1A1] text-[16px] leading-relaxed">{week.content}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Join Today Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="bg-[#0A0A0A] rounded-[24px] p-8 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-[-20%] right-[-20%] w-[200px] h-[200px] bg-[#FF7A00] opacity-20 blur-[80px]" />
              <div className="relative z-10">
                <div className="inline-block bg-[#FF7A00] px-3 py-1 rounded-full text-[12px] font-bold mb-6">
                  30 day money back guarantee
                </div>
                <h3 className="text-[32px] font-bold mb-8">Join Mindly Today</h3>
                <div className="grid grid-cols-2 gap-y-6 mb-10">
                  {["Beginner Friendly", "Completion Certificate", "21 Hours", "Full lifetime access"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="p-2 bg-[#1A1A1A] rounded-lg">
                        <Plus className="w-4 h-4 text-[#FF7A00]" />
                      </div>
                      <span className="text-[14px]">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-[#262626] pt-8 mb-8">
                  <p className="text-[12px] font-bold uppercase tracking-wider text-[#A1A1A1] mb-6">A quick overview of the course</p>
                  <ul className="space-y-4">
                    {["Instant access to the full 6-week curriculum", "All future updates and bonus content included", "Weekly live workshops", "1 on 1 Mentorship"].map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + i * 0.08 }}
                        className="flex items-center gap-3 text-[15px]"
                      >
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#1A1A1A] flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <motion.a
                  href="#pricing"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-between bg-[#FF7A00] hover:bg-[#FF9533] p-4 rounded-full font-bold text-white transition-colors group"
                >
                  <span className="ml-4">Enroll now for $499</span>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-transform group-hover:translate-x-1">
                    <ArrowRight className="w-5 h-5 text-[#FF7A00]" />
                  </div>
                </motion.a>
              </div>
              <div className="absolute top-10 right-10 rotate-12">
                <div className="bg-[#1A1A1A] border border-[#262626] p-2 rounded-lg flex items-center gap-2">
                  <div className="w-3 h-3 text-[#FF7A00]">✦</div>
                  <span className="text-[10px] font-bold tracking-widest">AI</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 pt-10 border-t border-dashed border-[#E8E8E8]"
        >
          <p className="text-center text-[#A1A1A1] text-[14px] font-medium mb-12">Curriculum partners</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {[...partners, ...partners].map((partner, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <img src={partner.url} alt={partner.name} className="h-6 w-auto" />
                <span className="text-[18px] font-semibold text-[#1A1A1A]">{partner.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
