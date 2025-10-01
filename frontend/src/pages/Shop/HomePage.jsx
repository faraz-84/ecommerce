import React from 'react';

function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="relative bg-gradient-to-r from-primary to-secondary h-96 flex items-center justify-center rounded-lg shadow-lg mb-12">
        <img
          src="https://via.placeholder.com/1500x500/1A202C/FFFFFF?text=Conquer.+Elegance+Redefined"
          alt="Hero Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-70 rounded-lg"
        />
        <div className="relative z-10 text-center text-white p-4 bg-black bg-opacity-30 rounded-lg">
          <h1 className="text-5xl md:text-6xl font-heading font-extrabold mb-4 drop-shadow-lg text-accent">
            Conquer. <br className="md:hidden"/> Elegance Redefined.
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto mb-6">
            Discover your next favorite piece from our exclusive collection.
          </p>
          <button className="bg-accent hover:bg-yellow-400 text-primary font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            Shop Now
          </button>
        </div>
      </section>

      <section className="text-center mb-12">
        <h2 className="text-4xl font-heading font-bold text-primary mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="https://via.placeholder.com/300" alt="Product 1" className="mx-auto mb-4 rounded-md"/>
            <h3 className="text-xl font-semibold text-primary">Elegant T-Shirt</h3>
            <p className="text-gray-600 mt-2">$29.99</p>
            <button className="mt-4 bg-primary text-text-light hover:bg-secondary py-2 px-4 rounded-full transition-colors">View Details</button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="https://via.placeholder.com/300" alt="Product 2" className="mx-auto mb-4 rounded-md"/>
            <h3 className="text-xl font-semibold text-primary">Luxury Watch</h3>
            <p className="text-gray-600 mt-2">$199.00</p>
            <button className="mt-4 bg-primary text-text-light hover:bg-secondary py-2 px-4 rounded-full transition-colors">View Details</button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="https://via.placeholder.com/300" alt="Product 3" className="mx-auto mb-4 rounded-md"/>
            <h3 className="text-xl font-semibold text-primary">Stylish Sneakers</h3>
            <p className="text-gray-600 mt-2">$79.50</p>
            <button className="mt-4 bg-primary text-text-light hover:bg-secondary py-2 px-4 rounded-full transition-colors">View Details</button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="https://via.placeholder.com/300" alt="Product 4" className="mx-auto mb-4 rounded-md"/>
            <h3 className="text-xl font-semibold text-primary">Classic Jeans</h3>
            <p className="text-gray-600 mt-2">$59.00</p>
            <button className="mt-4 bg-primary text-text-light hover:bg-secondary py-2 px-4 rounded-full transition-colors">View Details</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;

