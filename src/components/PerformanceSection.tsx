import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  { label: "Speed", zaplon: 90, regular: 55 },
  { label: "Battery", zaplon: 85, regular: 45 },
  { label: "Motor Power", zaplon: 95, regular: 50 },
  { label: "Durability", zaplon: 88, regular: 60 },
];

const PerformanceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 section-gradient" ref={ref}>
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-3">
            Comparison
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Zaplon vs Regular Scooters
          </h2>
        </motion.div>

        <div className="space-y-8">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
            >
              <div className="flex justify-between text-sm font-body mb-2">
                <span className="text-foreground font-medium">{m.label}</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-primary w-16 font-heading">Zaplon</span>
                  <div className="flex-1 h-3 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-primary"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${m.zaplon}%` } : {}}
                      transition={{ duration: 1.2, delay: 0.3 + 0.1 * i, ease: "easeOut" }}
                      style={{ boxShadow: "0 0 10px hsl(186 100% 50% / 0.5)" }}
                    />
                  </div>
                  <span className="text-xs text-primary w-8 font-heading">{m.zaplon}%</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground w-16 font-heading">Others</span>
                  <div className="flex-1 h-3 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-muted-foreground/30"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${m.regular}%` } : {}}
                      transition={{ duration: 1.2, delay: 0.3 + 0.1 * i, ease: "easeOut" }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground w-8 font-heading">{m.regular}%</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
