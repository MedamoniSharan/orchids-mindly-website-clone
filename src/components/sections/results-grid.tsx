"use client";

import React from 'react';
import Image from 'next/image';

const resultsData = [
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/nbF8E6vj0W01XalsJDmeBX1qhCA-15.svg",
    metric: "10+ Hours Saved Weekly",
    description: "On average, students reclaim a full workday using AI-powered workflows."
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/SX4jbFogH7FuJomOuJFbLrZFs-16.svg",
    metric: "88% Career Acceleration",
    description: "Graduates report promotions, raises, or new opportunities within 3 months."
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/22goEz9gsdxvFQOgJsQm2yapQs-17.svg",
    metric: "4.9/5 Course Rating",
    description: "Consistently rated \"Excellent\" across thousands of verified reviews."
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/d6m9TA9VJcWC81A5Cd463zkR1E-18.svg",
    metric: "92% Course Completion Rate",
    description: "This industry-leading completion rate is a testament to our engaging."
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/87X2pajaYeK2WqDYNyghvROswl0-19.svg",
    metric: "88% Career Acceleration",
    description: "Graduates report promotions, raises, or new opportunities within 3 months."
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/JM2Xea24TJbYdSTCkNEyA8Kbas-20.svg",
    metric: "5+ Portfolio-Ready Projects",
    description: "Graduate with a professional portfolio of over 5 completed projects."
  }
];

export default function ResultsGrid() {
  return (
    <section className="bg-[#F2F1EE] py-[120px] px-5 flex flex-col items-center">
      <div className="max-w-[1200px] w-full">
        {/* Header Section */}
        <div className="text-center mb-[60px] relative">
          <p className="text-[14px] font-medium text-[#1A1A1A] mb-4 uppercase tracking-wider">
            Why choose us?
          </p>
          <h2 className="text-[48px] font-bold leading-[1.2] text-[#1A1A1A] max-w-[600px] mx-auto">
            The <span className="text-[#FF7A00]">Results</span> Speak for Themselves
          </h2>
          
          {/* Hand-drawn Annotation */}
          <div className="absolute right-[10%] top-[70%] hidden lg:block">
            <div className="flex flex-col items-center -rotate-12 translate-y-4 translate-x-12">
              <span className="font-['Inter'] text-[14px] text-[#1A1A1A] opacity-70 mb-1 leading-none uppercase italic" style={{ fontFamily: 'var(--font-sans)' }}>
                This can be you
              </span>
              <svg width="40" height="25" viewBox="0 0 40 25" fill="none" className="opacity-40">
                <path d="M5 5C5 5 15 20 35 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M30 10L35 15L30 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white/40 rounded-[24px] overflow-hidden border border-[#E8E8E8]">
          {resultsData.map((item, index) => (
            <div 
              key={index} 
              className={`p-10 flex flex-col items-center text-center border-[#E8E8E8] 
                ${index < 3 ? 'lg:border-b' : ''} 
                ${index < 4 ? 'md:border-b lg:border-b-0 lg:[&:nth-child(-n+3)]:border-b' : ''}
                ${(index + 1) % 3 !== 0 ? 'lg:border-r' : ''}
                ${(index + 1) % 2 !== 0 ? 'md:border-r lg:border-r-0 lg:[&:not(:nth-child(3n))]:border-r' : ''}
              `}
            >
              <div className="w-[44px] height-[44px] mb-6 flex items-center justify-center">
                <Image 
                  src={item.icon} 
                  alt={item.metric} 
                  width={44} 
                  height={44} 
                  className="object-contain"
                />
              </div>
              <h3 className="text-[20px] font-bold text-[#1A1A1A] mb-4">
                {item.metric}
              </h3>
              <p className="text-[14px] leading-[1.6] text-[#A1A1A1] max-w-[280px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}