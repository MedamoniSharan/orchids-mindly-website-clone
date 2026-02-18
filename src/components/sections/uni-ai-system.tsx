"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const roleTagVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.3 + i * 0.15, ease: [0.34, 1.56, 0.64, 1] },
  }),
};

const featureVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, delay: 0.2 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const UniAISystem = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const roles = [
    {
      avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/images/woxoSz29mBOKNIqopNqDkmkIw-6.png",
      label: "AI Content Strategist",
      opacity: 1,
    },
    { avatar: null, label: "Prompt Engineer", opacity: 1 },
    { avatar: null, label: "AI Consultant", opacity: 0.5 },
  ];

  const features = [
    {
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/9S25YVWy1OmIexcbeYdBHQo4w3g-10.svg",
      label: "Prompt Library",
      text: "Save 10+ Hours a Week with our Prompt Library of 200+ copy-paste-ready commands.",
    },
    {
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/1MauLwmR6iIXjyzXmZQhtMk4O0-11.svg",
      label: "Advanced Methods",
      text: "Master Advanced Techniques that 99% of users don't know, giving you a powerful competitive edge.",
    },
    {
      icon: null,
      label: "Strategic Output",
      text: "Deliver Higher Quality Work by learning to use AI for deep strategic thinking, not just surface-level tasks.",
    },
  ];

  return (
    <section className="bg-[#0a0a0a] py-[120px] px-5 relative overflow-hidden" id="why-choose-us">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff7a0033] rounded-full blur-[120px]"
        />
      </div>

      <div ref={ref} className="container mx-auto max-w-[1200px] relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-12 flex flex-col items-center gap-4"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#1a1a1a] border border-[#262626]">
            <span className="text-[#a1a1a1] text-sm font-medium tracking-wide uppercase">Introducing Uni AI</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[48px] font-bold text-white tracking-tight leading-[1.2] max-w-2xl mx-auto">
            The A-to-Z System for <span className="text-[#ff7a00]">High-Value</span> AI Results
          </h2>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#1a1a1a] rounded-[24px] border border-[#262626] overflow-hidden p-6 lg:p-12 shadow-2xl relative"
        >
          {/* Left */}
          <div className="lg:col-span-7 flex flex-col gap-8 relative">
            <div className="flex flex-col gap-6">
              <div className="inline-block self-start px-3 py-1 rounded-md bg-[#262626] border border-[#333]">
                <span className="text-xs font-semibold text-white uppercase tracking-wider">Get Ahead</span>
              </div>
              <h3 className="text-3xl lg:text-[40px] font-bold text-white leading-[1.15] tracking-tight max-w-[500px]">
                Introducing our generative AI masterclass for all working professionals.
              </h3>
              <motion.a
                href="#pricing"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center self-start bg-gradient-to-r from-[#ff7a00] to-[#ff9533] text-white px-6 py-3.5 rounded-full font-semibold"
              >
                Enroll now for $499
                <div className="ml-3 flex items-center justify-center w-6 h-6 bg-white rounded-full">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/ElRlMCLGjqX1q3OFwuQTJ2HpsQ-9.svg"
                    width={12}
                    height={12}
                    alt="Arrow"
                    className="invert brightness-0"
                  />
                </div>
              </motion.a>
            </div>

            <p className="text-[#a1a1a1] text-lg leading-relaxed max-w-[480px]">
              Mastering prompt engineering unlocks a new wave of roles that blend creativity,
            </p>

            {/* Floating role tags */}
            <div className="flex flex-wrap gap-3 max-w-[450px]">
              {roles.map((role, i) => (
                <motion.div
                  key={i}
                  variants={roleTagVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  custom={i}
                  style={{ opacity: role.opacity }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#262626]/80 backdrop-blur-md border border-white/5"
                >
                  <div className="w-5 h-5 rounded-full overflow-hidden border border-white/10 shrink-0">
                    {role.avatar ? (
                      <Image src={role.avatar} width={20} height={20} alt="User" />
                    ) : (
                      <div className="w-full h-full bg-[#3d3d3d] flex items-center justify-center text-[10px]">👤</div>
                    )}
                  </div>
                  <span className="text-[13px] font-medium text-white/90 whitespace-nowrap">{role.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Glow */}
            <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-gradient-to-tr from-[#ff7a00]/40 to-transparent rounded-full blur-[80px] pointer-events-none" />
          </div>

          {/* Right - features */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-center">
            {features.map((feat, i) => (
              <motion.div
                key={i}
                variants={featureVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={i}
                className="flex gap-5 group"
              >
                <motion.div
                  whileHover={{ borderColor: "rgba(255,122,0,0.4)", scale: 1.05 }}
                  className="w-16 h-16 rounded-[16px] bg-[#262626] border border-[#333] flex items-center justify-center shrink-0 shadow-lg transition-colors"
                >
                  {feat.icon ? (
                    <Image src={feat.icon} width={24} height={24} alt={feat.label} />
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#FF7A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#FF7A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#FF7A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#FF7A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </motion.div>
                <div>
                  <h4 className="text-xs font-bold text-[#a1a1a1] uppercase mb-1 tracking-widest">{feat.label}</h4>
                  <p className="text-white font-medium leading-[1.4] text-lg">{feat.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UniAISystem;
