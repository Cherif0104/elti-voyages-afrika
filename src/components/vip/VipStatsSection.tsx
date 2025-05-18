
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Crown, Shield, Clock, Award } from "lucide-react";

const VipStatsSection = () => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, margin: "-100px" });
  
  // Stats data
  const stats = [
    { value: 24, label: "Service 24/7", icon: <Clock className="h-6 w-6 text-secondary" /> },
    { value: 15, label: "Années d'expérience", icon: <Crown className="h-6 w-6 text-secondary" /> },
    { value: 98, label: "Satisfaction client (%)", icon: <Award className="h-6 w-6 text-secondary" /> },
    { value: 100, label: "Confidentialité (%)", icon: <Shield className="h-6 w-6 text-secondary" /> }
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
    <section className="bg-white py-12 md:py-16 rounded-lg shadow-sm border border-gray-100">
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
              className="flex flex-col items-center text-center p-4"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-primary mb-2">
                {stat.value.toLocaleString()}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VipStatsSection;
