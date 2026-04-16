import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import PhilosophySection from "@/components/home/PhilosophySection";
import ClassesSection from "@/components/home/ClassesSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import RetreatsSection from "@/components/home/RetreatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import StatsSection from "@/components/home/StatsSection";
import CtaSection from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "Yoga Lam Hương — Luxury Yoga Retreat & Shop | Vietnam",
  description:
    "Khám phá Yoga Lam Hương — điểm đến yoga cao cấp tại Việt Nam. Khóa học yoga, retreat xa hoa, thảm yoga và đồ yoga chất lượng cao. Bắt đầu hành trình tỉnh thức của bạn ngay hôm nay.",
  alternates: { canonical: "https://yogalamhuong.vn" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <ClassesSection />
      <FeaturedProducts />
      <RetreatsSection />
      <TestimonialsSection />
      <StatsSection />
      <CtaSection />
    </>
  );
}
