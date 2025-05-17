
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Calendar, MapPin, Users, Loader2 } from "lucide-react";
import { useState } from "react";

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
  return (
    <Card className="mb-10 shadow-lg border-0" id="searchForm">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-t-lg">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-primary text-2xl">Rechercher des vols</CardTitle>
            <CardDescription>Trouvez les meilleures offres de vols avec notre partenaire Amadeus</CardDescription>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=300&auto=format&fit=crop"
            alt="Avion en vol" 
            className="hidden md:block h-16 w-24 object-cover rounded-lg shadow-md"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <Tabs defaultValue="round-trip" className="mb-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="round-trip">Aller-retour</TabsTrigger>
            <TabsTrigger value="one-way">Aller simple</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <form onSubmit={handleSearch} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="origin">Départ</Label>
              <div className="flex items-center mt-1.5">
                <MapPin className="w-4 h-4 absolute ml-3 text-gray-500" />
                <Input 
                  id="origin" 
                  placeholder="Code aéroport (ex: CDG)" 
                  className="pl-10"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value.toUpperCase())}
                  maxLength={3}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="destination">Destination</Label>
              <div className="flex items-center mt-1.5">
                <MapPin className="w-4 h-4 absolute ml-3 text-gray-500" />
                <Input 
                  id="destination" 
                  placeholder="Code aéroport (ex: CMN)" 
                  className="pl-10"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value.toUpperCase())}
                  maxLength={3}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="departureDate">Date de départ</Label>
              <div className="flex items-center mt-1.5">
                <Calendar className="w-4 h-4 absolute ml-3 text-gray-500" />
                <Input 
                  id="departureDate" 
                  type="date" 
                  className="pl-10"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="returnDate">Date de retour (optionnel)</Label>
              <div className="flex items-center mt-1.5">
                <Calendar className="w-4 h-4 absolute ml-3 text-gray-500" />
                <Input 
                  id="returnDate" 
                  type="date" 
                  className="pl-10"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="adults">Voyageurs</Label>
              <div className="flex items-center mt-1.5">
                <Users className="w-4 h-4 absolute ml-3 text-gray-500" />
                <Select
                  value={adults}
                  onValueChange={setAdults}
                >
                  <SelectTrigger id="adults" className="pl-10">
                    <SelectValue placeholder="Nombre de passagers" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <SelectItem key={num} value={num.toString()}>{num} {num === 1 ? "adulte" : "adultes"}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex items-end">
              <Button 
                type="submit"
                className="w-full mt-1.5" 
                disabled={isSearching}
                variant="gradient"
              >
                {isSearching ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Recherche en cours...
                  </>
                ) : (
                  <>
                    <Plane className="mr-2 h-4 w-4" />
                    Rechercher
                  </>
                )}
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default FlightSearchForm;
