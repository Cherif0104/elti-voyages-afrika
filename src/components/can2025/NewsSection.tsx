
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const NewsSection = () => {
  const fadeInUp = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

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
          <h2 className="text-3xl font-bold text-primary mb-4">Dernières Actualités</h2>
          <p className="text-gray-600 text-lg">
            Restez informés des dernières nouvelles concernant la Coupe d'Afrique des Nations 2025.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <motion.div
            variants={fadeInUp}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 h-full hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <MapPin className="h-16 w-16 text-gray-400" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">Préparatifs au Maroc</h3>
                <p className="text-gray-700">
                  Le Maroc accélère les préparatifs pour accueillir la CAN 2025 dans les meilleures conditions.
                </p>
                <p className="text-gray-500 mt-4">15 mai 2024</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true, margin: "-50px" }}
            className="md:col-span-2 lg:col-span-1"
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 h-full hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <MapPin className="h-16 w-16 text-gray-400" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">Qualifications</h3>
                <p className="text-gray-700">
                  Les qualifications pour la CAN 2025 débuteront prochainement. Suivez les performances de votre équipe favorite.
                </p>
                <p className="text-gray-500 mt-4">10 mai 2024</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 h-full hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <MapPin className="h-16 w-16 text-gray-400" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">Infrastructures</h3>
                <p className="text-gray-700">
                  Le Maroc investit massivement dans les infrastructures pour garantir le succès de la CAN 2025.
                </p>
                <p className="text-gray-500 mt-4">5 mai 2024</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
