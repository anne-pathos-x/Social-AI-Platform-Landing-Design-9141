import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheck, FiZap, FiShield, FiCrown } = FiIcons;

const Pricing = () => {
  const plans = [
    {
      name: "Decoder",
      price: "$29",
      period: "/month",
      description: "Perfect for personal relationship insights",
      features: [
        "Real-time text analysis",
        "Basic toxicity detection",
        "Mental model insights",
        "5 relationship profiles",
        "Email support"
      ],
      icon: FiZap,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-900/20 to-cyan-900/20",
      popular: false
    },
    {
      name: "Mind Reader",
      price: "$59",
      period: "/month",
      description: "Advanced psychology analysis for complex situations",
      features: [
        "Everything in Decoder",
        "Voice pattern analysis",
        "Advanced manipulation detection",
        "Unlimited relationship profiles",
        "Pattern history tracking",
        "Priority support",
        "Relationship coaching tips"
      ],
      icon: FiShield,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-900/20 to-pink-900/20",
      popular: true
    },
    {
      name: "Psychologist",
      price: "$99",
      period: "/month",
      description: "Professional-grade analysis for high-stakes relationships",
      features: [
        "Everything in Mind Reader",
        "Multi-modal analysis (text, voice, video)",
        "Predictive behavior modeling",
        "Custom alert systems",
        "Export detailed reports",
        "1-on-1 expert consultations",
        "Priority feature requests"
      ],
      icon: FiCrown,
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-900/20 to-orange-900/20",
      popular: false
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
            Invest in Your Mental Health
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the level of insight that matches your needs. All plans include a 14-day money-back guarantee.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative group ${plan.popular ? 'scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 h-full ${
                plan.popular 
                  ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20' 
                  : 'border-slate-700/50 hover:border-purple-500/30'
              }`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center`}>
                    <SafeIcon icon={plan.icon} className="text-xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    <p className="text-gray-400 text-sm">{plan.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <SafeIcon icon={FiCheck} className="text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-purple-500/25'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  Start {plan.name} Plan
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why Choose MindDecoder?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">14 Days</div>
                <div className="text-gray-400">Money-back guarantee</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-400 mb-2">50+</div>
                <div className="text-gray-400">Toxic patterns detected</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-400 mb-2">24/7</div>
                <div className="text-gray-400">Real-time protection</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;