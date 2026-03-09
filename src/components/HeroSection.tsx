import { motion } from "framer-motion";
import heroScooter from "@/assets/scooter-hero.png";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient pt-16">
      {/* Particle dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Next Generation Mobility
          </motion.p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[0.95] mb-6">
            The Future
            <br />
            <span className="gradient-text">of Urban</span>
            <br />
            Mobility
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 font-body leading-relaxed">
            Zaplon electric scooters combine power, range, and futuristic design
            to transform city commuting across the UAE.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#products" className="btn-primary-neon">
              Shop Scooters
            </a>
            <a href="#power" className="btn-outline-neon">
              Explore Models
            </a>
          </div>
        </motion.div>

        {/* Scooter image */}
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          {/* Glow behind scooter */}
          <div className="absolute w-[80%] h-[80%] rounded-full bg-primary/10 blur-[100px]" />
          <motion.img
            src={heroScooter}
            alt="Zaplon Electric Scooter"
            className="relative z-10 w-full max-w-lg floating drop-shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/40 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary/60" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
