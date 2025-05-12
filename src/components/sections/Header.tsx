
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Подбор комплектующих ПК</h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Выберите оптимальную конфигурацию под ваши задачи
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
