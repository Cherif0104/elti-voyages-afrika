
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Plane, Building, Car } from 'lucide-react';

const SimpleHero = () => {
  return (
    <section className="relative text-white py-20" style={{ backgroundColor: '#172554' }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Voyagez au cœur de l'Afrique
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Billets d'avion, hébergements, voitures et packs CAN 2025
          </p>
          
          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/billets-avion" className="flex items-center justify-center">
                <Plane className="h-5 w-5 mr-2" />
                Vols
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/hotels" className="flex items-center justify-center">
                <Building className="h-5 w-5 mr-2" />
                Hébergements
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/voitures" className="flex items-center justify-center">
                <Car className="h-5 w-5 mr-2" />
                Voitures
              </Link>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </div>
    </section>
  );
};

export default SimpleHero;
