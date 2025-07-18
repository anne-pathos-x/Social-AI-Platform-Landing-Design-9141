import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiZap, FiTarget, FiLayers, FiTrendingUp, FiShield, FiUsers } = FiIcons;

const Features = () => {
  const features = [
    {
      icon: FiZap,
      title: "Real-time Analysis",
      description: "Instant insights from text, voice, and behavioral patterns",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: FiTarget,
      title: "Precision Targeting",
      description: "Identify specific mental models and cognitive biases",
      color: "from-green-400 to-blue-500"
    },
    {
      icon: FiLayers,
      title: "Multi-layer Detection",
      description: "Surface, subconscious, and hidden intention analysis",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: FiTrendingUp,
      title: "Pattern Recognition",
      description: "Track behavioral trends and relationship dynamics",
      color: "from-blue-400 to-indigo-500"
    },
    {
      icon: FiShield,
      title: "Toxicity Radar",
      description: "Early warning system for manipulative behaviors",
      color: "from-red-400 to-pink-500"
    },
    {
      icon: FiUsers,
      title: "Relationship Mapping",
      description: "Visualize complex interpersonal dynamics",
      color: "from-teal-400 to-cyan-500"
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Beyond Surface Level
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our AI doesn't just analyze words—it decodes the complex psychology behind human communication
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <SafeIcon icon={feature.icon} className="text-2xl text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;