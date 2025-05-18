
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type PartnerLogoProps = {
  name: string;
  logoSrc?: string;
  className?: string;
};

const PartnerLogo = ({ name, logoSrc, className }: PartnerLogoProps) => {
  // Determine which logos need to be zoomed
  const needsZoom = ["Turkish Airlines", "Air Sénégal", "Royal Air Maroc"].includes(name);
  
  return (
    <motion.div 
      whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 35, 102, 0.1)" }}
      transition={{ duration: 0.3 }}
      className={cn(
        "flex items-center justify-center bg-white p-6 rounded-xl overflow-hidden border border-gray-100 aspect-[3/2] hover:border-primary/20",
        className
      )}
    >
      {logoSrc ? (
        <img 
          src={logoSrc} 
          alt={`${name} logo`} 
          className={cn(
            "max-h-14 max-w-full object-contain transition-transform duration-300",
            needsZoom && "scale-125 hover:scale-[1.35]"
          )}
        />
      ) : (
        <div className="text-gray-400 font-medium text-center">{name}</div>
      )}
    </motion.div>
  );
};

export default PartnerLogo;
