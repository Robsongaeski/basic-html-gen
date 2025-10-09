import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/whatsapp-float";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import Home from "./pages/Home";
import Servicos from "./pages/Servicos";
import CamisetasPersonalizadas from "./pages/servicos/CamisetasPersonalizadas";
import UniformesEsportivos from "./pages/servicos/UniformesEsportivos";
import UniformesEmpresariais from "./pages/servicos/UniformesEmpresariais";
import CamisetasEventos from "./pages/servicos/CamisetasEventos";
import JaquetasCortatVento from "./pages/servicos/JaquetasCortatVento";
import Moletons from "./pages/servicos/Moletons";
import Portfolio from "./pages/Portfolio";
import QuemSomos from "./pages/QuemSomos";
import FAQ from "./pages/FAQ";
import Contato from "./pages/Contato";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import TermosUso from "./pages/TermosUso";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function AppContent() {
  useScrollToTop();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/servicos" element={<Servicos />} />
              <Route path="/servicos/camisetas-personalizadas" element={<CamisetasPersonalizadas />} />
              <Route path="/servicos/uniformes-esportivos" element={<UniformesEsportivos />} />
              <Route path="/servicos/uniformes-empresariais" element={<UniformesEmpresariais />} />
              <Route path="/servicos/camisetas-para-eventos" element={<CamisetasEventos />} />
              <Route path="/servicos/jaquetas-corta-vento" element={<JaquetasCortatVento />} />
              <Route path="/servicos/moletons" element={<Moletons />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/quem-somos" element={<QuemSomos />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
              <Route path="/termos-de-uso" element={<TermosUso />} />
              <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
