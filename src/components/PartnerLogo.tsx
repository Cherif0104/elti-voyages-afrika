
import { cn } from "@/lib/utils";

type PartnerLogoProps = {
  name: string;
  logoSrc?: string;
  className?: string;
};

const PartnerLogo = ({ name, logoSrc, className }: PartnerLogoProps) => {
  return (
    <div 
      className={cn(
        "flex items-center justify-center bg-white p-4 rounded-md shadow-sm border border-gray-100 aspect-[3/2]",
        className
      )}
    >
      {logoSrc ? (
        <img 
          src={logoSrc} 
          alt={`${name} logo`} 
          className="max-h-12 max-w-full object-contain"
        />
      ) : (
        <div className="text-gray-400 font-medium text-center">{name}</div>
      )}
    </div>
  );
};

export default PartnerLogo;
