
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const BannersService = () => {
  const features = [
    "Full-color digital printing for vibrant, eye-catching designs",
    "Durable, weather-resistant 13 oz. vinyl material",
    "Available in custom sizes to fit your specific needs",
    "Reinforced edges with metal grommets for easy installation",
    "Fast turnaround times to meet your deadlines",
    "UV-resistant inks for long-lasting outdoor use",
    "Wind slits available for large outdoor banners",
    "Competitive pricing with volume discounts"
  ];
  
  const applications = [
    "Store grand openings and special promotions",
    "Trade shows and exhibition displays",
    "Sporting events and tournaments",
    "School and university events",
    "Corporate meetings and conferences",
    "Birthday and graduation celebrations",
    "Political campaigns",
    "Construction site signage"
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-craft-teal to-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Custom Vinyl Banners</h1>
                <p className="text-lg mb-8 text-white/90">
                  High-quality, attention-grabbing custom vinyl banners designed to help your business or event stand out. 
                  Perfect for promotions, events, storefronts, or any occasion where you need to make a big impression.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    to="/contact"
                    className="bg-white hover:bg-gray-100 text-craft-teal px-6 py-3 rounded-md font-semibold transition-colors"
                  >
                    Request a Quote
                  </Link>
                  <Link 
                    to="/services"
                    className="bg-transparent hover:bg-white/10 border border-white text-white px-6 py-3 rounded-md font-semibold transition-colors"
                  >
                    All Services
                  </Link>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/fd214831-8199-4c00-98c8-d372abac4f63.png"
                  alt="Custom Vinyl Banner" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Content Sections */}
        <div className="container mx-auto px-4 py-16">
          {/* Features Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-craft-teal">Banner Features</h2>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-craft-teal mt-1 shrink-0" size={20} />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/f3faeb1a-8114-4225-8911-d7a2a140f446.png"
                alt="Banner Features" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          {/* Applications Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
            <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/fd214831-8199-4c00-98c8-d372abac4f63.png"
                alt="Banner Applications" 
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6 text-craft-teal">Perfect For</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                {applications.map((application, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-craft-teal mt-1 shrink-0" size={20} />
                    <span className="text-muted-foreground">{application}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Order Your Custom Banner?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your custom banner needs. Our design team can help bring your vision to life
              with professional designs and high-quality production.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-craft-teal hover:bg-craft-teal/90 text-white px-8 py-3 rounded-md inline-block transition-colors"
              >
                Request a Quote
              </Link>
              <Link 
                to="/services" 
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-3 rounded-md inline-block transition-colors"
              >
                Explore More Services
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BannersService;
