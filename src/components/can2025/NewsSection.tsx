
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Calendar as CalendarIcon, User } from "lucide-react";
import { fadeInUp, staggerContainer, hoverScale } from "./AnimationUtils";

const NewsSection = () => {
  return (
    <section id="news" className="py-24 lg:pl-64">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-medium text-sm uppercase tracking-wider">Actualités</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Dernières Nouvelles</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Restez informés des dernières nouvelles concernant la Coupe d'Afrique des Nations 2025.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {/* News Article 1 */}
          <motion.div
            variants={fadeInUp}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={hoverScale}
            className="rounded-xl overflow-hidden shadow-sm group"
          >
            <div className="h-48 bg-placeholder relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center bg-primary/5">
                <MapPin className="h-16 w-16 text-primary/20" />
              </div>
              <div className="absolute top-0 left-0 bg-secondary text-white py-1 px-3 text-xs font-medium">
                PRÉPARATIFS
              </div>
            </div>
            <div className="p-6 bg-white border border-t-0 border-gray-100">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <div className="flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  15 mai 2024
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  Admin
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-secondary transition-colors">
                Préparatifs au Maroc
              </h3>
              <p className="text-gray-700 mb-4">
                Le Maroc accélère les préparatifs pour accueillir la CAN 2025 dans les meilleures conditions.
              </p>
              <a href="#" className="text-secondary inline-flex items-center font-medium">
                Lire plus <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </div>
          </motion.div>

          {/* News Article 2 */}
          <motion.div
            variants={fadeInUp}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={hoverScale}
            className="rounded-xl overflow-hidden shadow-sm group"
          >
            <div className="h-48 bg-placeholder relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center bg-primary/5">
                <MapPin className="h-16 w-16 text-primary/20" />
              </div>
              <div className="absolute top-0 left-0 bg-secondary text-white py-1 px-3 text-xs font-medium">
                QUALIFICATIONS
              </div>
            </div>
            <div className="p-6 bg-white border border-t-0 border-gray-100">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <div className="flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  10 mai 2024
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  Admin
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-secondary transition-colors">
                Qualifications
              </h3>
              <p className="text-gray-700 mb-4">
                Les qualifications pour la CAN 2025 débuteront prochainement. Suivez les performances de votre équipe favorite.
              </p>
              <a href="#" className="text-secondary inline-flex items-center font-medium">
                Lire plus <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </div>
          </motion.div>

          {/* News Article 3 */}
          <motion.div
            variants={fadeInUp}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={hoverScale}
            className="rounded-xl overflow-hidden shadow-sm group"
          >
            <div className="h-48 bg-placeholder relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center bg-primary/5">
                <MapPin className="h-16 w-16 text-primary/20" />
              </div>
              <div className="absolute top-0 left-0 bg-secondary text-white py-1 px-3 text-xs font-medium">
                INFRASTRUCTURES
              </div>
            </div>
            <div className="p-6 bg-white border border-t-0 border-gray-100">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <div className="flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  5 mai 2024
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  Admin
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-secondary transition-colors">
                Infrastructures
              </h3>
              <p className="text-gray-700 mb-4">
                Le Maroc investit massivement dans les infrastructures pour garantir le succès de la CAN 2025.
              </p>
              <a href="#" className="text-secondary inline-flex items-center font-medium">
                Lire plus <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;
