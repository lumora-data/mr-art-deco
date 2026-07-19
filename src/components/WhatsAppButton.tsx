/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { WhatsAppIcon } from './SocialIcons';
import { COMPANY_INFO } from '../data';

interface WhatsAppButtonProps {
  text?: string;
  className?: string;
  variant?: 'gold' | 'dark' | 'green' | 'outline';
}

export default function WhatsAppButton({ 
  text = "Écrire sur WhatsApp", 
  className = "", 
  variant = "gold" 
}: WhatsAppButtonProps) {
  
  let btnStyle = "";
  switch(variant) {
    case 'gold':
      btnStyle = "bg-[#C9972B] hover:bg-[#E0B64B] text-[#11100F] font-semibold shadow-lg shadow-[#C9972B]/10 hover:shadow-[#C9972B]/25";
      break;
    case 'dark':
      btnStyle = "bg-[#11100F] hover:bg-[#1C1A18] text-[#FAF8F3] border border-[#C9972B]/30 hover:border-[#C9972B] font-semibold";
      break;
    case 'green':
      btnStyle = "bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold shadow-lg shadow-[#25D366]/10";
      break;
    case 'outline':
      btnStyle = "border border-[#C9972B]/50 text-[#C9972B] hover:bg-[#C9972B] hover:text-[#11100F] font-semibold";
      break;
  }

  return (
    <a
      id="whatsapp-btn-link"
      href={COMPANY_INFO.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 ${btnStyle} ${className}`}
    >
      <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
      <span>{text}</span>
    </a>
  );
}
