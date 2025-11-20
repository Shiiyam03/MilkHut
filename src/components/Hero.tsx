import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Factory, Milk } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20">
      {/* 3D Background Layers */}
      <div className="absolute inset-0 overflow-hidden" style={{ perspective: "1000px" }}>
        {/* Layer 1 - Floating geometric shapes with 3D transform */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            style={{
              width: `${100 + i * 30}px`,
              height: `${100 + i * 30}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{
              rotateX: 0,
              rotateY: 0,
              z: 0,
            }}
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
              z: [0, 100, 0],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Layer 2 - Parallax particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 2,
            }}
            animate={{
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
            }}
            transition={{
              duration: 15 + Math.random() * 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Content with 3D depth */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" style={{ perspective: "1000px" }}>
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Company Name with 3D effect */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6"
            initial={{ opacity: 0, y: 20, z: -50 }}
            animate={{ opacity: 1, y: 0, z: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{
              textShadow: "0 10px 30px rgba(0,0,0,0.3), 0 0 50px rgba(255,255,255,0.1)",
              transform: "translateZ(50px)",
            }}
          >
            BARAK MILKHUT
          </motion.h1>

          {/* Headline with depth */}
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary-foreground/90 mb-6"
            initial={{ opacity: 0, y: 20, z: -30 }}
            animate={{ opacity: 1, y: 0, z: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{
              transform: "translateZ(30px)",
            }}
          >
            Integrated Meat & Dairy Processing in Tamil Nadu
          </motion.h2>

          {/* Subtext with subtle 3D */}
          <motion.p
            className="text-lg sm:text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20, z: -20 }}
            animate={{ opacity: 1, y: 0, z: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{
              transform: "translateZ(20px)",
            }}
          >
            Leading provider of world-class meat processing and premium A2 dairy products, 
            powered by modern infrastructure and international standards
          </motion.p>

          {/* CTA Buttons with 3D hover effect */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20, z: -10 }}
            animate={{ opacity: 1, y: 0, z: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            style={{
              transform: "translateZ(10px)",
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5, z: 20 }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("meat-division")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-strong group min-w-[200px]"
              >
                <Factory className="mr-2 h-5 w-5" />
                Explore Meat Division
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, rotateY: -5, z: 20 }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("dairy-division")}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-strong min-w-[200px]"
              >
                <Milk className="mr-2 h-5 w-5" />
                Explore A2 Milk
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-primary-foreground/50 rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
