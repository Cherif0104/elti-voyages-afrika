
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

// Page transition component
const PageTransition = ({ children }) => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

// Routes with transitions
const AnimatedRoutes = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Add scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Routes location={location}>
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
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Sidebar />
            <Navbar />
            <main className="flex-1 lg:pl-64">
              <AnimatedRoutes />
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
