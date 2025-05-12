
import React from 'react';
import Icon from '@/components/ui/icon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ПК Конфигуратор</h3>
            <p className="text-gray-300">Помогаем подобрать идеальный компьютер под ваши задачи с 2023 года</p>
          </div>
          
          <FooterLinks 
            title="Категории" 
            links={[
              { label: "Игровые ПК", url: "#" },
              { label: "Рабочие станции", url: "#" },
              { label: "ПК для дизайна", url: "#" },
              { label: "Учебные компьютеры", url: "#" }
            ]}
          />
          
          <FooterLinks 
            title="Полезные ссылки" 
            links={[
              { label: "О нас", url: "#" },
              { label: "Блог", url: "#" },
              { label: "Сравнение компонентов", url: "#" },
              { label: "Контакты", url: "#" }
            ]}
          />
          
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
  );
};

interface FooterLink {
  label: string;
  url: string;
}

interface FooterLinksProps {
  title: string;
  links: FooterLink[];
}

const FooterLinks: React.FC<FooterLinksProps> = ({ title, links }) => {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} className="text-gray-300 hover:text-white">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
