
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
import NotFound from "./pages/NotFound";

// Components
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

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
          <div className="min-h-screen flex flex-col">
            <Sidebar />
            {/* Updated lg:pl-56 to match the sidebar width */}
            <main className="flex-1 pt-16 lg:pl-56">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/can2025" element={<Can2025 />} />
                <Route path="/billets-avion" element={<Flights />} />
                <Route path="/hotels" element={<Hotels />} />
                <Route path="/voitures" element={<Cars />} />
                <Route path="/excursions" element={<Excursions />} />
                <Route path="/vip" element={<Vip />} />
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
