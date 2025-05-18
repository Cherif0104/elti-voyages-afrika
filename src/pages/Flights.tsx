
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plane, BadgePercent, Calendar, Filter, SlidersHorizontal, Timer, Check, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "sonner";
import { motion } from "framer-motion";
import Logo from "@/components/Logo";
import FlightSearchForm from "@/components/flights/FlightSearchForm";
import FlightCard from "@/components/flights/FlightCard";
import FlightCompanySection from "@/components/flights/FlightCompanySection";

// Amadeus API client types
interface AmadeusAccessToken {
  type: string;
  access_token: string;
  expires_in: number;
  state: string;
}

export interface FlightOffer {
  id: string;
  itineraries: Array<{
    duration: string;
    segments: Array<{
      departure: {
        iataCode: string;
        terminal?: string;
        at: string;
      };
      arrival: {
        iataCode: string;
        terminal?: string;
        at: string;
      };
      carrierCode: string;
      number: string;
      aircraft: {
        code: string;
      };
      operating?: {
        carrierCode: string;
      };
      duration: string;
      id: string;
    }>;
  }>;
  price: {
    currency: string;
    total: string;
    base: string;
    fees: Array<{
      amount: string;
      type: string;
    }>;
    grandTotal: string;
  };
  travelerPricings: Array<{
    travelerId: string;
    fareOption: string;
    travelerType: string;
    price: {
      currency: string;
      total: string;
      base: string;
    };
  }>;
}

const popularDestinations = [
  { from: "CDG", to: "CMN", label: "Paris → Casablanca", price: "132 €" },
  { from: "ORY", to: "RAK", label: "Paris → Marrakech", price: "154 €" },
  { from: "BRU", to: "CMN", label: "Bruxelles → Casablanca", price: "165 €" },
  { from: "TLS", to: "DKR", label: "Toulouse → Dakar", price: "349 €" },
];

// Create a component for popular route card
const PopularRouteCard = ({ 
  from, 
  to, 
  label, 
  price, 
  onSelect 
}: { 
  from: string; 
  to: string; 
  label: string; 
  price: string; 
  onSelect: () => void 
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all cursor-pointer"
      onClick={onSelect}
    >
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2 font-medium">
            <Plane className="h-4 w-4 text-primary" />
            {label}
          </div>
          <BadgePercent className="h-4 w-4 text-green-500" />
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Calendar className="h-3 w-3" />
            <span>Prochainement</span>
          </div>
          <div className="text-lg font-bold text-primary">{price}</div>
        </div>
      </div>
    </motion.div>
  );
};

const FilterSection = ({
  priceRange,
  setPriceRange,
  directOnly,
  setDirectOnly,
  maxDuration,
  setMaxDuration,
}) => {
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
              step={10}
              className="py-4"
            />
            <div className="flex items-center justify-between">
              <span className="text-sm">Min: {priceRange[0]}€</span>
              <span className="text-sm">Max: {priceRange[1]}€</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Durée maximale</h3>
          <div className="space-y-4">
            <Slider
              value={[maxDuration]}
              onValueChange={(value) => setMaxDuration(value[0])}
              max={24}
              step={1}
              className="py-4"
            />
            <div className="flex items-center justify-between">
              <span className="text-sm">Durée: {maxDuration}h maximum</span>
              <span className="flex items-center text-sm text-gray-500">
                <Timer className="h-3 w-3 mr-1" />
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h3 className="font-medium">Vol direct uniquement</h3>
            <p className="text-sm text-gray-500">Sans escale</p>
          </div>
          <Switch 
            checked={directOnly} 
            onCheckedChange={setDirectOnly} 
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          variant="outline"
          className="w-full"
          onClick={() => {
            setPriceRange([0, 1000]);
            setDirectOnly(false);
            setMaxDuration(24);
          }}
        >
          Réinitialiser les filtres
        </Button>
      </CardFooter>
    </Card>
  );
};

