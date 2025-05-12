
import React from 'react';
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const HeroSection = () => {
  return (
    <section className="bg-craft-cream py-10 md:py-16">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 space-y-4 md:pr-8">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            <span className="heading-script mb-2 block">Crafting Dreams</span>
            <span className="text-foreground">One Stitch at a Time</span>
          </h1>
          <p className="text-muted-foreground text-lg mt-4">
            Discover premium quality fabrics, patterns, and tools for all your creative sewing and crafting projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="btn-primary md:text-lg">Shop Collection</Button>
            <Button variant="outline" className="border-craft-teal text-craft-teal hover:bg-craft-teal/10 md:text-lg">
              Explore Patterns
            </Button>
          </div>
          <div className="pt-6 flex items-center gap-6">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-10 w-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center overflow-hidden text-xs font-medium">
                  {`U${i}`}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-bold text-foreground">1,000+</span> happy crafters this month
            </p>
          </div>
        </div>
        
        {/* Right Image */}
        <div className="w-full md:w-1/2 relative">
          <div className="aspect-[4/3] md:aspect-square rounded-xl bg-gradient-to-br from-craft-teal/20 to-craft-sage/30 flex items-center justify-center p-4">
            <div className="relative w-full h-full flex items-center justify-center animate-float">
              <div className="absolute w-[90%] h-[90%] bg-white/60 backdrop-blur-sm rounded-xl rotate-3 shadow-xl"></div>
              <div className="bg-white rounded-xl shadow-lg p-4 w-[85%] h-[85%] -rotate-2 flex items-center justify-center overflow-hidden">
                <AspectRatio ratio={4/3} className="w-full h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Crafting supplies display" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-craft-coral/80 backdrop-blur-sm text-white text-sm font-bold py-2 px-4 rounded-full shadow-lg">
            New Collections!
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
