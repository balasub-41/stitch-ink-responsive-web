
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Info, 
  Phone, 
  LogIn, 
  List, 
  X, 
  FileText,
  Truck,
  PanelLeft,
  Flag,
  User 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import QuoteForm from './QuoteForm';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);

  return (
    <>
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
              <Home size={18} strokeWidth={1.5} className="text-craft-teal" />Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-craft-teal transition-colors flex items-center gap-2">
              <Info size={18} strokeWidth={1.5} className="text-craft-teal" />About Us
            </Link>
            
            {/* Services with Submenu */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-craft-teal p-0 h-auto">
                    <div className="flex items-center gap-2 text-foreground">
                      <Truck size={18} strokeWidth={1.5} className="text-craft-teal" />Services
                    </div>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-2 p-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/services"
                            className="flex items-center gap-2 w-full select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                          >
                            <PanelLeft size={16} className="text-craft-teal" />
                            <div>
                              <div className="text-sm font-medium">All Services</div>
                              <p className="text-sm text-muted-foreground">Browse all our services</p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/services/banners"
                            className="flex items-center gap-2 w-full select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                          >
                            <Flag size={16} className="text-craft-teal" />
                            <div>
                              <div className="text-sm font-medium">Banners</div>
                              <p className="text-sm text-muted-foreground">Custom vinyl banners</p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link to="/contact" className="text-foreground hover:text-craft-teal transition-colors flex items-center gap-2">
              <Phone size={18} strokeWidth={1.5} className="text-craft-teal" />Contact
            </Link>
            <Link to="/login" className="text-foreground hover:text-craft-teal transition-colors flex items-center gap-2">
              <User size={18} strokeWidth={1.5} className="text-craft-teal" />Login
            </Link>
            
            <Button 
              onClick={() => setQuoteDialogOpen(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              <FileText size={16} className="mr-2" /> Request for Quote
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button 
              onClick={() => setQuoteDialogOpen(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white mr-2"
              size="sm"
            >
              <FileText size={16} className="mr-1" /> Quote
            </Button>
            
            <button 
              className="p-2 text-foreground" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <List size={24} />}
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-50 animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link to="/" className="text-foreground hover:text-craft-teal transition-colors py-2 border-b border-gray-100 flex items-center gap-2">
                <Home size={18} strokeWidth={1.5} className="text-craft-teal" />Home
              </Link>
              <Link to="/about" className="text-foreground hover:text-craft-teal transition-colors py-2 border-b border-gray-100 flex items-center gap-2">
                <Info size={18} strokeWidth={1.5} className="text-craft-teal" />About Us
              </Link>
              <div className="py-2 border-b border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <Truck size={18} strokeWidth={1.5} className="text-craft-teal" />Services
                </div>
                <div className="pl-8 flex flex-col space-y-2 mt-2">
                  <Link to="/services" className="text-foreground hover:text-craft-teal transition-colors flex items-center gap-2">
                    <PanelLeft size={16} className="text-craft-teal" />All Services
                  </Link>
                  <Link to="/services/banners" className="text-foreground hover:text-craft-teal transition-colors flex items-center gap-2">
                    <Flag size={16} className="text-craft-teal" />Banners
                  </Link>
                </div>
              </div>
              <Link to="/contact" className="text-foreground hover:text-craft-teal transition-colors py-2 border-b border-gray-100 flex items-center gap-2">
                <Phone size={18} strokeWidth={1.5} className="text-craft-teal" />Contact
              </Link>
              <Link to="/login" className="text-foreground hover:text-craft-teal transition-colors py-2 border-b border-gray-100 flex items-center gap-2">
                <User size={18} strokeWidth={1.5} className="text-craft-teal" />Login
              </Link>
            </div>
          </div>
        )}
      </header>
      
      {/* Quote Dialog */}
      <QuoteForm open={quoteDialogOpen} onOpenChange={setQuoteDialogOpen} />
    </>
  );
};

export default Navbar;
