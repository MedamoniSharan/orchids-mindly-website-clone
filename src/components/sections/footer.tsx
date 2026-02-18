"use client";

import React from 'react';
import Image from 'next/image';

const Footer = () => {
  const assets = {
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/VT9XchCjHXRPw0H08BPtEicHVVs-1.svg",
    youtube: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/IdhP6AR2IcZjOMrlNeavORSRoU-56.svg",
    x: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/MJ9hRgKVlu4XUGs0fOR2EtBqmaY-57.svg",
    linkedin: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/sQw079Zec3UbFoHABD5ZSSzi1hs-58.svg",
    instagram: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fea2819-e0b6-4ab2-b4ab-ab4c64535352-oma-mindly-framer-website/assets/svgs/9r8xooMXDzITxBQYZTXEogDs98-59.svg"
  };

  return (
    <footer className="bg-[#f2f1ee] pt-[120px] pb-[60px] px-5 sm:px-10 lg:px-20 font-sans text-[#1a1a1a]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-x-8">
          {/* Logo and Description */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Image 
                src={assets.logo} 
                alt="Mindly Logo" 
                width={48} 
                height={48} 
                className="w-12 h-12"
              />
              <span className="text-[32px] font-bold tracking-tight">Mindly</span>
            </div>
            <p className="text-[18px] leading-[1.6] text-[#666] max-w-[280px]">
              Learn the skill that turns everyday AI into extraordinary results.
            </p>
            <div className="flex gap-4 mt-8 lg:mt-32">
              <SocialIcon src={assets.youtube} alt="Youtube" />
              <SocialIcon src={assets.x} alt="X" />
              <SocialIcon src={assets.linkedin} alt="LinkedIn" />
              <SocialIcon src={assets.instagram} alt="Instagram" />
            </div>
          </div>

          {/* Links Column */}
          <div className="flex flex-col gap-8">
            <h4 className="text-[20px] font-bold">Links</h4>
            <ul className="flex flex-col gap-4 text-[16px] text-[#666]">
              <li><a href="#curriculum" className="hover:text-[#ff7a00] transition-colors">Curriculum</a></li>
              <li><a href="#pricing" className="hover:text-[#ff7a00] transition-colors">Pricing</a></li>
              <li><a href="#testimonials" className="hover:text-[#ff7a00] transition-colors">Testimonials</a></li>
              <li><a href="#faqs" className="hover:text-[#ff7a00] transition-colors">FAQs</a></li>
              <li><a href="#contact" className="hover:text-[#ff7a00] transition-colors">Contact us</a></li>
            </ul>

            <div className="mt-8">
              <h5 className="text-[18px] font-bold mb-1">help@aiuni.com</h5>
              <p className="text-[14px] text-[#666]">For all your questions</p>
            </div>

            <div className="mt-4">
              <h5 className="text-[18px] font-bold mb-1">press@schoolofai.com</h5>
              <p className="text-[14px] text-[#666]">For all media inquiries</p>
            </div>
          </div>

          {/* Spacer for 3rd column if needed based on visual layout */}
          <div className="hidden lg:block" />

          {/* Others and Contact Info */}
          <div className="flex flex-col gap-8">
            <h4 className="text-[20px] font-bold">Others</h4>
            <ul className="flex flex-col gap-4 text-[16px] text-[#666]">
              <li><a href="/terms" className="hover:text-[#ff7a00] transition-colors">Terms of Service</a></li>
              <li><a href="/privacy" className="hover:text-[#ff7a00] transition-colors">Privacy Policy</a></li>
              <li><a href="/404" className="hover:text-[#ff7a00] transition-colors">404</a></li>
            </ul>

            <div className="mt-8">
              <h5 className="text-[18px] font-bold mb-1">+1 (464) 7315-0235</h5>
              <p className="text-[14px] text-[#666]">9am-8pm ET, Mon-Thu</p>
              <p className="text-[14px] text-[#666]">9am-6pm ET, Fri-Sun</p>
            </div>

            <div className="mt-4">
              <address className="not-italic text-[16px] text-[#666] leading-[1.6]">
                1509 Capitol Street<br />
                Suit #1092B, Kansas<br />
                MS 10921
              </address>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-[#e8e6e1] flex flex-col md:flex-row justify-between items-center gap-4 text-[14px] text-[#666]">
          <p>© 2025 Mindly.</p>
          <p>All Rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ src, alt }: { src: string; alt: string }) => (
  <a 
    href="#" 
    className="w-10 h-10 flex items-center justify-center bg-white rounded-lg border border-[#e8e6e1] hover:border-[#ff7a00] transition-all duration-200 group shadow-sm"
  >
    <Image 
      src={src} 
      alt={alt} 
      width={18} 
      height={18} 
      className="opacity-70 group-hover:opacity-100 transition-opacity"
    />
  </a>
);

export default Footer;