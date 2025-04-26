
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, Search, ShoppingCart, User, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <span className="text-2xl md:text-3xl font-script font-bold text-craft-teal">StitchNInk</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-foreground hover:text-craft-teal transition-colors">Home</a>
          <a href="#" className="text-foreground hover:text-craft-teal transition-colors">Shop</a>
          <a href="#" className="text-foreground hover:text-craft-teal transition-colors">Patterns</a>
          <a href="#" className="text-foreground hover:text-craft-teal transition-colors">Workshops</a>
          <a href="#" className="text-foreground hover:text-craft-teal transition-colors">Blog</a>
        </div>
        
        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <button aria-label="Search" className="p-2 text-foreground hover:text-craft-teal transition-colors">
            <Search size={20} />
          </button>
          <button aria-label="Account" className="p-2 text-foreground hover:text-craft-teal transition-colors">
            <User size={20} />
          </button>
          <button aria-label="Cart" className="p-2 text-foreground hover:text-craft-teal transition-colors relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-craft-coral text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              2
            </span>
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-foreground" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-50 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#" className="text-foreground hover:text-craft-teal transition-colors py-2 border-b border-gray-100">Home</a>
            <a href="#" className="text-foreground hover:text-craft-teal transition-colors py-2 border-b border-gray-100">Shop</a>
            <a href="#" className="text-foreground hover:text-craft-teal transition-colors py-2 border-b border-gray-100">Patterns</a>
            <a href="#" className="text-foreground hover:text-craft-teal transition-colors py-2 border-b border-gray-100">Workshops</a>
            <a href="#" className="text-foreground hover:text-craft-teal transition-colors py-2 border-b border-gray-100">Blog</a>
            <div className="flex space-x-4 py-2">
              <button aria-label="Search" className="p-2 text-foreground hover:text-craft-teal transition-colors">
                <Search size={20} />
              </button>
              <button aria-label="Account" className="p-2 text-foreground hover:text-craft-teal transition-colors">
                <User size={20} />
              </button>
              <button aria-label="Cart" className="p-2 text-foreground hover:text-craft-teal transition-colors relative">
                <ShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-craft-coral text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  2
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
