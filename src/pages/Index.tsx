
import React from "react";
import Header from "@/components/sections/Header";
import CategorySection from "@/components/sections/CategorySection";
import FeatureSection from "@/components/sections/FeatureSection";
import ApproachSection from "@/components/sections/ApproachSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaSection from "@/components/sections/CtaSection";
import Footer from "@/components/sections/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Хедер */}
      <Header />

      {/* Основной контент */}
      <main className="container mx-auto px-4 py-12">
        {/* Секция выбора категории */}
        <CategorySection />

        {/* Секция "Как мы подбираем" */}
        <FeatureSection />

        {/* Секция "Особенности нашего подхода" */}
        <ApproachSection />

        {/* Секция FAQ */}
        <FaqSection />

        {/* CTA секция */}
        <CtaSection />
      </main>

      {/* Футер */}
      <Footer />
    </div>
  );
};

export default Index;
