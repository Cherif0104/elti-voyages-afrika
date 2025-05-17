
import { motion } from "framer-motion";
import { Trophy, Calendar, Flag, Medal, MapPin } from "lucide-react";
import { fadeInUp } from "./AnimationUtils";

const OverviewSection = () => {
  const overviewItems = [
    {
      icon: <Trophy className="h-10 w-10 text-primary p-2 bg-primary/5 rounded-full" />,
      title: "Le Trophée",
      description: "La Coupe d'Afrique des Nations est le prix ultime du football africain.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-primary p-2 bg-primary/5 rounded-full" />,
      title: "Dates Clés",
      description: "La CAN 2025 se déroulera durant l'été 2025, avec les dates exactes à confirmer.",
    },
    {
      icon: <Flag className="h-10 w-10 text-primary p-2 bg-primary/5 rounded-full" />,
      title: "Pays Hôte",
      description: "Le Maroc a été désigné pays hôte de la Coupe d'Afrique des Nations 2025.",
    },
    {
      icon: <Medal className="h-10 w-10 text-primary p-2 bg-primary/5 rounded-full" />,
      title: "Les Enjeux",
      description: "La CAN 2025 promet d'être une édition mémorable avec des enjeux sportifs et culturels importants.",
    },
  ];

  return (
    <section className="py-16 lg:pl-64">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">Aperçu de la CAN 2025</h2>
          <p className="text-gray-600 text-lg">
            Tout ce que vous devez savoir sur la Coupe d'Afrique des Nations 2025 au Maroc.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {overviewItems.map((item, index) => (
            <motion.div
              variants={fadeInUp}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              key={index}
            >
              <div className="flex items-center mb-4">
                {item.icon}
                <h3 className="text-xl font-bold ml-4">{item.title}</h3>
              </div>
              <p className="text-gray-700">{item.description}</p>
            </motion.div>
          ))}

          <motion.div
            variants={fadeInUp}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
          >
            <div className="flex items-center mb-4">
              <MapPin className="h-10 w-10 text-primary p-2 bg-primary/5 rounded-full" />
              <h3 className="text-xl font-bold ml-4">Les équipes</h3>
            </div>
            <p className="text-gray-700">
              Les meilleures équipes africaines s'affronteront pour remporter le titre de champion d'Afrique.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
