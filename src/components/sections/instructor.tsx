"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Youtube, Twitter, Linkedin, Instagram, Play } from "lucide-react";

export default function InstructorSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  const socialIcons = [
    { icon: <Youtube className="w-5 h-5" />, href: "#" },
    { icon: <Twitter className="w-4 h-4" />, href: "#" },
    { icon: <Linkedin className="w-4 h-4" />, href: "#" },
    { icon: <Instagram className="w-4 h-4" />, href: "#" },
  ];

  return (
    <section ref={ref} className="relative py-[120px] px-5 overflow-hidden bg-[#F2F1EE]">
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      />

      <div className="container relative z-10 mx-auto max-w-[1200px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-16"
        >
          <p className="text-[#A1A1A1] font-medium uppercase tracking-wider mb-4 text-[14px]">Meet Your Instructor</p>
          <h2 className="text-[48px] md:text-[56px] font-bold leading-[1.1] tracking-tight text-[#1A1A1A]">
            Your Guide to the <br />
            <span className="text-[#FF7A00]">AI Revolution</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Video */}
          <motion.div
            ref={imgRef}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative group rounded-[24px] overflow-hidden bg-black aspect-square lg:aspect-auto border-[10px] border-[#1A1A1A]"
          >
            <motion.div style={{ y: imgY }} className="absolute inset-0">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/images/sddefault-15.webp"
                alt="Instructor"
                fill
                className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                className="w-[80px] h-[80px] bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 cursor-pointer"
              >
                <Play className="w-8 h-8 text-white fill-current translate-x-1" />
              </motion.div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <div className="bg-[#0A0A0A] rounded-[24px] p-8 md:p-10 flex-1 border border-white/5 relative overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                <div>
                  <h3 className="text-[28px] font-bold text-white mb-1">Cooper Geidt</h3>
                  <p className="text-[#A1A1A1] text-[16px]">Senior Prompt Engineer</p>
                </div>
                <div className="relative h-[40px] w-[120px] opacity-80">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/MJ9hRgKVlu4XUGs0fOR2EtBqmaY-57.svg"
                    alt="Signature"
                    fill
                    className="object-contain invert"
                  />
                </div>
              </div>
              <div className="border-t border-white/10 pt-8 mt-4">
                <p className="text-[#A1A1A1] font-bold text-[14px] uppercase tracking-widest mb-4">Bio</p>
                <p className="text-white/90 text-[18px] leading-[1.6]">
                  &quot;My work has been featured in Forbes and TechCrunch. I&apos;ve helped teams at leading companies build their AI strategies. I&apos;ve distilled everything I&apos;ve learned into this single program. My success is measured by your success.&quot;
                </p>
              </div>
              {/* Animated glow */}
              <motion.div
                animate={{ opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-20 -right-20 w-[200px] h-[200px] bg-[#FF7A00] rounded-full blur-[80px] pointer-events-none"
              />
            </div>

            {/* Social bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="bg-[#0A0A0A] rounded-[100px] py-4 px-8 border border-white/5 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                {socialIcons.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.08)" }}
                    className="w-10 h-10 border border-white/10 rounded-md flex items-center justify-center text-white/60 hover:text-white transition-colors"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
              <div className="text-white/40 text-[14px] font-medium">
                <span className="text-white">240K+</span> Followers
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* As Featured On */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 pt-10 text-center border-t border-black/5"
        >
          <p className="text-[#1A1A1A] font-semibold text-[15px] mb-12">As Featured On</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 grayscale opacity-60">
            <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/C8PoWljS0YEQT7QiVvx8G9tgQ-54.svg" width={110} height={30} alt="Logitech" className="h-[28px] w-auto" />
            <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/EikAR3cusqcpgBaP6DAo0We2ids-55.svg" width={110} height={30} alt="Bitwise" className="h-[26px] w-auto" />
            <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/IdhP6AR2IcZjOMrlNeavORSRoU-56.svg" width={110} height={30} alt="Logitech" className="h-[28px] w-auto" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
