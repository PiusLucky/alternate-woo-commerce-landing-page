import NavBar from "@/components/common/NavBar";
import FirstFeatureSection from "@/components/sections/FirstFeatureSection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import SecondFeatureSection from "@/components/sections/SecondFeatureSection";
import SupportSection from "@/components/sections/SupportSection";
import TestimonialSection from "@/components/sections/TestimonialSection";

export default function Home() {
  return (
    <main className="gradient">
      <NavBar />
      <div className="mx-4 md:mx-0 flex flex-col gap-16 md:gap-[10rem]">
        <HeroSection />
        <FirstFeatureSection />
        <SecondFeatureSection />
        <TestimonialSection />
      </div>
      <div className="flex flex-col mt-8">
        <SupportSection />
        <FooterSection />
      </div>
    </main>
  );
}
