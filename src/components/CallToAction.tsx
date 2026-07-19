/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data';
import { WhatsAppIcon } from './SocialIcons';

export default function CallToAction() {
  return (
    <section id="cta-contact-redirect" className="py-20 bg-[#11100F] text-white relative overflow-hidden">
      {/* Decorative Gold circles/lines */}
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9972B]/10 to-transparent pointer-events-none" />
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border border-[#C9972B]/5 pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full border border-[#C9972B]/5 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center">
        {/* Decorative lamp line */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#C9972B]/10 to-[#C9972B]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#C9972B] animate-pulse shadow-lg shadow-[#C9972B]/50" />
        </div>

        <span className="text-xs font-bold text-[#C9972B] uppercase tracking-[0.25em] block mb-3">
          Prêt à démarrer ?
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-2xl mx-auto mb-4 leading-tight">
          Vous avez un projet à Douala ?
        </h2>

        <p className="text-[#FAF8F3]/80 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Parlons de vos besoins en électricité, rénovation ou décoration intérieure. Notre équipe se tient prête.
        </p>

        {/* Buttons Grid */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
          {/* WhatsApp CTA */}
          <a
            id="cta-whatsapp-link"
            href={COMPANY_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-4 px-6 rounded transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 shadow-lg shadow-[#25D366]/10"
          >
            <WhatsAppIcon className="w-5 h-5" />
            <span>Écrire sur WhatsApp</span>
          </a>

          {/* Phone Call CTA */}
          <a
            id="cta-phone-link"
            href={`tel:${COMPANY_INFO.phones[0].formatted}`}
            className="w-full bg-[#C9972B] hover:bg-[#E0B64B] text-[#11100F] font-bold py-4 px-6 rounded transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 shadow-lg shadow-[#C9972B]/10"
          >
            <Phone className="w-4 h-4" />
            <span>Appeler maintenant</span>
          </a>
        </div>

        {/* Backup contact numbers */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-xs text-[#FAF8F3]/60 font-medium">
          <span>Localisation : Douala, Cameroun</span>
          <span className="hidden sm:inline">•</span>
          <a href={`tel:${COMPANY_INFO.phones[1].formatted}`} className="hover:text-[#C9972B] transition-colors">
            Second numéro : {COMPANY_INFO.phones[1].display}
          </a>
        </div>
      </div>
    </section>
  );
}
