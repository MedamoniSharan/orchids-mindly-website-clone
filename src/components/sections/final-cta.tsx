"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const FinalCTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const assets = {
    rocket: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/images/gBNnLLcg2lZdZQwBmwU0fuE44-11.png",
    folder: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/images/5RNFFX0cPakafg9WfAsXvGnX9jw-13.png",
    handshake: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/images/kBF4YAuHs3L8X3pme9TxgGme5E-14.png",
    code: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/images/IdIdxExRKEeAESwBLqg5FOIZFo-16.png",
    arrowIcon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/U0c022TYy3iR6YjbwbyxOaDRsk-2.svg",
    studentHeadshots: [
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/images/GvIIYiCvs1fSYrsqT9kkYqRv4Y-1.jpg",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/images/LS4ISV3lMw5erPxQJs6QzAYUmU-2.jpg",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/images/km3kZvwQj1ex1UnSfYsIR0bRQ-3.png",
    ],
  };

  const aiCompanies = [
    { name: "Bitwise", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/Z4y4TQ4ejKbn3HDwLe8GNO2Q-14.svg" },
    { name: "LogiTech", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/BtfMCqbG1GWtBBbWDm9pfxeIE-12.svg" },
    { name: "BluePeak", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/0bzchfERxFoGInLFw778Fb5RW0-6.svg" },
    { name: "IronLeaf", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/A4bseyvNz1Cnuy5avzZIHnklUso-5.svg" },
    { name: "BuildPro", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/uF2M5DGlba8g1a4tyRQ7KFRlgY4-13.svg" },
  ];

  const floatingIcons = [
    { src: assets.folder, style: "top-[10%] left-[-20px]", delay: 0 },
    { src: assets.handshake, style: "top-[10%] right-[-20px]", delay: 0.5 },
    { src: assets.rocket, style: "bottom-[20%] left-[5%]", delay: 1 },
    { src: assets.code, style: "bottom-[20%] right-[5%]", delay: 1.5 },
  ];

  return (
    <section ref={ref} className="relative w-full bg-[#0a0a0a] overflow-hidden py-[120px]">
      {/* Perspective Grid */}
      <div
        className="absolute inset-x-0 top-0 h-full pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          transform: "perspective(1000px) rotateX(60deg) scale(2)",
          transformOrigin: "top",
        }}
      />

      <div className="container relative z-10 mx-auto px-5 flex flex-col items-center">
        {/* Floating icons */}
        <div className="absolute w-full max-w-[1000px] h-[300px] pointer-events-none hidden md:block">
          {floatingIcons.map((icon, i) => (
            <motion.div
              key={i}
              className={`absolute ${icon.style}`}
              animate={{ y: [0, -14, 0], rotate: [0, i % 2 === 0 ? 5 : -5, 0] }}
              transition={{ duration: 3.5 + i * 0.5, delay: icon.delay, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image src={icon.src} alt="" width={64} height={64} />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[#a1a1a1] uppercase tracking-[0.1em] text-[14px] font-medium mb-6"
        >
          Registrations Ongoing!
        </motion.p>

        {/* Avatars */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 200 }}
          className="flex -space-x-3 mb-8"
        >
          {assets.studentHeadshots.map((src, i) => (
            <div key={i} className="w-12 h-12 rounded-full border-2 border-[#1a1a1a] overflow-hidden">
              <Image src={src} alt="student" width={48} height={48} className="object-cover" />
            </div>
          ))}
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-center text-white text-[48px] md:text-[64px] font-extrabold leading-[1.1] mb-6 max-w-[900px]"
        >
          Enroll Now & Get <span className="text-[#ff7a00]">Instant Access</span> for $497
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-[#a1a1a1] text-center text-lg max-w-[600px] mb-12"
        >
          Graduates report promotions, raises, or new opportunities within 3 months.
        </motion.p>

        {/* CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center gap-6 mb-20"
        >
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#ff7a00] to-[#ff9533] rounded-full shadow-[0_0_30px_rgba(255,122,0,0.3)] group"
          >
            <span className="text-white font-bold text-lg">Enroll Today - Save $169</span>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1">
              <Image src={assets.arrowIcon} alt="arrow" width={16} height={14} />
            </div>
          </motion.a>

          <div className="flex items-center gap-3">
            <svg width="45" height="25" viewBox="0 0 45 25" fill="none" className="rotate-[-10deg]">
              <path d="M1 24C6.5 18 15 2 44 1M44 1L38 4M44 1L41 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-white font-normal text-[14px] italic opacity-80 uppercase tracking-tight max-w-[150px] leading-tight">
              2k+ professionals are already ahead of you
            </span>
          </div>
        </motion.div>

        {/* Perks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-white/10 pt-16 w-full max-w-[900px]"
        >
          {[
            { icon: <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />, label: "6 Weeks of Career-Oriented Training" },
            { icon: <><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></>, label: "Learn by Doing, Not Watching" },
            { icon: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>, label: "Lifetime Access with All Future Updates" },
          ].map((perk, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="mb-4 text-[#ff7a00]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{perk.icon}</svg>
              </div>
              <h4 className="text-white font-semibold text-lg">{perk.label}</h4>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="mt-24 border-t border-white/5 pt-12 overflow-hidden bg-white/[0.02]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[...aiCompanies, ...aiCompanies, ...aiCompanies, ...aiCompanies].map((company, i) => (
            <div key={i} className="flex items-center gap-2 mx-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
              <Image src={company.url} alt={company.name} width={24} height={24} />
              <span className="text-white font-bold text-xl tracking-tight">{company.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
