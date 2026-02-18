"use client";

import React, { useState } from 'react';
import { Plus, Check, ArrowRight } from 'lucide-react';

interface Week {
  id: string;
  number: string;
  title: string;
  content: string;
}

const weeks: Week[] = [
  {
    id: '01',
    number: 'Week 01',
    title: 'The Generative AI Landscape',
    content: 'Master the macro view of the AI revolution and how to position yourself strategically.'
  },
  {
    id: '02',
    number: 'Week 02',
    title: 'The Anatomy of a Perfect Prompt',
    content: 'Learn the foundational structure that forces AI to give you high-quality outputs every single time.'
  },
  {
    id: '03',
    number: 'Week 03',
    title: 'Advanced Prompting Techniques',
    content: 'Deep dive into chain-of-thought, few-shot, and role-based prompting systems.'
  },
  {
    id: '04',
    number: 'Week 04',
    title: 'AI for Creativity & Content',
    content: 'How to use AI to generate ideas, write copy, and create visual assets without losing your voice.'
  },
  {
    id: '05',
    number: 'Week 05',
    title: 'AI for Productivity & Workflow',
    content: 'Automate repetitive tasks and save 10+ hours a week by integrating AI into your daily schedule.'
  },
  {
    id: '06',
    number: 'Week 06',
    title: 'The Responsible AI Operator',
    content: 'Understanding ethics, security, and how to stay relevant as the technology continues to evolve.'
  },
];

const partners = [
  { name: 'LogiTech', url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/BtfMCqbG1GWtBBbWDm9pfxeIE-12.svg' },
  { name: 'BuildPro', url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/uF2M5DGlba8g1a4tyRQ7KFRlgY4-13.svg' },
  { name: 'Bitwise', url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/Z4y4TQ4ejKbn3HDwLe8GNO2Q-14.svg' },
];

export default function CurriculumSection() {
  const [openWeek, setOpenWeek] = useState<string | null>(null);

  const toggleWeek = (id: string) => {
    setOpenWeek(openWeek === id ? null : id);
  };

  return (
    <section id="curriculum" className="relative py-[120px] bg-[#F2F0E9] text-[#1A1A1A] overflow-hidden">
      <div className="container mx-auto px-5 max-w-[1200px]">
        {/* Section Header */}
        <div className="text-center mb-[60px]">
          <p className="text-[#A1A1A1] text-[14px] font-medium uppercase tracking-wider mb-4">Curriculum Overview</p>
          <h2 className="text-[48px] md:text-[56px] font-bold leading-[1.1] tracking-tight">
            Unlock the secret sauce <br />
            behind <span className="text-[#FF7A00]">world-class products.</span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Week Accordion - Left */}
          <div className="lg:col-span-7 space-y-4">
            {weeks.map((week) => (
              <div 
                key={week.id}
                className="bg-white rounded-[16px] border border-[#E8E8E8] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleWeek(week.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#FAF9F6] transition-colors"
                >
                  <div className="flex flex-col">
                    <span className="text-[18px] font-semibold text-[#1A1A1A]">{week.title}</span>
                    <span className="text-[14px] text-[#A1A1A1] mt-1">{week.number}</span>
                  </div>
                  <div className={`p-2 rounded-full border border-[#E8E8E8] transition-transform duration-300 ${openWeek === week.id ? 'rotate-45' : ''}`}>
                    <Plus className="w-5 h-5 text-[#1A1A1A]" />
                  </div>
                </button>
                {openWeek === week.id && (
                  <div className="px-6 pb-6 animate-accordion-down">
                    <p className="text-[#A1A1A1] text-[16px] leading-relaxed">
                      {week.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Join Today Card - Right */}
          <div className="lg:col-span-5">
            <div className="bg-[#0A0A0A] rounded-[24px] p-8 text-white relative overflow-hidden shadow-2xl">
              {/* Decorative Glow */}
              <div className="absolute top-[-20%] right-[-20%] w-[200px] h-[200px] bg-[#FF7A00] opacity-20 blur-[80px]" />
              
              <div className="relative z-10">
                <div className="inline-block bg-[#FF7A00] px-3 py-1 rounded-full text-[12px] font-bold mb-6">
                  30 day money back guarantee
                </div>
                
                <h3 className="text-[32px] font-bold mb-8">Join Mindly Today</h3>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-y-6 mb-10">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#1A1A1A] rounded-lg">
                      <Plus className="w-4 h-4 text-[#FF7A00]" />
                    </div>
                    <span className="text-[14px]">Beginner Friendly</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#1A1A1A] rounded-lg">
                      <Plus className="w-4 h-4 text-[#FF7A00]" />
                    </div>
                    <span className="text-[14px]">Completion Certificate</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#1A1A1A] rounded-lg">
                      <Plus className="w-4 h-4 text-[#FF7A00]" />
                    </div>
                    <span className="text-[14px]">21 Hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#1A1A1A] rounded-lg">
                      <Plus className="w-4 h-4 text-[#FF7A00]" />
                    </div>
                    <span className="text-[14px]">Full lifetime access</span>
                  </div>
                </div>

                <div className="border-t border-[#262626] pt-8 mb-8">
                  <p className="text-[12px] font-bold uppercase tracking-wider text-[#A1A1A1] mb-6">A quick overview of the course</p>
                  <ul className="space-y-4">
                    {[
                      'Instant access to the full 6-week curriculum',
                      'All future updates and bonus content included',
                      'Weekly live workshops',
                      '1 on 1 Mentorship'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-[15px]">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#1A1A1A] flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href="#pricing"
                  className="w-full flex items-center justify-between bg-[#FF7A00] hover:bg-[#FF9533] p-4 rounded-full font-bold text-white transition-all group"
                >
                  <span className="ml-4">Enroll now for $499</span>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-transform group-hover:translate-x-1">
                    <ArrowRight className="w-5 h-5 text-[#FF7A00]" />
                  </div>
                </a>
              </div>

              {/* Tag Overlays */}
              <div className="absolute top-10 right-10 rotate-12">
                <div className="bg-[#1A1A1A] border border-[#262626] p-2 rounded-lg flex items-center gap-2">
                   <div className="w-3 h-3 text-[#FF7A00]">✦</div>
                   <span className="text-[10px] font-bold tracking-widest">AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partners Marquee */}
        <div className="mt-20 pt-10 border-t border-dashed border-[#E8E8E8]">
          <p className="text-center text-[#A1A1A1] text-[14px] font-medium mb-12">Curriculum partners</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Repeated logos to simulate a marquee feel (static in this version) */}
            {[...partners, ...partners].map((partner, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <img src={partner.url} alt={partner.name} className="h-6 w-auto" />
                <span className="text-[18px] font-semibold text-[#1A1A1A]">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}