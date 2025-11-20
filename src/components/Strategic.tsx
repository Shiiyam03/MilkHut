import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Handshake, Target, TrendingUp, Users } from "lucide-react";

const Strategic = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const badges = [
    { icon: Handshake, text: "TNLDC Partnership" },
    { icon: Target, text: "Multi-Sector Leadership" },
    { icon: TrendingUp, text: "Modern Infrastructure" },
    { icon: Users, text: "Large-Scale Production" },
  ];

  return (
    <section id="strategic" className="py-20 bg-gradient-primary text-primary-foreground" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
            Strategic Positioning & TNLDC Collaboration
          </h2>
          <p className="text-lg text-primary-foreground/90 leading-relaxed mb-12">
            Barak Milkhut stands as a multi-sector food industry leader through its dual focus on 
            meat and dairy processing. With strong collaboration alongside the Tamil Nadu Livestock 
            Development Corporation, the company is committed to quality, modern infrastructure, 
            and large-scale production capacity to meet domestic and global market demands.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {badges.map((badge, index) => (
              <motion.div
                key={index}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 hover:bg-primary-foreground/20 transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <badge.icon className="w-8 h-8 mx-auto mb-3" />
                <p className="text-sm font-medium text-center">{badge.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Strategic;
