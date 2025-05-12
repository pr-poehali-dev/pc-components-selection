
import React from 'react';
import Icon from '@/components/ui/icon';

const ApproachSection: React.FC = () => {
  const approaches = [
    {
      title: "Актуальные компоненты",
      description: "Мы следим за новинками рынка и предлагаем только актуальные и доступные комплектующие"
    },
    {
      title: "Проверка совместимости",
      description: "Все конфигурации проверены на совместимость компонентов между собой"
    },
    {
      title: "Ориентация на задачи",
      description: "Подбираем компоненты, исходя из реальных потребностей, а не маркетинговых материалов"
    },
    {
      title: "Учёт будущих обновлений",
      description: "Предлагаем конфигурации с возможностью апгрейда в будущем"
    }
  ];

  return (
    <section className="mb-16 bg-gradient-to-r from-purple-50 to-indigo-50 py-12 px-4 rounded-2xl">
      <h2 className="text-3xl font-bold text-center mb-12">Особенности нашего подхода</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {approaches.map((approach, index) => (
          <ApproachItem 
            key={index}
            title={approach.title} 
            description={approach.description} 
          />
        ))}
      </div>
    </section>
  );
};

interface ApproachItemProps {
  title: string;
  description: string;
}

const ApproachItem: React.FC<ApproachItemProps> = ({ title, description }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-white rounded-full p-2 shadow-md">
        <Icon name="Check" size={24} className="text-green-500" />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ApproachSection;
