import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import UseCases from '../components/UseCases';
import ToxicityDetection from '../components/ToxicityDetection';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Hero />
      <Features />
      <UseCases />
      <ToxicityDetection />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
};

export default LandingPage;