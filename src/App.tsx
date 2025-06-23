
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import GlobalPrograms from "./pages/GlobalPrograms";
import StudyAbroad from "./pages/StudyAbroad";
import VirtualInternship from "./pages/VirtualInternship";
import InternationalInternship from "./pages/InternationalInternship";
import PathwayProgram from "./pages/PathwayProgram";
import StudentExchange from "./pages/StudentExchange";
import ProfessionalImmersion from "./pages/ProfessionalImmersion";
import HotelImmersion from "./pages/HotelImmersion";
import Destinations from "./pages/Destinations";
import NationalPrograms from "./pages/NationalPrograms";
import Students from "./pages/Students";
import Employers from "./pages/Employers";
import Services from "./pages/Services";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/global-programs" element={<GlobalPrograms />} />
            <Route path="/global-programs/study-abroad" element={<StudyAbroad />} />
            <Route path="/global-programs/virtual-internship" element={<VirtualInternship />} />
            <Route path="/global-programs/international-internship" element={<InternationalInternship />} />
            <Route path="/global-programs/pathway-program" element={<PathwayProgram />} />
            <Route path="/global-programs/student-exchange" element={<StudentExchange />} />
            <Route path="/global-programs/professional-immersion" element={<ProfessionalImmersion />} />
            <Route path="/global-programs/hotel-immersion" element={<HotelImmersion />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/national-programs" element={<NationalPrograms />} />
            <Route path="/national-programs/students" element={<Students />} />
            <Route path="/national-programs/employers" element={<Employers />} />
            <Route path="/services" element={<Services />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
