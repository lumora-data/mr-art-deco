"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      id="back-to-top-trigger"
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-11 h-11 rounded-md bg-[#1C1A18] text-[#C9972B] border border-[#C9972B]/30 shadow-lg hover:bg-[#C9972B] hover:text-[#11100F] hover:border-[#C9972B] transition-all duration-300 transform hover:-translate-y-1"
      title="Retour en haut"
      aria-label="Retour en haut"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
