"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO } from '../data';
import { WhatsAppIcon } from './SocialIcons';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <>
      <header
        id="app-main-header"
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled 
            ? 'bg-[#11100F] shadow-lg border-b border-[#C9972B]/15 py-3' 
            : 'bg-[#11100F] border-b border-[#C9972B]/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link id="logo-header-link" href="/" className="flex-shrink-0">
            <Logo variant="gold" className="h-10 sm:h-12" />
          </Link>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
            <Link
              id="nav-home"
              href="/"
              className={`text-sm font-medium tracking-wide uppercase transition-colors duration-200 relative py-1 ${
                isActive('/') 
                  ? 'text-[#C9972B]' 
                  : 'text-[#FAF8F3]/90 hover:text-[#C9972B]'
              }`}
            >
              Accueil
              {isActive('/') && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9972B]" />
              )}
            </Link>
            <Link
              id="nav-about"
              href="/a-propos"
              className={`text-sm font-medium tracking-wide uppercase transition-colors duration-200 relative py-1 ${
                isActive('/a-propos') 
                  ? 'text-[#C9972B]' 
                  : 'text-[#FAF8F3]/90 hover:text-[#C9972B]'
              }`}
            >
              À propos
              {isActive('/a-propos') && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9972B]" />
              )}
            </Link>
            <Link
              id="nav-contact"
              href="/contact"
              className={`text-sm font-medium tracking-wide uppercase transition-colors duration-200 relative py-1 ${
                isActive('/contact') 
                  ? 'text-[#C9972B]' 
                  : 'text-[#FAF8F3]/90 hover:text-[#C9972B]'
              }`}
            >
              Contact
              {isActive('/contact') && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9972B]" />
              )}
            </Link>
          </nav>

          {/* Call to Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              id="header-cta-quote"
              href={COMPANY_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent hover:bg-[#C9972B] text-[#C9972B] hover:text-[#11100F] border border-[#C9972B] font-semibold text-xs tracking-wider uppercase px-5 py-2.5 rounded transition-all duration-300"
            >
              Demander un devis
            </a>
          </div>

          {/* Mobile Menu Trigger & WhatsApp button */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              id="mobile-header-whatsapp"
              href={COMPANY_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C9972B] hover:bg-[#E0B64B] text-[#11100F] p-2 rounded-md transition-colors"
              title="WhatsApp direct"
              aria-label="Contacter sur WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>

            <button
              id="mobile-menu-trigger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#FAF8F3] hover:text-[#C9972B] p-2"
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Navigation Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-overlay"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className="fixed inset-0 z-30 bg-[#11100F]/98 md:hidden flex flex-col justify-between pt-24 pb-8 px-6"
          >
            <div className="flex flex-col gap-6 mt-4">
              <Link
                id="mobile-nav-home"
                href="/"
                className={`text-lg font-semibold uppercase tracking-wider ${
                  isActive('/') ? 'text-[#C9972B]' : 'text-[#FAF8F3]'
                }`}
              >
                Accueil
              </Link>
              <hr className="border-[#FAF8F3]/10" />
              <Link
                id="mobile-nav-about"
                href="/a-propos"
                className={`text-lg font-semibold uppercase tracking-wider ${
                  isActive('/a-propos') ? 'text-[#C9972B]' : 'text-[#FAF8F3]'
                }`}
              >
                À propos
              </Link>
              <hr className="border-[#FAF8F3]/10" />
              <Link
                id="mobile-nav-contact"
                href="/contact"
                className={`text-lg font-semibold uppercase tracking-wider ${
                  isActive('/contact') ? 'text-[#C9972B]' : 'text-[#FAF8F3]'
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Bottom Panel Actions inside Menu */}
            <div className="flex flex-col gap-4 mt-8">
              <a
                id="mobile-nav-cta-whatsapp"
                href={COMPANY_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#C9972B] text-[#11100F] font-bold text-center py-3.5 rounded-md flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>Écrire sur WhatsApp</span>
              </a>
              <div className="flex flex-col items-center gap-2 text-center text-xs text-[#FAF8F3]/60">
                <p>Mr. Light Art Deco — Douala, Cameroun</p>
                <div className="flex gap-4 mt-1">
                  <a href={`tel:${COMPANY_INFO.phones[0].formatted}`} className="hover:text-[#C9972B]">
                    {COMPANY_INFO.phones[0].display}
                  </a>
                  <span>•</span>
                  <a href={`tel:${COMPANY_INFO.phones[1].formatted}`} className="hover:text-[#C9972B]">
                    {COMPANY_INFO.phones[1].display}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
