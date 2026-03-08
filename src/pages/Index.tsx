import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import ValueProposition from "@/components/landing/ValueProposition";
import Methodology from "@/components/landing/Methodology";
import Deliverables from "@/components/landing/Deliverables";
import OperationalImpact from "@/components/landing/OperationalImpact";
import Sectors from "@/components/landing/Sectors";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <ProblemSection />
      <ValueProposition />
      <Methodology />
      <Deliverables />
      <OperationalImpact />
      <Sectors />
      <FAQ />
      <FinalCTA />
      <ContactSection />
    </main>
    <Footer />
    <ScrollToTop />
  </>
);


export default Index;
