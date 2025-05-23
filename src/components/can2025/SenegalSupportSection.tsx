
import { motion } from "framer-motion";
import { Trophy, Star, Flag, Heart, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

const SenegalSupportSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center">
            {/* Left section - Image */}
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="w-full max-w-md relative">
                  <div className="rounded-2xl overflow-hidden border-4 border-green-600 shadow-xl transform rotate-3">
                    <img 
                      src="/lovable-uploads/47760044-f970-40c3-9b13-a9a245aa5573.png" 
                      alt="Équipe du Sénégal" 
                      className="w-full h-auto object-cover" 
                    />
                  </div>
                  
                  {/* Floating decoration */}
                  <motion.div
                    className="absolute -top-6 -right-6"
                    animate={{ 
                      y: [0, -15, 0],
                      rotate: [0, 10, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <div className="bg-white rounded-full p-3 shadow-lg">
                      <Heart className="h-8 w-8 text-red-500 fill-red-500" />
                    </div>
                  </motion.div>
                  
                  {/* Flag icon animation */}
                  <motion.div 
                    className="absolute -bottom-4 -left-4"
                    animate={{ 
                      y: [0, 10, 0],
                      x: [0, 5, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <div className="bg-white rounded-full p-3 shadow-lg">
                      <Flag className="h-8 w-8 text-green-600 fill-green-600" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
            
            {/* Right section - Text */}
            <div className="w-full lg:w-1/2 lg:pl-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center mb-6">
                  <Logo size="md" className="mr-4" />
                  <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold inline-block">
                    ALLEZ LES LIONS !
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Nous supportons le Sénégal
                </h2>
                
                <p className="text-gray-600 text-lg mb-6">
                  Rejoignez-nous pour supporter les Lions de la Téranga lors de la CAN 2025. Ensemble, 
                  vivons les émotions du football sénégalais au plus haut niveau.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-green-50 rounded-lg p-4 flex items-center border-l-4 border-green-600">
                    <Trophy className="h-8 w-8 text-green-600 mr-3" />
                    <div>
                      <h4 className="font-bold text-primary">Champions 2021</h4>
                      <p className="text-gray-600 text-sm">Tenant du titre</p>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4 flex items-center border-l-4 border-green-600">
                    <Star className="h-8 w-8 text-green-600 mr-3" />
                    <div>
                      <h4 className="font-bold text-primary">Top 3 FIFA</h4>
                      <p className="text-gray-600 text-sm">Classement africain</p>
                    </div>
                  </div>
                </div>
                
                <Button
                  size="lg"
                  className="bg-green-600 text-white hover:bg-green-700 px-6 py-3 text-lg font-medium"
                  asChild
                >
                  <Link to="#senegal-packs">
                    Voir les packs Sénégal <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SenegalSupportSection;
