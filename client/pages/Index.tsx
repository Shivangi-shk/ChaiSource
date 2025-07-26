import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ChefHat,
  Truck,
  IndianRupee,
  Shield,
  Clock,
  Users,
  TrendingUp,
  MapPin,
  Star,
  ArrowRight,
  CheckCircle,
  Zap,
  Heart
} from "lucide-react";

export default function Index() {
  const problems = [
    {
      icon: IndianRupee,
      title: "Unpredictable Pricing",
      description: "Daily price fluctuations make budgeting impossible"
    },
    {
      icon: Shield,
      title: "Quality Concerns",
      description: "No guarantee of ingredient freshness and quality"
    },
    {
      icon: Clock,
      title: "Time-Consuming Sourcing",
      description: "Hours spent searching for ingredients instead of cooking"
    },
    {
      icon: Truck,
      title: "Unreliable Supply",
      description: "Ingredients often out of stock when needed most"
    }
  ];

  const solutions = [
    {
      icon: MapPin,
      title: "Local Verified Suppliers",
      description: "Connect with trusted suppliers in your area with quality guarantees"
    },
    {
      icon: IndianRupee,
      title: "Transparent Pricing",
      description: "Fixed daily rates with bulk discounts and no hidden charges"
    },
    {
      icon: Truck,
      title: "Reliable Delivery",
      description: "Daily delivery schedules you can count on"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Fresh ingredients with quality checks at every step"
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Instant Ordering",
      description: "Order your daily supplies in under 2 minutes",
      color: "text-saffron"
    },
    {
      icon: Users,
      title: "Vendor Community",
      description: "Join 10,000+ vendors sharing tips and bulk orders",
      color: "text-chili"
    },
    {
      icon: TrendingUp,
      title: "Business Analytics",
      description: "Track your ingredient costs and optimize profits",
      color: "text-mint"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai",
      business: "Vada Pav Stall",
      quote: "ChaiSource cut my ingredient costs by 30% and saves me 2 hours daily!",
      rating: 5
    },
    {
      name: "Priya Sharma",
      location: "Delhi",
      business: "Chaat Corner",
      quote: "Finally, I can focus on cooking instead of running around for supplies.",
      rating: 5
    },
    {
      name: "Mohammed Ali",
      location: "Bangalore",
      business: "Dosa Cart",
      quote: "The quality is consistent and delivery is always on time. Game changer!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-saffron/5 to-chili/5 pt-16 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-saffron/20 text-masala border-saffron/30">
                  <Heart className="w-3 h-3 mr-1" />
                  Made for Street Food Heroes
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Stop Wrestling with{" "}
                  <span className="bg-gradient-to-r from-primary to-chili bg-clip-text text-transparent">
                    Raw Materials
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  India's first platform connecting street food vendors with reliable suppliers. 
                  Get quality ingredients at fair prices, delivered fresh to your stall.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-curry hover:from-primary/90 hover:to-curry/90 text-lg px-8"
                  asChild
                >
                  <Link to="/marketplace">
                    Browse Marketplace
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8" asChild>
                  <Link to="/vendors">Join as Vendor</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10,000+</div>
                  <div className="text-sm text-muted-foreground">Active Vendors</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-chili">500+</div>
                  <div className="text-sm text-muted-foreground">Verified Suppliers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-mint">30%</div>
                  <div className="text-sm text-muted-foreground">Cost Savings</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-saffron/20 to-chili/20 rounded-3xl blur-3xl" />
              <Card className="relative border-2 border-saffron/20 bg-white/80 backdrop-blur">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <ChefHat className="h-8 w-8 text-primary" />
                      <h3 className="text-xl font-semibold">Today's Fresh Orders</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {[
                        { item: "Premium Basmati Rice", qty: "25kg", price: "₹1,250", supplier: "Delhi Grains Co." },
                        { item: "Fresh Onions", qty: "10kg", price: "₹300", supplier: "Farm Fresh Veggies" },
                        { item: "Refined Oil", qty: "5L", price: "₹650", supplier: "Pure Oil Mills" }
                      ].map((order, i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                          <div>
                            <div className="font-medium">{order.item}</div>
                            <div className="text-sm text-muted-foreground">{order.supplier}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-primary">{order.price}</div>
                            <div className="text-sm text-muted-foreground">{order.qty}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-mint to-primary hover:from-mint/90 hover:to-primary/90">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Order Placed Successfully
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Daily Struggle is <span className="text-chili">Real</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every street food vendor faces the same challenges. Behind every delicious plate 
              of chaat or dosa, there's a hidden struggle with raw material sourcing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, index) => (
              <Card key={index} className="border-2 border-chili/20 hover:border-chili/40 transition-colors">
                <CardContent className="p-6 text-center">
                  <problem.icon className="h-12 w-12 text-chili mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet <span className="text-primary">ChaiSource</span> - Your Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A digital platform designed specifically for street food vendors. 
              No more uncertainty, no more running around - just reliable supplies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <Card key={index} className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-6 text-center">
                  <solution.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{solution.title}</h3>
                  <p className="text-muted-foreground">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-r from-saffron/5 to-turmeric/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Built for the Modern <span className="text-curry">Street Vendor</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Simple tools that actually work for your business. No complicated forms, 
                  no confusing interfaces - just what you need to grow.
                </p>
              </div>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <feature.icon className={`h-8 w-8 ${feature.color} mt-1 flex-shrink-0`} />
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-gradient-to-r from-curry to-turmeric hover:from-curry/90 hover:to-turmeric/90" asChild>
                <Link to="/marketplace">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-curry/20 to-turmeric/20 rounded-3xl blur-3xl" />
              <div className="relative grid grid-cols-2 gap-4">
                {[
                  { title: "Order History", value: "847 orders", trend: "+12%" },
                  { title: "Savings This Month", value: "₹8,420", trend: "+30%" },
                  { title: "Delivery Success", value: "99.2%", trend: "+0.8%" },
                  { title: "Quality Rating", value: "4.9/5", trend: "+0.2" }
                ].map((stat, i) => (
                  <Card key={i} className="bg-white/80 backdrop-blur border border-curry/20">
                    <CardContent className="p-4">
                      <div className="text-2xl font-bold text-curry">{stat.value}</div>
                      <div className="text-sm font-medium">{stat.title}</div>
                      <div className="text-xs text-mint font-medium">{stat.trend}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by <span className="text-mint">Street Food Heroes</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Real vendors, real results. See how ChaiSource is transforming businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 border-mint/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-saffron fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg mb-4">"{testimonial.quote}"</blockquote>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.business}, {testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-masala to-cardamom text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of vendors who've already revolutionized their sourcing. 
            Start your free trial today - no credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-masala hover:bg-white/90 text-lg px-8"
              asChild
            >
              <Link to="/marketplace">
                Browse Marketplace
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-masala text-lg px-8"
              asChild
            >
              <Link to="/vendors">Join as Vendor</Link>
            </Button>
          </div>

          <div className="mt-8 text-white/70">
            <p>🚀 Get started in under 5 minutes • 📞 24/7 support in Hindi & English</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
