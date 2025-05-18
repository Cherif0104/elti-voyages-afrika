
import { Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface CarCategoryCardProps {
  category: string;
  model: string;
  price: string;
  features: string[];
  imageClass?: string;
  imageSrc?: string;
}

const CarCategoryCard = ({ 
  category, 
  model, 
  price, 
  features, 
  imageClass = "bg-gray-200", 
  imageSrc 
}: CarCategoryCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
      <div className={`w-full h-36 sm:h-48 relative ${!imageSrc ? imageClass : ''}`}>
        {imageSrc && (
          <img 
            src={imageSrc} 
            alt={`${category} - ${model}`} 
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <CardContent className="p-4 sm:p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-bold text-primary">{category}</h3>
            <p className="text-sm text-gray-500">{model}</p>
          </div>
          <div className="text-xl font-bold text-secondary">{price}</div>
        </div>
        
        <Separator className="my-4" />
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="text-sm flex items-center">
              <span className="w-2 h-2 rounded-full bg-secondary mr-2 flex-shrink-0"></span>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="flex justify-end">
          <Button asChild variant="booking">
            <a href="#reservation">Réserver</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarCategoryCard;
