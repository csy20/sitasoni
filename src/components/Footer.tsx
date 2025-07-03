'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-orange-500">SITASONI</h3>
            <p className="text-gray-300">
              Discover premium fashion with unbeatable prices. Your trusted destination for quality clothing and accessories.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-orange-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-gray-300 hover:text-orange-500 transition-colors">
                  My Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <a href="mailto:support@sitasoni.in" className="text-gray-300 hover:text-orange-500 transition-colors">
                  support@sitasoni.in
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <a href="tel:+917024367848" className="text-gray-300 hover:text-orange-500 transition-colors">
                  +91 7024367848
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-orange-500" />
                <a 
                  href="https://g.co/kgs/Q78UwBx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  View Location
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/sitasoni.in?igsh=MXQ0Y25sOXJ2YXd1Zg=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-orange-600 transition-colors group"
              >
                <Instagram className="w-5 h-5 group-hover:text-white" />
              </a>
              <a
                href="https://www.facebook.com/share/1ARaNmyZRu/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors group"
              >
                <Facebook className="w-5 h-5 group-hover:text-white" />
              </a>
              <a
                href="https://youtube.com/@sitasonitrend?si=gt1VUQfxfp_QCnbW"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-colors group"
              >
                <Youtube className="w-5 h-5 group-hover:text-white" />
              </a>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">Connect with us on social media for latest updates and offers!</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} SITASONI. All rights reserved. Made with ❤️ for fashion lovers.
          </p>
        </div>
      </div>
    </footer>
  );
}
