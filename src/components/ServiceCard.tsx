
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
};

const ServiceCard = ({ icon, title, description, className }: ServiceCardProps) => {
  return (
    <div className={cn(
      "bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg fade-in",
      className
    )}>
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 text-primary w-14 h-14 flex items-center justify-center bg-primary/5 rounded-full">
          {icon}
        </div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
