"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { MoveRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  companyLogo: string;
  before: string;
  after: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Cooper Geidt",
    role: "Senior Prompt Engineer",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/images/GvIIYiCvs1fSYrsqT9kkYqRv4Y-17.jpg",
    companyLogo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/iazqbsfOJzgTMyPtg8vi6Wf3C4-21.svg",
    before: '"I kept copying random prompts from Twitter threads, hoping one would finally work."',
    after: '"I now have my own prompt system that consistently delivers high-quality outputs tailored to any project—no more guesswork or rewrites."'
  },
  {
    id: 2,
    name: "Ruben Gouse",
    role: "Senior Prompt Engineer",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/images/LS4ISV3lMw5erPxQJs6QzAYUmU-18.jpg",
    companyLogo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/iazqbsfOJzgTMyPtg8vi6Wf3C4-21.svg",
    before: '"I kept copying random prompts from Twitter threads, hoping one would finally work."',
    after: '"I now have my own prompt system that consistently delivers high-quality outputs tailored to any project—no more guesswork or rewrites."'
  },
  {
    id: 3,
    name: "Rayna Mango",
    role: "Senior Prompt Engineer",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/images/fVdbJJ2MWbfO3uSvWyvr0pmMb0M-19.png",
    companyLogo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/iazqbsfOJzgTMyPtg8vi6Wf3C4-21.svg",
    before: '"I kept copying random prompts from Twitter threads, hoping one would finally work."',
    after: '"I now have my own prompt system that consistently delivers high-quality outputs tailored to any project—no more guesswork or rewrites."'
  },
  {
    id: 4,
    name: "Jack Wilson",
    role: "AI Consultant",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/images/GvIIYiCvs1fSYrsqT9kkYqRv4Y-17.jpg",
    companyLogo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/iazqbsfOJzgTMyPtg8vi6Wf3C4-21.svg",
    before: '"I kept copying random prompts from Twitter threads, hoping one would finally work."',
    after: '"I now have my own prompt system that consistently delivers high-quality outputs tailored to any project—no more guesswork or rewrites."'
  }
];

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
      }
    };

    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
      // Initial check
      handleScroll();
    }
    return () => currentRef?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="reviews" className="bg-[#f2f1ee] py-[120px] px-5 overflow-hidden">
      <div className="max-w-[1200px] mx-auto mb-20 text-center">
        <p className="text-[#a1a1a1] uppercase tracking-widest text-sm font-semibold mb-4">Testimonials</p>
      </div>

      <div className="relative max-w-[1200px] mx-auto">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 pb-10 no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="flex-shrink-0 w-full md:w-[380px] bg-white rounded-[24px] p-8 shadow-sm snap-start border border-[#e8e8e8]"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-8">
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-[#f2f1ee]">
                    <Image 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      width={64} 
                      height={64} 
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-[#1a1a1a] font-bold text-lg leading-tight">{testimonial.name}</h4>
                    <p className="text-[#a1a1a1] text-xs mt-1 font-medium">{testimonial.role}</p>
                    <div className="mt-2 flex items-center gap-1.5 grayscale opacity-70">
                      <Image 
                        src={testimonial.companyLogo} 
                        alt="Company Logo" 
                        width={14} 
                        height={14} 
                      />
                      <span className="text-[10px] font-bold text-black tracking-tight">EcoPure</span>
                    </div>
                  </div>
                </div>
                <Quote className="text-[#ff7a00] opacity-20" size={32} />
              </div>

              {/* Before Section */}
              <div className="mb-6">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#a1a1a1] mb-3">Before</div>
                <div className="border-b border-dashed border-[#e8e8e8] pb-6">
                  <p className="text-[#444] text-sm leading-relaxed italic">
                    {testimonial.before}
                  </p>
                </div>
              </div>

              {/* After Section */}
              <div className="bg-[#1a1a1a] rounded-2xl p-6">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#a1a1a1] mb-3 opacity-60">After</div>
                <p className="text-white text-sm leading-relaxed font-medium">
                  {testimonial.after}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Navigation Button */}
        {showRightArrow && (
          <button 
            onClick={() => scroll("right")}
            className="absolute right-[-24px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-xl md:flex hidden"
          >
            <MoveRight size={20} />
          </button>
        )}
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}