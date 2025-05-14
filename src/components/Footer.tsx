import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-craft-teal text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="block mb-4">
              <img 
                src="/lovable-uploads/2dd5b5d6-ef46-4f62-acf9-160a6a1977e4.png" 
                alt="StitchNInk Logo" 
                className="h-16 w-auto" 
              />
            </Link>
            <p className="text-white/80 mb-6">
              Your one-stop destination for premium quality sewing and crafting supplies.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/stitchninkcorp" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.instagram.com/stitchnink/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.yelp.com/biz/stitch-n-ink-san-jose-7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <span className="sr-only">Yelp</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.047 17.891l-3.073-1.871c-.8.844-.668 1.143-.431 1.555.356.621 1.099.621 2.376 1.218.359.168 1.524.716 1.561.808.27.7-.41 1.25-1.32 1.25-.154 0-.506-.107-.506-.107-1.635-.44-2.055-.923-2.915-1.333-.576-.273-.964-.435-1.276-.435-.551 0-.835.266-1.029.527-1.015 1.367-2.312.72-2.752.411-.401-.282-.466-.713-.207-.974.929-.933 2.934-1.93 2.259-3.777-.182-.495-.725-.958-1.211-1.11-1.337-.417-2.448.231-2.448.231l-2.732-4.566c-.466-.238-.572-.758-.294-1.151 1.444-2.027 4.214-1.33 4.214-1.33l4.331 1.483c.551-.275 1.086-.581 1.632-.899 1.791-1.045 3.314-2.15 3.873-2.905.34-.46.922-.52 1.357-.11.367.344.523.901.296 1.399l-.022.044c-.275.475-1.584 2.655-4.389 4.789-.5.38-.942.694-1.316.947l.265 4.797c.127.328.009 2.465-1.346 4.184-.26.334-.473.372-.626.372z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-semibold text-lg mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Fabrics</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Patterns</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Tools</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Accessories</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Gift Cards</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">
                  Stitch N Ink<br />
                  763 Mabury Road #10<br />
                  San Jose, CA 95133
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span className="text-white/80">Text Us: 408-441-0188<br />Se habla español</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span className="text-white/80">orders@stitchnink.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <h5 className="font-medium mb-2">Business Hours:</h5>
              <p className="text-white/80">Monday - Friday: 7:00AM - 3:30PM</p>
              <p className="text-white/80">Closed Weekends and all major holidays.</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 text-sm">© 2025 StitchNInk. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap items-center gap-4 text-sm">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
