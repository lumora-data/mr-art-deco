/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Award, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data';

export default function AboutPreview() {
  return (
    <section id="about-preview-section" className="py-20 bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Photos with gold framing & badge */}
          <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
            {/* Main large image */}
            <div className="relative w-full max-w-md h-[420px] rounded-lg overflow-hidden border border-[#C9972B]/20 shadow-xl z-10">
              <img
                src="/images/renovation-interieur-02.jpeg"
                alt="Chantier de décoration d'intérieur et luminaires Mr. Light Art Deco"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Overlapping secondary image */}
            <div className="absolute bottom-[-30px] right-4 lg:right-[-10px] w-48 h-48 rounded-lg overflow-hidden border-4 border-[#FAF8F3] shadow-2xl z-20 hidden sm:block">
              <img
                src="/images/installation-electrique-01.jpeg"
                alt="Travaux d'électricité et rénovation complète à Douala"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>

            {/* Gold border decorative frame behind the main image */}
            <div className="absolute top-[-15px] left-[-15px] w-full max-w-md h-[420px] border-2 border-[#C9972B] rounded-lg pointer-events-none z-0 opacity-40 translate-x-3 translate-y-3" />

            {/* Float badge */}
            <div className="absolute top-6 left-6 z-25 bg-[#11100F] border border-[#C9972B]/50 px-4 py-2.5 rounded shadow-lg max-w-[210px]">
              <p className="text-[10px] font-bold tracking-[0.15em] text-[#C9972B] uppercase">Mr. Light Art Deco</p>
              <p className="text-xs text-[#FAF8F3]/90 font-medium mt-1">Électricité, rénovation et décoration à Douala</p>
            </div>
          </div>

          {/* Column 2: Presentation Text */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            {/* Little title */}
            <span className="text-xs font-bold text-[#C9972B] uppercase tracking-[0.2em] mb-3">
              À propos de nous
            </span>

            {/* Main title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#211F1C] tracking-tight leading-tight mb-6">
              Des espaces sûrs, fonctionnels et esthétiques
            </h2>

            {/* Content text */}
            <div className="text-[#69635C] space-y-4 text-sm sm:text-base leading-relaxed mb-8">
              <p>
                <strong className="text-[#211F1C]">{COMPANY_INFO.name}</strong> est une entreprise basée à Douala, spécialisée dans l’électricité bâtiment, la rénovation complète et la décoration intérieure.
              </p>
              <p>
                Nous accompagnons les particuliers, les entreprises et les commerces qui souhaitent construire, rénover, moderniser ou embellir leurs espaces.
              </p>
              <p>
                Notre approche repose sur une idée simple : un bâtiment ne doit pas seulement être beau. Il doit également être sécurisé, confortable, fonctionnel et adapté aux besoins de ceux qui l’utilisent.
              </p>
              <p className="border-l-2 border-[#C9972B] pl-4 italic text-[#211F1C]/90 font-medium">
                L’entreprise est dirigée par <span className="text-[#C9972B] font-bold">{COMPANY_INFO.ceo}</span>, CEO de {COMPANY_INFO.name}.
              </p>
            </div>

            {/* Highlights benefits */}
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-[#C9972B]/10 p-2.5 rounded-md text-[#C9972B] flex-shrink-0 mt-1">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#211F1C] text-sm sm:text-base">Accompagnement personnalisé</h4>
                  <p className="text-[#69635C] text-xs sm:text-sm mt-1">Nous prenons le temps de comprendre chaque projet avant de proposer une solution.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#C9972B]/10 p-2.5 rounded-md text-[#C9972B] flex-shrink-0 mt-1">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#211F1C] text-sm sm:text-base">Attention portée aux finitions</h4>
                  <p className="text-[#69635C] text-xs sm:text-sm mt-1">Nous accordons de l’importance aux détails, à l’éclairage et à la qualité du résultat final.</p>
                </div>
              </div>
            </div>

            {/* Button link */}
            <Link
              id="about-preview-cta-link"
              href="/a-propos"
              className="inline-flex items-center gap-2.5 bg-[#11100F] hover:bg-[#C9972B] text-[#FAF8F3] hover:text-[#11100F] font-bold text-xs tracking-wider uppercase px-6 py-3.5 rounded transition-all duration-300 self-start group"
            >
              <span>Découvrir notre entreprise</span>
              <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}
