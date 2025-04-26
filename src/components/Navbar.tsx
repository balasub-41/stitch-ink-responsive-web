
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, Search, ShoppingCart, User, X, Home, Info, Phone, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="StitchNInk Logo" 
            className="h-10 w-auto mr-2" 
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground hover:text-craft-teal transition-colors flex items-center gap-2">
            <Home size={16} />Home
          </Link>
          <Link to="/about" className="text-foreground hover:text-craft-teal transition-colors flex items-center gap-2">
            <Info size={16} />About Us
          </Link>
          <Link to="/services" className="text-foreground hover:text-craft-teal transition-colors flex items-center gap-2">
            <ShoppingCart size={16} />Services
          </Link>
          <Link to="/contact" className="text-foreground hover:text-craft-teal transition-colors flex items-center gap-2">
            <Phone size={16} />Contact
          </Link>
          <Link to="/login" className="text-foreground hover:text-craft-teal transition-colors flex items-center gap-2">
            <LogIn size={16} />Login
          </Link>
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
            <Link to="/" className="text-foreground hover:text-craft-teal transition-colors py-2 border-b border-gray-100 flex items-center gap-2">
              <Home size={16} />Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-craft-teal transition-colors py-2 border-b border-gray-100 flex items-center gap-2">
              <Info size={16} />About Us
            </Link>
            <Link to="/services" className="text-foreground hover:text-craft-teal transition-colors py-2 border-b border-gray-100 flex items-center gap-2">
              <ShoppingCart size={16} />Services
            </Link>
            <Link to="/contact" className="text-foreground hover:text-craft-teal transition-colors py-2 border-b border-gray-100 flex items-center gap-2">
              <Phone size={16} />Contact
            </Link>
            <Link to="/login" className="text-foreground hover:text-craft-teal transition-colors py-2 border-b border-gray-100 flex items-center gap-2">
              <LogIn size={16} />Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
