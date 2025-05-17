
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, hoverElevate } from "./AnimationUtils";
import { Calendar } from "lucide-react";

const KeyDatesSection = () => {
  return (
    <section className="py-24 lg:pl-64 bg-placeholder">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-medium text-sm uppercase tracking-wider">Agenda</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Dates Clés</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Les dates importantes à retenir pour la Coupe d'Afrique des Nations 2025.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          <motion.div
            variants={fadeInUp}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            whileHover={hoverElevate}
            className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-sm border border-gray-100"
          >
            <div className="bg-primary/5 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-primary">Tirage au sort</h3>
            <p className="text-gray-700 mb-4">
              Le tirage au sort des groupes de la CAN 2025 aura lieu prochainement. Restez connectés pour connaître la composition des groupes.
            </p>
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-secondary mr-2"></div>
              <p className="text-gray-500">Date à confirmer</p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            whileHover={hoverElevate}
            className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-sm border border-gray-100"
          >
            <div className="bg-primary/5 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-primary">Coup d'envoi</h3>
            <p className="text-gray-700 mb-4">
              Le coup d'envoi de la CAN 2025 sera donné durant l'été 2025. Soyez prêts à vivre des moments de football inoubliables.
            </p>
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-secondary mr-2"></div>
              <p className="text-gray-500">Date à confirmer</p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            whileHover={hoverElevate}
            className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-sm border border-gray-100"
          >
            <div className="bg-primary/5 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-primary">Finale</h3>
            <p className="text-gray-700 mb-4">
              La grande finale de la CAN 2025 se jouera dans un stade mythique du Maroc. Ne manquez pas l'occasion de vivre cet événement exceptionnel.
            </p>
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-secondary mr-2"></div>
              <p className="text-gray-500">Date à confirmer</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyDatesSection;
