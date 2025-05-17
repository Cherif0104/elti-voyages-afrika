
import { Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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

  const prices = formatPrice(price);

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={cn(className)}
    >
      <div className={cn(
        "h-full flex flex-col overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border",
        isPremium ? "border-blue-400" : "border-gray-200"
      )}>
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
          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3 text-sm">
                <div className={cn(
                  "rounded-full p-1",
                  isPremium 
                    ? "text-blue-500 bg-blue-50" 
                    : "text-blue-600 bg-blue-50"
                )}>
                  <Check className="h-4 w-4" />
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

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
        </div>
      </div>
    </motion.div>
  );
};

export default CanPackCard;
