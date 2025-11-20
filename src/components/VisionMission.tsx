import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Target } from "lucide-react";

const VisionMission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="vision-mission" className="py-20 bg-muted" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-foreground mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Our Vision & Mission
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Vision Card */}
          <motion.div
            className="bg-card rounded-lg p-8 shadow-soft hover:shadow-strong transition-all group"
            initial={{ opacity: 0, x: -30, rotateY: -10 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: -30, rotateY: -10 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.03, rotateY: 2 }}
            style={{ perspective: 1000 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Eye className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To become a trusted and leading provider of high-quality meat and dairy products through 
              modern processing infrastructure, scientific standards, and sustainable practices.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            className="bg-card rounded-lg p-8 shadow-soft hover:shadow-strong transition-all group"
            initial={{ opacity: 0, x: 30, rotateY: 10 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: 30, rotateY: 10 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.03, rotateY: -2 }}
            style={{ perspective: 1000 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To revolutionize livestock-based industries with reliable, hygienic, efficient, and globally 
              compliant processing systems, thereby contributing to economic development and food security.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
