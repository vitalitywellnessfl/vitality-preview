import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import WeightLossProgram from "./pages/WeightLossProgram";
import GLP1 from "./pages/GLP1";
import HealingPeptides from "./pages/HealingPeptides";
import NADPlus from "./pages/NADPlus";
import Glutathione from "./pages/Glutathione";
import IVTherapy from "./pages/IVTherapy";
import VitaminShots from "./pages/VitaminShots";
import BodyContouring from "./pages/BodyContouring";
import HormoneTherapy from "./pages/HormoneTherapy";
import Contact from "./pages/Contact";
import Book from "./pages/Book";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/glp1" element={<GLP1 />} />
          <Route path="/healing-peptides" element={<HealingPeptides />} />
          <Route path="/nad-plus" element={<NADPlus />} />
          <Route path="/glutathione" element={<Glutathione />} />
          <Route path="/iv-therapy" element={<IVTherapy />} />
          <Route path="/vitamin-shots" element={<VitaminShots />} />
          <Route path="/body-contouring" element={<BodyContouring />} />
          <Route path="/hormone-therapy" element={<HormoneTherapy />} />
          <Route path="/book" element={<Book />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
