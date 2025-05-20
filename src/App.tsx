import './App.css';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import NotFound from "./pages/NotFound";
import Index from "./pages/Index";
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Works from './pages/Works';
import AboutMe from './pages/AboutMe';
import Contacts from './pages/Contacts';
import PageTransition from './lib/PageTransition';

const queryClient = new QueryClient();

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/works" element={<PageTransition><Works /></PageTransition>} />
        <Route path="/about-me" element={<PageTransition><AboutMe /></PageTransition>} />
        <Route path="/contacts" element={<PageTransition><Contacts /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="body-content">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          
          <BrowserRouter>
            <Header />
            <AnimatedRoutes />
            <Footer />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </div>
  )
}

export default App
