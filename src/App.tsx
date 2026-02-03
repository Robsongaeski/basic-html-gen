import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/whatsapp-float";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { Skeleton } from "@/components/ui/skeleton";

// Eager load - critical pages
import Home from "./pages/Home";
import Servicos from "./pages/Servicos";

// Lazy load - secondary pages
const CamisetasPersonalizadas = lazy(() => import("./pages/servicos/CamisetasPersonalizadas"));
const UniformesEsportivos = lazy(() => import("./pages/servicos/UniformesEsportivos"));
const UniformesEmpresariais = lazy(() => import("./pages/servicos/UniformesEmpresariais"));
const CamisetasEventos = lazy(() => import("./pages/servicos/CamisetasEventos"));
const JaquetasCortatVento = lazy(() => import("./pages/servicos/JaquetasCortatVento"));
const Moletons = lazy(() => import("./pages/servicos/Moletons"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const QuemSomos = lazy(() => import("./pages/QuemSomos"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Contato = lazy(() => import("./pages/Contato"));
const PoliticaPrivacidade = lazy(() => import("./pages/PoliticaPrivacidade"));
const TermosUso = lazy(() => import("./pages/TermosUso"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Loading fallback component
function PageLoader() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-md space-y-4">
        <Skeleton className="h-8 w-3/4 mx-auto" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-32 w-full rounded-lg" />
      </div>
    </div>
  );
}

function AppContent() {
  useScrollToTop();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Suspense fallback={<PageLoader />}>
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
        </Suspense>
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
