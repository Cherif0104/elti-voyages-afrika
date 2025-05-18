import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeInUp, hoverScale } from "./AnimationUtils";
import { useRef } from "react";
import { CalendarDays, ArrowRight, Star, User } from "lucide-react";

const CtaSection = () => {
  const ctaRef = useRef(null);
  const isInView = useInView(ctaRef, { once: true, margin: "-100px" });
  
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(77, 166, 255, 0.5)",
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
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-primary to-primary/90 text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }} />
      </div>
      
      <div ref={ctaRef} className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-4 border border-white/20"
          >
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              Été 2025
            </div>
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }} 
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Prêt à vivre la CAN 2025 au Maroc ?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/90 text-lg md:text-xl mb-10"
          >
            Réservez dès maintenant votre pack supporter et vivez des moments inoubliables 
            au cœur du football africain.
          </motion.p>
          
          <motion.div
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="#reservation"
              className="bg-secondary text-white hover:bg-secondary/90 text-lg px-10 py-5 rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg shadow-secondary/30 relative overflow-hidden group"
            >
              <span className="relative z-10">Réserver mon pack</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shine" />
            </Link>
            
            <Link
              to="/contact"
              className="bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 text-lg px-10 py-5 rounded-lg transition-all duration-300 inline-block"
            >
              En savoir plus
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Testimonial accent element */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="max-w-sm mx-auto mt-16 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-lg"
        >
          <div className="flex items-center gap-1 text-secondary mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-secondary" />
            ))}
          </div>
          <p className="text-white/90 italic mb-4">
            "Une organisation impeccable pour la CAN. Notre voyage était parfaitement planifié et l'expérience était inoubliable."
          </p>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
              <User className="h-6 w-6" />
            </div>
            <div>
              <p className="font-medium">Ahmed K.</p>
              <p className="text-sm text-white/70">Client satisfait</p>
            </div>
          </div>
        </motion.div>
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute -left-10 top-10 w-24 h-24 rounded-full bg-white/5"
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
          className="absolute -right-10 bottom-10 w-16 h-16 rounded-full bg-secondary/20"
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
