import React from 'react';
import Image from 'next/image';

const ProblemCard = ({ icon, text }: { icon: string; text: string }) => (
  <div className="flex flex-col items-center text-center p-6 bg-transparent">
    <div className="mb-4 flex items-center justify-center">
      <Image 
        src={icon} 
        alt="Problem Icon" 
        width={41} 
        height={40} 
        className="object-contain"
      />
    </div>
    <p className="text-[16px] leading-[1.5] font-medium text-[#1A1A1A] max-w-[280px]">
      {text}
    </p>
  </div>
);

export default function ProblemsSection() {
  const problems = [
    {
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/xAmC1X2qRkQnxB0EimoIk0x3A-4.svg",
      text: "Spending hours trying to \"trick\" the AI into giving you what you want."
    },
    {
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/A4bseyvNz1Cnuy5avzZIHnklUso-5.svg",
      text: "Your AI-generated content sounds robotic and lacks strategic depth."
    },
    {
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/0bzchfERxFoGInLFw778Fb5RW0-6.svg",
      text: "Worrying that your skills are becoming obsolete in the age of AI?"
    },
    {
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/0bzchfERxFoGInLFw778Fb5RW0-6.svg",
      text: "Do you have a growing fear of being left behind?"
    },
    {
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/sAYaY4Wf6yTb11YoLPWYicX8BzA-7.svg",
      text: "Are you overwhelmed by the sheer number of AI tools?"
    },
    {
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/JJNRfHZe6rUIX51qheRju0wEA8-8.svg",
      text: "Do you waste hours rewriting and tweaking prompts?"
    }
  ];

  return (
    <section id="why-choose-us" className="bg-[#F2F1EE] py-[120px] px-5 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-[80px]">
          <p className="text-[#A1A1A1] uppercase tracking-[0.1em] text-[14px] font-bold mb-4">
            Is this you?
          </p>
          <h2 className="text-[48px] md:text-[56px] leading-[1.1] font-bold text-[#1A1A1A] max-w-[800px] mx-auto tracking-tight">
            Does Your Experience with AI Feel More <span className="block text-[#1A1A1A]">Frustrating Than Futuristic?</span>
          </h2>
        </div>

        {/* Grid Section */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {problems.map((problem, index) => (
              <ProblemCard 
                key={index} 
                icon={problem.icon} 
                text={problem.text} 
              />
            ))}
          </div>

          {/* Hand-drawn Annotation */}
          <div className="absolute right-[5%] top-[-40px] md:right-[15%] lg:right-[20%] hidden sm:block">
            <div className="relative">
              <p className="font-['Inter'] italic text-[14px] text-[#1A1A1A] font-medium absolute top-[-25px] right-[-20px] whitespace-nowrap uppercase tracking-wider opacity-70">
                sounds familiar?
              </p>
              <svg 
                className="w-[80px] h-[40px] text-[#1A1A1A] opacity-40 transform rotate-[-45deg]"
                viewBox="0 0 100 50" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M10,10 C40,40 60,0 90,40" strokeDasharray="4 2" />
                <path d="M85,35 L90,40 L82,42" fill="none" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}