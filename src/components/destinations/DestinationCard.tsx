
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

type DestinationCardProps = {
  title: string;
  country: string;
  imageSrc: string;
  description: string;
  idealDuration: string;
  bestTime: string;
  highlights: string[];
  slug: string;
  featured?: boolean;
};

const DestinationCard = ({
  title,
  country,
  imageSrc,
  description,
  idealDuration,
  bestTime,
  highlights,
  slug,
  featured = false,
}: DestinationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
        <div className="relative">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-48 object-cover" 
          />
          
          {featured && (
            <Badge className="absolute top-4 right-4 bg-secondary text-primary">
              Populaire
            </Badge>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            <Badge className="bg-white/20 text-white backdrop-blur-sm">
              {country}
            </Badge>
          </div>
        </div>
        
        <div className="p-5 flex-grow flex flex-col">
          <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
          
          <div className="space-y-3 mb-4 flex-grow">
            <div className="flex items-center text-sm">
              <Calendar className="h-4 w-4 text-primary mr-2" />
              <span>Durée idéale: {idealDuration}</span>
            </div>
            <div className="flex items-center text-sm">
              <Calendar className="h-4 w-4 text-primary mr-2" />
              <span>Meilleure période: {bestTime}</span>
            </div>
            
            <div className="pt-2">
              <p className="text-sm font-medium mb-2">Points forts:</p>
              <div className="flex flex-wrap gap-2">
                {highlights.slice(0, 3).map((highlight, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="text-xs font-normal"
                  >
                    {highlight}
                  </Badge>
                ))}
                {highlights.length > 3 && (
                  <Badge 
                    variant="outline" 
                    className="text-xs font-normal"
                  >
                    +{highlights.length - 3}
                  </Badge>
                )}
              </div>
            </div>
          </div>
          
          <Button asChild className="w-full mt-auto" variant="outline">
            <Link to={`/destinations/${slug}`}>
              Découvrir
            </Link>
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default DestinationCard;
