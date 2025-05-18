
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface PartnerLogoProps {
  name: string;
  logoSrc?: string | null;
  className?: string;
}

const PartnerLogo = ({ name, logoSrc, className }: PartnerLogoProps) => {
  // If no logo is provided, create a placeholder
  const firstLetter = name.charAt(0).toUpperCase();

  return (
    <div 
      className={cn(
        "bg-white rounded-lg p-3 sm:p-4 aspect-video flex items-center justify-center overflow-hidden shadow-sm border border-gray-100", 
        className
      )}
    >
      {logoSrc ? (
        <motion.div 
          className="relative w-full h-full flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <img 
            src={logoSrc}
            alt={`Logo ${name}`}
            className="max-h-12 sm:max-h-16 max-w-full object-contain"
          />
        </motion.div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50 text-gray-400">
          <div className="text-xl sm:text-3xl font-bold">{firstLetter}</div>
          <div className="text-xs sm:text-sm mt-1 sm:mt-2">{name}</div>
          <Badge variant="outline" className="mt-1 sm:mt-2 text-xs">Partenaire</Badge>
        </div>
      )}
    </div>
  );
};

export default PartnerLogo;
