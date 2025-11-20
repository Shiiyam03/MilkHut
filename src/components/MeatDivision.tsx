import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Beef, Bird, Shield, Snowflake, Package, Truck } from "lucide-react";

const MeatDivision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    { name: "Mutton", subtitle: "Goat & Sheep", icon: "🐐" },
    { name: "Buffalo / Beef", subtitle: "Premium Cuts", icon: "🐃" },
    { name: "Chicken", subtitle: "Broiler & Country", icon: "🐔" },
  ];

  const features = [
    {
      icon: Shield,
      title: "State-of-the-art Infrastructure",
      description: "Modern slaughtering and processing facilities designed for maximum efficiency and safety",
    },
    {
      icon: Snowflake,
      title: "Cold Chain Excellence",
      description: "Advanced blast freezing and long-term storage facilities maintaining optimal freshness",
    },
    {
      icon: Package,
      title: "Value-Added Products",
      description: "Frozen cuts, boneless meat, and offals processed to premium standards",
    },
    {
      icon: Truck,
      title: "Packaging & Logistics",
      description: "Complete support for retail distribution and export requirements",
    },
  ];

  return (
    <section id="meat-division" className="py-20 bg-muted" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Meat Processing Division
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Barak Milkhut specializes in modern, hygienic, and export-grade processing of multiple 
            livestock categories. The facilities are designed to comply with FSSAI, APEDA, and 
            international export standards, ensuring safe and high-quality meat products.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-lg p-6 text-center shadow-soft hover:shadow-medium transition-all"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-5xl mb-3">{category.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-1">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{category.subtitle}</p>
            </motion.div>
          ))}
        </div>

        {/* Key Features */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Key Features</h3>
          <p className="text-muted-foreground">International-standard facilities and processes</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-lg p-6 shadow-soft hover:shadow-medium transition-all group"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeatDivision;
