import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MeatDivision from "@/components/MeatDivision";
import DairyDivision from "@/components/DairyDivision";
import Strategic from "@/components/Strategic";
import VisionMission from "@/components/VisionMission";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <MeatDivision />
      <DairyDivision />
      <Strategic />
      <VisionMission />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
