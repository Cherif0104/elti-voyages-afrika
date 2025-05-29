
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Phone, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "@/components/Logo";

const CtaSection = () => {
  const ctaRef = useRef(null);

  return (
    <section className="py-20 relative bg-white">
      <div className="absolute inset-0 bg-primary/5" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      }} />
      
      <div ref={ctaRef} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center justify-center lg:justify-start mb-6">
                  <Logo size="md" className="mr-4" />
                  <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-md text-sm font-medium">
                    <Calendar className="inline-block mr-2 h-4 w-4" />
                    Été 2025
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
                  Prêt à supporter le Sénégal à la CAN 2025 au Maroc ?
                </h2>
                
                <p className="text-gray-600 text-lg mb-10 max-w-xl mx-auto lg:mx-0">
                  Réservez dès maintenant votre pack supporter et vivez des moments inoubliables 
                  au cœur du football africain. Places limitées !
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href="https://wa.me/212614082524"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-4 rounded-md transition-all duration-300 inline-block shadow-lg font-medium"
                  >
                    Réserver mon pack
                  </a>
                  
                  <a
                    href="tel:+212014082524"
                    className="flex items-center justify-center gap-2 border border-primary/30 text-primary hover:bg-primary/5 text-lg px-6 py-4 rounded-md transition-all duration-300 font-medium"
                  >
                    <Phone className="h-5 w-5" />
                    <span>+212 014 082 524</span>
                  </a>
                </div>
              </motion.div>
            </div>
            
            {/* Right side card */}
            <div className="w-full lg:w-1/2 lg:pl-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-lg shadow-xl p-8 border border-gray-100"
              >
                <div className="text-center">
                  <div className="mb-4">
                    <span className="inline-block bg-primary/10 text-primary rounded-md px-3 py-1 text-sm font-medium">
                      Promotion spéciale
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">Pack supporter Sénégal</h3>
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
                      <span className="text-gray-700">Billets pour 2 matchs du Sénégal</span>
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
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Maillot officiel du Sénégal offert</span>
                    </li>
                  </ul>
                  <a
                    href="https://wa.me/212614082524"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-white hover:bg-primary/90 text-base w-full py-4 px-6 rounded-md transition-all duration-300 inline-block font-medium"
                  >
                    Réserver maintenant
                  </a>
                </div>
              </motion.div>
              
              {/* Contact information */}
              <div className="mt-6 text-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <p className="font-medium mb-2 text-gray-700">Pour plus d'informations:</p>
                  <div className="flex flex-col sm:flex-row gap-2 justify-center text-sm">
                    <div className="bg-gray-100 rounded p-2">
                      <span className="block">Sénégal : +221 750 10 32 89 - +221 77 774 83 74</span>
                    </div>
                    <div className="bg-gray-100 rounded p-2">
                      <span className="block">Maroc : +212 614 082 524 - +212 014 082 524</span>
                    </div>
                  </div>
                  <p className="mt-2 text-gray-600">
                    <a href="mailto:contact@eltivoyages.com" className="underline hover:text-primary">contact@eltivoyages.com</a> | 
                    <a href="https://www.eltivoyages.com" className="underline hover:text-primary ml-1" target="_blank" rel="noreferrer">www.eltivoyages.com</a>
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
