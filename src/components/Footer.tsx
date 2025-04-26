
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-craft-teal text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="block mb-4">
              <img 
                src="/logo.png" 
                alt="StitchNInk Logo" 
                className="h-12 w-auto" 
              />
            </Link>
            <p className="text-white/80 mb-6">
              Your one-stop destination for premium quality sewing and crafting supplies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                <span className="sr-only">Pinterest</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
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
                <span className="text-white/80">123 Craft Street, Sewing City, SC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span className="text-white/80">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span className="text-white/80">hello@stitchnink.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <h5 className="font-medium mb-2">Business Hours:</h5>
              <p className="text-white/80">Monday-Friday: 9am - 6pm</p>
              <p className="text-white/80">Saturday: 10am - 4pm</p>
              <p className="text-white/80">Sunday: Closed</p>
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
