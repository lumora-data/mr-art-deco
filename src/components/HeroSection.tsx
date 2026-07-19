"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Shield, Sparkles, Wallet, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data';
import WhatsAppButton from './WhatsAppButton';
import { motion } from 'motion/react';
import type { Variants } from 'motion/react';

export default function HeroSection() {
  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const servicesSection = document.getElementById('nos-services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 130
      }
    }
  };

  return (
    <section 
      id="hero-banner-section" 
      className="relative min-h-[85vh] flex items-center justify-center bg-[#11100F] text-white py-20 px-4 overflow-hidden"
    >
      {/* Background Image with elegant dark-gold gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/installation-lustres-05.jpeg"
          alt="Art Deco Interior with elegant warm lighting"
          className="w-full h-full object-cover object-center opacity-45 transform scale-105 animate-subtle-zoom"
        />
        {/* Deep vignette, gradient, and gold ambient glows */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#11100F] via-[#11100F]/85 to-[#11100F]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#11100F]/90 via-[#11100F]/60 to-transparent" />
        
        {/* Subtle decorative circles */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full border border-[#C9972B]/5 pointer-events-none" />
        <div className="absolute bottom-1/3 left-10 w-72 h-72 rounded-full border border-[#C9972B]/5 pointer-events-none" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center text-center px-4 md:px-6"
      >
        {/* Golden Pre-title */}
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-2 bg-[#C9972B]/10 border border-[#C9972B]/30 px-4 py-1.5 rounded-full mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#F2CE6A]" />
          <span className="text-xs md:text-sm font-semibold text-[#F2CE6A] uppercase tracking-[0.2em]">
            Électricité • Rénovation • Décoration intérieure
          </span>
        </motion.div>

        {/* Grand Title */}
        <motion.h1 
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl leading-[1.15] mb-6"
        >
          Transformons vos espaces avec <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2CE6A] via-[#C9972B] to-[#FAF8F3]">professionnalisme</span>
        </motion.h1>

        {/* Intro text */}
        <motion.p 
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-[#FAF8F3]/85 max-w-3xl leading-relaxed mb-10"
        >
          <strong className="text-[#F2CE6A] font-medium">{COMPANY_INFO.name}</strong> accompagne les particuliers, les entreprises et les commerces dans leurs projets d’électricité bâtiment, de rénovation complète et de décoration intérieure à Douala.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center mb-16"
        >
          <WhatsAppButton 
            text="Demander un devis" 
            variant="gold" 
            className="w-full sm:w-64 text-sm tracking-wider uppercase py-4"
          />
          <button
            id="hero-services-scroll"
            onClick={scrollToServices}
            className="w-full sm:w-64 bg-transparent hover:bg-white/5 text-[#FAF8F3] hover:text-white border border-[#E5DED3]/30 hover:border-white font-semibold text-sm tracking-wider uppercase px-6 py-4 rounded transition-all duration-300 cursor-pointer"
          >
            Découvrir nos services
          </button>
        </motion.div>

        {/* Trust elements */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl border-t border-[#FAF8F3]/10 pt-8 mt-4 text-left"
        >
          <div className="flex items-start gap-3">
            <div className="bg-[#C9972B]/15 p-2 rounded-md text-[#F2CE6A] flex-shrink-0 mt-0.5">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-[#FAF8F3] text-sm">Intervention à Douala</h3>
              <p className="text-[#FAF8F3]/60 text-xs mt-0.5">Disponibilité locale et réactivité garantie.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-[#C9972B]/15 p-2 rounded-md text-[#F2CE6A] flex-shrink-0 mt-0.5">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-[#FAF8F3] text-sm">Accompagnement personnalisé</h3>
              <p className="text-[#FAF8F3]/60 text-xs mt-0.5">Chaque projet est traité avec attention.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-[#C9972B]/15 p-2 rounded-md text-[#F2CE6A] flex-shrink-0 mt-0.5">
              <Wallet className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-[#FAF8F3] text-sm">Travaux adaptés à votre budget</h3>
              <p className="text-[#FAF8F3]/60 text-xs mt-0.5">Optimisation des coûts sans compromis sur la qualité.</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
