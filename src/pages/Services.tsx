
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-craft-teal mb-6">Our Services</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Crafting Workshops</h2>
            <p className="text-muted-foreground">
              Join our interactive online and in-person crafting workshops.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Custom Patterns</h2>
            <p className="text-muted-foreground">
              Explore our unique collection of crafting patterns.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
