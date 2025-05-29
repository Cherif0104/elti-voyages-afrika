
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Calendar, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const HotelCtaSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row bg-primary rounded-xl overflow-hidden shadow-xl">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2 relative">
            <div className="h-full">
              <img 
                src="/lovable-uploads/771002fe-2fef-4055-a080-056ff7e51723.png" 
                alt="Réservation d'hôtel" 
                className="w-full h-full object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
              
              {/* Text over image */}
              <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Des prix <span className="text-secondary">imbattables</span></h3>
                <p className="text-white/90 max-w-xs">Réservez votre hébergement au meilleur prix garanti</p>
              </div>
            </div>
          </div>
          
          {/* Right side - CTA */}
          <div className="w-full md:w-1/2 p-8 md:p-12 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Besoin d'aide pour votre réservation ?</h2>
              <p className="mb-6 text-white/80">
                Notre équipe de conseillers est à votre disposition pour vous accompagner dans votre recherche d'hébergement idéal.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="bg-white/20 rounded-full p-2 mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70">Téléphone</div>
                    <div className="font-semibold">+212 014 082 524</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-white/20 rounded-full p-2 mr-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70">Email</div>
                    <div className="font-semibold">contact@eltivoyages.com</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-white/20 rounded-full p-2 mr-4">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70">Horaires</div>
                    <div className="font-semibold">Lun-Sam: 9h-19h (GMT)</div>
                  </div>
                </div>
              </div>
              
              <Button 
                size="lg"
                className="bg-secondary text-primary hover:bg-secondary/90 px-6 py-5 text-lg font-medium"
                asChild
              >
                <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                  Contacter via WhatsApp <ChevronRight className="ml-1 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelCtaSection;
