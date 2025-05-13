
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GoogleMap from '../components/GoogleMap';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted', formData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-craft-teal mb-6">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          <div>
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold text-craft-teal mb-4">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
                <Input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
                <Textarea 
                  name="message" 
                  placeholder="Your Message" 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  className="min-h-[150px]"
                />
                <Button type="submit" className="btn-primary w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
          
          <div>
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold text-craft-teal mb-4">Contact Information</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin size={20} className="mr-3 mt-1 text-craft-teal flex-shrink-0" />
                  <div>
                    <span className="font-medium block">Address:</span>
                    <span className="text-gray-600">
                      Stitch N Ink<br />
                      763 Mabury Road #10<br />
                      San Jose, CA 95133
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone size={20} className="mr-3 mt-1 text-craft-teal flex-shrink-0" />
                  <div>
                    <span className="font-medium block">Phone:</span>
                    <span className="text-gray-600">
                      Text Us: 408-441-0188<br />
                      Se habla español
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail size={20} className="mr-3 mt-1 text-craft-teal flex-shrink-0" />
                  <div>
                    <span className="font-medium block">Email:</span>
                    <span className="text-gray-600">orders@stitchnink.com</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock size={20} className="mr-3 mt-1 text-craft-teal flex-shrink-0" />
                  <div>
                    <span className="font-medium block">Business Hours:</span>
                    <span className="text-gray-600">
                      Monday - Friday: 7:00AM - 3:30PM<br />
                      Closed Weekends and all major holidays.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-craft-teal mb-4">Our Location</h2>
          <GoogleMap />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
