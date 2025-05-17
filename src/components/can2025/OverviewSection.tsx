
import { motion } from "framer-motion";
import { Trophy, Calendar, Flag, Medal, MapPin } from "lucide-react";
import { fadeInUp, staggerContainer, hoverElevate } from "./AnimationUtils";

const OverviewSection = () => {
  const overviewItems = [
    {
      icon: <Trophy className="h-12 w-12 text-secondary" />,
      title: "Le Trophée",
      description: "La Coupe d'Afrique des Nations est le prix ultime du football africain.",
    },
    {
      icon: <Calendar className="h-12 w-12 text-secondary" />,
      title: "Dates Clés",
      description: "La CAN 2025 se déroulera durant l'été 2025, avec les dates exactes à confirmer.",
    },
    {
      icon: <Flag className="h-12 w-12 text-secondary" />,
      title: "Pays Hôte",
      description: "Le Maroc a été désigné pays hôte de la Coupe d'Afrique des Nations 2025.",
    },
    {
      icon: <Medal className="h-12 w-12 text-secondary" />,
      title: "Les Enjeux",
      description: "La CAN 2025 promet d'être une édition mémorable avec des enjeux sportifs et culturels importants.",
    },
  ];

  return (
    <section className="py-24 lg:pl-64">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-medium text-sm uppercase tracking-wider">À propos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Aperçu de la CAN 2025</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur la Coupe d'Afrique des Nations 2025 au Maroc.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        >
          {overviewItems.map((item, index) => (
            <motion.div
              variants={fadeInUp}
              whileInView="visible"
              initial="hidden"
              whileHover={hoverElevate}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              key={index}
            >
              <div className="bg-primary/5 w-20 h-20 rounded-xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </motion.div>
          ))}

          <motion.div
            variants={fadeInUp}
            whileInView="visible"
            initial="hidden"
            whileHover={hoverElevate}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
          >
            <div className="bg-primary/5 w-20 h-20 rounded-xl flex items-center justify-center mb-6">
              <MapPin className="h-12 w-12 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-primary">Les équipes</h3>
            <p className="text-gray-700">
              Les meilleures équipes africaines s'affronteront pour remporter le titre de champion d'Afrique.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OverviewSection;
