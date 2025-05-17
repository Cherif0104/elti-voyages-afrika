
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type PackageCardProps = {
  name: string;
  price: string;
  features: string[];
  isPremium?: boolean;
  className?: string;
};

const PackageCard = ({
  name,
  price,
  features,
  isPremium = false,
  className,
}: PackageCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={cn(
        "rounded-2xl overflow-hidden shadow-lg h-full flex flex-col",
        isPremium ? "border-2 border-secondary ring-2 ring-secondary/20" : "border border-gray-200",
        className
      )}
    >
      <div
        className={cn(
          "p-8",
          isPremium ? "bg-gradient-to-br from-primary to-primary-light" : "bg-white"
        )}
      >
        {isPremium && (
          <div className="flex items-center justify-center mb-3 gap-1">
            <Star className="h-5 w-5 text-secondary fill-secondary" />
            <span className="text-secondary text-sm font-bold uppercase tracking-wider">Premium</span>
          </div>
        )}
        
        <h3 className={cn(
          "text-2xl font-bold mb-3",
          isPremium ? "text-white" : "text-primary"
        )}>
          {name}
        </h3>
        
        <div className="flex items-end gap-1">
          <span className={cn(
            "text-4xl font-bold",
            isPremium ? "text-secondary" : "text-primary"
          )}>
            {price}
          </span>
          <span className={cn(
            "text-sm pb-1",
            isPremium ? "text-white/80" : "text-gray-500"
          )}>
            / personne
          </span>
        </div>
      </div>

      <div className="bg-white p-8 flex flex-col flex-grow">
        <ul className="space-y-4 mb-8 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className={`rounded-full p-1 ${isPremium ? 'bg-secondary/10 text-secondary' : 'bg-primary/10 text-primary'}`}>
                <Check className="h-4 w-4" />
              </div>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          asChild
          className={cn(
            "w-full py-6",
            isPremium
              ? "bg-secondary text-primary hover:bg-secondary/90 shadow-md shadow-secondary/20"
              : "bg-primary hover:bg-primary/90"
          )}
        >
          <a href="#reservation">Réserver</a>
        </Button>
      </div>
    </motion.div>
  );
};

export default PackageCard;
