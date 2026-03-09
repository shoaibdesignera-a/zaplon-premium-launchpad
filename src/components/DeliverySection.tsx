import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Truck, MapPin } from "lucide-react";

const cities = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "RAK"];

const DeliverySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="delivery" className="py-24 section-gradient" ref={ref}>
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6 pulse-glow"
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Truck className="w-8 h-8 text-primary" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Fast UAE Delivery
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto mb-12">
            2–4 days delivery across all major Emirates.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {cities.map((city, i) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="glass-card px-6 py-3 flex items-center gap-2 neon-border"
              >
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-heading font-medium text-sm">{city}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeliverySection;
