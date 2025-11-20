import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Award, Globe } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Building2,
      title: "Modern Infrastructure",
      description: "State-of-the-art facilities built to international standards",
    },
    {
      icon: Award,
      title: "TNLDC Partnership",
      description: "Working closely with Tamil Nadu Livestock Development Corporation",
    },
    {
      icon: Globe,
      title: "Export-Grade Quality",
      description: "World-class compliance with FSSAI, APEDA standards",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About BARAK MILKHUT
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Barak Milkhut is an emerging integrated food-processing company working closely with the 
            Tamil Nadu Livestock Development Corporation (TNLDC). The company focuses on building, 
            modernizing, and operating large-scale meat processing factories across Tamil Nadu, 
            providing world-class infrastructure, hygiene, and global compliance. Alongside meat 
            processing, Barak Milkhut also operates a premium dairy division specializing in A2 UHT 
            milk products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-lg p-8 shadow-soft hover:shadow-medium transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-6 mx-auto">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
