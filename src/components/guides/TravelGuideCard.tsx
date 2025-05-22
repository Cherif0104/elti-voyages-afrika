
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";

type TravelGuideCardProps = {
  title: string;
  location: string;
  date: string;
  author: string;
  excerpt: string;
  imageSrc: string;
  slug: string;
};

const TravelGuideCard = ({
  title,
  location,
  date,
  author,
  excerpt,
  imageSrc,
  slug,
}: TravelGuideCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
        <div className="h-48 relative overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
          />
        </div>
        
        <div className="p-5">
          <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
            <div className="flex items-center">
              <MapPin className="h-3.5 w-3.5 mr-1" />
              <span>{location}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-3.5 w-3.5 mr-1" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <User className="h-3.5 w-3.5 mr-1" />
              <span>{author}</span>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{excerpt}</p>
          
          <Button asChild variant="outline" className="w-full">
            <Link to={`/guides/${slug}`}>
              Lire plus
            </Link>
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default TravelGuideCard;
