
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Calendar, MapPin, Users, Star, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Can2025 = () => {
  const packages = [
    {
      title: "Pack Supporter Standard",
      price: "1,299€",
      description: "L'essentiel pour vivre la CAN 2025",
      features: ["Vol A/R", "Hébergement 7 nuits", "Billets matchs groupe", "Transferts"]
    },
    {
      title: "Pack Supporter Premium",
      price: "1,899€",
      description: "L'expérience complète de supporter",
      features: ["Vol A/R", "Hébergement 10 nuits", "Billets tous matchs", "Transferts VIP", "Excursions"]
    },
    {
      title: "Pack VIP",
      price: "2,599€",
      description: "L'expérience ultime",
      features: ["Vol A/R Business", "Hôtel 5*", "Billets VIP", "Transferts privés", "Accès lounge"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-red-600 text-white py-20">
        <div 
          className="absolute inset-0 bg-black/40 bg-cover bg-center"
          style={{ backgroundImage: "url('/lovable-uploads/af93fe88-9741-47cf-bb0f-4bdd4f5c1abc.png')" }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Trophy className="h-16 w-16 text-yellow-400 mr-4" />
              <h1 className="text-5xl md:text-7xl font-bold">CAN 2025</h1>
            </div>
            <h2 className="text-2xl md:text-3xl mb-6">Coupe d'Afrique des Nations - Maroc</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Vivez l'événement football le plus prestigieux d'Afrique avec nos packs supporters exclusifs
            </p>
            <Button size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400 text-lg px-8">
              Réserver mon pack
            </Button>
          </div>
        </div>
      </section>

      {/* Key Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Dates</h3>
              <p className="text-gray-600">21 Décembre 2025 - 18 Janvier 2026</p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Lieu</h3>
              <p className="text-gray-600">Maroc - 6 villes hôtes</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Équipes</h3>
              <p className="text-gray-600">24 équipes africaines</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nos Packs CAN 2025</h2>
            <p className="text-xl text-gray-600">Choisissez votre formule pour vivre la CAN 2025</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pack, index) => (
              <Card key={index} className="relative overflow-hidden">
                {index === 1 && (
                  <div className="absolute top-0 right-0 bg-yellow-500 text-black px-3 py-1 text-sm font-bold">
                    POPULAIRE
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{pack.title}</CardTitle>
                  <CardDescription>{pack.description}</CardDescription>
                  <div className="text-3xl font-bold text-primary">{pack.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {pack.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Réserver ce pack</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt pour l'aventure ?</h2>
            <p className="text-xl mb-8">
              Contactez nos experts pour personnaliser votre séjour CAN 2025
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90">
                <Phone className="mr-2 h-5 w-5" />
                Nous appeler
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Demander un devis
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Can2025;
