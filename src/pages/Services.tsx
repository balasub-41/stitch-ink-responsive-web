
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Link } from 'react-router-dom';

const Services = () => {
  const serviceCategories = [
    {
      title: "Vinyl Banners",
      description: "High-quality custom vinyl banners for businesses, events, and promotions.",
      image: "/lovable-uploads/fd214831-8199-4c00-98c8-d372abac4f63.png",
      link: "/services/banners"
    },
    {
      title: "Signs & Graphics",
      description: "Professional signs and graphics for storefronts, vehicles, and indoor displays.",
      image: "/lovable-uploads/08d87c01-03c3-46a6-afe0-c8be4b013ff5.png",
      link: "#"
    },
    {
      title: "Custom Embroidery",
      description: "Premium embroidery services for apparel, caps, bags, and promotional items.",
      image: "/lovable-uploads/7bc2c3aa-e1ff-404a-a141-7d299e49b371.png",
      link: "#"
    },
    {
      title: "Screen Printing",
      description: "High-quality screen printing for t-shirts, hoodies, and promotional products.",
      image: "/lovable-uploads/5c325ebe-8b63-4415-80cf-33ae7704e08a.png",
      link: "#"
    },
    {
      title: "DTF Printing",
      description: "Direct-to-film printing technology for vibrant, durable designs on various fabrics.",
      image: "/lovable-uploads/2dd5b5d6-ef46-4f62-acf9-160a6a1977e4.png",
      link: "#"
    },
    {
      title: "Promotional Products",
      description: "Branded merchandise and promotional items for marketing and corporate gifts.",
      image: "/lovable-uploads/a82809b7-21c9-4793-8c45-6be0a7ad9006.png",
      link: "#"
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-craft-teal mb-4">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide a comprehensive range of custom printing, embroidery, 
            and signage solutions for businesses and individuals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {serviceCategories.map((service, index) => (
            <Link 
              to={service.link} 
              key={index}
              className="group bg-white hover:bg-craft-teal/5 shadow-md rounded-lg overflow-hidden transition-all duration-300 border border-transparent hover:border-craft-teal"
            >
              <div className="h-64 w-full relative">
                <AspectRatio ratio={16/9}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                  />
                </AspectRatio>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 group-hover:text-craft-teal transition-colors">{service.title}</h2>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-8 text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Need Custom Services?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Don't see what you're looking for? Contact our team for custom solutions tailored to your specific needs.
          </p>
          <Link 
            to="/contact" 
            className="bg-craft-teal hover:bg-craft-teal/90 text-white px-8 py-3 rounded-md inline-block transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
