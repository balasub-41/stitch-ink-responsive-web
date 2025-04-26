
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-gradient-to-r from-craft-teal/10 to-craft-sage/20 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-script text-2xl mb-2">Stay Connected</h2>
            <h3 className="text-3xl font-bold text-foreground">Join Our Community</h3>
            <p className="text-muted-foreground mt-4">
              Subscribe to our newsletter for exclusive offers, crafting tips, and early access to new products.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white border-craft-teal/20 focus:border-craft-teal" 
              />
              <Button className="btn-primary whitespace-nowrap">
                Subscribe
              </Button>
            </div>
            
            <div className="mt-6 text-sm text-muted-foreground">
              <div className="flex items-center justify-center gap-2">
                <Check size={16} className="text-craft-teal" />
                <span>We respect your privacy. Unsubscribe anytime.</span>
              </div>
            </div>
            
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <h4 className="text-3xl font-bold text-craft-teal">12k+</h4>
                <p className="text-sm text-muted-foreground">Community Members</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold text-craft-teal">350+</h4>
                <p className="text-sm text-muted-foreground">Product Variants</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold text-craft-teal">40+</h4>
                <p className="text-sm text-muted-foreground">Workshops Monthly</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold text-craft-teal">15+</h4>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
