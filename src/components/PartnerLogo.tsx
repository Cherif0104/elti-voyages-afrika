
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
    <motion.div 
      className={cn(
        "bg-white rounded-xl p-3 sm:p-4 aspect-video flex items-center justify-center overflow-hidden shadow-sm border border-gray-100 transition-all duration-300", 
        className
      )}
      whileHover={{ 
        y: -5, 
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" 
      }}
    >
      {logoSrc ? (
        <div 
          className="relative w-full h-full flex items-center justify-center"
        >
          <motion.img 
            src={logoSrc}
            alt={`Logo ${name}`}
            className="max-h-12 sm:max-h-16 max-w-full object-contain"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
          />
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50 rounded-lg">
          <div className="text-xl sm:text-3xl font-bold text-gray-400">{firstLetter}</div>
          <div className="text-xs sm:text-sm mt-1 sm:mt-2 text-gray-500">{name}</div>
          <Badge variant="outline" className="mt-1 sm:mt-2 text-xs bg-white">Partenaire</Badge>
        </div>
      )}
    </motion.div>
  );
};

export default PartnerLogo;
