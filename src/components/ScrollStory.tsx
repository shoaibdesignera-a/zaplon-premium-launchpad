import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Battery, Bike } from "lucide-react";

const CountUp = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <span ref={ref} className="tabular-nums">
      {inView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {value}{suffix}
        </motion.span>
      ) : (
        "0" + suffix
      )}
    </span>
  );
};

const sections = [
  {
    id: "power",
    icon: Zap,
    tag: "Performance",
    title: "Built For Power",
    description:
      "High torque electric motors delivering smooth acceleration for urban streets and beyond.",
    specs: [
      { label: "Standard", value: 500, suffix: "W" },
      { label: "Sport", value: 1000, suffix: "W" },
      { label: "Pro", value: 1200, suffix: "W" },
    ],
  },
  {
    id: "range",
    icon: Battery,
    tag: "Battery",
    title: "Ride Further",
    description:
      "Long range lithium battery designed for modern commuting. Charge once, ride all day.",
    specs: [
      { label: "City", value: 30, suffix: "km" },
      { label: "Touring", value: 40, suffix: "km" },
      { label: "Max", value: 60, suffix: "km" },
    ],
  },
  {
    id: "city",
    icon: Bike,
    tag: "Design",
    title: "Designed For The City",
    description:
      "Foldable design, shock absorbing suspension, and a durable aluminum frame built for UAE roads.",
    specs: [
      { label: "Foldable", value: 100, suffix: "%" },
      { label: "Suspension", value: 3, suffix: " stage" },
      { label: "Frame", value: 6, suffix: " series Al" },
    ],
  },
];

const ScrollStory = () => {
  return (
    <div>
      {sections.map((section, idx) => {
        const ref = useRef(null);
        const inView = useInView(ref, { once: true, margin: "-100px" });

        return (
          <section
            key={section.id}
            id={section.id}
            ref={ref}
            className={`min-h-screen flex items-center py-24 ${
              idx % 2 === 1 ? "section-gradient" : ""
            }`}
          >
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-3xl mx-auto text-center"
              >
                <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
                  <section.icon className="w-4 h-4 text-primary" />
                  <span className="text-xs font-heading tracking-widest uppercase text-primary">
                    {section.tag}
                  </span>
                </div>

                <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
                  {section.title}
                </h2>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-16">
                  {section.description}
                </p>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-6">
                  {section.specs.map((spec, i) => (
                    <motion.div
                      key={spec.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                      className="glass-card p-6 md:p-8 neon-border"
                    >
                      <div className="text-3xl md:text-5xl font-heading font-bold neon-text text-primary mb-2">
                        <CountUp value={spec.value} suffix={spec.suffix} />
                      </div>
                      <div className="text-sm text-muted-foreground font-body">
                        {spec.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default ScrollStory;
