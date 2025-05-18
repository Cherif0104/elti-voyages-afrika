
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronRight, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PromotionBannerProps {
  text: string;
  ctaText?: string;  
  ctaUrl?: string;   
  title?: string;
  linkText?: string;
  linkUrl?: string;
  active?: boolean;
}

const PromotionBanner = ({ 
  text, 
  ctaText = "En savoir plus",  // Default value
  ctaUrl = "#",               // Default value
  title,
  linkText,
  linkUrl,
  active = true
}: PromotionBannerProps) => {
  const [isVisible, setIsVisible] = useState(active);
  const [currentPromoIndex, setCurrentPromoIndex] = useState(0);
  
  const promotions = [
    { text: text, title: title || "Offre Spéciale" },
    { text: "Réservez vos vols pour le Maroc à partir de 199€", title: "Offre Spéciale" },
    { text: "20% de réduction sur les réservations d'hôtels", title: "Économisez" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromoIndex((prev) => (prev + 1) % promotions.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // If banner is closed or active is false, don't render
  if (!isVisible) return null;

  // Use the appropriate props, with fallbacks
  const displayText = promotions[currentPromoIndex].text;
  const displayTitle = promotions[currentPromoIndex].title;
  const displayCtaText = linkText || ctaText;
  const displayCtaUrl = linkUrl || ctaUrl;

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-primary via-primary to-secondary text-white py-3 px-4 relative z-50 text-center lg:pl-64"
    >
      <div className="container mx-auto flex items-center justify-center sm:justify-between">
        <div className="flex items-center">
          <Bell className="h-5 w-5 mr-3 animate-pulse text-secondary" />
          <p className="text-sm md:text-base font-medium">
            {displayTitle && <span className="font-bold mr-1 text-secondary">{displayTitle}:</span>}
            {displayText}
          </p>
        </div>
        
        <div className="hidden sm:flex items-center gap-4">
          <Link 
            to={displayCtaUrl}
            className="flex items-center text-white hover:text-white/80 text-sm whitespace-nowrap font-medium bg-secondary text-primary px-4 py-1.5 rounded-full hover:bg-secondary/90 transition-all"
          >
            {displayCtaText}
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
          
          <button
            onClick={() => setIsVisible(false)}
            className="hover:bg-white/10 rounded-full p-1 transition-colors"
            aria-label="Fermer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      {/* Progress indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <motion.div 
          className="h-full bg-secondary"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
        />
      </div>
    </motion.div>
  );
};

export default PromotionBanner;
