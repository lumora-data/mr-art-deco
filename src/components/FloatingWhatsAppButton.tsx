"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { WhatsAppIcon } from './SocialIcons';
import { COMPANY_INFO } from '../data';

export default function FloatingWhatsAppButton() {
  const [visible, setVisible] = useState(true);

  return (
    <a
      id="floating-whatsapp-trigger"
      href={COMPANY_INFO.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300 hover:scale-110 group cursor-pointer"
      title="Écrire sur WhatsApp"
      aria-label="Écrire sur WhatsApp"
    >
      {/* Wave Ring Animation */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping group-hover:animate-none scale-105 z-[-1]" />
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
}
