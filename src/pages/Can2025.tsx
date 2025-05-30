import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Calendar, MapPin, Users, Star, Phone } from "lucide-react";
import Can2025SpecialOffer from "@/components/home/Can2025SpecialOffer";
const Can2025 = () => {
  const packages = [{
    title: "Pack Supporter Standard",
    price: "1,299€",
    description: "L'essentiel pour vivre la CAN 2025",
    features: ["Vol A/R", "Hébergement 7 nuits", "Billets matchs groupe", "Transferts"]
  }, {
    title: "Pack Supporter Premium",
    price: "1,899€",
    description: "L'expérience complète de supporter",
    features: ["Vol A/R", "Hébergement 10 nuits", "Billets tous matchs", "Transferts VIP", "Excursions"]
  }, {
    title: "Pack VIP",
    price: "2,599€",
    description: "L'expérience ultime",
    features: ["Vol A/R Business", "Hôtel 5*", "Billets VIP", "Transferts privés", "Accès lounge"]
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20" style={{
      backgroundColor: '#172554'
    }}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Trophy className="h-16 w-16 text-yellow-400 mr-4" />
              <h1 className="text-5xl md:text-7xl font-bold">CAN 2025</h1>
            </div>
            <h2 className="text-2xl md:text-3xl mb-6">Coupe d'Afrique des Nations - Maroc</h2>
            
            {/* Accroche spéciale */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
              <p className="text-xl md:text-2xl font-bold text-yellow-300 mb-2">
                Page dédiée à la Coupe d'Afrique des Nations 2025 – Destination Maroc
              </p>
              <p className="text-lg text-white/90">
                Nous sommes Sénégalais et nous supportons fièrement les Lions de la Teranga 🇸🇳
              </p>
            </div>

            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Vivez l'événement football le plus prestigieux d'Afrique avec nos packs supporters exclusifs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8" asChild>
                <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                  En savoir plus
                </a>
              </Button>
              <Button size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400 text-lg px-8" asChild>
                <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                  Réserver
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <Can2025SpecialOffer />

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
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
                <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                  En savoir plus
                </a>
              </Button>
              <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90" asChild>
                <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                  Réserver
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Can2025;