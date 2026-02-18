import React from 'react';
import Image from 'next/image';

const FinalCTA = () => {
  const assets = {
    rocket: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/images/gBNnLLcg2lZdZQwBmwU0fuE44-11.png",
    folder: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/images/5RNFFX0cPakafg9WfAsXvGnX9jw-13.png",
    handshake: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/images/kBF4YAuHs3L8X3pme9TxgGme5E-14.png",
    code: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/images/IdIdxExRKEeAESwBLqg5FOIZFo-16.png",
    arrowIcon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/U0c022TYy3iR6YjbwbyxOaDRsk-2.svg",
    studentHeadshots: [
      "https://framerusercontent.com/images/GvIIYiCvs1fSYrsqT9kkYqRv4Y.jpg",
      "https://framerusercontent.com/images/LS4ISV3lMw5erPxQJs6QzAYUmU.jpg",
      "https://framerusercontent.com/images/km3kZvwQj1ex1UnSfYsIR0bRQ.png"
    ]
  };

  const aiCompanies = [
    { name: "Bitwise", url: "https://framerusercontent.com/images/JJNRfHZe6rUIX51qheRju0wEA8.svg" },
    { name: "LogiTech", url: "https://framerusercontent.com/images/sAYaY4Wf6yTb11YoLPWYicX8BzA.svg" },
    { name: "BluePeak", url: "https://framerusercontent.com/images/0bzchfERxFoGInLFw778Fb5RW0.svg" },
    { name: "IronLeaf", url: "https://framerusercontent.com/images/A4bseyvNz1Cnuy5avzZIHnklUso.svg" },
    { name: "BuildPro", url: "https://framerusercontent.com/images/xAmC1X2qRkQnxB0EimoIk0x3A.svg" }
  ];

  return (
    <section className="relative w-full bg-[#0a0a0a] overflow-hidden py-[120px] font-sans">
      {/* Perspective Grid Background */}
      <div className="absolute inset-x-0 top-0 h-full pointer-events-none opacity-[0.4]" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
             backgroundSize: '60px 60px',
             transform: 'perspective(1000px) rotateX(60deg) scale(2)',
             transformOrigin: 'top'
           }} 
      />

      <div className="container relative z-10 mx-auto px-5 flex flex-col items-center">
        {/* Registration Tag */}
        <div className="mb-6">
          <p className="text-[#a1a1a1] uppercase tracking-[0.1em] text-[14px] font-medium">
            Registrations Ongoing!
          </p>
        </div>

        {/* Floating Pixel Icons */}
        <div className="absolute w-full max-w-[1000px] h-[300px] pointer-events-none hidden md:block">
          <Image src={assets.folder} alt="folder" width={64} height={64} className="absolute top-[10%] left-[-20px] animate-bounce" style={{ animationDuration: '4s' }} />
          <Image src={assets.handshake} alt="deal" width={64} height={64} className="absolute top-[10%] right-[-20px] animate-bounce" style={{ animationDuration: '5s' }} />
          <Image src={assets.rocket} alt="rocket" width={64} height={64} className="absolute bottom-[20%] left-[5%] animate-pulse" />
          <Image src={assets.code} alt="code" width={64} height={64} className="absolute bottom-[20%] right-[5%] animate-pulse" />
        </div>

        {/* Student Avatars */}
        <div className="flex -space-x-3 mb-8">
          {assets.studentHeadshots.map((headshot, i) => (
            <div key={i} className="w-12 h-12 rounded-full border-2 border-[#1a1a1a] overflow-hidden">
              <Image src={headshot} alt="student" width={48} height={48} className="object-cover" />
            </div>
          ))}
        </div>

        {/* Main Heading */}
        <h2 className="text-center text-white text-[48px] md:text-[64px] font-extrabold leading-[1.1] mb-6 max-w-[900px]">
          Enroll Now & Get <span className="text-[#ff7a00]">Instant Access</span> for $497
        </h2>

        {/* Subtext */}
        <p className="text-[#a1a1a1] text-center text-lg max-w-[600px] mb-12">
          Graduates report promotions, raises, or new opportunities within 3 months.
        </p>

        {/* Primary CTA and Social Proof */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-20">
          <a href="#pricing" className="btn-primary flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#ff7a00] to-[#ff9533] rounded-full group">
            <span className="text-white font-bold text-lg">Enroll Today - Save $169</span>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1">
              <Image src={assets.arrowIcon} alt="arrow" width={16} height={14} />
            </div>
          </a>

          <div className="flex items-center gap-3">
            {/* Hand-drawn arrow SVG using path data */}
            <svg width="45" height="25" viewBox="0 0 45 25" fill="none" className="rotate-[-10deg]">
              <path d="M1 24C6.5 18 15 2 44 1M44 1L38 4M44 1L41 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-white font-normal text-[14px] italic opacity-80 uppercase tracking-tight max-w-[150px] leading-tight">
              2k+ professionals are already ahead of you
            </span>
          </div>
        </div>

        {/* Service Perks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-white/10 pt-16 w-full max-w-[900px]">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 text-[#ff7a00]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
            </div>
            <h4 className="text-white font-semibold text-lg">6 Weeks of Career-Oriented Training</h4>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 text-[#ff7a00]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            </div>
            <h4 className="text-white font-semibold text-lg">Learn by Doing, Not Watching</h4>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 text-[#ff7a00]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h4 className="text-white font-semibold text-lg">Lifetime Access with All Future Updates</h4>
          </div>
        </div>
      </div>

      {/* Corporate Marquee Bottom */}
      <div className="mt-24 border-t border-white/5 pt-12 overflow-hidden bg-white/[0.02]">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...aiCompanies, ...aiCompanies, ...aiCompanies].map((company, i) => (
            <div key={i} className="flex items-center gap-2 mx-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
              <Image src={company.url} alt={company.name} width={24} height={24} />
              <span className="text-white font-bold text-xl tracking-tight">{company.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default FinalCTA;