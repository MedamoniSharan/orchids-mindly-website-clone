"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Curriculum", href: "#curriculum" },
    { name: "Reviews", href: "#reviews" },
    { name: "Pricing", href: "#pricing" },
    { name: "Why us", href: "#why-choose-us" },
    { name: "FAQs", href: "#faqs" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-1/2 -translate-x-1/2 z-[100] w-full max-w-[800px] px-4 md:px-0 pt-6 pointer-events-none"
    >
      <motion.nav
        animate={{
          backgroundColor: isScrolled ? "rgba(0,0,0,0.85)" : "rgba(255,255,255,0.97)",
          boxShadow: isScrolled
            ? "0 8px 32px rgba(0,0,0,0.4)"
            : "rgba(0,0,0,0.18) 0px 0.6px 0.6px -1.25px, rgba(0,0,0,0.16) 0px 2.3px 2.3px -2.5px, rgba(0,0,0,0.06) 0px 10px 10px -3.75px",
        }}
        transition={{ duration: 0.35 }}
        className="pointer-events-auto flex items-center justify-between w-full h-[68px] px-4 rounded-[12px] backdrop-blur-[12px]"
      >
        {/* Logo */}
        <div className="flex items-center gap-4">
          <a href="/" className="flex items-center justify-center w-[36px] h-[36px]">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/VT9XchCjHXRPw0H08BPtEicHVVs-1.svg"
              alt="Mindly Logo"
              width={35}
              height={36}
              className="w-full h-full object-contain"
              priority
            />
          </a>
          <div className={`w-[1px] h-[20px] transition-colors duration-300 ${isScrolled ? "bg-white/20" : "bg-[#E8E8E8]"}`} />
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 px-4">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * i + 0.3, duration: 0.4 }}
              className={`text-[14px] font-medium transition-colors hover:text-primary ${isScrolled ? "text-white" : "text-black"}`}
              style={{ fontFamily: '"Inter Tight", sans-serif' }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.a
          href="#pricing"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="group relative flex items-center h-[42px] px-5 rounded-full overflow-hidden bg-gradient-to-r from-[#ff7a00] to-[#ff9533] shadow-[0_4px_14px_rgba(255,122,0,0.35)]"
        >
          <span className="text-[14px] font-semibold tracking-tight text-white mr-2">Enroll now for $499</span>
          <div className="flex items-center justify-center w-[24px] h-[24px] bg-white rounded-full">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/U0c022TYy3iR6YjbwbyxOaDRsk-2.svg"
              alt=""
              width={16}
              height={14}
              className="w-[12px] h-[10px]"
            />
          </div>
        </motion.a>
      </motion.nav>
    </motion.header>
  );
}
