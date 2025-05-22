
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';
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
          <Link to="#reservation" className="cursor-pointer">Réserver un voyage</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/destinations" className="cursor-pointer">Destinations</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/guides" className="cursor-pointer">Guides de voyage</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/contact" className="cursor-pointer">Contacter l'agence</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
