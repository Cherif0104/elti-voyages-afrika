
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plane, Clock } from "lucide-react";

interface FlightCardProps {
  departure: string;
  arrival: string;
  company: string;
  price: string;
  duration: string;
  logo: string;
}

const FlightCard = ({ departure, arrival, company, price, duration, logo }: FlightCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <img src={logo} alt={company} className="w-10 h-10 object-contain" />
            <span className="font-semibold text-primary">{company}</span>
          </div>
          <span className="text-2xl font-bold text-secondary">{price}</span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="text-center">
            <div className="font-bold text-lg">{departure}</div>
            <div className="text-gray-500 text-sm">Départ</div>
          </div>
          <div className="flex-1 mx-4">
            <div className="flex items-center">
              <Plane className="h-5 w-5 text-primary mx-2" />
              <div className="flex-1 border-t border-gray-300"></div>
            </div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg">{arrival}</div>
            <div className="text-gray-500 text-sm">Arrivée</div>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-600">
            <Clock className="h-4 w-4 mr-1" />
            <span className="text-sm">{duration}</span>
          </div>
          <Button asChild>
            <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
              Réserver
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FlightCard;
