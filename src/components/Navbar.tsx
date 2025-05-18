
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Phone, Calendar, Star, MapPin } from "lucide-react";
import Logo from "@/components/Logo";
import { buttonTap, shineEffect } from "@/components/can2025/AnimationUtils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const { scrollYProgress } = useScroll();
  
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.05) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  useEffect(() => {
    // Show loader bar when navigating
    setShowLoader(true);
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Floating decoration elements
  const FloatingElement = ({ children, delay = 0, x = 0, y = 0, size = "sm" }) => {
    const sizeClasses = {
      sm: "h-5 w-5",
      md: "h-8 w-8",
      lg: "h-10 w-10"
    };
    
    return (
      <motion.div
        className={`absolute text-primary/10 z-0 ${sizeClasses[size] || sizeClasses.sm}`}
        style={{ left: `${x}%`, top: `${y}%` }}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 0.5,
          y: [0, -8, 0],
          transition: { 
            y: { 
              repeat: Infinity,
              duration: 2 + Math.random() * 2,
              ease: "easeInOut", 
              delay 
            },
            opacity: { duration: 1, delay }
          }
        }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <>
      {showLoader && <motion.div 
        className="fixed top-0 left-0 h-1 bg-accent z-50"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 3 }}
      />}
      
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={cn(
          "fixed top-0 right-0 left-0 z-30 transition-all duration-300 lg:pl-64 relative",
          scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        )}
      >
        <div className="container mx-auto flex justify-between items-center px-4 relative">
          {/* Decorative floating elements */}
          <FloatingElement x={85} y={30} delay={0.5} size="sm">
            <Star className="h-full w-full" />
          </FloatingElement>
          <FloatingElement x={15} y={70} delay={1.3} size="sm">
            <Calendar className="h-full w-full" />
          </FloatingElement>
          <FloatingElement x={92} y={70} delay={0.8} size="sm">
            <MapPin className="h-full w-full" />
          </FloatingElement>
          
          <div className="flex-1 lg:flex-initial">
            <Link to="/" className="block lg:hidden">
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Logo size="md" />
                <span className="text-xl font-poppins font-bold text-primary ml-2">ELTI VOYAGES</span>
              </motion.div>
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Button 
                variant="outline" 
                size="sm" 
                className="hidden md:flex items-center gap-2 border-primary text-primary hover:bg-primary/10"
                asChild
              >
                <a href="tel:+212656136036">
                  <Phone className="h-4 w-4" />
                  <span>+212 656 13 60 36</span>
                </a>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={buttonTap}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button 
                asChild 
                className="bg-primary hover:bg-primary/90 shadow-lg relative overflow-hidden group"
                size={scrolled ? "default" : "lg"}
              >
                <a href="#reservation">
                  Réserver
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] group-hover:animate-shine" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.header>
    </>
  );
};

export default Navbar;
