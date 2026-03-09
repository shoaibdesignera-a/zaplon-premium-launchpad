import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Flame, Moon, Briefcase } from "lucide-react";
import desertImg from "@/assets/lifestyle-desert-racing.jpg";
import cityNightImg from "@/assets/lifestyle-city-night.jpg";
import deliveryImg from "@/assets/lifestyle-delivery.jpg";

const ads = [
  {
    image: desertImg,
    icon: Flame,
    tag: "Adventure",
    title: "Conquer The Desert",
    subtitle: "Born for power. Built for the wild.",
    description:
      "Push limits beyond the city. Zaplon off-road scooters tear through sand dunes with 2000W motors and all-terrain tires.",
    cta: "Shop Off-Road",
    reverse: false,
  },
  {
    image: cityNightImg,
    icon: Moon,
    tag: "Nightlife",
    title: "Own The Night",
    subtitle: "The city never sleeps. Neither do you.",
    description:
      "LED-lit rides through Dubai's neon skyline. Integrated lights, smart display, and whisper-quiet motors for the ultimate night cruise.",
    cta: "Explore Night Riders",
    reverse: true,
  },
  {
    image: deliveryImg,
    icon: Briefcase,
    tag: "Business",
    title: "Deliver Faster",
    subtitle: "Built for riders who mean business.",
    description:
      "Join hundreds of delivery riders across Dubai and Abu Dhabi. Long battery life, cargo-ready frames, and zero fuel costs.",
    cta: "Fleet Solutions",
    reverse: false,
  },
];

const LifestyleAds = () => {
  return (
    <section className="py-12">
      {ads.map((ad, idx) => {
        const ref = useRef(null);
        const inView = useInView(ref, { once: true, margin: "-100px" });

        return (
          <div
            key={ad.title}
            ref={ref}
            className={`relative overflow-hidden ${idx !== ads.length - 1 ? "mb-2" : ""}`}
          >
            {/* Full-bleed image background */}
            <div className="relative min-h-[85vh] flex items-center">
              <div className="absolute inset-0">
                <img
                  src={ad.image}
                  alt={ad.title}
                  className="w-full h-full object-cover"
                />
                {/* Dark gradient overlay */}
                <div
                  className={`absolute inset-0 ${
                    ad.reverse
                      ? "bg-gradient-to-l from-background/95 via-background/70 to-transparent"
                      : "bg-gradient-to-r from-background/95 via-background/70 to-transparent"
                  }`}
                  style={{
                    background: ad.reverse
                      ? "linear-gradient(to left, hsl(222 47% 7% / 0.95), hsl(222 47% 7% / 0.7) 50%, transparent)"
                      : "linear-gradient(to right, hsl(222 47% 7% / 0.95), hsl(222 47% 7% / 0.7) 50%, transparent)",
                  }}
                />
              </div>

              <div className="container mx-auto px-4 relative z-10">
                <div
                  className={`max-w-xl ${
                    ad.reverse ? "ml-auto text-right" : ""
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                  >
                    <div
                      className={`inline-flex items-center gap-2 glass-card px-4 py-2 mb-6 ${
                        ad.reverse ? "flex-row-reverse" : ""
                      }`}
                    >
                      <ad.icon className="w-4 h-4 text-primary" />
                      <span className="text-xs font-heading tracking-widest uppercase text-primary">
                        {ad.tag}
                      </span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-heading font-bold mb-3 leading-[0.95]">
                      {ad.title}
                    </h2>
                    <p className="text-lg md:text-xl text-primary font-heading font-medium mb-4">
                      {ad.subtitle}
                    </p>
                    <p className="text-muted-foreground font-body leading-relaxed mb-8 max-w-md">
                      {ad.description}
                    </p>

                    <a
                      href="#products"
                      className={`btn-primary-neon inline-flex items-center gap-2 ${
                        ad.reverse ? "flex-row-reverse" : ""
                      }`}
                    >
                      {ad.cta}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default LifestyleAds;
