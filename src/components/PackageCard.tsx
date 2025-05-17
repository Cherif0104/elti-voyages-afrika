
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <div
      className={cn(
        "rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105",
        isPremium ? "border-2 border-secondary" : "border border-gray-200",
        className
      )}
    >
      <div
        className={cn(
          "p-6",
          isPremium ? "bg-gradient-to-br from-primary to-primary-light" : "bg-white"
        )}
      >
        <h3 className={cn(
          "text-xl font-bold mb-2",
          isPremium ? "text-white" : "text-primary"
        )}>
          {name}
        </h3>
        <div className="flex items-end gap-1">
          <span className={cn(
            "text-3xl font-bold",
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

      <div className="bg-white p-6">
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          asChild
          className={cn(
            "w-full",
            isPremium
              ? "bg-secondary text-primary hover:bg-secondary/90"
              : "bg-primary hover:bg-primary/90"
          )}
        >
          <a href="#reservation">Réserver</a>
        </Button>
      </div>
    </div>
  );
};

export default PackageCard;
