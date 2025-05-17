
import { useState, useEffect } from "react";
import { Hotel, Calendar, MapPin, Users, Loader2, Star, ChevronDown, Check, Filter, SlidersHorizontal, Wifi, Utensils, Dumbbell, Coffee, ParkingSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "sonner";
import { motion } from "framer-motion";

// Amadeus API client types
interface AmadeusAccessToken {
  type: string;
  access_token: string;
  expires_in: number;
  state: string;
}

interface HotelOffer {
  type: string;
  hotel: {
    type: string;
    hotelId: string;
    name: string;
    rating: string;
    cityCode: string;
    address: {
      lines: string[];
      postalCode: string;
      cityName: string;
      countryCode: string;
    };
    media?: {
      uri: string;
      category: string;
    }[];
    amenities?: string[];
  };
  available: boolean;
  offers: Array<{
    id: string;
    checkInDate: string;
    checkOutDate: string;
    rateCode: string;
    room: {
      type: string;
      typeEstimated: {
        category: string;
        beds: number;
        bedType: string;
      };
      description: {
        text: string;
      };
    };
    guests: {
      adults: number;
    };
    price: {
      currency: string;
      total: string;
      base: string;
      taxes: Array<{
        code: string;
        amount: string;
        currency: string;
      }>;
    };
    policies: {
      guarantee: {
        acceptedPayments: {
          creditCards: string[];
          methods: string[];
        };
      };
      paymentType: string;
      cancellation: {
        deadline: string;
      };
    };
    self: string;
  }>;
  self: string;
}

const hotelImageClasses = [
  "bg-[url('https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=2324&auto=format&fit=crop')]",
  "bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2340&auto=format&fit=crop')]",
  "bg-[url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2340&auto=format&fit=crop')]",
  "bg-[url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2340&auto=format&fit=crop')]",
  "bg-[url('https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2348&auto=format&fit=crop')]",
  "bg-[url('https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?q=80&w=2335&auto=format&fit=crop')]",
];

const popularCities = [
  { name: "Marrakech", code: "RAK", image: "https://images.unsplash.com/photo-1560095215-5d5ab899a2ac?q=80&w=2342&auto=format&fit=crop" },
  { name: "Casablanca", code: "CMN", image: "https://images.unsplash.com/photo-1635089483610-eea6d3c5e6e6?q=80&w=2340&auto=format&fit=crop" },
  { name: "Dakar", code: "DKR", image: "https://images.unsplash.com/photo-1612459284970-e8f027596582?q=80&w=2787&auto=format&fit=crop" },
  { name: "Abidjan", code: "ABJ", image: "https://images.unsplash.com/photo-1633321088355-d0f81134ca3b?q=80&w=2340&auto=format&fit=crop" },
];

const HotelCard = ({ 
  name, 
  location, 
  stars, 
  price, 
  imageClass = "bg-placeholder",
  amenities = [],
  onClick
}: { 
  name: string;
  location: string;
  stars: number;
  price: string;
  imageClass?: string;
  amenities?: string[];
  onClick?: () => void;
}) => {
  const randomImage = hotelImageClasses[Math.floor(Math.random() * hotelImageClasses.length)];
  
  // Handle amenity icons
  const amenityIcons = {
    "WIFI": <Wifi size={16} />,
    "RESTAURANT": <Utensils size={16} />,
    "FITNESS_CENTER": <Dumbbell size={16} />,
    "BREAKFAST": <Coffee size={16} />,
    "PARKING": <ParkingSquare size={16} />,
  };

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="rounded-xl overflow-hidden shadow-lg border border-gray-200 transition-all hover:shadow-xl bg-white"
    >
      <div className={`h-56 ${imageClass || randomImage} bg-cover bg-center`} />
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-primary text-lg">{name}</h3>
          <div className="flex items-center text-amber-500 bg-amber-50 px-2 py-1 rounded-md">
            <Star className="w-4 h-4 fill-amber-500 mr-1" />
            <span className="font-medium">{stars}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-3 flex items-center">
          <MapPin className="w-4 h-4 mr-1 text-gray-400" />
          {location}
        </p>
        
        {amenities.length > 0 && (
          <div className="flex gap-2 mb-3 flex-wrap">
            {amenities.slice(0, 4).map((amenity, i) => (
              <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full flex items-center">
                {amenityIcons[amenity as keyof typeof amenityIcons] || null}
                <span className="ml-1">{amenity.replace(/_/g, ' ').toLowerCase()}</span>
              </span>
            ))}
            {amenities.length > 4 && (
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                +{amenities.length - 4}
              </span>
            )}
          </div>
        )}
        
        <div className="flex justify-between items-center mt-4">
          <div>
            <span className="text-lg font-bold">{price}</span>
            <span className="text-gray-500 text-xs block">par nuit</span>
          </div>
          <Button 
            variant="booking" 
            size="sm" 
            onClick={onClick}
            className="text-white"
          >
            Réserver
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const PopularCityCard = ({ name, code, image, onClick }: { name: string; code: string; image: string; onClick: () => void }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
      className="relative rounded-xl overflow-hidden cursor-pointer group"
      onClick={onClick}
    >
      <div 
        className="h-40 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/80 transition-all" />
      <div className="absolute bottom-0 left-0 p-4 text-white">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-sm text-white/80">Code: {code}</p>
      </div>
    </motion.div>
  );
};

const FilterSection = ({ 
  priceRange,
  setPriceRange,
  selectedStars,
  setSelectedStars,
  selectedAmenities,
  setSelectedAmenities,
}) => {
  const amenities = [
    { id: "WIFI", label: "WiFi" },
    { id: "RESTAURANT", label: "Restaurant" },
    { id: "POOL", label: "Piscine" },
    { id: "PARKING", label: "Parking" },
    { id: "FITNESS_CENTER", label: "Salle de sport" },
    { id: "BREAKFAST", label: "Petit-déjeuner" },
    { id: "AIR_CONDITIONING", label: "Climatisation" },
    { id: "SPA", label: "Spa" }
  ];

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center">
          <SlidersHorizontal className="mr-2 h-5 w-5" />
          Filtres
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-medium mb-2">Budget</h3>
          <div className="space-y-4">
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={1000}
              step={50}
              className="py-4"
            />
            <div className="flex items-center justify-between">
              <span className="text-sm">Min: {priceRange[0]}€</span>
              <span className="text-sm">Max: {priceRange[1]}€</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Étoiles</h3>
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                  selectedStars.includes(star)
                    ? "bg-primary text-white border-primary"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => {
                  if (selectedStars.includes(star)) {
                    setSelectedStars(selectedStars.filter((s) => s !== star));
                  } else {
                    setSelectedStars([...selectedStars, star]);
                  }
                }}
              >
                {star} {star === 1 ? "étoile" : "étoiles"}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Équipements</h3>
          <div className="grid grid-cols-2 gap-2">
            {amenities.map((amenity) => (
              <div key={amenity.id} className="flex items-center space-x-2">
                <Checkbox 
                  id={amenity.id} 
                  checked={selectedAmenities.includes(amenity.id)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedAmenities([...selectedAmenities, amenity.id]);
                    } else {
                      setSelectedAmenities(selectedAmenities.filter((a) => a !== amenity.id));
                    }
                  }}
                />
                <Label htmlFor={amenity.id} className="text-sm">{amenity.label}</Label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => {
            setPriceRange([0, 1000]);
            setSelectedStars([]);
            setSelectedAmenities([]);
          }}
        >
          Réinitialiser les filtres
        </Button>
      </CardFooter>
    </Card>
  );
};

