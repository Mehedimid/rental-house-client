"use client";

import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";

const AboutPage = () => {
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const themeToSet = storedTheme || (prefersDark ? "dark" : "light");

    document.documentElement.classList.toggle("dark", themeToSet === "dark");
  }, []);

  return (
    <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Discover our journey and commitment to providing the best rental solutions.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-6">BasaFinder's Journey</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            BasaFinder was established with the vision to streamline the rental process for both landlords and tenants.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            With a dedicated team and innovative technology, we aim to redefine the rental landscape.
          </p>
        </div>
      </section>

      {/* Horizontal Images */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Modern rental apartment"
            className="w-full h-64 object-cover rounded-lg shadow dark:border dark:border-gray-700"
          />
          <img
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
            alt="Happy couple in rented home"
            className="w-full h-64 object-cover rounded-lg shadow dark:border dark:border-gray-700"
          />
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
            alt="Landlord meeting with tenant"
            className="w-full h-64 object-cover rounded-lg shadow dark:border dark:border-gray-700"
          />
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Advantages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Smart Listings</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Easily list and manage your properties with our intuitive interface.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Secure Transactions</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Experience safe and reliable payment processes for all your rentals.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our team is always ready to assist you with any queries or issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "BasaFinder made finding my new apartment a breeze. Highly recommended!",
                name: "Alex Johnson",
                role: "Tenant"
              },
              {
                quote: "Listing my property was straightforward, and I found a tenant in no time.",
                name: "Maria Gomez",
                role: "Landlord"
              },
              {
                quote: "The support team was incredibly helpful throughout the process.",
                name: "Liam Smith",
                role: "Tenant"
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 p-6 shadow rounded">
                <p className="text-gray-700 dark:text-gray-300 mb-4">{item.quote}</p>
                <h4 className="font-bold">{item.name}</h4>
                <span className="text-sm text-gray-500 dark:text-gray-400">{item.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Marquee */}
      <section className="bg-gray-100 dark:bg-gray-800 py-6">
        <Marquee speed={50} gradient={false}>
          {["69524", "69525", "69526", "69527", "69528"].map((id, i) => (
            <img
              key={i}
              src={`https://cdn-icons-png.flaticon.com/512/69/${id}.png`}
              alt={`House Icon ${i + 1}`}
              className="h-12 mx-6"
            />
          ))}
        </Marquee>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-600 text-white py-16 dark:bg-blue-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-6">
            Whether you're a tenant or a landlord, BasaFinder is here to simplify your journey.
          </p>
          <a
            href="/signup"
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-100 transition dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-300"
          >
            Join BasaFinder Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
