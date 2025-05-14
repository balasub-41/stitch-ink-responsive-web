
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const BannersService = () => {
  const bannerProducts = [
    {
      id: 1,
      name: "A-Frame Sidewalk Sign",
      image: "/lovable-uploads/ee56e230-bb09-4a6f-ad2f-b001ab07922a.png",
      description: "Portable double-sided sign perfect for storefronts and sidewalk advertising"
    },
    {
      id: 2,
      name: "Table Throw",
      image: "/lovable-uploads/aa0ca0f5-38f2-4e86-9c81-533c268d5a22.png",
      description: "Custom printed table covers for trade shows and events"
    },
    {
      id: 3,
      name: "Pop-Up Tent",
      image: "/lovable-uploads/067d31b2-0673-49b1-adf4-a1d716ca9fa8.png",
      description: "Branded canopy tents for outdoor events and promotions"
    },
    {
      id: 4,
      name: "Feather Flag",
      image: "/lovable-uploads/1e40db8b-35de-4b00-91cd-9b8030992b3d.png",
      description: "Attention-grabbing vertical flags for high visibility"
    },
    {
      id: 5,
      name: "Retractable Banner",
      image: "/lovable-uploads/e260a03a-8be7-4992-ba9a-82366a04a19d.png",
      description: "Portable roll-up banners for indoor promotions"
    },
    {
      id: 6,
      name: "Mesh Fence Banner",
      image: "/lovable-uploads/f22d78a6-005c-4d7c-ab95-20e7faab29e9.png",
      description: "Durable outdoor banners for fences and construction sites"
    },
    {
      id: 7,
      name: "Pole Banner",
      image: "/lovable-uploads/e88c29f2-83f1-45ba-b5de-fd39afd80dd8.png",
      description: "Street pole banners for community events and promotions"
    },
    {
      id: 8,
      name: "Vinyl Banner",
      image: "/lovable-uploads/acd98d6a-04e0-4a75-af46-cbbb1458d56d.png",
      description: "Large format banners for maximum visibility and impact"
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Banner Products Gallery */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-craft-teal">Our Banner Products</h2>
            <p className="text-lg text-muted-foreground mt-3 max-w-3xl mx-auto">
              Explore our wide range of banner products, perfect for any promotional need.
              From outdoor displays to trade show materials, we have the right solution for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bannerProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden transition-all hover:shadow-lg">
                <div className="p-2">
                  <AspectRatio ratio={1/1} className="bg-gray-100 rounded-md overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain p-2"
                    />
                  </AspectRatio>
                </div>
                <CardContent className="pt-4">
                  <h3 className="text-lg font-semibold text-craft-teal">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
          
        {/* CTA Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Order Your Custom Banner?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your custom banner needs. Our design team can help bring your vision to life
              with professional designs and high-quality production.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-craft-teal hover:bg-craft-teal/90 text-white px-8 py-3 rounded-md inline-block transition-colors flex items-center"
              >
                Request a Quote <ArrowRight size={16} className="ml-2" />
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
