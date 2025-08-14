import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Logo from '@/assets/net-zero-logo.png';
import { CompanyBasicInfo } from '@/data/basicInfo';

const Footer = () => {
  const year = new Date(Date.UTC(2025, 7, 15)).getUTCFullYear();
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 flex items-center justify-center">
                       <img
                src={Logo}
                alt="Net Zero"
                className="max-w-sm w-full  "
            />
              </div>
              <div>
                <span className="font-bold text-lg">Net Zero</span>
                <div className="text-xs text-solar-300">TECHNOLOGIES</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              With our expertise in the industry and dedication to creating a greener future, 
              we're the perfect partner for businesses looking to transition to renewable energy and achieve net-zero.
            </p>
            <div className="flex space-x-4">
              <Facebook size={20} className="hover:text-solar-400 cursor-pointer" />
              <Twitter size={20} className="hover:text-solar-400 cursor-pointer" />
              <Linkedin size={20} className="hover:text-solar-400 cursor-pointer" />
              <Instagram size={20} className="hover:text-solar-400 cursor-pointer" />
            </div>
          </div>

          {/* Our Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-solar-300">Our Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-solar-400">About Us</Link></li>
              <li><Link to="/services" className="hover:text-solar-400">Our Services</Link></li>
              <li><Link to="/projects" className="hover:text-solar-400">Our Projects</Link></li>
              <li><Link to="/about/team" className="hover:text-solar-400">Our Team</Link></li>
              <li><Link to="/about/contact" className="hover:text-solar-400">Contact Us</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-solar-300">Information</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/about/documents" className="hover:text-solar-400">Trade Licence</Link></li>
              <li><Link to="/about/documents" className="hover:text-solar-400">Certificate of Incorporation</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-solar-300">Get In Touch</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-solar-400" />
                <span>{CompanyBasicInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-solar-400" />
                <span>{CompanyBasicInfo.email}</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-solar-400 mt-1" />
                <div>
                  <p>{CompanyBasicInfo.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            Copyright © {year} Net Zero Technologies Limited | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;