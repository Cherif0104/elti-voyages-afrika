
import { useEffect, useState } from "react";
import HeroSection from "@/components/can2025/HeroSection";
import OverviewSection from "@/components/can2025/OverviewSection";
import KeyDatesSection from "@/components/can2025/KeyDatesSection";
import NewsSection from "@/components/can2025/NewsSection";
import FaqSection from "@/components/can2025/FaqSection";
import ContactSection from "@/components/can2025/ContactSection";
import CtaSection from "@/components/can2025/CtaSection";

const Can2025 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <HeroSection />
      <OverviewSection />
      <KeyDatesSection />
      <NewsSection />
      <FaqSection />
      <ContactSection />
      <CtaSection />
    </>
  );
};

export default Can2025;
