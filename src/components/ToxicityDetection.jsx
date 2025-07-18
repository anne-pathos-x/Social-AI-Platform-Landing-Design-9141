import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAlertTriangle, FiShield, FiEye, FiZap } = FiIcons;

const ToxicityDetection = () => {
  const toxicPatterns = [
    {
      pattern: "Love Bombing",
      description: "Excessive attention and affection to manipulate",
      indicator: "95% confidence",
      color: "text-red-400"
    },
    {
      pattern: "Gaslighting",
      description: "Making you question your reality and memories",
      indicator: "87% confidence",
      color: "text-orange-400"
    },
    {
      pattern: "Triangulation",
      description: "Using third parties to create jealousy or insecurity",
      indicator: "92% confidence",
      color: "text-yellow-400"
    },
    {
      pattern: "Silent Treatment",
      description: "Emotional withdrawal as punishment",
      indicator: "89% confidence",
      color: "text-purple-400"
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="p-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl"
            >
              <SafeIcon icon={FiAlertTriangle} className="text-3xl text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Toxicity Radar
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our AI identifies 50+ manipulation tactics and toxic patterns before they cause lasting damage
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Detection interface mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-gray-400 text-sm ml-4">Real-time Analysis</span>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/30">
                  <div className="flex items-center gap-3 mb-3">
                    <SafeIcon icon={FiEye} className="text-blue-400" />
                    <span className="text-white font-medium">Analyzing message...</span>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-3 text-gray-300 text-sm italic">
                    "You're being too sensitive. I never said that. You're imagining things again."
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-xl p-4 border border-red-500/30"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <SafeIcon icon={FiAlertTriangle} className="text-red-400" />
                    <span className="text-red-400 font-medium">Toxicity Detected</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Gaslighting Pattern:</span>
                      <span className="text-red-400 font-medium">87% confidence</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Reality Distortion:</span>
                      <span className="text-orange-400 font-medium">92% confidence</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-4 border border-blue-500/30"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <SafeIcon icon={FiShield} className="text-blue-400" />
                    <span className="text-blue-400 font-medium">Protective Response</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    "Trust your memory. Document interactions. Consider setting boundaries."
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Toxicity patterns list */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Common Toxic Patterns We Detect
              </h3>
              <p className="text-gray-400">
                Our AI recognizes subtle manipulation tactics that are often missed by humans
              </p>
            </div>

            {toxicPatterns.map((pattern, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-red-500/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-semibold text-white">
                    {pattern.pattern}
                  </h4>
                  <span className={`text-sm font-medium ${pattern.color} bg-slate-900/50 px-3 py-1 rounded-full`}>
                    {pattern.indicator}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {pattern.description}
                </p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-500/30"
            >
              <div className="flex items-center gap-3 mb-3">
                <SafeIcon icon={FiZap} className="text-green-400" />
                <span className="text-green-400 font-medium">+ 46 More Patterns</span>
              </div>
              <p className="text-gray-300 text-sm">
                Including narcissistic rage, hoovering, projection, DARVO, and many more sophisticated manipulation tactics.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ToxicityDetection;