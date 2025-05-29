
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import SimpleIndex from "./pages/SimpleIndex";
import Can2025 from "./pages/Can2025";
import Flights from "./pages/Flights";
import Hotels from "./pages/Hotels";
import Cars from "./pages/Cars";
import Excursions from "./pages/Excursions";
import Contact from "./pages/Contact";
import TravelGuides from "./pages/TravelGuides";
import GuideDetail from "./pages/GuideDetail";
import Destinations from "./pages/Destinations";
import NotFound from "./pages/NotFound";

// Layout Components
import Header from "./components/layout/Header";
import SimpleFooter from "./components/layout/SimpleFooter";
import PromotionBanner from "./components/PromotionBanner";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            {/* Promotion banner */}
            <PromotionBanner 
              text="CAN 2025 au Maroc - Réservez vos packs supporters dès maintenant !" 
              ctaText="Voir les offres"
              ctaUrl="/can2025"
            />
            
            {/* Header */}
            <Header />
            
            {/* Main content */}
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<SimpleIndex />} />
                <Route path="/can2025" element={<Can2025 />} />
                <Route path="/billets-avion" element={<Flights />} />
                <Route path="/hotels" element={<Hotels />} />
                <Route path="/voitures" element={<Cars />} />
                <Route path="/excursions" element={<Excursions />} />
                <Route path="/guides" element={<TravelGuides />} />
                <Route path="/guides/:slug" element={<GuideDetail />} />
                <Route path="/destinations" element={<Destinations />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            
            <SimpleFooter />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
