
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      {showLoader && <div className="loader-bar" />}
      
      <header 
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
              asChild 
              className="bg-primary hover:bg-primary/90"
              size={scrolled ? "default" : "lg"}
            >
              <a href="#reservation">
                Réserver
              </a>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
