
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "full" | "icon";
}

const Logo = ({ className, size = "md", variant = "full" }: LogoProps) => {
  const sizes = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-10 w-10",
  };
  
  const fullLogoSizes = {
    sm: "h-6",
    md: "h-8",
    lg: "h-10",
  };
  
  return (
    <div className={cn("flex items-center", className)}>
      {variant === "icon" ? (
        <img 
          src="/lovable-uploads/56e41311-f7d0-403c-9283-eb68ac5cf2d6.png" 
          alt="ELTI VOYAGE Logo" 
          className={cn(sizes[size])}
        />
      ) : (
        <img 
          src="/lovable-uploads/56e41311-f7d0-403c-9283-eb68ac5cf2d6.png" 
          alt="ELTI VOYAGE Logo" 
          className={cn(fullLogoSizes[size])}
        />
      )}
    </div>
  );
};

export default Logo;
