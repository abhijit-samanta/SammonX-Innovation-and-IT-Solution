import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from 'lucide-react';
import logo from "../../assets/logo/logo4.png";
import ContactModal from '../ui/ContactModal';

const Footer = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Our Works', path: '/works' },
    { name: 'Career', path: '/career' },
    { name: 'Contact', path: null, action: () => setIsContactModalOpen(true) }, // Modified this line
  ];

  const services = [
    'Web Development',
    'App Development',
    'Cloud Solutions',
    'Digital Marketing',
    'AI & ML Services',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/108991563/admin/dashboard/', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer style={{ backgroundColor: 'rgb(255,255,255)' }} className="text-gray-800 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Company Info */}
            <div className="space-y-4">
              <Link to="/" className="flex items-center">
                <img 
                  src={logo} 
                  alt="one100itsolution" 
                  className="h-12 w-32 object-contain"
                />
              </Link>
              
              <p className="text-gray-600 leading-relaxed text-sm">
                A leading software development company delivering innovative solutions that accelerate business growth and digital transformation effectively.
              </p>

              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 transform hover:scale-110 text-gray-600"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-base font-semibold text-gray-900">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    {link.action ? (
                      <button
                        onClick={link.action}
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center group text-sm"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center group text-sm"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-base font-semibold text-gray-900">Our Services</h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      to="/services"
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center group text-sm"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-base font-semibold text-gray-900">Get in Touch</h4>
              <div className="space-y-3">
                {/* Clickable Phone Number */}
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-3 h-3 text-blue-600" />
                  </div>
                  <a 
                    href="tel:+917586942431" 
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm cursor-pointer"
                  >
                    +91 7586942431
                  </a>
                </div>

                {/* Clickable Email */}
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-3 h-3 text-purple-600" />
                  </div>
                  <a 
                    href="mailto:sammonxinnovationinfo@gmail.com" 
                    className="text-gray-600 hover:text-purple-600 transition-colors duration-300 text-sm cursor-pointer"
                  >
                    sammonxinnovationinfo@gmail.com
                  </a>
                </div>

                {/* Address (Non-clickable) */}
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-gray-600 text-sm">
                    CORPORATE OFFICE:- <br/>EP BLOCK,SECTOR-V <br/>BIDHANNAGAR,KOLKATA<br />
                    WEST BENGAL,700091
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-gray-600 text-xs">
              © 2024 Sammonx innovation. All rights reserved.
            </div>
          
            <div className="flex space-x-4 text-xs">
              <Link to="https://www.falconebiz.com/company/SAMMONX-INNOVATION-AND-IT-SOLUTION-PRIVATE-LIMITED-U62011WB2025PTC283270" className="text-gray-600 hover:text-blue-600 transition-colors">
                Privacy Policy
              </Link>
              <Link to="https://drive.google.com/file/d/1fQXwoGSVQEB8O3i5dgHJoVNMekvPCxfw/view" className="text-gray-600 hover:text-blue-600 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </footer>
  );
};

export default Footer;
