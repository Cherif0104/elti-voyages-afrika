
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plane, Hotel, Car, Map, Calendar as CalendarIcon, Users, MapPin, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const SearchWidget = () => {
  const [searchType, setSearchType] = useState("flights");
  const [departureDate, setDepartureDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [passengers, setPassengers] = useState("1");
  const [tripType, setTripType] = useState("round-trip");
  
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-xl p-6 mx-auto max-w-4xl relative border border-gray-100"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Tabs defaultValue="flights" onValueChange={setSearchType} className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-6 bg-gray-100">
          <TabsTrigger value="flights" className="flex gap-2 items-center data-[state=active]:bg-primary data-[state=active]:text-white">
            <Plane className="h-4 w-4" />
            <span>Vols</span>
          </TabsTrigger>
          <TabsTrigger value="hotels" className="flex gap-2 items-center data-[state=active]:bg-primary data-[state=active]:text-white">
            <Hotel className="h-4 w-4" />
            <span>Hôtels</span>
          </TabsTrigger>
          <TabsTrigger value="cars" className="flex gap-2 items-center data-[state=active]:bg-primary data-[state=active]:text-white">
            <Car className="h-4 w-4" />
            <span>Voitures</span>
          </TabsTrigger>
          <TabsTrigger value="activities" className="flex gap-2 items-center data-[state=active]:bg-primary data-[state=active]:text-white">
            <Map className="h-4 w-4" />
            <span>Activités</span>
          </TabsTrigger>
        </TabsList>
        
        {/* Flight Search */}
        <TabsContent value="flights" className="space-y-4">
          <div className="flex gap-4 mb-4">
            <Button 
              variant={tripType === "round-trip" ? "default" : "outline"} 
              onClick={() => setTripType("round-trip")}
              className="flex-1"
            >
              Aller-retour
            </Button>
            <Button 
              variant={tripType === "one-way" ? "default" : "outline"} 
              onClick={() => setTripType("one-way")}
              className="flex-1"
            >
              Aller simple
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="flex items-center border rounded-md overflow-hidden">
              <div className="bg-primary p-3 border-r">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <Input placeholder="Départ" className="border-0 focus-visible:ring-0 text-base font-medium" />
            </div>
            <div className="flex items-center border rounded-md overflow-hidden">
              <div className="bg-primary p-3 border-r">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <Input placeholder="Destination" className="border-0 focus-visible:ring-0 text-base font-medium" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* Departure Date */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left flex items-center h-12 border-gray-300">
                  <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
                  {departureDate ? (
                    format(departureDate, "dd MMMM yyyy", { locale: fr })
                  ) : (
                    <span className="text-gray-500">Date de départ</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={departureDate}
                  onSelect={setDepartureDate}
                  initialFocus
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
            
            {/* Return Date */}
            {tripType === "round-trip" && (
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left flex items-center h-12 border-gray-300">
                    <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
                    {returnDate ? (
                      format(returnDate, "dd MMMM yyyy", { locale: fr })
                    ) : (
                      <span className="text-gray-500">Date de retour</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={returnDate}
                    onSelect={setReturnDate}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
            )}
            
            {/* Passengers */}
            <Select value={passengers} onValueChange={setPassengers}>
              <SelectTrigger className="w-full flex items-center h-12 border-gray-300">
                <Users className="mr-2 h-4 w-4 text-primary" />
                <SelectValue placeholder="Passagers" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 passager</SelectItem>
                <SelectItem value="2">2 passagers</SelectItem>
                <SelectItem value="3">3 passagers</SelectItem>
                <SelectItem value="4">4 passagers</SelectItem>
                <SelectItem value="5+">5+ passagers</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button className="w-full bg-secondary text-primary hover:bg-secondary/90 py-6 text-lg font-medium">
            Rechercher <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </TabsContent>
        
        {/* Hotel Search */}
        <TabsContent value="hotels" className="space-y-4">
          <div className="flex items-center border rounded-md overflow-hidden mb-4">
            <div className="bg-primary p-3 border-r">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <Input placeholder="Destination ou nom d'hôtel" className="border-0 focus-visible:ring-0 text-base font-medium" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* Check-in */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left flex items-center h-12 border-gray-300">
                  <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
                  <span className="text-gray-500">Date d'arrivée</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" className={cn("p-3 pointer-events-auto")} />
              </PopoverContent>
            </Popover>
            
            {/* Check-out */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left flex items-center h-12 border-gray-300">
                  <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
                  <span className="text-gray-500">Date de départ</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" className={cn("p-3 pointer-events-auto")} />
              </PopoverContent>
            </Popover>
            
            {/* Guests */}
            <Select>
              <SelectTrigger className="w-full flex items-center h-12 border-gray-300">
                <Users className="mr-2 h-4 w-4 text-primary" />
                <SelectValue placeholder="Voyageurs" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 personne</SelectItem>
                <SelectItem value="2">2 personnes</SelectItem>
                <SelectItem value="3">3 personnes</SelectItem>
                <SelectItem value="4">4 personnes</SelectItem>
                <SelectItem value="5+">5+ personnes</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button className="w-full bg-secondary text-primary hover:bg-secondary/90 py-6 text-lg font-medium">
            Rechercher un hôtel <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </TabsContent>
        
        {/* Car Rental Search */}
        <TabsContent value="cars" className="space-y-4">
          <div className="flex items-center border rounded-md overflow-hidden mb-4">
            <div className="bg-primary p-3 border-r">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <Input placeholder="Lieu de prise en charge" className="border-0 focus-visible:ring-0 text-base font-medium" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Pick-up date */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left flex items-center h-12 border-gray-300">
                  <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
                  <span className="text-gray-500">Date de prise en charge</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" className={cn("p-3 pointer-events-auto")} />
              </PopoverContent>
            </Popover>
            
            {/* Drop-off date */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left flex items-center h-12 border-gray-300">
                  <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
                  <span className="text-gray-500">Date de restitution</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" className={cn("p-3 pointer-events-auto")} />
              </PopoverContent>
            </Popover>
          </div>
          
          <Button className="w-full bg-secondary text-primary hover:bg-secondary/90 py-6 text-lg font-medium">
            Rechercher une voiture <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </TabsContent>
        
        {/* Activities Search */}
        <TabsContent value="activities" className="space-y-4">
          <div className="flex items-center border rounded-md overflow-hidden mb-4">
            <div className="bg-primary p-3 border-r">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <Input placeholder="Destination" className="border-0 focus-visible:ring-0 text-base font-medium" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Date */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left flex items-center h-12 border-gray-300">
                  <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
                  <span className="text-gray-500">Date</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" className={cn("p-3 pointer-events-auto")} />
              </PopoverContent>
            </Popover>
            
            {/* Travelers */}
            <Select>
              <SelectTrigger className="w-full flex items-center h-12 border-gray-300">
                <Users className="mr-2 h-4 w-4 text-primary" />
                <SelectValue placeholder="Voyageurs" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 personne</SelectItem>
                <SelectItem value="2">2 personnes</SelectItem>
                <SelectItem value="3">3 personnes</SelectItem>
                <SelectItem value="4">4 personnes</SelectItem>
                <SelectItem value="5+">5+ personnes</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button className="w-full bg-secondary text-primary hover:bg-secondary/90 py-6 text-lg font-medium">
            Rechercher une activité <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default SearchWidget;
