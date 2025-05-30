
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Plane } from "lucide-react";

const FlightSearchForm = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState("1");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Plane className="mr-2 h-6 w-6" />
          Rechercher un vol
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div>
            <Input 
              placeholder="Ville de départ" 
              value={origin} 
              onChange={(e) => setOrigin(e.target.value)} 
            />
          </div>
          <div>
            <Input 
              placeholder="Destination" 
              value={destination} 
              onChange={(e) => setDestination(e.target.value)} 
            />
          </div>
          <div>
            <Input 
              type="date" 
              placeholder="Date de départ" 
              value={departureDate} 
              onChange={(e) => setDepartureDate(e.target.value)} 
            />
          </div>
          <div>
            <Input 
              type="date" 
              placeholder="Date de retour" 
              value={returnDate} 
              onChange={(e) => setReturnDate(e.target.value)} 
            />
          </div>
          <Button type="submit" className="w-full">
            <Search className="mr-2 h-4 w-4" />
            Rechercher
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default FlightSearchForm;
