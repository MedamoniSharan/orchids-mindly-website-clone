import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <header className="relative w-full overflow-hidden bg-[#0a0a0a] pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Background Grid & Spotlights */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/I5BmrodulLElK3MtIcR7Z5YD8bI-3.svg')`,
            backgroundSize: '1324px 612px',
            backgroundPosition: 'center top'
          }} 
        />
        
        {/* Glow Effects (Spotlights) */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#ff7a001a] blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#ffffff05] blur-[100px]" />
        <div className="absolute bottom-[-20%] left-[20%] w-[70%] h-[50%] bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
      </div>

      <div className="container relative z-10 flex flex-col items-center">
        {/* Countdown Timer Banner */}
        <div className="mb-8 flex items-center justify-center">
          <div className="flex items-center gap-0 border border-white/10 rounded-lg overflow-hidden glass-panel">
            <div className="bg-[#1a1a1a] px-4 py-2 text-[14px] font-medium text-white/80 whitespace-nowrap">
              Limited time offer ends in
            </div>
            <div className="bg-[#ffffff] px-4 py-2 text-[14px] font-bold text-black font-mono">
              143 : 14 : 03 : 13
            </div>
          </div>
        </div>

        {/* Main Headline */}
        <div className="max-w-[1000px] text-center mb-10">
          <h1 className="text-[48px] md:text-[80px] font-extrabold leading-[1.1] tracking-tight text-white">
            Master Prompt Engineering in 6 Weeks & <span className="orange-gradient-text italic">Supercharge your career.</span>
          </h1>
        </div>

        {/* Typewriter Animation Prompt Box */}
        <div className="w-full max-w-[680px] mb-12 animate-in fade-in slide-in-from-bottom-5 duration-1000">
          <div className="glass-panel border border-white/10 rounded-[16px] p-6 bg-[#1a1a1a]/40 shadow-2xl">
            <div className="text-white/90 text-lg md:text-xl font-medium mb-8 min-h-[56px] flex items-center">
              <span>Rewrite this response to sound more confident and clear, suitable for a senior executive</span>
              <span className="inline-block w-[3px] h-[24px] bg-primary ml-2 animate-pulse" />
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-white/40 hover:text-white/60 transition-colors text-sm font-medium">
                  <span className="text-xl">+</span>
                  <div className="flex items-center gap-1.5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                    Tools
                  </div>
                </button>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full hover:bg-white/5 transition-colors cursor-pointer text-white/40">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="22"></line></svg>
                </div>
                <div className="p-2 rounded-full bg-white/5 text-white/60">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="M20 12h2"></path><path d="M2 12h2"></path></svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Primary CTA and Students */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-20">
          <a href="#pricing" className="btn-primary group h-[60px] px-8 text-lg flex items-center justify-between min-w-[260px]">
            <span>Enroll now for $499</span>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center ml-4 group-hover:scale-110 transition-transform">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/U0c022TYy3iR6YjbwbyxOaDRsk-2.svg" 
                width={16} 
                height={14} 
                alt="Arrow" 
              />
            </div>
          </a>

          <div className="flex items-center gap-12 relative">
            <div className="flex -space-x-3">
              {[
                "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/images/GvIIYiCvs1fSYrsqT9kkYqRv4Y-1.jpg",
                "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/images/LS4ISV3lMw5erPxQJs6QzAYUmU-2.jpg",
                "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/images/km3kZvwQj1ex1UnSfYsIR0bRQ-3.png",
                "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/images/fVdbJJ2MWbfO3uSvWyvr0pmMb0M-4.png"
              ].map((src, i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#1a1a1a] overflow-hidden relative">
                  <Image src={src} fill className="object-cover" alt="Student Headshot" />
                </div>
              ))}
            </div>
            
            <div className="relative">
              <p className="text-[#a1a1a1] uppercase text-[12px] font-bold tracking-widest leading-tight w-[200px]">
                2k+ professionals are already ahead of you.
              </p>
              {/* Decorative Hand-drawn Arrow */}
              <div className="absolute top-1/2 left-[-60px] transform -translate-y-1/2 rotate-[-10deg] hidden md:block opacity-40">
                <svg width="45" height="32" viewBox="0 0 45 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 31C5 25 10 10 44 1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M38 6L44 1L37 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Large Video Player Placeholder */}
        <div className="w-full max-w-[1140px] relative mt-10">
          <div className="relative aspect-video rounded-[24px] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(255,122,0,0.15)] group transition-all duration-700 hover:scale-[1.01]">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/images/GGNg8KoV9Iwu1Z89UqqLzdQWx0-5.png" 
              fill 
              className="object-cover opacity-60 mix-blend-overlay" 
              alt="Video Background"
            />
            {/* The actual placeholder content from screenshots has a person and a play button */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            {/* Static UI for placeholder person (Fallback to generic placeholder if not detected) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-[0_0_30px_rgba(255,122,0,0.4)]">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>

            {/* Reflections / Spotlight on Video */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-[#ff7a0005] to-transparent" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;