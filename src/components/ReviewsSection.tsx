import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ahmed K.",
    city: "Dubai",
    text: "The best electric scooter I've used in Dubai. Smooth ride and strong motor.",
  },
  {
    name: "Sara M.",
    city: "Abu Dhabi",
    text: "Battery lasts long and build quality feels premium. Love the design!",
  },
  {
    name: "Omar R.",
    city: "Sharjah",
    text: "Perfect for my daily commute. Folds easily and fits in the car boot.",
  },
  {
    name: "Fatima A.",
    city: "Dubai",
    text: "Delivery was super fast and the scooter exceeded my expectations. 10/10.",
  },
];

const ReviewsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="reviews" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-3">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            What Riders Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card p-6 space-y-4"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                "{r.text}"
              </p>
              <div className="pt-2 border-t border-border">
                <p className="text-sm font-heading font-semibold">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.city}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
