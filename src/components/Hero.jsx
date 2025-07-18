import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiBrain, FiEye, FiShield, FiArrowRight } = FiIcons;

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Neural network visualization */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.circle
              key={i}
              cx={`${Math.random() * 100}%`}
              cy={`${Math.random() * 100}%`}
              r="2"
              fill="white"
              animate={{
                opacity: [0.1, 0.5, 0.1],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 4 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            >
              <SafeIcon icon={FiBrain} className="text-2xl text-white" />
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              MindDecoder
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            The first AI that reads between the lines of human behavior. 
            Decode mental models, intentions, and toxicity across all your relationships.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
            <SafeIcon icon={FiEye} className="text-3xl text-purple-400 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-white mb-2">Mental Model Detection</h3>
            <p className="text-gray-400 text-sm">Understand how people really think and make decisions</p>
          </div>
          
          <div className="bg-gradient-to-br from-pink-900/50 to-indigo-900/30 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/20">
            <SafeIcon icon={FiBrain} className="text-3xl text-pink-400 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-white mb-2">Intention Analysis</h3>
            <p className="text-gray-400 text-sm">Reveal the true motivations behind words and actions</p>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/30 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/20">
            <SafeIcon icon={FiShield} className="text-3xl text-indigo-400 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-white mb-2">Toxicity Shield</h3>
            <p className="text-gray-400 text-sm">Protect yourself from manipulation and toxic patterns</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-2"
          >
            Start Decoding Now
            <SafeIcon icon={FiArrowRight} className="text-lg" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-purple-500 rounded-full text-purple-400 font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300"
          >
            Watch Demo
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm mb-4">Trusted by over 50,000 people navigating complex relationships</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="text-2xl">★★★★★</div>
            <div className="text-sm text-gray-400">4.9/5 on all platforms</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;