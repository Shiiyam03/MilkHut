import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Milk, Leaf, Droplets, Truck } from "lucide-react";

const DairyDivision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Milk,
      title: "Certified A2 Cattle Breeds",
      description: "Sourced exclusively from certified A2 cattle breeds for superior nutritional quality",
    },
    {
      icon: Droplets,
      title: "UHT Processing",
      description: "Ultra-High Temperature processing ensures extended freshness without compromising nutrients",
    },
    {
      icon: Leaf,
      title: "Preservative-Free Formula",
      description: "100% natural milk with no preservatives, maintaining pure nutritional value",
    },
    {
      icon: Truck,
      title: "Wide Distribution Network",
      description: "Long shelf life enables distribution to retail outlets across distant locations",
    },
  ];

  return (
    <section id="dairy-division" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Premium Dairy Division
          </h2>
          <div className="inline-block bg-gradient-secondary text-secondary-foreground px-6 py-2 rounded-full font-semibold text-lg mb-6">
            A2 UHT Milk
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Barak Milkhut also operates a premium dairy vertical that focuses on delivering 
            high-nutrient, preservative-free A2 milk with long shelf life through advanced 
            UHT processing.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-lg p-8 shadow-soft hover:shadow-medium transition-all group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quality Badge */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="inline-block bg-muted rounded-lg px-8 py-6 shadow-soft">
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Quality Assurance</p>
            <p className="text-lg font-semibold text-foreground">
              100% Natural • Nutrient-Rich • Extended Shelf Life
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DairyDivision;
