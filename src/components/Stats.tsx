import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      label: "Processing Capacity",
      value: 500,
      suffix: "TPD",
      description: "Tonnes Per Day",
    },
    {
      label: "Facilities Across TN",
      value: 10,
      suffix: "+",
      description: "And Growing",
    },
    {
      label: "Quality Certifications",
      value: 5,
      suffix: "+",
      description: "International Standards",
    },
  ];

  return (
    <section id="stats" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Capabilities
          </h2>
          <p className="text-lg text-muted-foreground">
            World-class infrastructure powering excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-lg p-8 text-center shadow-soft hover:shadow-medium transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <CounterAnimation value={stat.value} isInView={isInView} delay={index * 0.2} />
              <span className="text-5xl font-bold text-accent">{stat.suffix}</span>
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">{stat.label}</h3>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
              {/* EDIT: Change these numbers to reflect actual capacity and facilities */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Counter Animation Component
const CounterAnimation = ({ value, isInView, delay }: { value: number; isInView: boolean; delay: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        delay: delay,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, count, value, delay]);

  return (
    <motion.span className="text-5xl font-bold text-primary">
      {rounded}
    </motion.span>
  );
};

export default Stats;
