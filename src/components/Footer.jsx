import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiBrain, FiMail, FiTwitter, FiLinkedin, FiGithub, FiShield, FiHeart } = FiIcons;

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                <SafeIcon icon={FiBrain} className="text-xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">MindDecoder</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              The first AI platform that helps you decode human psychology, detect manipulation, and navigate complex relationships with confidence.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-purple-500/20 transition-colors"
              >
                <SafeIcon icon={FiTwitter} className="text-gray-400 hover:text-purple-400" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-purple-500/20 transition-colors"
              >
                <SafeIcon icon={FiLinkedin} className="text-gray-400 hover:text-purple-400" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-purple-500/20 transition-colors"
              >
                <SafeIcon icon={FiGithub} className="text-gray-400 hover:text-purple-400" />
              </motion.a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Integrations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Security</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>© 2024 MindDecoder. All rights reserved.</span>
              <div className="flex items-center gap-2">
                <SafeIcon icon={FiShield} className="text-green-400" />
                <span>Privacy Protected</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Made with</span>
              <SafeIcon icon={FiHeart} className="text-red-400" />
              <span>for safer relationships</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;