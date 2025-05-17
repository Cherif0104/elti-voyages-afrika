
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
};

const ServiceCard = ({ icon, title, description, className }: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: "0 20px 25px rgba(0, 35, 102, 0.08)" }}
      transition={{ type: "spring", stiffness: 300 }}
      className={cn(
        "bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:border-primary/20 h-full",
        className
      )}
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-6 text-primary w-16 h-16 flex items-center justify-center bg-primary/5 rounded-full">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
