/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import HeroSection from '../components/HeroSection';
import SuperposedCards from '../components/SuperposedCards';
import AboutPreview from '../components/AboutPreview';
import ServiceCard from '../components/ServiceCard';
import PourquoiChoisir from '../components/PourquoiChoisir';
import ProcessSection from '../components/ProcessSection';
import ProjectGallery from '../components/ProjectGallery';
import TypesBatiments from '../components/TypesBatiments';
import TestimonialCard from '../components/TestimonialCard';
import FoireAuxQuestions from '../components/FoireAuxQuestions';
import CallToAction from '../components/CallToAction';
import { SERVICES, TESTIMONIALS } from '../data';

export default function Home() {
  return (
    <div id="page-home-root" className="bg-[#FAF8F3]">
      {/* SECTION 3: Hero Banner */}
      <HeroSection />

      {/* SECTION 4: Superposed Cards */}
      <SuperposedCards />

      {/* SECTION 5: About Presentation Preview */}
      <AboutPreview />

      {/* SECTION 7: Nos Services */}
      <section id="nos-services-section" className="py-20 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#C9972B] uppercase tracking-[0.2em]">
              Nos services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#211F1C] tracking-tight mt-3 mb-4">
              Des solutions adaptées à chaque projet
            </h2>
            <p className="text-[#69635C] text-sm sm:text-base leading-relaxed">
              Que votre besoin concerne une nouvelle construction, une rénovation ou une amélioration de votre intérieur, Mr. Light Art Deco vous accompagne avec des solutions adaptées.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: Pourquoi Nous Choisir */}
      <PourquoiChoisir />

      {/* SECTION 9: Notre Méthode de Travail */}
      <ProcessSection />

      {/* SECTION 10: Réalisations Gallery */}
      <ProjectGallery />

      {/* SECTION 11: Types de Bâtiments */}
      <TypesBatiments />

      {/* SECTION 12: Témoignages */}
      <section id="testimonials-section-home" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#C9972B] uppercase tracking-[0.2em]">
              Témoignages
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#211F1C] tracking-tight mt-3 mb-4">
              Ce que nos clients apprécient
            </h2>
            <p className="text-[#69635C] text-sm leading-relaxed">
              La transparence, le respect des normes d’électricité et l’esthétique de nos décors font notre force. Découvrez les retours d'expériences de démonstration.
            </p>
          </div>

          {/* Grid list of Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 13: Foire Aux Questions */}
      <FoireAuxQuestions />

      {/* SECTION 14: Appel À l'Action */}
      <CallToAction />
    </div>
  );
}
