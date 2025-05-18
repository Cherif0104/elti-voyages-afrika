
import { Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CanPackCardProps {
  title: string;
  price: string;
  features: string[];
  isPremium?: boolean;
  className?: string;
}

const CanPackCard = ({
  title,
  price,
  features,
  isPremium = false,
  className,
}: CanPackCardProps) => {
  // Animations for features list
  const featureVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.5,
      },
    }),
  };

  const formatPrice = (price: string) => {
    // Convert price string to number, replace spaces
    const numericPrice = parseInt(price.replace(/\s/g, ""), 10);
    
    // Calculate EUR value (approximate conversion rate 655.957 FCFA = 1 EUR)
    const eurValue = Math.round(numericPrice / 655.957);
    
    // Format FCFA with spaces for thousand separators
    const formattedFCFA = numericPrice.toLocaleString("fr-FR");
    
    return {
      fcfa: `${formattedFCFA} FCFA`,
      eur: `${eurValue.toLocaleString("fr-FR")} €`
    };
  };

  const [showShine, setShowShine] = useState(false);
  
  // Shine effect animation
  useEffect(() => {
    if (isPremium) {
      const interval = setInterval(() => {
        setShowShine(true);
        
        // Reset the animation after it completes
        setTimeout(() => {
          setShowShine(false);
        }, 1500);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [isPremium]);
  
  const prices = formatPrice(price);

  return (
    <div className={cn(
      "h-full relative transform perspective-1000", 
      className,
      isPremium && "z-10"
    )}>
      <div className={cn(
        "h-full flex flex-col overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 border relative",
        isPremium ? "border-blue-400" : "border-gray-200"
      )}>
        {/* Shine effect for premium card */}
        {isPremium && showShine && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shine pointer-events-none" />
        )}
        
        {/* Premium badge */}
        {isPremium && (
          <div className="absolute -top-3 -right-3">
            <motion.div
              initial={{ rotate: -15, scale: 0.8 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="bg-blue-500 text-white text-xs font-bold uppercase py-1 px-3 rounded-full shadow-lg transform rotate-12"
            >
              Recommandé
            </motion.div>
          </div>
        )}
        
        <div className={cn(
          "p-6",
          isPremium 
            ? "bg-gradient-to-br from-blue-800 to-blue-500 text-white" 
            : "bg-white text-gray-800"
        )}>
          {isPremium && (
            <div className="flex items-center gap-1 mb-2">
              <Star className="h-5 w-5 text-blue-200 fill-blue-200" />
              <span className="text-blue-200 text-sm font-bold uppercase">Premium</span>
            </div>
          )}
          
          <h3 className="text-2xl font-bold mb-4">
            {title}
          </h3>
          
          <div className="flex flex-col items-start">
            <span className="text-3xl font-bold">
              {prices.eur}
            </span>
            <span className="text-sm opacity-80 mt-1">
              {prices.fcfa} / personne
            </span>
          </div>
        </div>

        <div className={cn(
          "flex-grow p-6 bg-white",
          isPremium ? "border-t border-blue-200" : ""
        )}>
          <motion.ul 
            initial="hidden"
            animate="visible"
            className="space-y-3 mb-6"
          >
            {features.map((feature, index) => (
              <motion.li 
                key={index} 
                className="flex items-center gap-3 text-sm"
                custom={index}
                variants={featureVariants}
              >
                <div className={cn(
                  "rounded-full p-1",
                  isPremium 
                    ? "text-blue-500 bg-blue-50" 
                    : "text-blue-600 bg-blue-50"
                )}>
                  <Check className="h-4 w-4" />
                </div>
                <span>{feature}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button
              className={cn(
                "w-full mt-auto",
                isPremium
                  ? "bg-blue-400 hover:bg-blue-500 text-white" 
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              )}
              asChild
            >
              <a href="#reservation">Réserver</a>
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Shadow effect for premium card */}
      {isPremium && (
        <div className="absolute -inset-1 bg-blue-500/20 rounded-xl blur -z-10" />
      )}
    </div>
  );
};

export default CanPackCard;
