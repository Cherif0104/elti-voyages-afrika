
import { motion } from "framer-motion";

const KeyDatesSection = () => {
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
    <section className="py-24 lg:pl-64 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">Dates Clés</h2>
          <p className="text-gray-600 text-lg">
            Les dates importantes à retenir pour la Coupe d'Afrique des Nations 2025.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <motion.div
            variants={fadeInUp}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
          >
            <h3 className="text-xl font-bold mb-4 text-primary">Tirage au sort</h3>
            <p className="text-gray-700">
              Le tirage au sort des groupes de la CAN 2025 aura lieu prochainement. Restez connectés pour connaître la composition des groupes.
            </p>
            <p className="text-gray-500 mt-2">Date à confirmer</p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
          >
            <h3 className="text-xl font-bold mb-4 text-primary">Coup d'envoi</h3>
            <p className="text-gray-700">
              Le coup d'envoi de la CAN 2025 sera donné durant l'été 2025. Soyez prêts à vivre des moments de football inoubliables.
            </p>
            <p className="text-gray-500 mt-2">Date à confirmer</p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
          >
            <h3 className="text-xl font-bold mb-4 text-primary">Finale</h3>
            <p className="text-gray-700">
              La grande finale de la CAN 2025 se jouera dans un stade mythique du Maroc. Ne manquez pas l'occasion de vivre cet événement exceptionnel.
            </p>
            <p className="text-gray-500 mt-2">Date à confirmer</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KeyDatesSection;
