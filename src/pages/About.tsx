
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="flex items-center justify-center mb-6">
          <img 
            src="/logo.png" 
            alt="StitchNInk Logo" 
            className="h-20 w-auto mb-4" 
          />
        </div>
        <h1 className="text-4xl font-bold text-craft-teal mb-6 text-center">About StitchNInk</h1>
        <p className="text-lg text-muted-foreground mb-4 text-center">
          We are passionate crafters dedicated to bringing creativity and inspiration to the world of crafting.
        </p>
        {/* Add more content about the company */}
      </main>
      <Footer />
    </div>
  );
};

export default About;
