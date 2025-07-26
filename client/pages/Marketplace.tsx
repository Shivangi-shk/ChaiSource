import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Search,
  Filter,
  MapPin,
  Star,
  Truck,
  ShoppingCart,
  Clock,
  Leaf,
  Award,
  IndianRupee,
  Package,
  Phone,
  MessageCircle
} from "lucide-react";

export default function Marketplace() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const categories = [
    "All Categories",
    "Grains & Rice",
    "Vegetables",
    "Spices & Masalas",
    "Oils & Ghee",
    "Dairy Products",
    "Snack Ingredients",
    "Beverages",
    "Packaging"
  ];

  const locations = [
    "All Locations",
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Chennai",
    "Kolkata",
    "Hyderabad",
    "Pune",
    "Ahmedabad"
  ];

  const suppliers = [
    {
      id: 1,
      name: "Fresh Farm Supplies",
      location: "Mumbai, Maharashtra",
      rating: 4.8,
      reviews: 156,
      speciality: "Premium Vegetables",
      verified: true,
      deliveryTime: "Same Day",
      minOrder: "₹500",
      description: "Quality vegetables sourced directly from farms",
      badge: "Top Supplier",
      products: [
        { name: "Fresh Onions", price: "₹30/kg", unit: "kg", inStock: true },
        { name: "Tomatoes", price: "₹40/kg", unit: "kg", inStock: true },
        { name: "Green Chilies", price: "₹80/kg", unit: "kg", inStock: false },
        { name: "Coriander", price: "₹20/bunch", unit: "bunch", inStock: true }
      ]
    },
    {
      id: 2,
      name: "Spice Master Co.",
      location: "Delhi, NCR",
      rating: 4.9,
      reviews: 203,
      speciality: "Authentic Spices",
      verified: true,
      deliveryTime: "Next Day",
      minOrder: "₹300",
      description: "Pure spices and masalas for authentic taste",
      badge: "Quality Certified",
      products: [
        { name: "Garam Masala", price: "₹450/kg", unit: "kg", inStock: true },
        { name: "Turmeric Powder", price: "₹280/kg", unit: "kg", inStock: true },
        { name: "Red Chili Powder", price: "₹320/kg", unit: "kg", inStock: true },
        { name: "Cumin Seeds", price: "₹380/kg", unit: "kg", inStock: true }
      ]
    },
    {
      id: 3,
      name: "Golden Grains",
      location: "Pune, Maharashtra",
      rating: 4.7,
      reviews: 89,
      speciality: "Premium Rice & Grains",
      verified: true,
      deliveryTime: "2-3 Days",
      minOrder: "₹1000",
      description: "Best quality rice and grains at wholesale prices",
      badge: "Bulk Supplier",
      products: [
        { name: "Basmati Rice", price: "₹65/kg", unit: "kg", inStock: true },
        { name: "Wheat Flour", price: "₹35/kg", unit: "kg", inStock: true },
        { name: "Chickpea Flour", price: "₹55/kg", unit: "kg", inStock: false },
        { name: "Semolina", price: "₹42/kg", unit: "kg", inStock: true }
      ]
    },
    {
      id: 4,
      name: "Pure Oil Mills",
      location: "Bangalore, Karnataka",
      rating: 4.6,
      reviews: 134,
      speciality: "Cooking Oils & Ghee",
      verified: true,
      deliveryTime: "Same Day",
      minOrder: "₹400",
      description: "Cold-pressed oils and pure ghee for healthy cooking",
      badge: "Organic Certified",
      products: [
        { name: "Sunflower Oil", price: "₹130/L", unit: "L", inStock: true },
        { name: "Coconut Oil", price: "₹180/L", unit: "L", inStock: true },
        { name: "Pure Ghee", price: "₹450/kg", unit: "kg", inStock: true },
        { name: "Mustard Oil", price: "₹150/L", unit: "L", inStock: false }
      ]
    }
  ];

  const filteredSuppliers = suppliers.filter(supplier => {
    const matchesSearch = supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         supplier.speciality.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = !selectedLocation || selectedLocation === "All Locations" || 
                           supplier.location.includes(selectedLocation);
    return matchesSearch && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-curry/10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Your Perfect <span className="text-primary">Supplier</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with verified suppliers offering quality ingredients at competitive prices. 
              Delivered fresh to your location.
            </p>
          </div>

          {/* Search & Filters */}
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-2 relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search suppliers, products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger>
                      <MapPin className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((location) => (
                        <SelectItem key={location} value={location}>{location}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Verified Suppliers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-chili">10,000+</div>
              <div className="text-sm text-muted-foreground">Products Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-mint">99.2%</div>
              <div className="text-sm text-muted-foreground">On-time Delivery</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-curry">₹2.5Cr+</div>
              <div className="text-sm text-muted-foreground">Monthly GMV</div>
            </div>
          </div>
        </div>
      </section>

      {/* Suppliers Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">
              {filteredSuppliers.length} Suppliers Found
            </h2>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>

          <div className="grid gap-8">
            {filteredSuppliers.map((supplier) => (
              <Card key={supplier.id} className="border-2 hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <div className="grid lg:grid-cols-3 gap-6">
                    {/* Supplier Info */}
                    <div className="lg:col-span-1 space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="text-xl font-semibold">{supplier.name}</h3>
                            {supplier.verified && (
                              <Award className="h-5 w-5 text-primary" />
                            )}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground mb-2">
                            <MapPin className="h-4 w-4 mr-1" />
                            {supplier.location}
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {supplier.badge}
                        </Badge>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-saffron fill-current mr-1" />
                          <span className="font-medium">{supplier.rating}</span>
                          <span className="text-muted-foreground ml-1">({supplier.reviews})</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground">{supplier.description}</p>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="flex items-center text-muted-foreground">
                            <Truck className="h-4 w-4 mr-1" />
                            Delivery:
                          </span>
                          <span className="font-medium">{supplier.deliveryTime}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="flex items-center text-muted-foreground">
                            <Package className="h-4 w-4 mr-1" />
                            Min Order:
                          </span>
                          <span className="font-medium">{supplier.minOrder}</span>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1">
                          <Phone className="h-4 w-4 mr-1" />
                          Call
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          Chat
                        </Button>
                      </div>
                    </div>

                    {/* Products */}
                    <div className="lg:col-span-2">
                      <h4 className="font-semibold mb-4 text-lg">Available Products</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {supplier.products.map((product, index) => (
                          <Card key={index} className={`border ${!product.inStock ? 'opacity-60' : ''}`}>
                            <CardContent className="p-4">
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="font-medium">{product.name}</h5>
                                {product.inStock ? (
                                  <Badge variant="secondary" className="bg-mint/20 text-mint">
                                    In Stock
                                  </Badge>
                                ) : (
                                  <Badge variant="secondary" className="bg-muted text-muted-foreground">
                                    Out of Stock
                                  </Badge>
                                )}
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-lg font-semibold text-primary">
                                  {product.price}
                                </span>
                                <Button 
                                  size="sm" 
                                  disabled={!product.inStock}
                                  className="bg-gradient-to-r from-primary to-curry hover:from-primary/90 hover:to-curry/90"
                                >
                                  <ShoppingCart className="h-3 w-3 mr-1" />
                                  Add
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Suppliers
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-curry/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Don't See What You Need?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Post your requirements and let suppliers come to you with their best offers.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-curry hover:from-primary/90 hover:to-curry/90">
            Post Requirement
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
