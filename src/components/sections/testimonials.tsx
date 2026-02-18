"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Quote, MoveRight, MoveLeft } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  before: string;
  after: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Cooper Geidt",
    role: "Senior Prompt Engineer",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/images/GvIIYiCvs1fSYrsqT9kkYqRv4Y-17.jpg",
    before: '"I kept copying random prompts from Twitter threads, hoping one would finally work."',
    after: '"I now have my own prompt system that consistently delivers high-quality outputs tailored to any project—no more guesswork or rewrites."',
  },
  {
    id: 2,
    name: "Ruben Gouse",
    role: "AI Consultant",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/images/LS4ISV3lMw5erPxQJs6QzAYUmU-2.jpg",
    before: '"Every AI output I got needed heavy editing. It felt like I was doing all the work anyway."',
    after: '"The course showed me how to structure context properly. Now my first draft is basically production-ready."',
  },
  {
    id: 3,
    name: "Rayna Mango",
    role: "Content Strategist",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/images/fVdbJJ2MWbfO3uSvWyvr0pmMb0M-4.png",
    before: '"I was overwhelmed by all the AI tools and had no idea how to pick the right one."',
    after: '"Mindly gave me a clear framework. I know exactly what tool to use and what prompt to write for every scenario."',
  },
  {
    id: 4,
    name: "Jack Wilson",
    role: "Product Manager",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/images/km3kZvwQj1ex1UnSfYsIR0bRQ-3.png",
    before: '"My AI results felt shallow. They looked smart but had no real strategic depth."',
    after: '"Now I use AI for deep analysis and strategy, not just drafting emails. It has changed how my team sees me."',
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const dragRef = useRef<HTMLDivElement>(null);

  return (
    <section id="reviews" ref={sectionRef} className="bg-[#f2f1ee] py-[120px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center"
        >
          <p className="text-[#a1a1a1] uppercase tracking-widest text-sm font-semibold mb-4">Testimonials</p>
          <h2 className="text-[48px] md:text-[56px] font-bold text-[#1a1a1a] leading-[1.1] tracking-tight">
            Real People. <span className="text-[#FF7A00]">Real Results.</span>
          </h2>
        </motion.div>
      </div>

      {/* Draggable carousel */}
      <motion.div
        ref={dragRef}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="px-5 md:px-10 lg:px-20"
      >
        <motion.div
          drag="x"
          dragConstraints={dragRef}
          dragElastic={0.1}
          className="flex gap-6 cursor-grab active:cursor-grabbing select-none"
          style={{ width: "max-content" }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="w-[340px] md:w-[380px] bg-white rounded-[24px] p-8 shadow-sm border border-[#e8e8e8] flex-shrink-0"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-8">
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-[#f2f1ee]">
                    <Image src={t.avatar} alt={t.name} width={64} height={64} className="object-cover" />
                  </div>
                  <div>
                    <h4 className="text-[#1a1a1a] font-bold text-lg leading-tight">{t.name}</h4>
                    <p className="text-[#a1a1a1] text-xs mt-1 font-medium">{t.role}</p>
                    <div className="mt-2 flex items-center gap-1">
                      {[...Array(5)].map((_, si) => (
                        <svg key={si} width="12" height="12" viewBox="0 0 24 24" fill="#FF7A00"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                      ))}
                    </div>
                  </div>
                </div>
                <Quote className="text-[#ff7a00] opacity-20" size={32} />
              </div>

              {/* Before */}
              <div className="mb-6">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#a1a1a1] mb-3">Before</div>
                <div className="border-b border-dashed border-[#e8e8e8] pb-6">
                  <p className="text-[#444] text-sm leading-relaxed italic">{t.before}</p>
                </div>
              </div>

              {/* After */}
              <div className="bg-[#1a1a1a] rounded-2xl p-6">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#a1a1a1] mb-3 opacity-60">After</div>
                <p className="text-white text-sm leading-relaxed font-medium">{t.after}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Drag hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
        className="flex items-center justify-center gap-3 mt-10 text-[#a1a1a1] text-sm"
      >
        <MoveLeft size={16} />
        <span>drag to explore</span>
        <MoveRight size={16} />
      </motion.div>
    </section>
  );
}
