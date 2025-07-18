import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiQuote } = FiIcons;

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Recently Divorced",
      content: "MindDecoder helped me recognize the gaslighting patterns I'd been experiencing for years. It gave me the confidence to trust my own reality again.",
      rating: 5,
      highlight: "Trust my own reality",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Marcus T.",
      role: "Co-Parent",
      content: "The app decoded my ex's manipulation tactics around our kids. Now I can protect them while maintaining healthy boundaries.",
      rating: 5,
      highlight: "Protect the kids",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Jennifer L.",
      role: "Corporate Manager",
      content: "Finally understood why certain colleagues made me feel crazy. The workplace toxicity detection is a game-changer for my career.",
      rating: 5,
      highlight: "Career game-changer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David R.",
      role: "Dating After 40",
      content: "Saved me from what would have been a disaster relationship. The love-bombing detection kicked in just in time.",
      rating: 5,
      highlight: "Saved from disaster",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Lisa K.",
      role: "Adult Daughter",
      content: "Helped me understand my narcissistic mother's patterns. I finally have tools to protect my mental health during family interactions.",
      rating: 5,
      highlight: "Mental health protection",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Robert H.",
      role: "Startup Founder",
      content: "The intention analysis helped me navigate investor meetings and partnerships. I can now read between the lines of business relationships.",
      rating: 5,
      highlight: "Business relationships",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
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
            Life-Changing Results
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real people, real transformations. See how MindDecoder helped them navigate toxic relationships and complex social dynamics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/30"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <SafeIcon key={i} icon={FiStar} className="text-yellow-400 text-sm fill-current" />
                  ))}
                </div>

                <div className="relative mb-4">
                  <SafeIcon icon={FiQuote} className="text-3xl text-purple-400/30 absolute -top-2 -left-2" />
                  <p className="text-gray-300 leading-relaxed pl-6">
                    {testimonial.content}
                  </p>
                </div>

                <div className="inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full px-4 py-2 border border-purple-500/30">
                  <span className="text-purple-400 text-sm font-medium">
                    {testimonial.highlight}
                  </span>
                </div>
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
              Join 50,000+ People Taking Control
            </h3>
            <p className="text-gray-300 mb-6">
              Stop being a victim of manipulation. Start understanding the psychology behind every interaction.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-400">94%</div>
                <div className="text-gray-400 text-sm">Report better relationships</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-400">87%</div>
                <div className="text-gray-400 text-sm">Avoided toxic situations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-400">91%</div>
                <div className="text-gray-400 text-sm">Improved mental health</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;