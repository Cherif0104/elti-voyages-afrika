
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Trophy, Book, Compass } from 'lucide-react';

type NavItem = {
  name: string;
  path: string;
  icon?: React.ReactNode;
};

interface DesktopNavProps {
  navItems: NavItem[];
}

const DesktopNav = ({ navItems }: DesktopNavProps) => {
  const location = useLocation();
  
  return (
    <nav className="hidden lg:flex items-center space-x-2">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2",
              isActive
                ? "bg-primary text-white"
                : "text-gray-700 hover:bg-gray-100"
            )}
          >
            {item.icon && item.icon}
            <span>{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default DesktopNav;
