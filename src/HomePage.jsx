// pages/HomePage.js
import React from "react";
import { Link } from "react-router-dom";
import HeroCarousel from "./components/HeroCarousel";
import CalculatorFAB from "./components/CalculatorFAB";

const HomePage = () => {
  return (
    <div>
      <HeroCarousel />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Loan Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Home Loan Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="../public/images/homeLoan.png"
                alt="Home Loan"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Home Loan</h3>
                <p className="text-gray-600 mb-4">
                  Make your dream home a reality with our competitive home loan
                  packages.
                </p>
                <Link
                  to="/home-loan"
                  className="block text-center py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Gold Loan Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="../public/images/goldLoan.png"
                alt="Gold Loan"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Gold Loan</h3>
                <p className="text-gray-600 mb-4">
                  Get instant liquidity against your gold assets with minimal
                  documentation.
                </p>
                <Link
                  to="/gold-loan"
                  className="block text-center py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Car Loan Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="../public/images/carLoan.png"
                alt="Car Loan"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Car Loan</h3>
                <p className="text-gray-600 mb-4">
                  Drive your dream car today with our flexible car financing
                  options.
                </p>
                <Link
                  to="/car-loan"
                  className="block text-center py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Quick Approval</h3>
              <p className="text-gray-600">
                Get your loan approved within 24-48 hours
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Low Interest Rates</h3>
              <p className="text-gray-600">
                Competitive interest rates tailored to your needs
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Minimal Documentation
              </h3>
              <p className="text-gray-600">
                Simple paperwork with digital application process
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Dedicated Support</h3>
              <p className="text-gray-600">
                Personal relationship manager for every customer
              </p>
            </div>
          </div>
        </div>
      </section>

      <CalculatorFAB />
    </div>
  );
};

export default HomePage;
