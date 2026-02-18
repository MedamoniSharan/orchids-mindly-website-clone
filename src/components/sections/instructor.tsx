"use client";

import React from 'react';
import Image from 'next/image';
import { Youtube, Twitter, Linkedin, Instagram, Play } from 'lucide-react';

/**
 * InstructorSection Component
 * 
 * Clones the "Meet Your Instructor" section with pixel-perfect accuracy.
 * Features a video bio on the left and a detailed bio card on the right.
 * Consistent with the high-level design system (dark theme).
 */
export default function InstructorSection() {
  const socialIcons = [
    { icon: <Youtube className="w-5 h-5" />, href: "#" },
    { icon: <Twitter className="w-4 h-4" />, href: "#" },
    { icon: <Linkedin className="w-4 h-4" />, href: "#" },
    { icon: <Instagram className="w-4 h-4" />, href: "#" },
  ];

  return (
    <section className="relative py-[120px] px-5 overflow-hidden bg-[#F2F1EE]">
      {/* Background Grid Pattern (Subtle) */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="container relative z-10 mx-auto max-w-[1200px]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#A1A1A1] font-medium uppercase tracking-wider mb-4 text-[14px]">
            Meet Your Instructor
          </p>
          <h2 className="text-[48px] md:text-[56px] font-bold leading-[1.1] tracking-tight text-[#1A1A1A]">
            Your Guide to the <br />
            <span className="text-[#FF7A00]">AI Revolution</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Side: Video Thumbnail */}
          <div className="relative group rounded-[24px] overflow-hidden bg-black aspect-square lg:aspect-auto border-[10px] border-[#1A1A1A]">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/images/sddefault-15.webp"
              alt="Instructor Cooper Geidt"
              fill
              className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[80px] h-[80px] bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 cursor-pointer hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-white fill-current translate-x-1" />
              </div>
            </div>
            {/* Floating UI Elements (Handheld device mockups) */}
            <div className="absolute bottom-6 right-6 w-1/2 hidden md:block">
               {/* This reflects the floating UI panels seen in the screenshot */}
            </div>
          </div>

          {/* Right Side: Bio Card */}
          <div className="flex flex-col gap-4">
            <div className="bg-[#0A0A0A] rounded-[24px] p-8 md:p-10 flex-1 border border-white/5 relative overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                <div>
                  <h3 className="text-[28px] font-bold text-white mb-1">Cooper Geidt</h3>
                  <p className="text-[#A1A1A1] text-[16px]">Senior Prompt Engineer</p>
                </div>
                {/* Signature Graphic */}
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
                  &quot;My work has been featured in [Forbes, TechCrunch] and I&apos;ve helped teams at [Company Name, e.g., Salesforce] build their AI strategies. I&apos;ve distilled everything I&apos;ve learned into this single program. My success is measured by your success. Let&apos;s get started.&quot;
                </p>
              </div>
            </div>

            {/* Social Stats Bar */}
            <div className="bg-[#0A0A0A] rounded-[100px] py-4 px-8 border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                {socialIcons.map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.href}
                    className="w-10 h-10 border border-white/10 rounded-md flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <div className="text-white/40 text-[14px] font-medium tracking-tight">
                <span className="text-white">240K+</span> Followers
              </div>
            </div>
          </div>
        </div>

        {/* "As Featured On" section immediately following */}
        <div className="mt-24 pt-10 text-center border-t border-black/5">
          <p className="text-[#1A1A1A] font-semibold text-[15px] mb-12">As Featured On</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 grayscale opacity-60">
            <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/C8PoWljS0YEQT7QiVvx8G9tgQ-54.svg" width={110} height={30} alt="Logitech" className="h-[28px] w-auto" />
            <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/EikAR3cusqcpgBaP6DAo0We2ids-55.svg" width={110} height={30} alt="Bitwise" className="h-[26px] w-auto" />
            <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/IdhP6AR2IcZjOMrlNeavORSRoU-56.svg" width={110} height={30} alt="Logitech" className="h-[28px] w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}