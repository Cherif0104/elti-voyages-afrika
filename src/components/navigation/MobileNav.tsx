
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

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
    <div className="fixed inset-0 bg-white z-40 lg:hidden overflow-y-auto pt-20">
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
                  {item.icon && item.icon}
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
        
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <Button
            asChild
            className="w-full bg-secondary text-primary hover:bg-secondary/90 mb-4"
          >
            <Link to="#reservation" onClick={onClose}>
              Réserver
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
