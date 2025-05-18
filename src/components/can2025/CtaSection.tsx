
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeInUp, hoverScale } from "./AnimationUtils";
import { useRef } from "react";
import { Phone, Calendar } from "lucide-react";

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
    <section className="py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/90 opacity-95 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }} />
      </div>
      
      <div ref={ctaRef} className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-7xl mx-auto">
          {/* Text Content */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center lg:text-left lg:w-1/2"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }} 
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4"
            >
              <Calendar className="inline-block mr-2 h-4 w-4" />
              Été 2025
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }} 
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
              Prêt à vivre la CAN 2025 au Maroc ?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white/90 text-lg mb-10 max-w-xl mx-auto lg:mx-0"
            >
              Réservez dès maintenant votre pack supporter et vivez des moments inoubliables 
              au cœur du football africain. Places limitées !
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }} 
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  to="#reservation"
                  className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-4 rounded-lg transition-all duration-300 inline-block shadow-lg font-semibold relative overflow-hidden group flex items-center justify-center"
                >
                  <span className="relative z-10">Réserver mon pack</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:animate-shine" />
                </Link>
              </motion.div>
              
              <a
                href="tel:+212656136036"
                className="flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4 rounded-lg transition-all duration-300 font-medium"
              >
                <Phone className="h-5 w-5" />
                <span>+212 656 13 60 36</span>
              </a>
            </motion.div>
          </motion.div>
          
          {/* Image or Secondary Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:w-2/5"
          >
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
              <div className="text-white text-center">
                <div className="mb-4">
                  <span className="inline-block bg-white/20 rounded-full px-3 py-1 text-sm font-medium">
                    Promotion spéciale
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Pack supporter</h3>
                <p className="text-white/80 mb-4">Accès VIP, hébergement et activités inclus</p>
                <div className="flex justify-center items-baseline mb-6">
                  <span className="text-4xl font-bold">990€</span>
                  <span className="text-lg ml-1 text-white/70">/ personne</span>
                </div>
                <ul className="space-y-2 mb-6 text-left">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Billets pour 2 matchs garantis</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>4 nuits d'hôtel</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Transferts aéroport inclus</span>
                  </li>
                </ul>
                <motion.div
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="w-full"
                >
                  <Link
                    to="#reservation"
                    className="bg-white text-primary hover:bg-white/90 text-lg w-full py-3 rounded-lg transition-all duration-300 inline-block font-medium"
                  >
                    Réserver maintenant
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute -left-10 bottom-10 w-24 h-24 rounded-full bg-white/5"
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
          className="absolute -right-10 top-10 w-16 h-16 rounded-full bg-white/5"
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
