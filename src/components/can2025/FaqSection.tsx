
import { motion } from "framer-motion";
import { fadeInUp } from "./AnimationUtils";

const FaqSection = () => {
  const faqData = [
    {
      question: "Quand aura lieu la CAN 2025 ?",
      answer: "La Coupe d'Afrique des Nations 2025 se déroulera durant l'été 2025. Les dates exactes seront communiquées ultérieurement.",
    },
    {
      question: "Où se déroulera la CAN 2025 ?",
      answer: "La CAN 2025 se déroulera au Maroc, pays hôte de cette édition.",
    },
    {
      question: "Quels sont les enjeux de la CAN 2025 ?",
      answer: "La CAN 2025 est un événement sportif et culturel majeur pour l'Afrique. Elle permettra de promouvoir le football africain et de renforcer les liens entre les pays du continent.",
    },
    {
      question: "Comment puis-je réserver un pack supporter pour la CAN 2025 ?",
      answer: "Vous pouvez réserver un pack supporter pour la CAN 2025 en remplissant le formulaire de réservation disponible sur notre site web. Nous vous contacterons dans les plus brefs délais pour vous proposer une offre personnalisée.",
    },
  ];

  return (
    <section className="py-16 lg:pl-64 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">FAQ</h2>
          <p className="text-gray-600 text-lg">
            Réponses aux questions fréquemment posées sur la Coupe d'Afrique des Nations 2025.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 mt-12">
          {faqData.map((item, index) => (
            <motion.div
              variants={fadeInUp}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              key={index}
            >
              <h3 className="text-xl font-bold mb-2 text-primary">{item.question}</h3>
              <p className="text-gray-700">{item.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
