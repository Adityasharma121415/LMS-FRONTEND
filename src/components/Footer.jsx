import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">FinancePro Loans</h3>
            <p className="text-gray-300 mb-4">
              We provide quick and hassle-free loans to help you achieve your
              dreams.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/calculator"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Loan Calculator
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Loan Types */}
          <div>
            <h3 className="text-xl font-bold mb-4">Loan Types</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/home-loan"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Home Loan
                </a>
              </li>
              <li>
                <a
                  href="/gold-loan"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Gold Loan
                </a>
              </li>
              <li>
                <a
                  href="/car-loan"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Car Loan
                </a>
              </li>
              <li>
                <a
                  href="/personal-loan"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Personal Loan
                </a>
              </li>
              <li>
                <a
                  href="/business-loan"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Business Loan
                </a>
              </li>
              <li>
                <a
                  href="/education-loan"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Education Loan
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin
                  className="mt-1 flex-shrink-0 text-gray-300"
                  size={18}
                />
                <p className="text-gray-300">
                  123 Finance Street, Banking District
                  <br />
                  New York, NY 10001
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="flex-shrink-0 text-gray-300" size={18} />
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="flex-shrink-0 text-gray-300" size={18} />
                <p className="text-gray-300">contact@financepro.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 mt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 mb-4 md:mb-0">
              &copy; {currentYear} FinancePro Loans. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="/terms"
                className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="/privacy"
                className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="/cookies"
                className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
