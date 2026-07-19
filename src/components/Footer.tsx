"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, MessageSquare, ShieldAlert } from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO } from '../data';
import { WhatsAppIcon, TikTokIcon } from './SocialIcons';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="app-main-footer" 
      className="bg-[#11100F] text-[#FAF8F3]/80 border-t border-[#C9972B]/20 pt-16 pb-8 px-4 md:px-6 relative overflow-hidden"
    >
      {/* Footer Top Decoration */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9972B]/35 to-transparent" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-[#FAF8F3]/10">
        
        {/* Column 1: Logo & Slogan */}
        <div className="space-y-4">
          <Link href="/" onClick={handleScrollToTop}>
            <Logo variant="gold" className="h-12" />
          </Link>
          <p className="text-xs sm:text-sm text-[#FAF8F3]/60 leading-relaxed pt-2">
            Électricité bâtiment, rénovation complète et décoration intérieure à Douala. Des finitions impeccables pour des espaces de prestige sécurisés.
          </p>
          <div className="pt-2 text-xs text-[#C9972B]/85 flex items-center gap-1">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Direction : {COMPANY_INFO.ceo}</span>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-[#C9972B] text-xs font-bold uppercase tracking-[0.2em] mb-5">
            Liens rapides
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link 
                href="/" 
                onClick={handleScrollToTop} 
                className="hover:text-[#C9972B] transition-colors duration-200"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link 
                href="/a-propos" 
                onClick={handleScrollToTop} 
                className="hover:text-[#C9972B] transition-colors duration-200"
              >
                À propos
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                onClick={handleScrollToTop} 
                className="hover:text-[#C9972B] transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Services List */}
        <div>
          <h3 className="text-[#C9972B] text-xs font-bold uppercase tracking-[0.2em] mb-5">
            Nos services
          </h3>
          <ul className="space-y-3 text-sm text-[#FAF8F3]/70">
            <li>
              <Link href="/contact?service=Installation%20%C3%A9lectrique" className="hover:text-[#C9972B] transition-colors duration-200">
                Électricité bâtiment
              </Link>
            </li>
            <li>
              <Link href="/contact?service=R%C3%A9novation%20compl%C3%A8te" className="hover:text-[#C9972B] transition-colors duration-200">
                Rénovation complète
              </Link>
            </li>
            <li>
              <Link href="/contact?service=D%C3%A9coration%20int%C3%A9rieure" className="hover:text-[#C9972B] transition-colors duration-200">
                Décoration intérieure
              </Link>
            </li>
            <li>
              <Link href="/contact?service=Installation%20de%20luminaires" className="hover:text-[#C9972B] transition-colors duration-200">
                Installation de luminaires
              </Link>
            </li>
            <li>
              <Link href="/contact?service=Travaux%20de%20finition" className="hover:text-[#C9972B] transition-colors duration-200">
                Travaux de finition
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contacts & Official Social Icons */}
        <div className="space-y-4">
          <h3 className="text-[#C9972B] text-xs font-bold uppercase tracking-[0.2em]">
            Contact
          </h3>
          
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#C9972B] flex-shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.location}</span>
            </li>
            
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#C9972B] flex-shrink-0" />
              <div className="flex flex-col">
                <a href={`tel:${COMPANY_INFO.phones[0].formatted}`} className="hover:text-[#C9972B] transition-colors">
                  {COMPANY_INFO.phones[0].display}
                </a>
                <a href={`tel:${COMPANY_INFO.phones[1].formatted}`} className="hover:text-[#C9972B] transition-colors">
                  {COMPANY_INFO.phones[1].display}
                </a>
              </div>
            </li>

            <li className="flex items-center gap-2.5">
              <MessageSquare className="w-4 h-4 text-[#C9972B] flex-shrink-0" />
              <a 
                href={COMPANY_INFO.tiktok} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#C9972B] transition-colors"
              >
                {COMPANY_INFO.tiktokHandle}
              </a>
            </li>
          </ul>

          {/* Social icons */}
          <div className="flex gap-3 pt-2">
            <a
              id="footer-social-whatsapp"
              href={COMPANY_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-md bg-[#FAF8F3]/5 border border-[#FAF8F3]/10 hover:border-[#C9972B] text-[#FAF8F3]/80 hover:text-[#C9972B] flex items-center justify-center transition-all duration-300"
              title="Nous joindre sur WhatsApp"
              aria-label="Nous joindre sur WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>
            <a
              id="footer-social-tiktok"
              href={COMPANY_INFO.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-md bg-[#FAF8F3]/5 border border-[#FAF8F3]/10 hover:border-[#C9972B] text-[#FAF8F3]/80 hover:text-[#C9972B] flex items-center justify-center transition-all duration-300"
              title="Nous suivre sur TikTok"
              aria-label="Nous suivre sur TikTok"
            >
              <TikTokIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Copyright bar */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF8F3]/50">
        <p>© 2026 {COMPANY_INFO.name}. Tous droits réservés.</p>
        <p className="flex gap-2">
          <span>Cameroun</span>
          <span>•</span>
          <span>CEO : <span className="text-[#C9972B] font-semibold">{COMPANY_INFO.ceo}</span></span>
        </p>
      </div>
    </footer>
  );
}
