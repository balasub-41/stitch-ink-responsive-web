
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

type Product = {
  id: number;
  title: string;
  category: string;
  price: string;
  image: string;
  isNew?: boolean;
  isBestseller?: boolean;
};

const FeaturedProducts = () => {
  const products: Product[] = [
    { 
      id: 1, 
      title: "Industrial Embroidery Machines", 
      category: "Equipment", 
      price: "$1,299.99", 
      image: "/lovable-uploads/7bc2c3aa-e1ff-404a-a141-7d299e49b371.png", 
      isNew: true 
    },
    { 
      id: 2, 
      title: "Green Fabric Layers", 
      category: "Materials", 
      price: "$24.95", 
      image: "/lovable-uploads/fd214831-8199-4c00-98c8-d372abac4f63.png", 
      isBestseller: true 
    },
    { 
      id: 3, 
      title: "Custom Vinyl Banners", 
      category: "Print Services", 
      price: "$129.99", 
      image: "/lovable-uploads/a82809b7-21c9-4793-8c45-6be0a7ad9006.png", 
      isNew: true 
    },
    { 
      id: 4, 
      title: "Embroidery Hoop Set", 
      category: "Accessories", 
      price: "$18.50", 
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <h2 className="heading-script text-2xl mb-2">Our Collection</h2>
            <h3 className="text-3xl font-bold text-foreground">Featured Products</h3>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Button variant="link" className="text-craft-teal flex items-center group">
              View all products
              <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative bg-muted rounded-xl overflow-hidden aspect-square">
                <AspectRatio ratio={1/1}>
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </AspectRatio>
                
                {product.isNew && (
                  <span className="absolute top-3 left-3 bg-craft-coral text-white px-2 py-1 rounded-full text-xs font-medium">
                    New
                  </span>
                )}
                
                {product.isBestseller && (
                  <span className="absolute top-3 left-3 bg-craft-brown text-white px-2 py-1 rounded-full text-xs font-medium">
                    Bestseller
                  </span>
                )}
                
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button className="btn-primary translate-y-4 group-hover:translate-y-0 transition-transform">
                    Quick View
                  </Button>
                </div>
              </div>
              
              <div className="mt-4 space-y-1">
                <span className="text-sm text-muted-foreground">{product.category}</span>
                <h3 className="font-semibold text-foreground">{product.title}</h3>
                <p className="font-medium text-craft-teal">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div className="bg-gradient-to-r from-craft-teal to-craft-teal/80 rounded-xl p-8 text-white flex flex-col justify-between min-h-[300px] relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <img 
                src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Sewing patterns background" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10">
              <h3 className="font-script text-3xl mb-2">Sewing Patterns</h3>
              <p className="text-white/90 mb-4">Discover our collection of exclusive patterns for your next project.</p>
            </div>
            <Button className="bg-white text-craft-teal hover:bg-white/90 self-start relative z-10">
              Explore Patterns
            </Button>
          </div>
          
          <div className="bg-gradient-to-r from-craft-coral to-craft-coral/80 rounded-xl p-8 text-white flex flex-col justify-between min-h-[300px] relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <img 
                src="https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Workshops background" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10">
              <h3 className="font-script text-3xl mb-2">Workshops & Classes</h3>
              <p className="text-white/90 mb-4">Learn new techniques with our expert-led workshops.</p>
            </div>
            <Button className="bg-white text-craft-coral hover:bg-white/90 self-start relative z-10">
              View Schedule
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
