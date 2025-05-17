
import { useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type PromotionBannerProps = {
  title: string;
  text: string;
  linkText?: string;
  linkUrl?: string;
  active?: boolean;
  className?: string;
};

const PromotionBanner = ({
  title,
  text,
  linkText,
  linkUrl = "#",
  active = true,
  className,
}: PromotionBannerProps) => {
  const [isVisible, setIsVisible] = useState(active);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={cn(
        "bg-gradient-to-r from-primary to-primary-light text-white p-3 relative animate-fade-in",
        className
      )}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between px-4">
        <div className="flex flex-col md:flex-row items-center mb-2 md:mb-0">
          <span className="font-bold mr-2">{title}</span>
          <span className="text-sm text-center md:text-left">{text}</span>
        </div>
        {linkText && (
          <a
            href={linkUrl}
            className="text-secondary hover:text-secondary/80 font-bold text-sm underline transition-colors"
          >
            {linkText}
          </a>
        )}
      </div>

      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-white/80 hover:text-white"
        aria-label="Fermer"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default PromotionBanner;
