import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import scooterD20 from "@/assets/scooter-d20.png";
import scooterK3 from "@/assets/scooter-k3.png";
import scooterK5 from "@/assets/scooter-k5.png";
import scooterK6 from "@/assets/scooter-k6.png";

const products = [
  {
    name: "D20 Electric Scooter",
    image: scooterD20,
    motor: "500W",
    range: "30 km",
    price: "AED 2,499",
  },
  {
    name: "K3 Electric Scooter",
    image: scooterK3,
    motor: "800W",
    range: "40 km",
    price: "AED 3,299",
  },
  {
    name: "K5 Electric Scooter",
    image: scooterK5,
    motor: "1000W",
    range: "50 km",
    price: "AED 4,199",
  },
  {
    name: "K6 Electric Scooter",
    image: scooterK6,
    motor: "1200W",
    range: "60 km",
    price: "AED 5,499",
  },
];

const ProductGrid = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="products" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-3">
            Our Lineup
          </p>
          <h2 className="text-4xl md:text-6xl font-heading font-bold">
            Choose Your Ride
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="glass-card product-card-hover group overflow-hidden"
            >
              <div className="relative p-6 pb-0 flex items-center justify-center h-56 overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" />
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-auto object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6 pt-4 space-y-3">
                <h3 className="text-lg font-heading font-semibold">{p.name}</h3>
                <div className="flex gap-4 text-sm text-muted-foreground font-body">
                  <span className="flex items-center gap-1">
                    <span className="text-primary">⚡</span> {p.motor}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-accent">🔋</span> {p.range}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xl font-heading font-bold text-primary">
                    {p.price}
                  </span>
                  <button className="p-2.5 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 neon-glow">
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
