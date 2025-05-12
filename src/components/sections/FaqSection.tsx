
import React from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const FaqSection: React.FC = () => {
  const faqItems: FaqItem[] = [
    {
      question: "Могу ли я использовать конфигурацию игрового ПК для работы?",
      answer: "Да, игровые ПК обычно хорошо подходят и для работы благодаря мощным компонентам. Однако, если вам не нужны игры, можно оптимизировать конфигурацию и сэкономить."
    },
    {
      question: "Какие компоненты важнее всего для определенных задач?",
      answer: "Для игр важнее всего видеокарта и процессор. Для видеомонтажа — процессор и объем ОЗУ. Для работы с текстом и таблицами — достаточно базовых компонентов и SSD."
    },
    {
      question: "Стоит ли переплачивать за топовые комплектующие?",
      answer: "Зависит от ваших потребностей. Закон убывающей отдачи действует и здесь: прирост в 20% производительности может стоить в 2 раза дороже. Мы рекомендуем оптимальные варианты."
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
      
      <div className="max-w-3xl mx-auto">
        {faqItems.map((item, index) => (
          <div key={index} className="mb-4 border-b border-gray-200 pb-4">
            <h3 className="text-xl font-bold mb-2">{item.question}</h3>
            <p className="text-gray-600">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
