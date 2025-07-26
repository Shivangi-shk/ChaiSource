import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Marketplace from "./pages/Marketplace";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route
            path="/vendors"
            element={
              <PlaceholderPage
                title="For Vendors"
                description="Connect with suppliers, manage your orders, and grow your street food business with ChaiSource."
              />
            }
          />
          <Route
            path="/suppliers"
            element={
              <PlaceholderPage
                title="For Suppliers"
                description="Reach thousands of street food vendors and grow your distribution network with ChaiSource."
              />
            }
          />
          <Route
            path="/about"
            element={
              <PlaceholderPage
                title="About ChaiSource"
                description="Learn about our mission to revolutionize raw material sourcing for India's street food vendors."
              />
            }
          />
          <Route
            path="/help"
            element={
              <PlaceholderPage
                title="Help Center"
                description="Find answers to common questions and get support for your ChaiSource account."
              />
            }
          />
          <Route
            path="/contact"
            element={
              <PlaceholderPage
                title="Contact Us"
                description="Get in touch with our team for support, partnerships, or general inquiries."
              />
            }
          />
          <Route
            path="/privacy"
            element={
              <PlaceholderPage
                title="Privacy Policy"
                description="Learn how we protect and handle your personal information and data."
              />
            }
          />
          <Route
            path="/terms"
            element={
              <PlaceholderPage
                title="Terms of Service"
                description="Read our terms and conditions for using the ChaiSource platform."
              />
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
