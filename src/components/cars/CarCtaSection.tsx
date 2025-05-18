
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Calendar, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const CarCtaSection = () => {
  return (
    <section className="py-16 bg-white" id="chauffeur">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row bg-primary rounded-xl overflow-hidden shadow-xl">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2 relative">
            <div className="h-full">
              <img 
                src="/lovable-uploads/b952d7ee-cc6d-4ab8-8256-37a2f2847ea6.png" 
                alt="Service chauffeur privé" 
                className="w-full h-full object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
              
              {/* Text over image */}
              <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Service <span className="text-secondary">chauffeur</span></h3>
                <p className="text-white/90 max-w-xs">Un chauffeur privé pour tous vos déplacements</p>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Besoin d'un chauffeur professionnel ?</h2>
              <p className="mb-6 text-white/80">
                Nos chauffeurs professionnels connaissent parfaitement les routes et vous accompagnent tout au long de votre séjour.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="bg-white/20 rounded-full p-2 mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70">Téléphone</div>
                    <div className="font-semibold">+221 78 109 82 63</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-white/20 rounded-full p-2 mr-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70">Email</div>
                    <div className="font-semibold">reservations@eltivoyages.com</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-white/20 rounded-full p-2 mr-4">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70">Disponibilité</div>
                    <div className="font-semibold">24h/24, 7j/7</div>
                  </div>
                </div>
              </div>
              
              <Button 
                size="lg"
                className="bg-secondary text-primary hover:bg-secondary/90 px-6 py-5 text-lg font-medium"
                asChild
              >
                <Link to="/contact">
                  Réserver un chauffeur <ChevronRight className="ml-1 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarCtaSection;