const FlightDetailModal = ({ offer, onClose }) => {
  if (!offer) return null;
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('fr-FR', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatDuration = (duration: string) => {
    return duration
      .replace('PT', '')
      .replace('H', 'h ')
      .replace('M', 'm');
  };

  const getAirlineLogo = (carrierCode: string) => {
    const airlineLogos: Record<string, string> = {
      "AT": "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=50&auto=format&fit=crop",
      "AF": "https://images.unsplash.com/photo-1554123168-b400f9c806ca?q=80&w=50&auto=format&fit=crop",
      "IB": "https://images.unsplash.com/photo-1599202889720-d071bd694799?q=80&w=50&auto=format&fit=crop",
    };
    
    return airlineLogos[carrierCode] || "https://images.unsplash.com/photo-1541005520294-1d2dbf2ef448?q=80&w=50&auto=format&fit=crop";
  };
  
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="p-5 border-b">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Logo size="sm" />
              <h3 className="text-xl font-bold">Détails du vol</h3>
            </div>
            <button 
              className="text-gray-500 hover:text-gray-800" 
              onClick={onClose}
            >
              ✕
            </button>
          </div>
        </div>
        
        <div className="p-5 space-y-6">
          {offer.itineraries.map((itinerary, index) => (
            <div key={index} className="border-b pb-6 last:border-b-0 last:pb-0">
              <h4 className="text-lg font-bold mb-4">
                {index === 0 ? "Aller" : "Retour"}
              </h4>
              
              {itinerary.segments.map((segment, segIndex) => (
                <div key={segIndex} className="mb-4 last:mb-0">
                  <div className="flex items-center mb-2">
                    <div className="h-8 w-8 rounded-full overflow-hidden mr-3">
                      <img 
                        src={getAirlineLogo(segment.carrierCode)}
                        alt={`${segment.carrierCode} logo`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="text-sm">
                      Vol {segment.carrierCode} {segment.number}
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-1">
                      <div className="text-lg font-bold">{formatDate(segment.departure.at)}</div>
                      <div className="text-sm text-gray-600">
                        {segment.departure.iataCode} 
                        {segment.departure.terminal && ` Terminal ${segment.departure.terminal}`}
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center px-4">
                      <div className="text-xs text-gray-500 mb-1">{formatDuration(segment.duration)}</div>
                      <div className="w-24 h-[2px] bg-gray-300"></div>
                      <div className="text-xs text-gray-500 mt-1">
                        <Plane className="h-3 w-3 inline" />
                      </div>
                    </div>
                    
                    <div className="flex-1 text-right">
                      <div className="text-lg font-bold">{formatDate(segment.arrival.at)}</div>
                      <div className="text-sm text-gray-600">
                        {segment.arrival.iataCode} 
                        {segment.arrival.terminal && ` Terminal ${segment.arrival.terminal}`}
                      </div>
                    </div>
                  </div>
                  
                  {segIndex < itinerary.segments.length - 1 && (
                    <div className="flex items-center justify-center my-4">
                      <div className="px-3 py-1 bg-gray-100 rounded text-xs text-gray-600">
                        Escale
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
          
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-4 rounded-lg">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div>
                <h5 className="font-medium mb-2">Détails tarifaires</h5>
                <div className="space-y-1">
                  <p className="text-sm flex justify-between">
                    <span>Base:</span> 
                    <span>{offer.price.base} {offer.price.currency}</span>
                  </p>
                  <p className="text-sm flex justify-between">
                    <span>Taxes &amp; frais:</span>
                    <span>
                      {(parseFloat(offer.price.total) - parseFloat(offer.price.base)).toFixed(2)} {offer.price.currency}
                    </span>
                  </p>
                  <div className="h-[1px] bg-gray-200 my-1"></div>
                  <p className="text-sm font-bold flex justify-between">
                    <span>Total:</span>
                    <span>{offer.price.total} {offer.price.currency}</span>
                  </p>
                </div>
              </div>
              
              <div className="md:text-right md:self-end">
                <Button className="w-full md:w-auto" variant="booking">
                  Réserver ce vol
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Flights = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [adults, setAdults] = useState("1");
  const [isSearching, setIsSearching] = useState(false);
  const [flightOffers, setFlightOffers] = useState<FlightOffer[]>([]);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [sortOption, setSortOption] = useState("price_asc");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [directOnly, setDirectOnly] = useState(false);
  const [maxDuration, setMaxDuration] = useState(24);
  const [selectedFlight, setSelectedFlight] = useState<FlightOffer | null>(null);

  // Static flights for demonstration
  const staticFlights: FlightOffer[] = [
    {
      "id": "1",
      "itineraries": [
        {
          "duration": "PT3H20M",
          "segments": [
            {
              "departure": {
                "iataCode": "CDG",
                "terminal": "2E",
                "at": "2023-11-01T10:30:00"
              },
              "arrival": {
                "iataCode": "CMN",
                "terminal": "1",
                "at": "2023-11-01T13:50:00"
              },
              "carrierCode": "AT",
              "number": "757",
              "aircraft": {
                "code": "738"
              },
              "duration": "PT3H20M",
              "id": "1"
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "132.42",
        "base": "96.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          }
        ],
        "grandTotal": "132.42"
      },
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "132.42",
            "base": "96.00"
          }
        }
      ]
    },
    {
      "id": "2",
      "itineraries": [
        {
          "duration": "PT7H30M",
          "segments": [
            {
              "departure": {
                "iataCode": "ORY",
                "terminal": "3",
                "at": "2023-11-01T14:20:00"
              },
              "arrival": {
                "iataCode": "MAD",
                "terminal": "2",
                "at": "2023-11-01T16:30:00"
              },
              "carrierCode": "IB",
              "number": "3441",
              "aircraft": {
                "code": "320"
              },
              "duration": "PT2H10M",
              "id": "21"
            },
            {
              "departure": {
                "iataCode": "MAD",
                "terminal": "2",
                "at": "2023-11-01T18:50:00"
              },
              "arrival": {
                "iataCode": "RAK",
                "terminal": "1",
                "at": "2023-11-01T21:50:00"
              },
              "carrierCode": "IB",
              "number": "8816",
              "aircraft": {
                "code": "319"
              },
              "duration": "PT3H",
              "id": "22"
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "154.35",
        "base": "115.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          }
        ],
        "grandTotal": "154.35"
      },
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "154.35",
            "base": "115.00"
          }
        }
      ]
    },
    {
      "id": "3",
      "itineraries": [
        {
          "duration": "PT3H15M",
          "segments": [
            {
              "departure": {
                "iataCode": "BRU",
                "terminal": "A",
                "at": "2023-11-01T16:45:00"
              },
              "arrival": {
                "iataCode": "CMN",
                "terminal": "1",
                "at": "2023-11-01T20:00:00"
              },
              "carrierCode": "AT",
              "number": "652",
              "aircraft": {
                "code": "789"
              },
              "duration": "PT3H15M",
              "id": "3"
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "165.23",
        "base": "120.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          }
        ],
        "grandTotal": "165.23"
      },
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "165.23",
            "base": "120.00"
          }
        }
      ]
    },
    {
      "id": "4",
      "itineraries": [
        {
          "duration": "PT9H45M",
          "segments": [
            {
              "departure": {
                "iataCode": "TLS",
                "terminal": "1",
                "at": "2023-11-01T09:15:00"
              },
              "arrival": {
                "iataCode": "CDG",
                "terminal": "2F",
                "at": "2023-11-01T10:55:00"
              },
              "carrierCode": "AF",
              "number": "7523",
              "aircraft": {
                "code": "320"
              },
              "duration": "PT1H40M",
              "id": "41"
            },
            {
              "departure": {
                "iataCode": "CDG",
                "terminal": "2E",
                "at": "2023-11-01T14:35:00"
              },
              "arrival": {
                "iataCode": "DKR",
                "terminal": "1",
                "at": "2023-11-01T19:00:00"
              },
              "carrierCode": "AF",
              "number": "718",
              "aircraft": {
                "code": "77W"
              },
              "duration": "PT5H25M",
              "id": "42"
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "349.76",
        "base": "250.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          }
        ],
        "grandTotal": "349.76"
      },
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "349.76",
            "base": "250.00"
          }
        }
      ]
    }
  ];

  // Apply filters and sort
  const filteredFlights = searchPerformed ? 
    (flightOffers.length > 0 ? flightOffers : staticFlights).filter(offer => {
      // Price filter
      const price = parseFloat(offer.price.total);
      if (price < priceRange[0] || price > priceRange[1]) {
        return false;
      }
      
      // Direct flights filter
      if (directOnly && offer.itineraries.some(itinerary => itinerary.segments.length > 1)) {
        return false;
      }
      
      // Max duration filter
      if (offer.itineraries.some(itinerary => {
        const durationString = itinerary.duration.replace('PT', '');
        let hours = 0;
        
        if (durationString.includes('H')) {
          hours = parseInt(durationString.split('H')[0]);
        }
        
        return hours > maxDuration;
      })) {
        return false;
      }
      
      return true;
    }) : [];
    
  // Sort flights
  const sortedFlights = [...filteredFlights].sort((a, b) => {
    if (sortOption === 'price_asc') {
      return parseFloat(a.price.total) - parseFloat(b.price.total);
    }
    
    if (sortOption === 'price_desc') {
      return parseFloat(b.price.total) - parseFloat(a.price.total);
    }
    
    if (sortOption === 'duration_asc') {
      const getDuration = (itinerary: any) => {
        const durationString = itinerary.duration.replace('PT', '');
        let hours = 0;
        let minutes = 0;
        
        if (durationString.includes('H')) {
          hours = parseInt(durationString.split('H')[0]);
          if (durationString.includes('M')) {
            minutes = parseInt(durationString.split('H')[1].replace('M', ''));
          }
        } else if (durationString.includes('M')) {
          minutes = parseInt(durationString.replace('M', ''));
        }
        
        return hours * 60 + minutes;
      };
      
      return getDuration(a.itineraries[0]) - getDuration(b.itineraries[0]);
    }
    
    return 0;
  });

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!origin || !destination || !departureDate) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }
    
    setIsSearching(true);
    setFlightOffers([]);
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
      
      // With the token, we can now search for flights
      let searchUrl = `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${origin}&destinationLocationCode=${destination}&departureDate=${departureDate}&adults=${adults}&currencyCode=EUR&max=10`;
      
      if (returnDate) {
        searchUrl += `&returnDate=${returnDate}`;
      }
      
      const flightResponse = await fetch(searchUrl, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${tokenData.access_token}`,
        },
      });

      if (!flightResponse.ok) {
        throw new Error("Failed to search flights");
      }

      const flightData = await flightResponse.json();
      setFlightOffers(flightData.data || []);
      
      if (flightData.data?.length === 0) {
        toast.info("Aucun vol disponible pour cette recherche");
      } else {
        toast.success(`${flightData.data?.length} vols trouvés`);
      }
    } catch (error) {
      console.error("Error searching flights:", error);
      toast.error("Une erreur est survenue lors de la recherche des vols");
      
      // Use static flights as fallback
      setTimeout(() => {
        toast.info("Affichage des résultats de démonstration");
      }, 1000);
    } finally {
      setIsSearching(false);
    }
  };

  const handlePopularRouteSelect = (from: string, to: string) => {
    setOrigin(from);
    setDestination(to);
    
    // Set default dates if not already set
    if (!departureDate) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setDepartureDate(tomorrow.toISOString().split('T')[0]);
    }
    
    if (!returnDate) {
      const dayAfterTomorrow = new Date();
      dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 7);
      setReturnDate(dayAfterTomorrow.toISOString().split('T')[0]);
    }
    
    // Scroll to search form
    document.getElementById('searchForm')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 pt-24 pb-16">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0 z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
              >
                <span className="inline-block text-secondary font-semibold mb-2 text-lg drop-shadow-md">
                  Avec ELTI VOYAGE
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
                  Trouvez vos 
                  <span className="block mt-2 text-secondary">billets d'avion</span>
                </h1>
                <p className="text-lg mb-8 max-w-lg font-medium drop-shadow-md">
                  Comparez les offres des meilleures compagnies aériennes et trouvez les tarifs les plus avantageux pour votre prochain voyage.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="text-lg px-8 py-6 font-semibold bg-secondary hover:bg-secondary/90 text-primary transition-all duration-300"
                    onClick={() => document.getElementById('searchForm')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Réserver maintenant
                  </Button>
                </div>
              </motion.div>
            </div>
            
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative w-full max-w-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-white/20">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-xl">Destinations populaires</h3>
                    <Logo size="sm" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {popularDestinations.map((dest, index) => (
                      <motion.div
                        key={index}
                        className="bg-white/20 backdrop-blur-sm rounded-xl p-3 cursor-pointer hover:bg-white/30 transition-all border border-white/10"
                        whileHover={{ scale: 1.03 }}
                        onClick={() => handlePopularRouteSelect(dest.from, dest.to)}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <Plane className="h-4 w-4" />
                          <span className="font-medium text-sm">{dest.label}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs opacity-75">Dès</span>
                          <span className="font-bold">{dest.price}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <FlightSearchForm
          origin={origin}
          setOrigin={setOrigin}
          destination={destination}
          setDestination={setDestination}
          departureDate={departureDate}
          setDepartureDate={setDepartureDate}
          returnDate={returnDate}
          setReturnDate={setReturnDate}
          adults={adults}
          setAdults={setAdults}
          handleSearch={handleSearch}
          isSearching={isSearching}
        />
        
        <div className="py-10">
          {searchPerformed && (
            <div className="mb-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 p-6 bg-white rounded-lg shadow-sm">
                <div>
                  <h2 className="text-2xl font-bold text-primary">Résultats ({sortedFlights.length})</h2>
                  <p className="text-gray-600">Vols disponibles pour votre recherche</p>
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
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-56 p-0">
                      <div className="p-1 space-y-0.5">
                        {[
                          { value: "price_asc", label: "Prix: croissant" },
                          { value: "price_desc", label: "Prix: décroissant" },
                          { value: "duration_asc", label: "Durée: la plus courte" },
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
                    directOnly={directOnly}
                    setDirectOnly={setDirectOnly}
                    maxDuration={maxDuration}
                    setMaxDuration={setMaxDuration}
                  />
                </div>
                
                {/* Filters - Mobile */}
                {showFilters && (
                  <div className="md:hidden">
                    <FilterSection 
                      priceRange={priceRange}
                      setPriceRange={setPriceRange}
                      directOnly={directOnly}
                      setDirectOnly={setDirectOnly}
                      maxDuration={maxDuration}
                      setMaxDuration={setMaxDuration}
                    />
                  </div>
                )}
                
                {/* Flights List */}
                <div className="lg:col-span-3 space-y-4">
                  {sortedFlights.length > 0 ? (
                    sortedFlights.map((offer) => (
                      <FlightCard 
                        key={offer.id} 
                        offer={offer}
                        onSelect={() => setSelectedFlight(offer)}
                      />
                    ))
                  ) : (
                    <div className="flex flex-col items-center justify-center py-12 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <Plane className="h-16 w-16 text-gray-300 mb-4" />
                      <p className="text-gray-500 text-center mb-2">Aucun vol ne correspond à vos critères</p>
                      <Button 
                        variant="outline" 
                        onClick={() => {
                          setPriceRange([0, 1000]);
                          setDirectOnly(false);
                          setMaxDuration(24);
                        }}
                      >
                        Réinitialiser les filtres
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          
          {isSearching === false && !searchPerformed && (
            <div className="bg-white rounded-lg shadow-sm p-8 mb-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center p-5">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <Plane className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Des centaines de destinations</h3>
                  <p className="text-gray-600">Trouvez des vols pour des centaines de destinations dans le monde entier</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-5">
                  <div className="bg-secondary/10 p-4 rounded-full mb-4">
                    <BadgePercent className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Prix compétitifs</h3>
                  <p className="text-gray-600">Comparez les prix de différentes compagnies aériennes pour trouver les meilleures offres</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-5">
                  <div className="bg-green-100 p-4 rounded-full mb-4">
                    <Calendar className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Réservation flexible</h3>
                  <p className="text-gray-600">Modifiez ou annulez votre billet selon les conditions de la compagnie</p>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Flight Companies */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-10">
          <FlightCompanySection />
        </div>
        
        {/* Tabs for Additional Information */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-10">
          <h2 className="text-2xl font-bold text-primary mb-6">Informations importantes</h2>
          <Tabs defaultValue="info">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="info">Bagages</TabsTrigger>
              <TabsTrigger value="payment">Paiement</TabsTrigger>
              <TabsTrigger value="cancel">Annulation</TabsTrigger>
            </TabsList>
            <TabsContent value="info" className="p-4 mt-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=200&auto=format&fit=crop"
                  alt="Bagages" 
                  className="w-24 h-16 object-cover rounded-lg shadow-md hidden md:block"
                />
                <div>
                  <h3 className="font-bold mb-2">Informations bagages</h3>
                  <p className="text-gray-600 mb-4">
                    La franchise bagage varie selon la compagnie aérienne et la classe de voyage. 
                    En général, chaque passager a droit à un bagage cabine et à un bagage en soute pour les vols internationaux.
                  </p>
                  <p className="text-gray-600">
                    Pour les vols low-cost, les bagages en soute sont généralement payants. 
                    Nous vous recommandons de vérifier les conditions spécifiques de votre billet avant de voyager.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="payment" className="p-4 mt-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=200&auto=format&fit=crop"
                  alt="Paiements" 
                  className="w-24 h-16 object-cover rounded-lg shadow-md hidden md:block"
                />
                <div>
                  <h3 className="font-bold mb-2">Options de paiement</h3>
                  <p className="text-gray-600 mb-4">
                    Nous acceptons les cartes de crédit Visa, Mastercard et American Express. 
                    Pour certaines offres, un paiement en plusieurs fois peut être proposé sans frais supplémentaires.
                  </p>
                  <p className="text-gray-600">
                    Les prix affichés incluent toutes les taxes aériennes obligatoires. Des frais supplémentaires peuvent s'appliquer 
                    pour des services additionnels (bagages supplémentaires, repas spéciaux, etc.).
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="cancel" className="p-4 mt-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1524678714210-9917a6c619c2?q=80&w=200&auto=format&fit=crop"
                  alt="Annulations" 
                  className="w-24 h-16 object-cover rounded-lg shadow-md hidden md:block"
                />
                <div>
                  <h3 className="font-bold mb-2">Politique d'annulation</h3>
                  <p className="text-gray-600 mb-4">
                    Les conditions d'annulation dépendent du type de billet que vous avez acheté et de la compagnie aérienne.
                    Les billets standards peuvent généralement être modifiés moyennant des frais.
                  </p>
                  <p className="text-gray-600">
                    Les billets non remboursables ne peuvent pas être remboursés en cas d'annulation, mais peuvent parfois être modifiés.
                    Nous vous recommandons de souscrire une assurance voyage pour vous protéger contre les imprévus.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Support Call to Action */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="bg-gradient-to-r from-primary to-primary/90 p-8 text-white">
              <div className="flex items-center mb-6">
                <Logo size="md" className="mr-4" />
                <div>
                  <h3 className="text-xl font-bold">Besoin d'aide pour réserver votre vol?</h3>
                  <p className="text-white/80">Notre équipe est disponible 24h/24 pour vous assister</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-secondary" />
                  Service personnalisé
                </p>
                <p className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-secondary" />
                  Tarifs négociés
                </p>
                <p className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-secondary" />
                  Assistance pendant votre voyage
                </p>
              </div>
            </div>
            
            <div className="p-8 flex flex-col justify-center items-start bg-[url('https://images.unsplash.com/photo-1521727857535-28d2047314ac?q=80&w=500&auto=format&fit=crop')] bg-cover bg-center relative">
              <div className="absolute inset-0 bg-gray-900/50"></div>
              <div className="relative z-10 text-white">
                <h3 className="text-xl font-bold mb-4">Contactez-nous</h3>
                <p className="mb-6 text-white/90">
                  Notre équipe d'experts est disponible pour vous aider à trouver les meilleures options de vol pour votre prochain voyage.
                </p>
                <Button 
                  asChild
                  className="bg-white text-primary hover:bg-white/90 whitespace-nowrap"
                  size="lg"
                >
                  <a href="https://wa.me/212656136036" target="_blank" rel="noopener noreferrer">
                    Contacter sur WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Flight Detail Modal */}
        {selectedFlight && (
          <FlightDetailModal 
            offer={selectedFlight} 
            onClose={() => setSelectedFlight(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Flights;
