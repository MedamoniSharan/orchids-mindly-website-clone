"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

/**
 * Navbar component for Mindly.
 * Features a sticky glassmorphism panel with logo, menu links, and a primary CTA.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
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
    <header className="fixed top-0 left-1/2 -translate-x-1/2 z-[100] w-full max-w-[800px] px-4 md:px-0 pt-6 pointer-events-none">
      <nav 
        className={`pointer-events-auto transition-all duration-300 ease-in-out
          flex items-center justify-between w-full h-[68px] 
          px-4 rounded-[12px] glass-panel
          ${isScrolled ? 'shadow-lg bg-black/80' : 'bg-white/95'}
        `}
        style={{
          boxShadow: "rgba(0, 0, 0, 0.18) 0px 0.602187px 0.602187px -1.25px, rgba(0, 0, 0, 0.16) 0px 2.28853px 2.28853px -2.5px, rgba(0, 0, 0, 0.06) 0px 10px 10px -3.75px"
        }}
      >
        {/* Logo and Divider */}
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
          <div className="w-[1px] h-[20px] bg-[#E8E8E8]" />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 px-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[14px] font-medium transition-colors hover:text-primary ${
                isScrolled ? 'text-white' : 'text-black'
              }`}
              style={{ fontFamily: '"Inter Tight", sans-serif' }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#pricing"
          className="group relative flex items-center h-[42px] px-5 rounded-full btn-primary overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <span className="text-[14px] font-semibold tracking-tight mr-2">
            Enroll now for $499
          </span>
          <div className="flex items-center justify-center w-[24px] h-[24px] bg-white rounded-full">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/U0c022TYy3iR6YjbwbyxOaDRsk-2.svg"
              alt=""
              width={16}
              height={14}
              className="w-[12px] h-[10px]"
            />
          </div>
        </a>
      </nav>

      {/* Mobile Menu logic would go here ideally, but based on the provided instruction 
          and HTML structure for 'Desktop/Tablet', we stick to the core layout. */}
      
      <style jsx global>{`
        .glass-panel {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .btn-primary {
          background: linear-gradient(90deg, #ff7a00, #ff9533);
          box-shadow: 0 4px 14px 0 rgba(255, 122, 0, 0.3);
        }
      `}</style>
    </header>
  );
}