import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ScrollStory from "@/components/ScrollStory";
import LifestyleAds from "@/components/LifestyleAds";
import ProductGrid from "@/components/ProductGrid";
import PerformanceSection from "@/components/PerformanceSection";
import ReviewsSection from "@/components/ReviewsSection";
import DeliverySection from "@/components/DeliverySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ScrollStory />
      <LifestyleAds />
      <ProductGrid />
      <PerformanceSection />
      <ReviewsSection />
      <DeliverySection />
      <Footer />
    </div>
  );
};

export default Index;
