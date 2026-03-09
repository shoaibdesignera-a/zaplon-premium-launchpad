import { Instagram, MessageCircle, Mail } from "lucide-react";
import logo from "@/assets/zaplon-logo.jpg";

const Footer = () => {
  return (
    <footer className="border-t border-border py-16 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <img src={logo} alt="Zaplon" className="h-8 w-auto mb-4" />
            <p className="text-sm text-muted-foreground font-body">
              Premium electric scooters for modern UAE cities.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-body">
              <li><a href="#products" className="hover:text-primary transition-colors">All Scooters</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Accessories</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Spare Parts</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-body">
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Warranty</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Shipping & Returns</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm">Connect</h4>
            <div className="flex gap-3">
              <a href="#" className="p-2.5 rounded-xl bg-muted hover:bg-primary/10 hover:text-primary transition-all text-muted-foreground">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-muted hover:bg-primary/10 hover:text-primary transition-all text-muted-foreground">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-muted hover:bg-primary/10 hover:text-primary transition-all text-muted-foreground">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-xs text-muted-foreground font-body">
          © 2025 Zaplon. All rights reserved. Made in the UAE.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
