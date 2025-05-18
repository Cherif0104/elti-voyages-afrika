
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "full" | "icon";
}

const Logo = ({ className, size = "md", variant = "full" }: LogoProps) => {
  const sizes = {
    sm: "h-6 w-auto",
    md: "h-8 w-auto",
    lg: "h-10 w-auto",
  };
  
  const fullLogoSizes = {
    sm: "h-6",
    md: "h-8",
    lg: "h-10",
  };
  
  return (
    <motion.div 
      className={cn("flex items-center", className)}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {variant === "icon" ? (
        <motion.img 
          src="/lovable-uploads/fd272279-e262-4ebd-bb4d-91afea09c86d.png" 
          alt="ELTI VOYAGE Logo" 
          className={cn(sizes[size])}
          initial={{ rotate: -5 }}
          whileHover={{ rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      ) : (
        <motion.img 
          src="/lovable-uploads/fd272279-e262-4ebd-bb4d-91afea09c86d.png" 
          alt="ELTI VOYAGE Logo" 
          className={cn(fullLogoSizes[size])}
          whileHover={{ scale: 1.05 }}
        />
      )}
    </motion.div>
  );
};

export default Logo;
