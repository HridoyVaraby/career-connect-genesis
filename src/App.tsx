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
import AgricultureInternship from "./pages/AgricultureInternship";
import Destinations from "./pages/Destinations";
import NationalPrograms from "./pages/NationalPrograms";
import Students from "./pages/Students";
import Employers from "./pages/Employers";
import Services from "./pages/Services";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import ApplyNow from "./pages/ApplyNow";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import MedicalInternships from "./pages/MedicalInternships";

// Destination pages
import USA from "./pages/destinations/USA";
import Germany from "./pages/destinations/Germany";
import Denmark from "./pages/destinations/Denmark";
import France from "./pages/destinations/France";
import Italy from "./pages/destinations/Italy";
import Spain from "./pages/destinations/Spain";
import Portugal from "./pages/destinations/Portugal";
import UnitedKingdom from "./pages/destinations/UnitedKingdom";
import Netherlands from "./pages/destinations/Netherlands";
import NewZealand from "./pages/destinations/NewZealand";
import CzechRepublic from "./pages/destinations/CzechRepublic";
import Croatia from "./pages/destinations/Croatia";
import Montenegro from "./pages/destinations/Montenegro";
import Malta from "./pages/destinations/Malta";
import Greece from "./pages/destinations/Greece";
import Thailand from "./pages/destinations/Thailand";
import Vietnam from "./pages/destinations/Vietnam";
import Indonesia from "./pages/destinations/Indonesia";
import Malaysia from "./pages/destinations/Malaysia";
import HongKong from "./pages/destinations/HongKong";
import UAE from "./pages/destinations/UAE";
import Bahrain from "./pages/destinations/Bahrain";

// Application pages
import InternationalInternshipApply from "./pages/apply/InternationalInternshipApply";
import PathwayProgramApply from "./pages/apply/PathwayProgramApply";
import StudyAbroadApply from "./pages/apply/StudyAbroadApply";
import StudentExchangeApply from "./pages/apply/StudentExchangeApply";
import VirtualInternshipApply from "./pages/apply/VirtualInternshipApply";
import HotelImmersionApply from "./pages/apply/HotelImmersionApply";
import ProfessionalImmersionApply from "./pages/apply/ProfessionalImmersionApply";

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
            <Route path="/apply" element={<ApplyNow />} />
            
            {/* Application routes */}
            <Route path="/apply/international-internship" element={<InternationalInternshipApply />} />
            <Route path="/apply/pathway-program" element={<PathwayProgramApply />} />
            <Route path="/apply/study-abroad" element={<StudyAbroadApply />} />
            <Route path="/apply/student-exchange" element={<StudentExchangeApply />} />
            <Route path="/apply/virtual-internship" element={<VirtualInternshipApply />} />
            <Route path="/apply/hotel-immersion" element={<HotelImmersionApply />} />
            <Route path="/apply/professional-immersion" element={<ProfessionalImmersionApply />} />
            
            <Route path="/global-programs" element={<GlobalPrograms />} />
            <Route path="/global-programs/study-abroad" element={<StudyAbroad />} />
            <Route path="/global-programs/virtual-internship" element={<VirtualInternship />} />
            <Route path="/global-programs/international-internship" element={<InternationalInternship />} />
            <Route path="/global-programs/agriculture-internship" element={<AgricultureInternship />} />
            <Route path="/global-programs/medical-internships" element={<MedicalInternships />} />
            <Route path="/global-programs/pathway-program" element={<PathwayProgram />} />
            <Route path="/global-programs/student-exchange" element={<StudentExchange />} />
            <Route path="/global-programs/professional-immersion" element={<ProfessionalImmersion />} />
            <Route path="/global-programs/hotel-immersion" element={<HotelImmersion />} />
            <Route path="/destinations" element={<Destinations />} />
            
            {/* Destination specific pages */}
            <Route path="/destinations/usa" element={<USA />} />
            <Route path="/destinations/germany" element={<Germany />} />
            <Route path="/destinations/denmark" element={<Denmark />} />
            <Route path="/destinations/france" element={<France />} />
            <Route path="/destinations/italy" element={<Italy />} />
            <Route path="/destinations/spain" element={<Spain />} />
            <Route path="/destinations/portugal" element={<Portugal />} />
            <Route path="/destinations/united-kingdom" element={<UnitedKingdom />} />
            <Route path="/destinations/netherlands" element={<Netherlands />} />
            <Route path="/destinations/new-zealand" element={<NewZealand />} />
            <Route path="/destinations/czech-republic" element={<CzechRepublic />} />
            <Route path="/destinations/croatia" element={<Croatia />} />
            <Route path="/destinations/montenegro" element={<Montenegro />} />
            <Route path="/destinations/malta" element={<Malta />} />
            <Route path="/destinations/greece" element={<Greece />} />
            <Route path="/destinations/thailand" element={<Thailand />} />
            <Route path="/destinations/vietnam" element={<Vietnam />} />
            <Route path="/destinations/indonesia" element={<Indonesia />} />
            <Route path="/destinations/malaysia" element={<Malaysia />} />
            <Route path="/destinations/hong-kong" element={<HongKong />} />
            <Route path="/destinations/uae" element={<UAE />} />
            <Route path="/destinations/bahrain" element={<Bahrain />} />
            
            <Route path="/national-programs" element={<NationalPrograms />} />
            <Route path="/national-programs/students" element={<Students />} />
            <Route path="/national-programs/employers" element={<Employers />} />
            <Route path="/services" element={<Services />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
