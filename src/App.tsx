
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AuthProvider } from "@/components/auth/AuthContext";
import Index from "./pages/Index";
import ProductHB8 from "./pages/ProductHB8";
import ProductHB9 from "./pages/ProductHB9";
import ProductHB10 from "./pages/ProductHB10";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import CookieEinstellungen from "./pages/CookieEinstellungen";
import AGB from "./pages/AGB";
import TempAdminSetup from "./components/TempAdminSetup";

const queryClient = new QueryClient();

// Component to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppContent = () => (
  <>
    <ScrollToTop />
    <TempAdminSetup />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/hb8" element={<ProductHB8 />} />
      <Route path="/hb9" element={<ProductHB9 />} />
      <Route path="/hb10" element={<ProductHB10 />} />
      <Route path="/kontakt" element={<Contact />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/impressum" element={<Impressum />} />
      <Route path="/datenschutz" element={<Datenschutz />} />
      <Route path="/cookie-einstellungen" element={<CookieEinstellungen />} />
      <Route path="/agb" element={<AGB />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
