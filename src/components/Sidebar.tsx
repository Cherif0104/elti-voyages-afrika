
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, Home, Plane, Hotel, Car, Map, Crown, Phone, Trophy, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import { motion, AnimatePresence } from 'framer-motion';
import { buttonTap } from '@/components/can2025/AnimationUtils';

type NavItem = {
  name: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
};

const navItems: NavItem[] = [
  { name: "Accueil – CAN 2025", path: "/", icon: Home },
  { name: "CAN 2025", path: "/can2025", icon: Trophy },
  { name: "Billets d'avion", path: "/billets-avion", icon: Plane },
  { name: "Hôtels", path: "/hotels", icon: Hotel },
  { name: "Voitures", path: "/voitures", icon: Car },
  { name: "Excursions", path: "/excursions", icon: Map },
  { name: "VIP / Conciergerie", path: "/vip", icon: Crown },
  { name: "Contacts & Support", path: "/contact", icon: Phone },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Close the sidebar when route changes on mobile
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === '/') {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY;

        sections.forEach((section) => {
          const sectionTop = (section as HTMLElement).offsetTop - 100;
          const sectionHeight = (section as HTMLElement).offsetHeight;
          const sectionId = section.getAttribute('id') || '';

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection('#' + sectionId);
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Floating decoration element
  const FloatingElement = ({ children, delay = 0, x = 0, y = 0 }) => (
    <motion.div
      className="absolute text-primary/5 z-0 h-8 w-8"
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 0.7,
        y: [0, -8, 0],
        transition: { 
          y: { 
            repeat: Infinity,
            duration: 3,
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

  return (
    <>
      {/* Mobile menu button with enhanced animation */}
      <motion.div 
        className="fixed top-4 left-4 z-50 lg:hidden"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            variant="outline"
            size="icon"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="bg-white shadow-md"
            onClick={toggleSidebar}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </motion.div>
      </motion.div>

      {/* Sidebar backdrop on mobile with improved animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar with enhanced animations */}
      <motion.aside
        className={cn(
          "fixed top-0 left-0 h-full bg-white z-40 transition-all duration-300 ease-in-out shadow-xl w-64",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="flex flex-col h-full relative overflow-hidden">
          {/* Decorative floating elements */}
          <FloatingElement x={20} y={90} delay={0.2}>
            <Star className="h-full w-full" />
          </FloatingElement>
          <FloatingElement x={80} y={50} delay={1.5}>
            <Trophy className="h-full w-full" />
          </FloatingElement>

          {/* Logo with animation */}
          <motion.div 
            className="p-4 border-b"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link to="/" className="flex items-center justify-center">
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Logo size="md" />
                <span className="text-xl font-poppins font-bold text-primary ml-2">ELTI VOYAGES</span>
              </motion.div>
            </Link>
          </motion.div>

          {/* Navigation with staggered animations */}
          <nav className="flex-grow overflow-y-auto no-scrollbar py-4">
            <ul className="space-y-1 px-2">
              {navItems.map((item, index) => {
                const isActive = 
                  location.pathname === item.path || 
                  (item.path === '/' && location.pathname === '/') ||
                  (activeSection && item.name.toLowerCase().includes(activeSection.substring(1)));
                
                return (
                  <motion.li 
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
                  >
                    <Link
                      to={item.path}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                        isActive
                          ? "bg-primary text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      )}
                    >
                      <motion.div
                        whileHover={{ rotate: 15 }}
                        transition={{ type: "spring", stiffness: 500 }}
                      >
                        <item.icon className={cn("h-5 w-5", isActive ? "text-white" : "text-primary")} />
                      </motion.div>
                      <span>{item.name}</span>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          {/* Footer with enhanced button animation */}
          <motion.div 
            className="p-4 border-t"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={buttonTap}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90 relative overflow-hidden group"
              >
                <a href="#reservation">
                  Réserver
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] group-hover:animate-shine" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;
