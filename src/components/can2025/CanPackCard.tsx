
import { Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
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
  const controls = useAnimation();
  
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
  
  // Shine effect animation that occurs periodically
  useEffect(() => {
    if (isPremium) {
      // Initial shine effect
      setTimeout(() => setShowShine(true), 1000);
      
      // Repeating shine effect every 5 seconds
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
  
  // Premium badge animation
  const badgeVariants = {
    initial: { rotate: -15, scale: 0.8, opacity: 0 },
    animate: { 
      rotate: 0, 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.5, 
        type: "spring",
        stiffness: 200
      }
    },
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, -3, 3, 0],
      transition: {
        duration: 0.6,
        type: "spring",
      },
    }
  };
  
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
        {/* Animated shine effect for premium card */}
        {isPremium && showShine && (
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full z-10 pointer-events-none"
            initial={{ x: '-100%', opacity: 0.5 }}
            animate={{ x: '100%', opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            onAnimationComplete={() => {
              setShowShine(false);
            }}
          />
        )}
        
        {/* Premium badge with animation */}
        {isPremium && (
          <div className="absolute -top-3 -right-3 z-10">
            <motion.div
              variants={badgeVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              className="bg-gradient-to-r from-blue-600 to-blue-400 text-white text-xs font-bold uppercase py-1 px-3 rounded-full shadow-lg transform"
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
            <motion.div 
              className="flex items-center gap-1 mb-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Star className="h-5 w-5 text-blue-200 fill-blue-200" />
              <span className="text-blue-200 text-sm font-bold uppercase">Premium</span>
            </motion.div>
          )}
          
          <h3 className="text-2xl font-bold mb-4">
            {title}
          </h3>
          
          <motion.div 
            className="flex flex-col items-start"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="text-3xl font-bold">
              {prices.eur}
            </span>
            <span className="text-sm opacity-80 mt-1">
              {prices.fcfa} / personne
            </span>
          </motion.div>
        </div>

        <div className={cn(
          "flex-grow p-6 bg-white",
          isPremium ? "border-t border-blue-200" : ""
        )}>
          <motion.ul 
            initial="hidden"
            animate="visible"
            className="space-y-3 mb-6"
            onViewportEnter={() => controls.start("visible")}
          >
            {features.map((feature, index) => (
              <motion.li 
                key={index} 
                className="flex items-center gap-3 text-sm"
                custom={index}
                variants={featureVariants}
              >
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: [0, -10, 10, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                  className={cn(
                    "rounded-full p-1",
                    isPremium 
                      ? "text-blue-500 bg-blue-50" 
                      : "text-blue-600 bg-blue-50"
                  )}
                >
                  <Check className="h-4 w-4" />
                </motion.div>
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
                "w-full mt-auto relative overflow-hidden",
                isPremium
                  ? "bg-blue-400 hover:bg-blue-500 text-white" 
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              )}
              asChild
            >
              <a href="#reservation">
                Réserver
                {/* Button shine effect on hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] skew-x-[-15deg] group-hover:animate-shine" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Enhanced shadow effect for premium card */}
      {isPremium && (
        <motion.div 
          className="absolute -inset-1 bg-blue-500/20 rounded-xl blur -z-10"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      )}
    </div>
  );
};

export default CanPackCard;
