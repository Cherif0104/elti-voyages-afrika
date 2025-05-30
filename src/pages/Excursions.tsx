import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Star, Camera } from "lucide-react";

const Excursions = () => {
  const excursions = [
    {
      title: "Marrakech & Atlas",
      location: "Marrakech, Maroc",
      duration: "3 jours",
      price: "289€",
      rating: 4.8,
      participants: "8-12",
      highlights: ["Médina", "Jardins Majorelle", "Atlas", "Villages berbères"],
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73bb4?q=80&w=400&auto=format&fit=crop"
    },
    {
      title: "Désert du Sahara",
      location: "Merzouga, Maroc",
      duration: "2 jours",
      price: "199€",
      rating: 4.9,
      participants: "6-10",
      highlights: ["Dunes Erg Chebbi", "Nuit en bivouac", "Coucher de soleil", "Balade chameau"],
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=400&auto=format&fit=crop"
    },
    {
      title: "Île de Gorée",
      location: "Dakar, Sénégal",
      duration: "1 jour",
      price: "89€",
      rating: 4.7,
      participants: "10-15",
      highlights: ["Maison des Esclaves", "Histoire", "Architecture", "Traversée en ferry"],
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=400&auto=format&fit=crop"
    },
    {
      title: "Casablanca Moderne",
      location: "Casablanca, Maroc",
      duration: "1 jour",
      price: "125€",
      rating: 4.5,
      participants: "8-12",
      highlights: ["Hassan II", "Corniche", "Quartiers modernes", "Gastronomie"],
      image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=400&auto=format&fit=crop"
    },
    {
      title: "Delta du Saloum",
      location: "Sénégal",
      duration: "2 jours",
      price: "165€",
      rating: 4.6,
      participants: "6-8",
      highlights: ["Mangroves", "Oiseaux", "Pêche traditionnelle", "Villages"],
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=400&auto=format&fit=crop"
    },
    {
      title: "Fès Impériale",
      location: "Fès, Maroc",
      duration: "2 jours",
      price: "189€",
      rating: 4.8,
      participants: "8-12",
      highlights: ["Médina", "Artisanat", "Tanneries", "Université Al Quaraouiyine"],
      image: "https://images.unsplash.com/photo-1570654639102-bdd95efeca7a?q=80&w=400&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/90 text-white py-20">
        <div 
          className="absolute inset-0 bg-black/30 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1000&auto=format&fit=crop')" }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Excursions & Découvertes
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Explorez les merveilles du Maroc et du Sénégal avec nos guides experts
            </p>
            <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 text-lg px-8">
              <Camera className="mr-2 h-5 w-5" />
              Découvrir nos excursions
            </Button>
          </div>
        </div>
      </section>

      {/* Excursions Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nos Excursions</h2>
          <p className="text-xl text-gray-600">Vivez des expériences inoubliables</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {excursions.map((excursion, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={excursion.image} 
                  alt={excursion.title}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-2 right-2 bg-secondary text-primary">
                  {excursion.duration}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-xl">{excursion.title}</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-sm font-medium">{excursion.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{excursion.location}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-gray-500" />
                    <span>{excursion.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-gray-500" />
                    <span>{excursion.participants}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Points forts :</h4>
                  <div className="flex flex-wrap gap-1">
                    {excursion.highlights.map((highlight, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-primary">{excursion.price}</span>
                    <span className="text-sm text-gray-600">/pers.</span>
                  </div>
                  <Button asChild>
                    <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">Réserver</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us */}
        <section className="py-16 bg-white rounded-lg mt-16">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">
              Pourquoi nos excursions ?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Guides locaux experts</h3>
                <p className="text-gray-600">Découvrez les secrets avec nos guides passionnés</p>
              </div>
              
              <div className="text-center">
                <div className="bg-secondary/10 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Star className="h-10 w-10 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expériences authentiques</h3>
                <p className="text-gray-600">Immersion totale dans la culture locale</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Camera className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Souvenirs mémorables</h3>
                <p className="text-gray-600">Créez des souvenirs qui dureront toute une vie</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Excursions;
