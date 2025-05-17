
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./AnimationUtils";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

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

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:pl-64 bg-placeholder">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">FAQ</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Réponses aux questions fréquemment posées sur la Coupe d'Afrique des Nations 2025.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-4 mt-12 max-w-3xl mx-auto"
        >
          {faqData.map((item, index) => (
            <motion.div
              variants={fadeInUp}
              className={`bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 transition-all duration-300 ${openIndex === index ? 'shadow-md' : ''}`}
              key={index}
            >
              <button
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-xl font-bold text-primary">{item.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-primary" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-primary" />
                )}
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-700 px-6 pb-6">{item.answer}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
