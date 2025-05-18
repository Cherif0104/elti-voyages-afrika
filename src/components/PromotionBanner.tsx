
import { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PromotionBannerProps {
  text: string;
  ctaText: string;
  ctaUrl: string;
  title?: string;         // Added optional title prop
  linkText?: string;      // Added optional linkText prop
  linkUrl?: string;       // Added optional linkUrl prop
  active?: boolean;       // Added optional active prop
}

const PromotionBanner = ({ 
  text, 
  ctaText, 
  ctaUrl,
  title,
  linkText,
  linkUrl,
  active = true
}: PromotionBannerProps) => {
  const [isVisible, setIsVisible] = useState(active);

  // If banner is closed or active is false, don't render
  if (!isVisible) return null;

  // Use the appropriate props, with fallbacks
  const displayText = text;
  const displayCtaText = linkText || ctaText;
  const displayCtaUrl = linkUrl || ctaUrl;

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-primary text-white py-3 px-4 relative z-50 text-center lg:pl-64"
    >
      <div className="container mx-auto flex items-center justify-center sm:justify-between">
        <p className="text-sm md:text-base">
          {title && <span className="font-semibold mr-1">{title}:</span>}
          {displayText}
        </p>
        
        <div className="hidden sm:flex items-center gap-4">
          <Link 
            to={displayCtaUrl}
            className="underline text-white hover:text-white/80 text-sm whitespace-nowrap"
          >
            {displayCtaText}
          </Link>
          
          <button
            onClick={() => setIsVisible(false)}
            className="hover:bg-white/10 rounded-full p-1 transition-colors"
            aria-label="Fermer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PromotionBanner;
