
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Phone } from "lucide-react";

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
          "fixed top-0 right-0 left-0 z-30 transition-all duration-300 lg:pl-64",
          scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        )}
      >
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex-1 lg:flex-initial">
            <Link to="/" className="block lg:hidden">
              <span className="text-xl font-poppins font-bold text-primary">ELTI VOYAGES</span>
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
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
            
            <Button 
              asChild 
              className="bg-primary hover:bg-primary/90 shadow-lg"
              size={scrolled ? "default" : "lg"}
            >
              <a href="#reservation">
                Réserver
              </a>
            </Button>
          </div>
        </div>
      </motion.header>
    </>
  );
};

export default Navbar;
