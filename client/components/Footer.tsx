import { Link } from "react-router-dom";
import { ChefHat, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-masala to-cardamom text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <ChefHat className="h-8 w-8 text-saffron" />
              <span className="font-bold text-xl text-white">ChaiSource</span>
            </Link>
            <p className="text-white/80 mb-4 max-w-md">
              Empowering India's street food vendors with reliable, affordable
              raw material sourcing. Join thousands of vendors who trust
              ChaiSource for their daily supplies.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white/60 hover:text-saffron transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-saffron transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-saffron transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-saffron transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-saffron">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/marketplace"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Marketplace
                </Link>
              </li>
              <li>
                <Link
                  to="/vendors"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  For Vendors
                </Link>
              </li>
              <li>
                <Link
                  to="/suppliers"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  For Suppliers
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-saffron">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/help"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © 2024 ChaiSource. Made with ❤️ for India's street food vendors.
          </p>
        </div>
      </div>
    </footer>
  );
}
