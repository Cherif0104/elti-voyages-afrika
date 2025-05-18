
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building, Star, MapPin, Users } from "lucide-react";

const HotelStatsSection = () => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, margin: "-100px" });
  
  // Stats data
  const stats = [
    { value: 250, label: "Hôtels partenaires", icon: <Building className="h-6 w-6 text-secondary" /> },
    { value: 12, label: "Destinations", icon: <MapPin className="h-6 w-6 text-secondary" /> },
    { value: 5, label: "Note moyenne", suffix: "/5", icon: <Star className="h-6 w-6 text-secondary" /> },
    { value: 50000, label: "Clients satisfaits", icon: <Users className="h-6 w-6 text-secondary" /> }
  ];
  
  // Counter animation variants
  const counterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="bg-white py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div 
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={counterVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-gradient-to-br from-primary/5 to-primary/10"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-primary mb-2">
                {stat.value.toLocaleString()}{stat.suffix || ''}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelStatsSection;
