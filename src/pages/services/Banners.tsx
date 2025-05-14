
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from "@/components/ui/hover-card";

const BannersService = () => {
  const bannerProducts = [
    {
      id: 1,
      name: "A-Frame Sidewalk Sign",
      image: "/lovable-uploads/ee56e230-bb09-4a6f-ad2f-b001ab07922a.png",
      description: "Portable double-sided sign perfect for storefronts and sidewalk advertising",
      detailImage: "/lovable-uploads/05fa6f31-91f0-40fa-a7a4-010002c822b8.png",
      details: {
        description: "This heavy-duty plastic A-frame is the perfect solution for sidewalk advertising. The frame can be filled with sand or water for greater stability. The double sided hardware includes regressed sign area that helps to protect sign faces. Up to two UV printed graphics are available at no additional cost.",
        material: "4 mil. Permanent Adhesive Vinyl",
        dimensions: {
          product: "46\"H X 25\"W x 3\"D",
          graphic: "24\" W x 36\"H"
        },
        weight: "19 lbs"
      }
    },
    {
      id: 2,
      name: "Table Throw",
      image: "/lovable-uploads/aa0ca0f5-38f2-4e86-9c81-533c268d5a22.png",
      description: "Custom printed table covers for trade shows and events",
      detailImage: "/lovable-uploads/b80cc396-2646-4e3e-be3b-d126458c1cf8.png",
      details: {
        description: "Our standard 4 sided table cover is a great table topper for trade shows, exhibitions, and any presentations. Our table covers are dye sublimated and are 100% washable. This table cover is made of 8.8 oz. polyester table fabric with rounded corners and hangs approximately 2\" above the floor.",
        features: ["High resolution full color digitally printed at 720 x 720", "Dye-sublimation", "Scratch resistant", "Washable"],
        material: "8.8 oz. Polyester Table Fabric",
        size: {
          template: "127.51\" x 85.01\"",
          finished: "126\" x 83.5\""
        },
        weight: "6.1 lbs"
      }
    },
    {
      id: 3,
      name: "Pop-Up Tent",
      image: "/lovable-uploads/067d31b2-0673-49b1-adf4-a1d716ca9fa8.png",
      description: "Branded canopy tents for outdoor events and promotions",
      detailImage: "/lovable-uploads/27e28565-6394-4f80-a8a7-28bd8cfc47cb.png",
      details: {
        description: "Just in time for summer, the 10 foot Event Tent is the next level in outdoor advertising. Achieve 360 degrees of branding with a custom full fabric dye sub canopy and hardware package.",
        features: ["High resolution digitally printed at 720 x 720", "Dye-Sublimation Graphic", "Scratch Resistant", "Weather Resistant (water proof coated fabric)"],
        material: "6 oz. Tent Fabric (600×600 denier)",
        size: {
          assembled: {
            shortest: "120\"w x 120\"d x 124.5\"h",
            tallest: "120\"w x 120\"d x 137\"h"
          }
        },
        weight: "51 lbs (Full Tent Package)"
      }
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

  // Helper function to render product details based on product type
  const renderProductDetails = (product) => {
    if (!product.details) return null;

    switch (product.id) {
      case 1: // A-Frame
        return (
          <div className="space-y-4">
            <img 
              src={product.detailImage} 
              alt={`${product.name} Details`} 
              className="w-full rounded-md"
            />
            <div className="space-y-3">
              <p className="text-sm">{product.details.description}</p>
              
              <div>
                <h4 className="font-medium">Graphic Material:</h4>
                <p className="text-sm">{product.details.material}</p>
              </div>
              
              <div>
                <h4 className="font-medium">Product Details:</h4>
                <ul className="list-disc pl-5 text-sm">
                  <li>Product Dimensions: {product.details.dimensions.product}</li>
                  <li>Graphic Dimensions: {product.details.dimensions.graphic}</li>
                  <li>Weight: {product.details.weight}</li>
                </ul>
              </div>
            </div>
          </div>
        );
      
      case 2: // Table Throw
        return (
          <div className="space-y-4">
            <img 
              src={product.detailImage} 
              alt={`${product.name} Details`} 
              className="w-full rounded-md"
            />
            <div className="space-y-3">
              <p className="text-sm">{product.details.description}</p>
              
              <div>
                <h4 className="font-medium">Features:</h4>
                <ul className="list-disc pl-5 text-sm">
                  {product.details.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium">Material:</h4>
                <p className="text-sm">{product.details.material}</p>
              </div>
              
              <div>
                <h4 className="font-medium">Size and Weight:</h4>
                <ul className="list-disc pl-5 text-sm">
                  <li>Template Size: {product.details.size.template}</li>
                  <li>Finished Size: {product.details.size.finished}</li>
                  <li>Weight: {product.details.weight}</li>
                </ul>
              </div>
            </div>
          </div>
        );
      
      case 3: // Pop-Up Tent
        return (
          <div className="space-y-4">
            <img 
              src={product.detailImage} 
              alt={`${product.name} Details`} 
              className="w-full rounded-md"
            />
            <div className="space-y-3">
              <p className="text-sm">{product.details.description}</p>
              
              <div>
                <h4 className="font-medium">Features:</h4>
                <ul className="list-disc pl-5 text-sm">
                  {product.details.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium">Material:</h4>
                <p className="text-sm">{product.details.material}</p>
              </div>
              
              <div>
                <h4 className="font-medium">Size and Weight:</h4>
                <ul className="list-disc pl-5 text-sm">
                  <li>Assembled (shortest): {product.details.size.assembled.shortest}</li>
                  <li>Assembled (tallest): {product.details.size.assembled.tallest}</li>
                  <li>Weight: {product.details.weight}</li>
                </ul>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };
  
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
              <div key={product.id}>
                {product.id <= 3 ? (
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Card className="overflow-hidden transition-all hover:shadow-lg cursor-pointer">
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
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 p-0 overflow-hidden">
                      {renderProductDetails(product)}
                    </HoverCardContent>
                  </HoverCard>
                ) : (
                  <Card className="overflow-hidden transition-all hover:shadow-lg">
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
                )}
              </div>
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
