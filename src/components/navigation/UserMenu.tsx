
import { Link } from 'react-router-dom';
import { User, PhoneCall, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const UserMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full border-gray-200">
          <User className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem asChild>
          <Link to="#reservation" className="cursor-pointer flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Réserver un pack</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/destinations" className="cursor-pointer flex items-center gap-2">
            <Compass className="h-4 w-4" />
            <span>Destinations</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/contact" className="cursor-pointer flex items-center gap-2">
            <PhoneCall className="h-4 w-4" />
            <span>Contact</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
