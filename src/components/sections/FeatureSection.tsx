
import React from 'react';
import Icon from '@/components/ui/icon';

const FeatureSection: React.FC = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-12">Как мы подбираем комплектующие</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard 
          icon="Target" 
          title="Анализ потребностей" 
          description="Определяем, какие приложения и задачи будут приоритетными для вашего компьютера" 
        />
        
        <FeatureCard 
          icon="Coins" 
          title="Оптимизация бюджета" 
          description="Находим баланс между стоимостью и производительностью для максимальной эффективности затрат" 
        />
        
        <FeatureCard 
          icon="Zap" 
          title="Совместимость" 
          description="Проверяем, что все компоненты совместимы друг с другом для стабильной работы" 
        />
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="bg-purple-100 w-16 h-16 mb-4 rounded-full flex items-center justify-center">
        <Icon name={icon} size={32} className="text-purple-600" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureSection;
