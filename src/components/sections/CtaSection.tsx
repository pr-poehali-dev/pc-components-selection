
import React from 'react';
import { Button } from "@/components/ui/button";

const CtaSection: React.FC = () => {
  return (
    <section className="text-center py-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl text-white">
      <h2 className="text-3xl font-bold mb-4">Готовы собрать свой идеальный ПК?</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Выберите категорию выше или получите персональную консультацию наших специалистов
      </p>
      <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
        Получить консультацию
      </Button>
    </section>
  );
};

export default CtaSection;
