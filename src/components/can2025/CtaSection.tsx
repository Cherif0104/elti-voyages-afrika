
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeInUp } from "./AnimationUtils";

const CtaSection = () => {
  return (
    <section className="py-24 lg:pl-64">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">Prêt à vivre la CAN 2025 au Maroc ?</h2>
          <p className="text-gray-600 text-lg mb-8">
            Réservez dès maintenant votre pack supporter et vivez des moments inoubliables au cœur du football africain.
          </p>
          <Link
            to="#reservation"
            className="bg-secondary text-primary hover:bg-secondary/90 text-lg px-8 py-4 rounded-lg transition-colors duration-300"
          >
            Réserver mon pack
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
