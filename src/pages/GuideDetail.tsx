
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MapPin, Calendar, User, Clock, Check, BookOpen, ChevronRight, Share2 } from "lucide-react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const GuideDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [loading, setLoading] = useState(true);
  
  // In a real app, this would fetch data from an API
  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [slug]);
  
  // Dummy guide data - in a real app this would come from an API
  const guide = {
    title: "Les incontournables de Marrakech",
    location: "Marrakech, Maroc",
    date: "Mis à jour le 15 Mai 2025",
    author: "Sarah Dubois",
    authorTitle: "Guide locale & Experte culturelle",
    authorImage: "/lovable-uploads/8a02378a-4b7f-4134-874a-8647c54e9c7d.png",
    heroImage: "/lovable-uploads/d0e93051-21a2-40fb-8b25-5f07c3413af5.png",
    duration: "3-4 jours",
    bestTime: "Mars à Mai, Sept à Nov",
    difficulty: "Facile",
    categories: ["Culture", "Histoire", "Gastronomie"],
    introduction: "Marrakech, la ville ocre, est un mélange fascinant d'histoire ancienne et de modernité chic. Fondée au XIe siècle, cette ancienne ville impériale offre un labyrinthe de souks, de palais et de jardins à explorer. De la frénésie de la place Jemaa el-Fna aux oasis de calme des riads traditionnels, Marrakech est une ville de contrastes qui éveille tous les sens.",
    content: [
      {
        type: "section",
        title: "La médina historique",
        text: "Classée au patrimoine mondial de l'UNESCO, la médina de Marrakech est un dédale fascinant de ruelles étroites et sinueuses. Perdez-vous volontairement dans ce labyrinthe pour découvrir des trésors cachés : fontaines anciennes, petites mosquées de quartier, riads rénovés et échoppes d'artisans. La médina est entourée de remparts de terre ocre datant du XIIe siècle et possède de nombreuses portes monumentales (babs) qui méritent le détour.",
        image: "/lovable-uploads/d0e93051-21a2-40fb-8b25-5f07c3413af5.png"
      },
      {
        type: "section",
        title: "Place Jemaa el-Fna",
        text: "Cœur battant de Marrakech, cette place emblématique se transforme au fil de la journée. Le matin, elle est relativement calme, mais dès l'après-midi, elle s'anime avec des conteurs, charmeurs de serpents, musiciens gnaouas, vendeurs de jus d'orange frais et étals de nourriture. Au coucher du soleil, la place devient un immense restaurant à ciel ouvert où vous pourrez déguster des spécialités marocaines dans une ambiance unique.",
        image: "/lovable-uploads/e067fb96-d7e6-4ba5-890d-84d016ad9522.png"
      },
      {
        type: "section",
        title: "Les souks",
        text: "Les marchés traditionnels de Marrakech sont organisés par corporations. Vous trouverez le souk des teinturiers avec ses écheveaux de laine colorée séchant au soleil, le souk des forgerons et son tintamarre caractéristique, le souk des babouches avec ses chaussures en cuir aux couleurs vives, et bien d'autres encore. Négocier fait partie de l'expérience, mais faites-le toujours avec le sourire et respect.",
        image: "/lovable-uploads/55deb0b9-ef29-4fc9-8305-948cf2e3c2a8.png"
      },
      {
        type: "section",
        title: "Jardin Majorelle",
        text: "Créé par le peintre français Jacques Majorelle et plus tard racheté et restauré par Yves Saint Laurent, ce jardin est un havre de paix aux couleurs vibrantes. Le bleu Majorelle, cette teinte intense et spécifique, contraste magnifiquement avec la végétation exotique. Le jardin abrite également le Musée Berbère et le Musée Yves Saint Laurent à proximité, deux visites culturelles enrichissantes.",
        image: "/lovable-uploads/2843ecc8-3b91-4dc6-89a7-609be2cde30d.png"
      },
      {
        type: "section",
        title: "Palais de la Bahia",
        text: "Ce palais du XIXe siècle est un chef-d'œuvre de l'architecture marocaine traditionnelle. Construit pour le grand vizir Si Moussa, il comprend un ensemble de cours, jardins et salles richement décorés. Les plafonds en bois peint, les mosaïques zelliges et les stucs sculptés témoignent du savoir-faire des artisans marocains. Le palais vous donne un aperçu de la vie de l'élite marocaine à cette époque.",
        image: "/lovable-uploads/6be21310-8d14-4ccf-92cc-167a85a0b427.png"
      },
      {
        type: "tips",
        title: "Conseils pratiques",
        items: [
          "Portez des vêtements respectueux qui couvrent les épaules et les genoux",
          "Hydratez-vous régulièrement, surtout en été où les températures peuvent dépasser 40°C",
          "Évitez de photographier les personnes sans leur permission",
          "Négociez les prix dans les souks, mais avec le sourire et respect",
          "Les pourboires (environ 10%) sont attendus dans les restaurants et pour les guides"
        ]
      }
    ],
    relatedGuides: [
      {
        title: "Randonnées dans les montagnes de l'Atlas",
        location: "Atlas, Maroc",
        excerpt: "Les plus beaux sentiers de randonnée à proximité de Marrakech.",
        imageSrc: "/lovable-uploads/c99e7d53-c8ff-4e7a-95e8-87fd146eef92.png",
        slug: "randonnees-atlas"
      },
      {
        title: "Gastronomie marocaine à Marrakech",
        location: "Marrakech, Maroc",
        excerpt: "Découvrez les saveurs et spécialités culinaires de la ville ocre.",
        imageSrc: "/lovable-uploads/e4b218b7-e04c-4ba9-b820-3532d1f43e94.png",
        slug: "gastronomie-marrakech"
      }
    ]
  };
  
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center items-center min-h-[60vh]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-500">Chargement du guide...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div className="h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden relative">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img 
            src={guide.heroImage} 
            alt={guide.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {guide.categories.map((category, index) => (
                    <Badge 
                      key={index} 
                      className="bg-white/20 text-white backdrop-blur-sm"
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white drop-shadow-lg">
                  {guide.title}
                </h1>
                <div className="flex items-center text-white/90 gap-4 flex-wrap">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{guide.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{guide.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{guide.author}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-xl leading-relaxed font-medium text-gray-700 mb-8">{guide.introduction}</p>
                
                <div className="flex flex-wrap gap-6 my-8">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Durée idéale</p>
                      <p className="font-medium">{guide.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-primary mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Meilleure période</p>
                      <p className="font-medium">{guide.bestTime}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-primary mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Difficulté</p>
                      <p className="font-medium">{guide.difficulty}</p>
                    </div>
                  </div>
                </div>
                
                <Separator className="my-8" />
                
                {guide.content.map((section, index) => (
                  <div key={index} className="mb-12">
                    {section.type === "section" ? (
                      <>
                        <h2 className="text-2xl font-bold text-primary mb-4">{section.title}</h2>
                        <p className="mb-6">{section.text}</p>
                        {section.image && (
                          <div className="my-6">
                            <img 
                              src={section.image} 
                              alt={section.title} 
                              className="w-full h-auto rounded-lg shadow-md"
                            />
                          </div>
                        )}
                      </>
                    ) : section.type === "tips" ? (
                      <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                        <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                        <ul className="space-y-2">
                          {section.items.map((tip, tipIndex) => (
                            <li key={tipIndex} className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
              
              {/* Author Bio */}
              <div className="bg-gray-50 p-6 rounded-lg mt-12 border border-gray-100">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden">
                    <img 
                      src={guide.authorImage} 
                      alt={guide.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-sm text-gray-500">Écrit par</p>
                    <h3 className="text-lg font-bold">{guide.author}</h3>
                    <p className="text-gray-600 text-sm">{guide.authorTitle}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              {/* CTA Card */}
              <Card className="mb-8 overflow-hidden border-primary/20 shadow-lg">
                <div className="bg-primary/10 p-4 border-b border-primary/20">
                  <h3 className="text-lg font-bold text-primary">Planifiez votre voyage à {guide.location.split(',')[0]}</h3>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-6">
                    Prêt à découvrir les merveilles de {guide.location.split(',')[0]} ? Nos experts locaux peuvent vous aider à créer l'expérience parfaite.
                  </p>
                  <Button asChild className="w-full bg-secondary text-primary hover:bg-secondary/90 mb-4">
                    <Link to="/contact">
                      Contactez un expert
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/destinations/maroc">
                      Explorer les destinations
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              {/* Related Guides */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-primary" />
                  Guides associés
                </h3>
                <div className="space-y-4">
                  {guide.relatedGuides.map((relatedGuide, index) => (
                    <Link 
                      key={index} 
                      to={`/guides/${relatedGuide.slug}`}
                      className="block group"
                    >
                      <div className="flex gap-3">
                        <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                          <img 
                            src={relatedGuide.imageSrc} 
                            alt={relatedGuide.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-primary group-hover:text-accent transition-colors duration-300">{relatedGuide.title}</h4>
                          <p className="text-sm text-gray-500">{relatedGuide.location}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <Button asChild variant="link" className="p-0 h-auto text-primary flex items-center">
                    <Link to="/guides">
                      Voir tous les guides
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              {/* Share */}
              <div className="mt-6">
                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                  <Share2 className="h-4 w-4" />
                  Partager ce guide
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Final CTA */}
        <div className="mt-16 py-10 px-6 bg-primary rounded-lg text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Prêt à explorer {guide.location.split(',')[0]} ?</h2>
            <p className="text-lg mb-6 text-white/80">
              Laissez nos experts vous aider à planifier le voyage parfait selon vos envies et votre budget.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/contact">
                  Contactez un expert
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link to="/destinations">
                  Explorer d'autres destinations
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideDetail;
