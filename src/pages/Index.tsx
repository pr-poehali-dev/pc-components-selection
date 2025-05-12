
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Хедер */}
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

      {/* Основной контент */}
      <main className="container mx-auto px-4 py-12">
        {/* Секция выбора категории */}
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

        {/* Секция "Как мы подбираем" */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Как мы подбираем комплектующие</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-purple-100 w-16 h-16 mb-4 rounded-full flex items-center justify-center">
                <Icon name="Target" size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Анализ потребностей</h3>
              <p className="text-gray-600">Определяем, какие приложения и задачи будут приоритетными для вашего компьютера</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-purple-100 w-16 h-16 mb-4 rounded-full flex items-center justify-center">
                <Icon name="Coins" size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Оптимизация бюджета</h3>
              <p className="text-gray-600">Находим баланс между стоимостью и производительностью для максимальной эффективности затрат</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-purple-100 w-16 h-16 mb-4 rounded-full flex items-center justify-center">
                <Icon name="Zap" size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Совместимость</h3>
              <p className="text-gray-600">Проверяем, что все компоненты совместимы друг с другом для стабильной работы</p>
            </div>
          </div>
        </section>

        {/* Секция "Особенности нашего подхода" */}
        <section className="mb-16 bg-gradient-to-r from-purple-50 to-indigo-50 py-12 px-4 rounded-2xl">
          <h2 className="text-3xl font-bold text-center mb-12">Особенности нашего подхода</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-white rounded-full p-2 shadow-md">
                <Icon name="Check" size={24} className="text-green-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Актуальные компоненты</h3>
                <p className="text-gray-600">Мы следим за новинками рынка и предлагаем только актуальные и доступные комплектующие</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-white rounded-full p-2 shadow-md">
                <Icon name="Check" size={24} className="text-green-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Проверка совместимости</h3>
                <p className="text-gray-600">Все конфигурации проверены на совместимость компонентов между собой</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-white rounded-full p-2 shadow-md">
                <Icon name="Check" size={24} className="text-green-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Ориентация на задачи</h3>
                <p className="text-gray-600">Подбираем компоненты, исходя из реальных потребностей, а не маркетинговых материалов</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-white rounded-full p-2 shadow-md">
                <Icon name="Check" size={24} className="text-green-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Учёт будущих обновлений</h3>
                <p className="text-gray-600">Предлагаем конфигурации с возможностью апгрейда в будущем</p>
              </div>
            </div>
          </div>
        </section>

        {/* Секция FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="mb-4 border-b border-gray-200 pb-4">
              <h3 className="text-xl font-bold mb-2">Могу ли я использовать конфигурацию игрового ПК для работы?</h3>
              <p className="text-gray-600">Да, игровые ПК обычно хорошо подходят и для работы благодаря мощным компонентам. Однако, если вам не нужны игры, можно оптимизировать конфигурацию и сэкономить.</p>
            </div>
            
            <div className="mb-4 border-b border-gray-200 pb-4">
              <h3 className="text-xl font-bold mb-2">Какие компоненты важнее всего для определенных задач?</h3>
              <p className="text-gray-600">Для игр важнее всего видеокарта и процессор. Для видеомонтажа — процессор и объем ОЗУ. Для работы с текстом и таблицами — достаточно базовых компонентов и SSD.</p>
            </div>
            
            <div className="mb-4 border-b border-gray-200 pb-4">
              <h3 className="text-xl font-bold mb-2">Стоит ли переплачивать за топовые комплектующие?</h3>
              <p className="text-gray-600">Зависит от ваших потребностей. Закон убывающей отдачи действует и здесь: прирост в 20% производительности может стоить в 2 раза дороже. Мы рекомендуем оптимальные варианты.</p>
            </div>
          </div>
        </section>

        {/* CTA секция */}
        <section className="text-center py-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">Готовы собрать свой идеальный ПК?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Выберите категорию выше или получите персональную консультацию наших специалистов</p>
          <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
            Получить консультацию
          </Button>
        </section>
      </main>

      {/* Футер */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ПК Конфигуратор</h3>
              <p className="text-gray-300">Помогаем подобрать идеальный компьютер под ваши задачи с 2023 года</p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Категории</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Игровые ПК</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Рабочие станции</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">ПК для дизайна</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Учебные компьютеры</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Полезные ссылки</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">О нас</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Блог</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Сравнение компонентов</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Контакты</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} className="text-gray-300" />
                  <a href="mailto:info@pcconfig.ru" className="text-gray-300 hover:text-white">info@pcconfig.ru</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} className="text-gray-300" />
                  <a href="tel:+78001234567" className="text-gray-300 hover:text-white">8 (800) 123-45-67</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© 2023-2025 ПК Конфигуратор. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Компонент карточки конфигурации
const ConfigCard = ({ title, price, description, items, highlight = false }) => {
  return (
    <Card className={`overflow-hidden ${highlight ? 'border-purple-500 ring-2 ring-purple-500 ring-opacity-50' : ''}`}>
      <CardHeader className={`${highlight ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white' : 'bg-gray-50'}`}>
        <CardTitle>{title}</CardTitle>
        <CardDescription className={highlight ? 'text-gray-100' : ''}>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="text-2xl font-bold mb-4">{price}</p>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <Icon name="CheckCircle" size={20} className="text-green-500 mt-0.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className={`w-full ${highlight ? 'bg-purple-600 hover:bg-purple-700' : ''}`}>
          Подробнее
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Index;
