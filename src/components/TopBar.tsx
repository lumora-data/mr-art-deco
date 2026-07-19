/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { WhatsAppIcon, TikTokIcon } from './SocialIcons';
import { COMPANY_INFO } from '../data';

export default function TopBar() {
  return (
    <div className="bg-[#11100F] text-[#FAF8F3]/80 border-b border-[#C9972B]/10 text-xs py-2 px-4 hidden md:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left message */}
        <p className="font-medium tracking-wide">
          Vous avez un projet à <span className="text-[#C9972B]">Douala</span> ? Contactez-nous dès aujourd’hui.
        </p>

        {/* Right info */}
        <div className="flex items-center gap-6">
          {/* Location */}
          <div className="flex items-center gap-1.5 hover:text-[#C9972B] transition-colors duration-200">
            <MapPin className="w-3.5 h-3.5 text-[#C9972B]" />
            <span>{COMPANY_INFO.location}</span>
          </div>

          {/* Phone */}
          <a 
            href={`tel:${COMPANY_INFO.phones[0].formatted}`}
            className="flex items-center gap-1.5 hover:text-[#C9972B] transition-colors duration-200 font-medium"
          >
            <Phone className="w-3.5 h-3.5 text-[#C9972B]" />
            <span>{COMPANY_INFO.phones[0].display}</span>
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-3 border-l border-[#FAF8F3]/15 pl-4">
            <a 
              href={COMPANY_INFO.tiktok} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#FAF8F3]/70 hover:text-[#C9972B] transition-colors duration-200"
              title="TikTok"
              aria-label="TikTok"
            >
              <TikTokIcon className="w-3.5 h-3.5" />
            </a>
            <a 
              href={COMPANY_INFO.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#FAF8F3]/70 hover:text-[#C9972B] transition-colors duration-200"
              title="WhatsApp"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
