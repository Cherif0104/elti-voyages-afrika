
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Plane, Calendar, MapPin, Users, Loader2 } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

interface FlightSearchFormProps {
  origin: string;
  setOrigin: (value: string) => void;
  destination: string; 
  setDestination: (value: string) => void;
  departureDate: string;
  setDepartureDate: (value: string) => void;
  returnDate: string;
  setReturnDate: (value: string) => void;
  adults: string;
  setAdults: (value: string) => void;
  handleSearch: (e: React.FormEvent) => Promise<void>;
  isSearching: boolean;
}

const FlightSearchForm = ({
  origin,
  setOrigin,
  destination,
  setDestination,
  departureDate,
  setDepartureDate,
  returnDate,
  setReturnDate,
  adults,
  setAdults,
  handleSearch,
  isSearching
}: FlightSearchFormProps) => {
  const [activeField, setActiveField] = useState<string | null>(null);
  
  return (
    <Card 
      className="mb-10 overflow-hidden border-0 rounded-xl shadow-lg" 
      id="searchForm"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 z-0"></div>
        <div className="flex justify-between items-center p-6 relative z-10">
          <div>
            <h2 className="text-primary text-2xl font-bold">Rechercher des vols</h2>
            <p className="text-gray-600">Trouvez les meilleures offres de vols avec notre partenaire Amadeus</p>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=300&auto=format&fit=crop"
            alt="Avion en vol" 
            className="hidden md:block h-20 w-32 object-cover rounded-lg shadow-md"
          />
        </div>
      </motion.div>
      
      <div className="p-6">
        <Tabs defaultValue="round-trip" className="mb-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="round-trip">Aller-retour</TabsTrigger>
            <TabsTrigger value="one-way">Aller simple</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <form onSubmit={handleSearch} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <motion.div 
              className={`rounded-lg p-4 transition-all duration-200 ${activeField === 'origin' ? 'shadow-md bg-white' : 'bg-gray-50'}`}
              whileHover={{ scale: 1.01 }}
              onClick={() => setActiveField('origin')}
            >
              <Label htmlFor="origin" className="text-sm font-normal text-gray-500">Départ</Label>
              <div className="flex items-center mt-1.5">
                <MapPin className="w-4 h-4 absolute ml-3 text-gray-500" />
                <Input 
                  id="origin" 
                  placeholder="Code aéroport (ex: CDG)" 
                  className="pl-10 bg-transparent border-0 border-b focus:border-primary focus:ring-0 rounded-none text-lg"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value.toUpperCase())}
                  maxLength={3}
                  onFocus={() => setActiveField('origin')}
                  onBlur={() => setActiveField(null)}
                />
              </div>
            </motion.div>
            
            <motion.div 
              className={`rounded-lg p-4 transition-all duration-200 ${activeField === 'destination' ? 'shadow-md bg-white' : 'bg-gray-50'}`}
              whileHover={{ scale: 1.01 }}
              onClick={() => setActiveField('destination')}
            >
              <Label htmlFor="destination" className="text-sm font-normal text-gray-500">Destination</Label>
              <div className="flex items-center mt-1.5">
                <MapPin className="w-4 h-4 absolute ml-3 text-gray-500" />
                <Input 
                  id="destination" 
                  placeholder="Code aéroport (ex: CMN)" 
                  className="pl-10 bg-transparent border-0 border-b focus:border-primary focus:ring-0 rounded-none text-lg"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value.toUpperCase())}
                  maxLength={3}
                  onFocus={() => setActiveField('destination')}
                  onBlur={() => setActiveField(null)}
                />
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <motion.div 
              className={`rounded-lg p-4 transition-all duration-200 ${activeField === 'departure' ? 'shadow-md bg-white' : 'bg-gray-50'}`}
              whileHover={{ scale: 1.01 }}
              onClick={() => setActiveField('departure')}
            >
              <Label htmlFor="departureDate" className="text-sm font-normal text-gray-500">Date de départ</Label>
              <div className="flex items-center mt-1.5">
                <Calendar className="w-4 h-4 absolute ml-3 text-gray-500" />
                <Input 
                  id="departureDate" 
                  type="date" 
                  className="pl-10 bg-transparent border-0 border-b focus:border-primary focus:ring-0 rounded-none text-lg"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  onFocus={() => setActiveField('departure')}
                  onBlur={() => setActiveField(null)}
                />
              </div>
            </motion.div>
            
            <motion.div 
              className={`rounded-lg p-4 transition-all duration-200 ${activeField === 'return' ? 'shadow-md bg-white' : 'bg-gray-50'}`}
              whileHover={{ scale: 1.01 }}
              onClick={() => setActiveField('return')}
            >
              <Label htmlFor="returnDate" className="text-sm font-normal text-gray-500">Date de retour (optionnel)</Label>
              <div className="flex items-center mt-1.5">
                <Calendar className="w-4 h-4 absolute ml-3 text-gray-500" />
                <Input 
                  id="returnDate" 
                  type="date" 
                  className="pl-10 bg-transparent border-0 border-b focus:border-primary focus:ring-0 rounded-none text-lg"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  onFocus={() => setActiveField('return')}
                  onBlur={() => setActiveField(null)}
                />
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <motion.div 
              className={`rounded-lg p-4 transition-all duration-200 ${activeField === 'adults' ? 'shadow-md bg-white' : 'bg-gray-50'}`}
              whileHover={{ scale: 1.01 }}
              onClick={() => setActiveField('adults')}
            >
              <Label htmlFor="adults" className="text-sm font-normal text-gray-500">Voyageurs</Label>
              <div className="flex items-center mt-1.5">
                <Users className="w-4 h-4 absolute ml-3 text-gray-500" />
                <Select
                  value={adults}
                  onValueChange={setAdults}
                  onOpenChange={(open) => setActiveField(open ? 'adults' : null)}
                >
                  <SelectTrigger id="adults" className="pl-10 bg-transparent border-0 border-b focus:border-primary rounded-none text-lg">
                    <SelectValue placeholder="Nombre de passagers" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <SelectItem key={num} value={num.toString()}>{num} {num === 1 ? "adulte" : "adultes"}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </motion.div>
            
            <div className="flex items-center">
              <Button 
                type="submit"
                className="w-full h-14 mt-2 rounded-xl" 
                disabled={isSearching}
                variant="gradient"
                size="lg"
              >
                {isSearching ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Recherche en cours...
                  </>
                ) : (
                  <>
                    <Plane className="mr-2 h-5 w-5" />
                    Rechercher
                  </>
                )}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default FlightSearchForm;
