
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeInUp, hoverScale } from "./AnimationUtils";
import { useRef } from "react";

const CtaSection = () => {
  const ctaRef = useRef(null);
  const isInView = useInView(ctaRef, { once: true, margin: "-100px" });
  
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(49, 168, 224, 0.4)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    },
    tap: { 
      scale: 0.95,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    }
  };

  return (
    <section className="py-24 lg:pl-64 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-primary opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }} />
      </div>
      
      <div ref={ctaRef} className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }} 
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-primary mb-6"
          >
            Prêt à vivre la CAN 2025 au Maroc ?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 text-lg mb-10"
          >
            Réservez dès maintenant votre pack supporter et vivez des moments inoubliables 
            au cœur du football africain.
          </motion.p>
          <motion.div
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              to="#reservation"
              className="bg-secondary text-white hover:bg-secondary/90 text-lg px-10 py-5 rounded-lg transition-all duration-300 inline-block shadow-lg shadow-secondary/20 relative overflow-hidden group"
            >
              <span className="relative z-10">Réserver mon pack</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shine" />
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute -left-10 top-10 w-24 h-24 rounded-full bg-primary/5"
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -right-10 bottom-10 w-16 h-16 rounded-full bg-secondary/5"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
    </section>
  );
};

export default CtaSection;
