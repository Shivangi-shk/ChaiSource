import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Construction, ArrowLeft, MessageCircle } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
  comingSoon?: boolean;
}

export default function PlaceholderPage({ 
  title, 
  description, 
  comingSoon = true 
}: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-2 border-saffron/20">
              <CardContent className="p-12">
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-saffron/20 mb-4">
                    <Construction className="h-8 w-8 text-primary" />
                  </div>
                  <h1 className="text-3xl font-bold mb-4">{title}</h1>
                  <p className="text-xl text-muted-foreground mb-6">
                    {description}
                  </p>
                  
                  {comingSoon && (
                    <div className="bg-gradient-to-r from-saffron/10 to-turmeric/10 rounded-lg p-6 mb-8">
                      <h3 className="font-semibold text-lg mb-2 text-primary">
                        🚀 Coming Soon!
                      </h3>
                      <p className="text-muted-foreground">
                        We're working hard to bring you this feature. 
                        Continue chatting with our AI assistant to help us build exactly what you need.
                      </p>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild variant="outline">
                      <Link to="/">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Home
                      </Link>
                    </Button>
                    <Button asChild className="bg-gradient-to-r from-primary to-curry hover:from-primary/90 hover:to-curry/90">
                      <Link to="/marketplace">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Explore Marketplace
                      </Link>
                    </Button>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mt-6">
                    💡 <strong>Tip:</strong> Continue prompting our AI assistant to help build this page content!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
