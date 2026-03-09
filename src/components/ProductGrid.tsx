import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import scooterD20 from "@/assets/scooter-d20.png";
import scooterK3 from "@/assets/scooter-k3.png";
import scooterK5 from "@/assets/scooter-k5.png";
import scooterK6 from "@/assets/scooter-k6.png";
import scooterX9 from "@/assets/scooter-x9.png";
import scooterS1 from "@/assets/scooter-s1.png";
import scooterT7 from "@/assets/scooter-t7.png";
import scooterM3 from "@/assets/scooter-m3.png";

const products = [
  {
    name: "S1 Lite",
    tag: "Best Seller",
    image: scooterS1,
    motor: "350W",
    range: "25 km",
    price: "AED 1,799",
  },
  {
    name: "D20 Urban",
    image: scooterD20,
    motor: "500W",
    range: "30 km",
    price: "AED 2,499",
  },
  {
    name: "K3 Sport",
    image: scooterK3,
    motor: "800W",
    range: "40 km",
    price: "AED 3,299",
  },
  {
    name: "K5 Pro",
    tag: "Popular",
    image: scooterK5,
    motor: "1000W",
    range: "50 km",
    price: "AED 4,199",
  },
  {
    name: "K6 Elite",
    image: scooterK6,
    motor: "1200W",
    range: "60 km",
    price: "AED 5,499",
  },
  {
    name: "X9 Racing",
    tag: "New",
    image: scooterX9,
    motor: "1500W",
    range: "55 km",
    price: "AED 6,299",
  },
  {
    name: "T7 Off-Road",
    image: scooterT7,
    motor: "2000W",
    range: "70 km",
    price: "AED 7,499",
  },
  {
    name: "M3 Cargo",
    image: scooterM3,
    motor: "600W",
    range: "45 km",
    price: "AED 3,699",
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
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            From city commuters to off-road beasts — find the perfect Zaplon for your lifestyle.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05 * i }}
              className="glass-card product-card-hover group overflow-hidden relative"
            >
              {p.tag && (
                <span className="absolute top-4 right-4 z-20 text-[10px] font-heading font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
                  {p.tag}
                </span>
              )}

              <div className="relative p-6 pb-0 flex items-center justify-center h-52 overflow-hidden">
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
                  <button className="p-2.5 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
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
