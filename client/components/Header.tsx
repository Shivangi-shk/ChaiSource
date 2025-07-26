import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChefHat, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative">
              <ChefHat className="h-8 w-8 text-primary" />
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-chili rounded-full animate-pulse" />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-chili bg-clip-text text-transparent">
              ChaiSource
            </span>
            <Badge
              variant="secondary"
              className="text-xs font-medium bg-saffron/20 text-masala border-saffron/30"
            >
              Beta
            </Badge>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/marketplace"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Marketplace
            </Link>
            <Link
              to="/vendors"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              For Vendors
            </Link>
            <Link
              to="/suppliers"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              For Suppliers
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-primary to-curry hover:from-primary/90 hover:to-curry/90"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-muted"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur">
            <nav className="flex flex-col space-y-4 px-4 py-6">
              <Link
                to="/marketplace"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Marketplace
              </Link>
              <Link
                to="/vendors"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                For Vendors
              </Link>
              <Link
                to="/suppliers"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                For Suppliers
              </Link>
              <Link
                to="/about"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-primary to-curry hover:from-primary/90 hover:to-curry/90"
                >
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
