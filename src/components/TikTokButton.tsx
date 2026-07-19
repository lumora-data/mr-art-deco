/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TikTokIcon } from './SocialIcons';
import { COMPANY_INFO } from '../data';

interface TikTokButtonProps {
  text?: string;
  className?: string;
  variant?: 'gold' | 'dark' | 'outline' | 'black';
}

export default function TikTokButton({ 
  text = "Suivre sur TikTok", 
  className = "", 
  variant = "outline" 
}: TikTokButtonProps) {
  
  let btnStyle = "";
  switch(variant) {
    case 'gold':
      btnStyle = "bg-[#C9972B] hover:bg-[#E0B64B] text-[#11100F] font-semibold";
      break;
    case 'dark':
      btnStyle = "bg-[#1C1A18] hover:bg-[#292521] text-[#FAF8F3] border border-[#C9972B]/30 font-semibold";
      break;
    case 'black':
      btnStyle = "bg-black hover:bg-[#11100F] text-white font-semibold";
      break;
    case 'outline':
      btnStyle = "border border-[#C9972B]/50 text-[#C9972B] hover:bg-[#C9972B] hover:text-[#11100F] font-semibold";
      break;
  }

  return (
    <a
      id="tiktok-btn-link"
      href={COMPANY_INFO.tiktok}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 ${btnStyle} ${className}`}
    >
      <TikTokIcon className="w-4 h-4 flex-shrink-0" />
      <span>{text}</span>
    </a>
  );
}
