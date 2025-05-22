
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

// Pages
import Index from "./pages/Index";
import Can2025 from "./pages/Can2025";
import Flights from "./pages/Flights";
import Hotels from "./pages/Hotels";
import Cars from "./pages/Cars";
import Excursions from "./pages/Excursions";
import Vip from "./pages/Vip";
import Contact from "./pages/Contact";
import TravelGuides from "./pages/TravelGuides";
import Destinations from "./pages/Destinations";
import NotFound from "./pages/NotFound";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PromotionBanner from "./components/PromotionBanner";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Add scroll to top on route change
    const handleScrollToTop = () => {
      window.scrollTo(0, 0);
    };
    
    // Listen for route changes
    window.addEventListener("popstate", handleScrollToTop);
    
    return () => {
      window.removeEventListener("popstate", handleScrollToTop);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            {/* Promotion banner at the top */}
            <PromotionBanner 
              text="Réservez votre pack supporter avant le 31 décembre et bénéficiez de -15%" 
              ctaText="En savoir plus"
              ctaUrl="#details"
            />
            
            {/* Header */}
            <Navbar />
            
            {/* Main content */}
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/can2025" element={<Can2025 />} />
                <Route path="/billets-avion" element={<Flights />} />
                <Route path="/hotels" element={<Hotels />} />
                <Route path="/voitures" element={<Cars />} />
                <Route path="/excursions" element={<Excursions />} />
                <Route path="/vip" element={<Vip />} />
                <Route path="/guides" element={<TravelGuides />} />
                <Route path="/destinations" element={<Destinations />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
