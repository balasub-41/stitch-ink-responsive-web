
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const BannersService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-craft-teal mb-6">Custom Vinyl Banners</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-lg text-muted-foreground mb-4">
              Make a statement with our high-quality custom vinyl banners. Perfect for promotions, events, 
              storefronts, or any occasion where you want to grab attention.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Durable outdoor-grade vinyl material</li>
              <li>Full-color digital printing</li>
              <li>Custom sizes available</li>
              <li>Weather and UV resistant</li>
              <li>Reinforced edges with grommets for easy hanging</li>
              <li>Fast turnaround times</li>
            </ul>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/fd214831-8199-4c00-98c8-d372abac4f63.png"
              alt="Custom Vinyl Banner Sample" 
              className="w-full h-64 object-cover object-center"
            />
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Request a Quote</h2>
          <p className="text-muted-foreground mb-6">
            Contact us today to discuss your custom banner needs and get a free quote.
          </p>
          <a 
            href="/contact" 
            className="bg-craft-teal hover:bg-craft-teal/90 text-white px-6 py-3 rounded-md inline-block transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BannersService;
