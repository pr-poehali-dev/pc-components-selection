
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from '@/components/ui/icon';
import ConfigCard from '@/components/ConfigCard';

const CategorySection: React.FC = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-12">Для каких задач вам нужен компьютер?</h2>
      
      <Tabs defaultValue="gaming" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <TabsTrigger value="gaming" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white p-4">
            <div className="flex flex-col items-center gap-2">
              <Icon name="Gamepad2" size={24} />
              <span>Игры</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="work" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white p-4">
            <div className="flex flex-col items-center gap-2">
              <Icon name="Briefcase" size={24} />
              <span>Работа</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="design" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white p-4">
            <div className="flex flex-col items-center gap-2">
              <Icon name="PenTool" size={24} />
              <span>Дизайн</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="study" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white p-4">
            <div className="flex flex-col items-center gap-2">
              <Icon name="GraduationCap" size={24} />
              <span>Учеба</span>
            </div>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="gaming">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ConfigCard
              title="Базовый игровой ПК"
              price="от 60 000 ₽"
              description="Для игр в разрешении Full HD на средних настройках"
              items={[
                "Процессор: AMD Ryzen 5 5600X / Intel Core i5-11400F",
                "Видеокарта: NVIDIA GeForce GTX 1660 Super",
                "ОЗУ: 16 GB DDR4"
              ]}
            />
            <ConfigCard
              title="Продвинутый игровой ПК"
              price="от 120 000 ₽"
              description="Для игр в разрешении WQHD на высоких настройках"
              items={[
                "Процессор: AMD Ryzen 7 5800X3D / Intel Core i7-12700K",
                "Видеокарта: NVIDIA GeForce RTX 3070 Ti",
                "ОЗУ: 32 GB DDR4"
              ]}
              highlight={true}
            />
            <ConfigCard
              title="Мощный игровой ПК"
              price="от 200 000 ₽"
              description="Для игр в 4K на максимальных настройках"
              items={[
                "Процессор: AMD Ryzen 9 7950X / Intel Core i9-13900K",
                "Видеокарта: NVIDIA GeForce RTX 4080",
                "ОЗУ: 32 GB DDR5"
              ]}
            />
          </div>
        </TabsContent>

        <TabsContent value="work">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ConfigCard
              title="Офисный ПК"
              price="от 40 000 ₽"
              description="Для работы с документами и интернетом"
              items={[
                "Процессор: AMD Ryzen 3 4100 / Intel Core i3-12100",
                "Интегрированная графика",
                "ОЗУ: 8 GB DDR4"
              ]}
            />
            <ConfigCard
              title="Рабочая станция"
              price="от 90 000 ₽"
              description="Для многозадачной работы и программирования"
              items={[
                "Процессор: AMD Ryzen 7 5700X / Intel Core i5-12600K",
                "Видеокарта: NVIDIA GeForce RTX 3060",
                "ОЗУ: 32 GB DDR4"
              ]}
              highlight={true}
            />
            <ConfigCard
              title="Профессиональная станция"
              price="от 180 000 ₽"
              description="Для виртуализации и серверных задач"
              items={[
                "Процессор: AMD Ryzen 9 7900X / Intel Core i9-12900K",
                "Видеокарта: NVIDIA RTX A4000",
                "ОЗУ: 64 GB DDR5"
              ]}
            />
          </div>
        </TabsContent>

        <TabsContent value="design">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ConfigCard
              title="Базовый для дизайна"
              price="от 80 000 ₽"
              description="Для работы в Photoshop и Illustrator"
              items={[
                "Процессор: AMD Ryzen 5 5600X / Intel Core i5-12400",
                "Видеокарта: NVIDIA GeForce RTX 3060",
                "ОЗУ: 16 GB DDR4"
              ]}
            />
            <ConfigCard
              title="Станция для 3D"
              price="от 150 000 ₽"
              description="Для работы в 3D-редакторах и визуализации"
              items={[
                "Процессор: AMD Ryzen 9 5900X / Intel Core i7-12700K",
                "Видеокарта: NVIDIA GeForce RTX 3080",
                "ОЗУ: 32 GB DDR4"
              ]}
              highlight={true}
            />
            <ConfigCard
              title="Профессиональный для VFX"
              price="от 250 000 ₽"
              description="Для сложных проектов и видеомонтажа"
              items={[
                "Процессор: AMD Threadripper Pro / Intel Xeon W",
                "Видеокарта: NVIDIA RTX A5000",
                "ОЗУ: 128 GB DDR5 ECC"
              ]}
            />
          </div>
        </TabsContent>

        <TabsContent value="study">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ConfigCard
              title="Учебный ПК"
              price="от 35 000 ₽"
              description="Для учебы и простых задач"
              items={[
                "Процессор: AMD Ryzen 3 3300X / Intel Core i3-10100",
                "Интегрированная графика",
                "ОЗУ: 8 GB DDR4"
              ]}
              highlight={true}
            />
            <ConfigCard
              title="Для студентов ИТ"
              price="от 70 000 ₽"
              description="Для программирования и виртуализации"
              items={[
                "Процессор: AMD Ryzen 5 5600G / Intel Core i5-11600K",
                "Видеокарта: NVIDIA GeForce GTX 1660 Super",
                "ОЗУ: 16 GB DDR4"
              ]}
            />
            <ConfigCard
              title="Универсальный"
              price="от 100 000 ₽"
              description="Для учебы и развлечений"
              items={[
                "Процессор: AMD Ryzen 7 5700X / Intel Core i7-11700",
                "Видеокарта: NVIDIA GeForce RTX 3060 Ti",
                "ОЗУ: 32 GB DDR4"
              ]}
            />
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default CategorySection;
