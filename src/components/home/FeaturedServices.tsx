
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trophy, Plane, Building, Car, Map, Phone } from 'lucide-react';

const FeaturedServices = () => {
  const services = [
    {
      icon: <Trophy className="h-8 w-8 text-secondary" />,
      title: "CAN 2025",
      description: "Packs supporters pour la Coupe d'Afrique des Nations au Maroc",
      link: "/can2025",
      featured: true
    },
    {
      icon: <Plane className="h-8 w-8 text-primary" />,
      title: "Billets d'avion",
      description: "Vols vers le Maroc, Sénégal et destinations africaines",
      link: "/billets-avion"
    },
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: "Hébergements",
      description: "Hôtels, riads, villas et appartements meublés",
      link: "/hotels"
    },
    {
      icon: <Car className="h-8 w-8 text-primary" />,
      title: "Location de voitures",
      description: "Véhicules avec ou sans chauffeur",
      link: "/voitures"
    },
    {
      icon: <Map className="h-8 w-8 text-primary" />,
      title: "Excursions",
      description: "Découvrez les merveilles du Maroc et du Sénégal",
      link: "/excursions"
    },
    {
      icon: <Phone className="h-8 w-8 text-primary" />,
      title: "Support 24/7",
      description: "Assistance personnalisée pendant votre voyage",
      link: "/contact"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nos services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des solutions complètes pour vos voyages en Afrique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className={`hover:shadow-lg transition-shadow ${service.featured ? 'ring-2 ring-secondary' : ''}`}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {service.icon}
                  {service.featured && (
                    <span className="ml-2 bg-secondary text-primary text-xs px-2 py-1 rounded-full font-medium">
                      À la une
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <Button variant="outline" asChild className="w-full">
                  <Link to={service.link}>En savoir plus</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
