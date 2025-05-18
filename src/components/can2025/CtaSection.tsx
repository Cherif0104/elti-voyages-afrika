
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Phone, Calendar } from "lucide-react";

const CtaSection = () => {
  const ctaRef = useRef(null);

  return (
    <section className="py-20 relative bg-primary">
      <div className="absolute inset-0 bg-primary" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      }} />
      
      <div ref={ctaRef} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-md text-sm font-medium mb-4">
                <Calendar className="inline-block mr-2 h-4 w-4" />
                Été 2025
              </span>
              
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Prêt à vivre la CAN 2025 au Maroc ?
              </h2>
              
              <p className="text-white/90 text-lg mb-10 max-w-xl mx-auto lg:mx-0">
                Réservez dès maintenant votre pack supporter et vivez des moments inoubliables 
                au cœur du football africain. Places limitées !
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="#reservation"
                  className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 rounded-md transition-all duration-300 inline-block shadow-lg font-medium"
                >
                  Réserver mon pack
                </Link>
                
                <a
                  href="tel:+212656136036"
                  className="flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 text-lg px-6 py-4 rounded-md transition-all duration-300 font-medium"
                >
                  <Phone className="h-5 w-5" />
                  <span>+212 656 13 60 36</span>
                </a>
              </div>
            </div>
            
            {/* Right side card */}
            <div className="w-full lg:w-1/2 lg:pl-12">
              <div className="bg-white rounded-lg shadow-xl p-8">
                <div className="text-center">
                  <div className="mb-4">
                    <span className="inline-block bg-primary/10 text-primary rounded-md px-3 py-1 text-sm font-medium">
                      Promotion spéciale
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">Pack supporter</h3>
                  <p className="text-gray-600 mb-4">Accès VIP, hébergement et activités inclus</p>
                  <div className="flex justify-center items-baseline mb-6">
                    <span className="text-4xl font-bold text-primary">990€</span>
                    <span className="text-lg ml-1 text-gray-500">/ personne</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-left">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Billets pour 2 matchs garantis</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">4 nuits d'hôtel</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Transferts aéroport inclus</span>
                    </li>
                  </ul>
                  <Link
                    to="#reservation"
                    className="bg-primary text-white hover:bg-primary/90 text-base w-full py-4 px-6 rounded-md transition-all duration-300 inline-block font-medium"
                  >
                    Réserver maintenant
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
