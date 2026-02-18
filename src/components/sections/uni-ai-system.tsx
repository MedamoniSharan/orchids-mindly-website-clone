"use client";

import React from 'react';
import Image from 'next/image';

const UniAISystem = () => {
  return (
    <section className="bg-[#0a0a0a] py-[120px] px-5 relative overflow-hidden" id="why-choose-us">
      {/* Background Decorative Grid/Spotlight */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff7a0033] rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-[1200px] relative z-10">
        {/* Header */}
        <div className="text-center mb-12 flex flex-col items-center gap-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#1a1a1a] border border-[#262626]">
            <span className="text-[#a11a1a1] text-sm font-medium tracking-wide uppercase">Introducing Uni AI</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[48px] font-bold text-white tracking-tight leading-[1.2] max-w-2xl mx-auto">
            The A-to-Z System for <span className="text-[#ff7a00]">High-Value</span> AI Results
          </h2>
        </div>

        {/* Main Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#1a1a1a] rounded-[24px] border border-[#262626] overflow-hidden p-6 lg:p-12 shadow-2xl relative">
          
          {/* Left Column - Large Callout Card */}
          <div className="lg:col-span-7 flex flex-col gap-8 relative">
            <div className="flex flex-col gap-6">
              <div className="inline-block self-start px-3 py-1 rounded-md bg-[#262626] border border-[#333]">
                <span className="text-xs font-semibold text-white uppercase tracking-wider">Get Ahead</span>
              </div>
              
              <h3 className="text-3xl lg:text-[40px] font-bold text-white leading-[1.15] tracking-tight max-w-[500px]">
                Introducing our generative AI masterclass for all working professionals.
              </h3>

              <a 
                href="#pricing" 
                className="group flex items-center self-start bg-gradient-to-r from-[#ff7a00] to-[#ff9533] text-white px-6 py-3.5 rounded-full font-semibold transition-all hover:opacity-90 active:scale-[0.98]"
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
              </a>
            </div>

            <p className="text-[#a1a1a1] text-lg leading-relaxed max-w-[480px]">
              Mastering prompt engineering unlocks a new wave of roles that blend creativity,
            </p>

            {/* Floating Role Tags Visualization */}
            <div className="flex flex-wrap gap-3 max-w-[450px]">
               {/* Role Tag 1 */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#262626]/80 backdrop-blur-md border border-white/5">
                <div className="w-5 h-5 rounded-full overflow-hidden border border-white/10 shrink-0">
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/images/woxoSz29mBOKNIqopNqDkmkIw-6.png" 
                    width={20} 
                    height={20} 
                    alt="User"
                  />
                </div>
                <span className="text-[13px] font-medium text-white/90 whitespace-nowrap">AI Content Strategist</span>
              </div>
              
              {/* Role Tag 2 */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#262626]/80 backdrop-blur-md border border-white/5">
                 <div className="w-5 h-5 rounded-full overflow-hidden border border-white/10 shrink-0 flex items-center justify-center bg-gray-600">
                    <div className="w-full h-full bg-[#3d3d3d] flex items-center justify-center text-[10px]">👤</div>
                 </div>
                <span className="text-[13px] font-medium text-white/90 whitespace-nowrap">Prompt Engineer</span>
              </div>

              {/* Duplicate Tags for visual richness as seen in screenshot */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#262626]/60 backdrop-blur-md border border-white/5 opacity-50">
                <div className="w-5 h-5 rounded-full overflow-hidden border border-white/10 shrink-0 bg-gray-700"></div>
                <span className="text-[13px] font-medium text-white/90 whitespace-nowrap">AI Consultant</span>
              </div>
            </div>

            {/* Glowing Orange Orb Atmosphere */}
            <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-gradient-to-tr from-[#ff7a00]/40 to-transparent rounded-full blur-[80px] pointer-events-none" />
          </div>

          {/* Right Column - Features List */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-center">
            
            {/* Feature Item 1 */}
            <div className="flex gap-5 group">
              <div className="w-16 h-16 rounded-[16px] bg-[#262626] border border-[#333] flex items-center justify-center shrink-0 shadow-lg group-hover:border-[#ff7a00]/30 transition-colors">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/9S25YVWy1OmIexcbeYdBHQo4w3g-10.svg" 
                  width={24} 
                  height={24} 
                  alt="Calendar Icon"
                />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#a1a1a1] uppercase mb-1 tracking-widest">Prompt Library</h4>
                <p className="text-white font-medium leading-[1.4] text-lg">
                  Save 10+ Hours a Week with our Prompt Library of 200+ copy-paste-ready commands.
                </p>
              </div>
            </div>

            {/* Feature Item 2 */}
            <div className="flex gap-5 group">
              <div className="w-16 h-16 rounded-[16px] bg-[#262626] border border-[#333] flex items-center justify-center shrink-0 shadow-lg group-hover:border-[#ff7a00]/30 transition-colors">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/1MauLwmR6iIXjyzXmZQhtMk4O0-11.svg" 
                  width={24} 
                  height={24} 
                  alt="Advanced Icon"
                />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#a1a1a1] uppercase mb-1 tracking-widest">Advanced Methods</h4>
                <p className="text-white font-medium leading-[1.4] text-lg">
                  Master Advanced Techniques that 99% of users don&apos;t know, giving you a powerful competitive edge.
                </p>
              </div>
            </div>

            {/* Feature Item 3 */}
            <div className="flex gap-5 group">
              <div className="w-16 h-16 rounded-[16px] bg-[#262626] border border-[#333] flex items-center justify-center shrink-0 shadow-lg group-hover:border-[#ff7a00]/30 transition-colors">
                {/* Fallback to person icon for strategic output */}
                <div className="flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#FF7A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#FF7A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#FF7A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#FF7A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#a1a1a1] uppercase mb-1 tracking-widest">Strategic Output</h4>
                <p className="text-white font-medium leading-[1.4] text-lg">
                  Deliver Higher Quality Work by learning to use AI for deep strategic thinking, not just surface-level tasks.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default UniAISystem;