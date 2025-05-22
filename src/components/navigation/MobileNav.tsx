
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

type NavItem = {
  name: string;
  path: string;
  icon?: React.ReactNode;
};

interface MobileNavProps {
  isOpen: boolean;
  navItems: NavItem[];
  onClose: () => void;
}

const MobileNav = ({ isOpen, navItems, onClose }: MobileNavProps) => {
  const location = useLocation();
  
  if (!isOpen) return null;
  
  return (
    <motion.div 
      className="fixed inset-0 bg-white z-40 lg:hidden overflow-y-auto pt-20"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col h-full">
        <div className="overflow-y-auto flex-grow">
          <nav className="flex flex-col p-4">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center px-4 py-4 mb-2 rounded-md transition-colors",
                    isActive
                      ? "bg-primary text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                  onClick={onClose}
                >
                  {item.icon && <div className="mr-3">{item.icon}</div>}
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
        
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <Button
            asChild
            className="w-full bg-secondary text-primary hover:bg-secondary/90 mb-4 font-medium"
          >
            <Link to="#reservation" onClick={onClose}>
              Réserver maintenant
            </Link>
          </Button>
          
          <Button
            asChild
            variant="outline"
            className="w-full border-primary text-primary hover:bg-primary/5"
          >
            <Link to="/contact" onClick={onClose}>
              Nous contacter
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileNav;
