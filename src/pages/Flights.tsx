import { Plane, Clock, Shield, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FlightCard from "@/components/flights/FlightCard";
import FlightSearchForm from "@/components/flights/FlightSearchForm";
import FlightCompanySection from "@/components/flights/FlightCompanySection";
const Flights = () => {
  const flightFeatures = [{
    icon: <Globe className="h-8 w-8" />,
    title: "Destinations multiples",
    description: "Vols vers plus de 50 destinations en Afrique et dans le monde"
  }, {
    icon: <Clock className="h-8 w-8" />,
    title: "Réservation rapide",
    description: "Confirmation de votre vol en moins de 24h"
  }, {
    icon: <Shield className="h-8 w-8" />,
    title: "Paiement sécurisé",
    description: "Transactions protégées et remboursement garanti"
  }, {
    icon: <Plane className="h-8 w-8" />,
    title: "Compagnies premium",
    description: "Partenariats avec les meilleures compagnies aériennes"
  }];
  const popularFlights = [{
    departure: "Casablanca",
    arrival: "Dakar",
    company: "Air Sénégal",
    price: "299€",
    duration: "2h 30min",
    logo: "/lovable-uploads/70452ae0-3719-42f5-b659-fcc9048ec921.png"
  }, {
    departure: "Paris",
    arrival: "Casablanca",
    company: "Royal Air Maroc",
    price: "199€",
    duration: "3h 15min",
    logo: "/lovable-uploads/a89fcb9d-cfaf-4079-9105-53594f9f0310.png"
  }, {
    departure: "Marrakech",
    arrival: "Dakar",
    company: "Turkish Airlines",
    price: "349€",
    duration: "4h 45min",
    logo: "/lovable-uploads/ab63324d-f67c-462a-9b92-16f736061c0a.png"
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20" style={{
      backgroundColor: '#172554'
    }}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }}>
              <Badge className="mb-4 px-4 py-2 bg-secondary text-primary">
                <Plane className="h-4 w-4 mr-2" />
                Billets d'avion
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                Billets
                <span className="block text-secondary">d'Avion</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">Voyagez vers toutes les destinations aux meilleurs tarifs</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8" asChild>
                  <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                    En savoir plus
                  </a>
                </Button>
                <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 text-lg px-8" asChild>
                  <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                    Réserver
                  </a>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">50+</div>
                  <div className="text-white/80">Destinations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">15</div>
                  <div className="text-white/80">Compagnies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">24h</div>
                  <div className="text-white/80">Confirmation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">4.8/5</div>
                  <div className="text-white/80">Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">Rechercher un vol</h2>
            <FlightSearchForm />
          </motion.div>
        </div>
      </section>

      {/* Popular Flights */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Vols populaires</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez nos vols les plus demandés vers les destinations phares d'Afrique
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {popularFlights.map((flight, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} viewport={{
            once: true
          }}>
                <FlightCard {...flight} />
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Pourquoi nous choisir ?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ELTI VOYAGES vous garantit la meilleure expérience de vol
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {flightFeatures.map((feature, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} viewport={{
            once: true
          }}>
                <Card className="text-center h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-primary mx-auto mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <FlightCompanySection />

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à décoller ?</h2>
            <p className="text-xl mb-8">
              Contactez nos experts pour trouver le vol parfait pour votre destination
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
export default Flights;