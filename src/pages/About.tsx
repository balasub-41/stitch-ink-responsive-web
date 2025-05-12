
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
        <p className="text-lg text-muted-foreground mb-10 text-center max-w-3xl mx-auto">
          We are passionate crafters dedicated to bringing creativity and inspiration to the world of crafting.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Our crafting team" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-2xl font-bold text-craft-teal">Our Story</h2>
            <p className="text-muted-foreground">
              Founded in 2015, StitchNInk began as a small community of passionate crafters who shared a vision of making high-quality crafting supplies accessible to everyone.
            </p>
            <p className="text-muted-foreground">
              Today, we've grown into a thriving online marketplace serving crafters across the country, but our core values remain the same: quality, creativity, and community.
            </p>
            <p className="text-muted-foreground">
              We carefully source all our materials from sustainable suppliers and work directly with artisans to bring you unique patterns and tools that inspire creativity.
            </p>
          </div>
        </div>
        
        <div className="mt-16 bg-craft-cream rounded-xl p-8 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-craft-teal mb-6 text-center">Our Mission</h2>
          <p className="text-center text-muted-foreground mb-8">
            To inspire creativity and craftsmanship by providing high-quality materials, innovative patterns, and a supportive community for crafters of all skill levels.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-xl mb-3 text-craft-teal">Quality First</h3>
              <p className="text-muted-foreground">We meticulously select every product in our collection to ensure the highest quality for your projects.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-xl mb-3 text-craft-teal">Sustainability</h3>
              <p className="text-muted-foreground">We're committed to environmentally friendly practices and sustainably sourced materials.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-xl mb-3 text-craft-teal">Community</h3>
              <p className="text-muted-foreground">We foster a supportive community where crafters can share ideas, learn, and grow together.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
