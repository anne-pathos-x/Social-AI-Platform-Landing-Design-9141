import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiUsers, FiHome, FiBriefcase, FiMessageCircle } = FiIcons;

const UseCases = () => {
  const [activeCase, setActiveCase] = useState(0);

  const useCases = [
    {
      icon: FiHeart,
      title: "Dating & Romance",
      description: "Navigate the complex world of modern dating",
      details: [
        "Detect genuine interest vs. surface-level attraction",
        "Identify love-bombing and manipulation tactics",
        "Understand attachment styles and compatibility",
        "Recognize red flags before emotional investment"
      ],
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-900/20 to-rose-900/20"
    },
    {
      icon: FiUsers,
      title: "Co-Parenting",
      description: "Maintain healthy boundaries for your children",
      details: [
        "Decode passive-aggressive communication patterns",
        "Identify manipulation tactics affecting children",
        "Understand underlying motivations in conflicts",
        "Protect family dynamics from toxic influences"
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-900/20 to-cyan-900/20"
    },
    {
      icon: FiHome,
      title: "Family Dynamics",
      description: "Understand complex adult family relationships",
      details: [
        "Navigate narcissistic family members",
        "Decode generational trauma patterns",
        "Identify emotional manipulation in family settings",
        "Understand boundary violations and guilt tactics"
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-900/20 to-emerald-900/20"
    },
    {
      icon: FiBriefcase,
      title: "Workplace Toxicity",
      description: "Survive and thrive in challenging work environments",
      details: [
        "Identify workplace bullying and gaslighting",
        "Decode office politics and hidden agendas",
        "Understand power dynamics and manipulation",
        "Protect your career from toxic colleagues"
      ],
      color: "from-purple-500 to-violet-500",
      bgColor: "from-purple-900/20 to-violet-900/20"
    },
    {
      icon: FiMessageCircle,
      title: "Social Interactions",
      description: "Master the art of reading people",
      details: [
        "Understand social hierarchies and group dynamics",
        "Detect fake friendships and social climbing",
        "Identify emotional vampires and energy drains",
        "Navigate complex social situations with confidence"
      ],
      color: "from-orange-500 to-yellow-500",
      bgColor: "from-orange-900/20 to-yellow-900/20"
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
            Decode Every Relationship
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From dating disasters to workplace drama—we help you navigate the spectrum of adult life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Use case selector */}
          <div className="space-y-4">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className={`cursor-pointer transition-all duration-300 ${
                  activeCase === index ? 'opacity-100' : 'opacity-70 hover:opacity-90'
                }`}
                onClick={() => setActiveCase(index)}
              >
                <div className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                  activeCase === index
                    ? `bg-gradient-to-r ${useCase.bgColor} border-transparent`
                    : 'bg-slate-800/30 border-slate-700/50 hover:border-slate-600/50'
                }`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center`}>
                      <SafeIcon icon={useCase.icon} className="text-xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {useCase.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active use case details */}
          <motion.div
            key={activeCase}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${useCases[activeCase].color} flex items-center justify-center`}>
                <SafeIcon icon={useCases[activeCase].icon} className="text-2xl text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {useCases[activeCase].title}
                </h3>
                <p className="text-gray-400">
                  {useCases[activeCase].description}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {useCases[activeCase].details.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${useCases[activeCase].color} mt-2 flex-shrink-0`} />
                  <p className="text-gray-300 leading-relaxed">
                    {detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;