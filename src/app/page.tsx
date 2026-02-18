import Navbar from "@/components/sections/navbar";
import HeroSection from "@/components/sections/hero";
import ProblemsSection from "@/components/sections/problems";
import UniAISystem from "@/components/sections/uni-ai-system";
import CurriculumSection from "@/components/sections/curriculum";
import ResultsGrid from "@/components/sections/results-grid";
import TestimonialsSection from "@/components/sections/testimonials";
import InstructorSection from "@/components/sections/instructor";
import FAQSection from "@/components/sections/faqs";
import FinalCTA from "@/components/sections/final-cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProblemsSection />
      <UniAISystem />
      <CurriculumSection />
      <ResultsGrid />
      <TestimonialsSection />
      <InstructorSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
