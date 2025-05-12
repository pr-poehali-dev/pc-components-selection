
import React from 'react';
import Icon from '@/components/ui/icon';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ConfigCardProps {
  title: string;
  price: string;
  description: string;
  items: string[];
  highlight?: boolean;
}

const ConfigCard: React.FC<ConfigCardProps> = ({ 
  title, 
  price, 
  description, 
  items, 
  highlight = false 
}) => {
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

export default ConfigCard;
