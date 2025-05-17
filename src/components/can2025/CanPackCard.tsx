
import { Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
    
    // Format with spaces for thousand separators
    return numericPrice.toLocaleString("fr-FR") + " FCFA";
  };

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={cn(className)}
    >
      <Card className={cn(
        "overflow-hidden h-full flex flex-col border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition duration-300",
        isPremium ? "border-2 border-yellow-400 ring-2 ring-yellow-400/20" : ""
      )}>
        <div className={cn(
          "p-6",
          isPremium ? "bg-gradient-to-br from-blue-800 to-blue-700" : "bg-white"
        )}>
          {isPremium && (
            <div className="flex items-center justify-center mb-3 gap-1">
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <span className="text-yellow-400 text-sm font-bold uppercase tracking-wider">Premium</span>
            </div>
          )}
          
          <h3 className={cn(
            "text-xl font-semibold mb-3",
            isPremium ? "text-white" : "text-blue-800"
          )}>
            {title}
          </h3>
          
          <div className="flex items-end gap-1">
            <span className={cn(
              "text-2xl font-bold",
              isPremium ? "text-yellow-400" : "text-red-600"
            )}>
              {formatPrice(price)}
            </span>
            <span className={cn(
              "text-sm pb-1",
              isPremium ? "text-white/80" : "text-gray-500"
            )}>
              / personne
            </span>
          </div>
        </div>

        <div className="bg-white p-6 flex flex-col flex-grow">
          <ul className="text-left text-sm text-gray-700 mb-6 space-y-2 flex-grow">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className={`rounded-full p-1 ${isPremium ? 'bg-yellow-400/10 text-yellow-500' : 'bg-blue-800/10 text-blue-800'}`}>
                  <Check className="h-4 w-4" />
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <Button
            size="lg"
            className={cn(
              "w-full font-semibold",
              isPremium
                ? "bg-yellow-400 text-blue-900 hover:bg-yellow-300"
                : "bg-blue-800 hover:bg-blue-700"
            )}
            asChild
          >
            <a href="#reservation">Réserver</a>
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default CanPackCard;