const Hotels = () => {
  const [city, setCity] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [isSearching, setIsSearching] = useState(false);
  const [hotelOffers, setHotelOffers] = useState<HotelOffer[]>([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedStars, setSelectedStars] = useState<number[]>([]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [sortOption, setSortOption] = useState("recommended");
  const [showFilters, setShowFilters] = useState(false);
  
  // Static hotels for demonstration
  const staticHotels = [
    { 
      name: "Fairmont Royal Palm", 
      location: "Marrakech, Maroc", 
      stars: 5, 
      price: "280 € / nuit",
      amenities: ["WIFI", "RESTAURANT", "POOL", "SPA", "BREAKFAST"]
    },
    { 
      name: "Radisson Blu", 
      location: "Casablanca, Maroc", 
      stars: 4, 
      price: "150 € / nuit",
      amenities: ["WIFI", "RESTAURANT", "FITNESS_CENTER", "PARKING"]
    },
    { 
      name: "Barceló Anfa", 
      location: "Casablanca, Maroc", 
      stars: 5, 
      price: "190 € / nuit",
      amenities: ["WIFI", "RESTAURANT", "POOL", "FITNESS_CENTER"]
    },
    { 
      name: "Riad El Fenn", 
      location: "Marrakech, Maroc", 
      stars: 4, 
      price: "210 € / nuit",
      amenities: ["WIFI", "BREAKFAST", "POOL", "SPA"]
    },
    { 
      name: "Les Jardins de la Koutoubia", 
      location: "Marrakech, Maroc", 
      stars: 5, 
      price: "250 € / nuit",
      amenities: ["WIFI", "RESTAURANT", "POOL", "SPA", "FITNESS_CENTER"]
    },
    { 
      name: "Movenpick Hotel", 
      location: "Casablanca, Maroc", 
      stars: 5, 
      price: "170 € / nuit",
      amenities: ["WIFI", "RESTAURANT", "PARKING", "FITNESS_CENTER"]
    },
    { 
      name: "Hyatt Regency", 
      location: "Casablanca, Maroc", 
      stars: 5, 
      price: "200 € / nuit",
      amenities: ["WIFI", "RESTAURANT", "POOL", "FITNESS_CENTER", "SPA"]
    },
    { 
      name: "Four Seasons", 
      location: "Casablanca, Maroc", 
      stars: 5, 
      price: "320 € / nuit",
      amenities: ["WIFI", "RESTAURANT", "POOL", "SPA", "FITNESS_CENTER", "BREAKFAST", "PARKING"]
    },
  ];

  // Filter and sort hotels
  const filteredHotels = searchPerformed ? 
    (hotelOffers.length > 0 ? hotelOffers : staticHotels).filter(hotel => {
      // Apply price filter
      const price = parseFloat(typeof hotel === 'object' && 'price' in hotel 
        ? hotel.price.toString().replace(/[^0-9.]/g, '') 
        : hotel.offers?.[0]?.price?.total || "0");
      
      const matchesPrice = price >= priceRange[0] && price <= priceRange[1];
      
      // Apply stars filter
      const stars = typeof hotel === 'object' && 'stars' in hotel 
        ? hotel.stars 
        : parseInt(hotel.hotel?.rating || "0");
      
      const matchesStars = selectedStars.length === 0 || selectedStars.includes(stars);
      
      // Apply amenities filter
      const hotelAmenities = typeof hotel === 'object' && 'amenities' in hotel 
        ? hotel.amenities 
        : hotel.hotel?.amenities || [];
      
      const matchesAmenities = selectedAmenities.length === 0 || 
        selectedAmenities.every(amenity => hotelAmenities.includes(amenity));
      
      return matchesPrice && matchesStars && matchesAmenities;
    }) : [];
  
  // Sort hotels
  const sortedHotels = [...filteredHotels].sort((a, b) => {
    if (sortOption === "price_asc") {
      const priceA = parseFloat(typeof a === 'object' && 'price' in a 
        ? a.price.toString().replace(/[^0-9.]/g, '') 
        : a.offers?.[0]?.price?.total || "0");
      
      const priceB = parseFloat(typeof b === 'object' && 'price' in b 
        ? b.price.toString().replace(/[^0-9.]/g, '') 
        : b.offers?.[0]?.price?.total || "0");
      
      return priceA - priceB;
    }
    
    if (sortOption === "price_desc") {
      const priceA = parseFloat(typeof a === 'object' && 'price' in a 
        ? a.price.toString().replace(/[^0-9.]/g, '') 
        : a.offers?.[0]?.price?.total || "0");
      
      const priceB = parseFloat(typeof b === 'object' && 'price' in b 
        ? b.price.toString().replace(/[^0-9.]/g, '') 
        : b.offers?.[0]?.price?.total || "0");
      
      return priceB - priceA;
    }
    
    if (sortOption === "stars_desc") {
      const starsA = typeof a === 'object' && 'stars' in a 
        ? a.stars 
        : parseInt(a.hotel?.rating || "0");
      
      const starsB = typeof b === 'object' && 'stars' in b 
        ? b.stars 
        : parseInt(b.hotel?.rating || "0");
      
      return starsB - starsA;
    }
    
    return 0;
  });
  
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!city || !checkIn || !checkOut) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }
    
    setIsSearching(true);
    setHotelOffers([]);
    setSearchPerformed(true);
    
    try {
      // Get access token first
      const tokenResponse = await fetch("https://test.api.amadeus.com/v1/security/oauth2/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "client_credentials",
          client_id: "HKbJFhP2AVEHNHqIMt9qKRa1D1ZNDP50",
          client_secret: "rLoU5lwyj1Dw8BWY",
        }),
      });

      if (!tokenResponse.ok) {
        throw new Error("Failed to get access token");
      }

      const tokenData: AmadeusAccessToken = await tokenResponse.json();
      
      // With the token, we can now search for hotels
      const searchUrl = `https://test.api.amadeus.com/v3/shopping/hotel-offers?cityCode=${city}&checkInDate=${checkIn}&checkOutDate=${checkOut}&adults=${guests}&radius=50&radiusUnit=KM&paymentPolicy=NONE&includeClosed=false&bestRateOnly=true&view=FULL&sort=PRICE`;
      
      const hotelResponse = await fetch(searchUrl, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${tokenData.access_token}`,
        },
      });
      
      if (!hotelResponse.ok) {
        // For test environment, sometimes real data is not available
        // Fallback to static data if the API fails
        toast.info("Simulation des résultats avec des données fictives");
        setTimeout(() => {
          setIsSearching(false);
          // We'll simulate the API response with our static hotels
        }, 1500);
        return;
      }

      const hotelData = await hotelResponse.json();
      setHotelOffers(hotelData.data || []);
      
      if (hotelData.data?.length === 0) {
        toast.info("Aucun hôtel disponible pour cette recherche. Affichage des hôtels recommandés.");
      } else {
        toast.success(`${hotelData.data?.length} hôtels trouvés`);
      }
    } catch (error) {
      console.error("Error searching hotels:", error);
      toast.error("Une erreur est survenue lors de la recherche des hôtels");
    } finally {
      setIsSearching(false);
    }
  };

  const handleHotelSelect = (hotel: any) => {
    toast.success(`Demande de réservation pour ${hotel.name || hotel.hotel?.name} envoyée`);
  };

  const handleCitySelect = (cityCode: string) => {
    setCity(cityCode);
    
    // Set default dates if not already set
    if (!checkIn) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setCheckIn(tomorrow.toISOString().split('T')[0]);
    }
    
    if (!checkOut) {
      const dayAfterTomorrow = new Date();
      dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 3);
      setCheckOut(dayAfterTomorrow.toISOString().split('T')[0]);
    }
  };
  
  return (
    <div className="lg:pl-64 pt-20">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-primary mb-6">Hôtels</h1>
        <p className="text-gray-600 mb-8">
          Découvrez notre sélection d'hôtels 3 à 5 étoiles dans les plus belles villes du Maroc et du Sénégal. Faites votre choix parmi les établissements les plus prestigieux et bénéficiez de nos tarifs préférentiels.
        </p>
        
        {/* Hero Section with Popular Cities */}
        {!searchPerformed && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">Destinations populaires</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {popularCities.map((city, index) => (
                <PopularCityCard
                  key={index}
                  name={city.name}
                  code={city.code}
                  image={city.image}
                  onClick={() => handleCitySelect(city.code)}
                />
              ))}
            </div>
          </div>
        )}
        
        {/* Hotel Search Form */}
        <Card className="mb-10">
          <CardHeader>
            <CardTitle>Rechercher un hébergement</CardTitle>
            <CardDescription>Trouvez votre hôtel idéal avec Amadeus</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSearch} className="space-y-5">
              <div>
                <Label htmlFor="city">Destination</Label>
                <div className="flex items-center mt-1.5">
                  <MapPin className="w-4 h-4 absolute ml-3 text-gray-500" />
                  <Input 
                    id="city" 
                    placeholder="Code ville (ex: CMN, RAK)" 
                    className="pl-10"
                    value={city}
                    onChange={(e) => setCity(e.target.value.toUpperCase())}
                    maxLength={3}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="checkIn">Arrivée</Label>
                  <div className="flex items-center mt-1.5">
                    <Calendar className="w-4 h-4 absolute ml-3 text-gray-500" />
                    <Input 
                      id="checkIn" 
                      type="date"
                      className="pl-10"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="checkOut">Départ</Label>
                  <div className="flex items-center mt-1.5">
                    <Calendar className="w-4 h-4 absolute ml-3 text-gray-500" />
                    <Input 
                      id="checkOut" 
                      type="date"
                      className="pl-10"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="guests">Voyageurs</Label>
                  <div className="flex items-center mt-1.5">
                    <Users className="w-4 h-4 absolute ml-3 text-gray-500" />
                    <Select
                      value={guests}
                      onValueChange={setGuests}
                    >
                      <SelectTrigger id="guests" className="pl-10">
                        <SelectValue placeholder="Nombre de voyageurs" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <SelectItem key={num} value={num.toString()}>{num} {num === 1 ? "voyageur" : "voyageurs"}</SelectItem>
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
                        <Hotel className="mr-2 h-4 w-4" />
                        Rechercher
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
        
        {/* Hotel Results with Filters */}
        {searchPerformed && (
          <div className="mb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-primary">Résultats ({sortedHotels.length})</h2>
                <p className="text-gray-600">Hôtels disponibles pour votre recherche</p>
              </div>
              
              <div className="mt-4 md:mt-0 flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="md:hidden"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="mr-2 h-4 w-4" />
                  Filtres
                </Button>
                
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <span>Trier par</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-56 p-0">
                    <div className="p-1 space-y-0.5">
                      {[
                        { value: "recommended", label: "Recommandés" },
                        { value: "price_asc", label: "Prix: croissant" },
                        { value: "price_desc", label: "Prix: décroissant" },
                        { value: "stars_desc", label: "Étoiles: décroissant" },
                      ].map((option) => (
                        <button
                          key={option.value}
                          className={`w-full flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-100 ${
                            sortOption === option.value ? "bg-gray-100" : ""
                          }`}
                          onClick={() => setSortOption(option.value)}
                        >
                          {option.label}
                          {sortOption === option.value && <Check className="h-4 w-4 ml-auto" />}
                        </button>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Filters - Desktop */}
              <div className="hidden md:block">
                <FilterSection 
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  selectedStars={selectedStars}
                  setSelectedStars={setSelectedStars}
                  selectedAmenities={selectedAmenities}
                  setSelectedAmenities={setSelectedAmenities}
                />
              </div>
              
              {/* Filters - Mobile */}
              {showFilters && (
                <div className="md:hidden">
                  <FilterSection 
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    selectedStars={selectedStars}
                    setSelectedStars={setSelectedStars}
                    selectedAmenities={selectedAmenities}
                    setSelectedAmenities={setSelectedAmenities}
                  />
                </div>
              )}
              
              {/* Hotel Grid */}
              <div className="lg:col-span-3">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {sortedHotels.length > 0 ? (
                    sortedHotels.map((hotel, index) => {
                      // Handle both static and API hotel data
                      const hotelName = 'name' in hotel ? hotel.name : hotel.hotel?.name;
                      const hotelLocation = 'location' in hotel ? hotel.location : `${hotel.hotel?.address?.cityName}, ${hotel.hotel?.address?.countryCode}`;
                      const hotelStars = 'stars' in hotel ? hotel.stars : parseInt(hotel.hotel?.rating || "3");
                      const hotelPrice = 'price' in hotel ? hotel.price : `${hotel.offers?.[0]?.price?.total || "N/A"} ${hotel.offers?.[0]?.price?.currency || "EUR"}`;
                      const hotelAmenities = 'amenities' in hotel ? hotel.amenities : hotel.hotel?.amenities || [];
                      
                      return (
                        <HotelCard
                          key={index}
                          name={hotelName || "Hôtel sans nom"}
                          location={hotelLocation || "Emplacement inconnu"}
                          stars={hotelStars || 3}
                          price={hotelPrice || "Prix non disponible"}
                          amenities={hotelAmenities}
                          onClick={() => handleHotelSelect(hotel)}
                        />
                      );
                    })
                  ) : (
                    <div className="col-span-full flex flex-col items-center justify-center py-12">
                      <Hotel className="h-16 w-16 text-gray-300 mb-4" />
                      <p className="text-gray-500 text-center mb-2">Aucun hôtel ne correspond à vos critères</p>
                      <Button 
                        variant="outline" 
                        onClick={() => {
                          setPriceRange([0, 1000]);
                          setSelectedStars([]);
                          setSelectedAmenities([]);
                        }}
                      >
                        Réinitialiser les filtres
                      </Button>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        )}
        
        {/* Show static hotels when no search has been performed */}
        {!searchPerformed && (
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Nos hôtels recommandés</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {staticHotels.map((hotel, index) => (
                <HotelCard
                  key={index}
                  name={hotel.name}
                  location={hotel.location}
                  stars={hotel.stars}
                  price={hotel.price}
                  amenities={hotel.amenities}
                  onClick={() => handleHotelSelect(hotel)}
                />
              ))}
            </div>
          </div>
        )}
        
        {/* Tabs for Additional Information */}
        <div className="mb-10">
          <Tabs defaultValue="info">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="info">Infos pratiques</TabsTrigger>
              <TabsTrigger value="payment">Paiement</TabsTrigger>
              <TabsTrigger value="cancel">Annulation</TabsTrigger>
            </TabsList>
            <TabsContent value="info" className="p-4 bg-white rounded-lg shadow-sm mt-2">
              <h3 className="font-bold mb-2">Informations utiles</h3>
              <p className="text-gray-600 mb-4">
                Nos hôtels partenaires vous offrent le meilleur confort et service pour votre séjour. 
                La plupart des établissements proposent des services supplémentaires comme le WiFi gratuit, 
                le petit-déjeuner et un service de conciergerie.
              </p>
              <p className="text-gray-600">
                L'enregistrement se fait généralement à partir de 14h00 et le départ avant 12h00, 
                mais ces horaires peuvent varier selon l'établissement.
              </p>
            </TabsContent>
            <TabsContent value="payment" className="p-4 bg-white rounded-lg shadow-sm mt-2">
              <h3 className="font-bold mb-2">Options de paiement</h3>
              <p className="text-gray-600 mb-4">
                Nous acceptons les cartes de crédit Visa, Mastercard et American Express. 
                Pour certaines offres, un paiement partiel peut être proposé avec le solde à régler à l'arrivée.
              </p>
              <p className="text-gray-600">
                Les prix affichés incluent la TVA et les taxes locales. Des frais supplémentaires peuvent s'appliquer 
                pour des services additionnels à l'hôtel.
              </p>
            </TabsContent>
            <TabsContent value="cancel" className="p-4 bg-white rounded-lg shadow-sm mt-2">
              <h3 className="font-bold mb-2">Politique d'annulation</h3>
              <p className="text-gray-600 mb-4">
                La plupart des réservations peuvent être annulées gratuitement jusqu'à 48 heures avant la date d'arrivée.
                Après ce délai, des frais d'annulation peuvent s'appliquer.
              </p>
              <p className="text-gray-600">
                Certaines offres promotionnelles ou tarifaires spéciales peuvent avoir des conditions d'annulation différentes.
                Veuillez vérifier les conditions spécifiques lors de votre réservation.
              </p>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Custom Request Banner */}
        <div className="bg-primary/10 rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h3 className="text-xl font-bold text-primary mb-2">Vous ne trouvez pas votre bonheur ?</h3>
              <p className="text-gray-600">
                Nous pouvons vous proposer d'autres hébergements non listés ou négocier des tarifs de groupe.
                Contactez-nous pour une offre sur mesure.
              </p>
            </div>
            <Button 
              asChild
              className="bg-gradient-to-r from-primary to-secondary text-white whitespace-nowrap"
              size="lg"
            >
              <a href="#reservation">Demande personnalisée</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
