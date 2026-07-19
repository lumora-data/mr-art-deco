"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FAQS } from '../data';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FoireAuxQuestions() {
  const [openId, setOpenId] = useState<string | null>("faq-1"); // First is open by default

  const toggleFaq = (id: string) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <section id="faq-accordion-section" className="py-20 bg-[#FAF8F3]">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#C9972B] uppercase tracking-[0.2em]">
            Des réponses à vos questions
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#211F1C] tracking-tight mt-3 mb-4">
            Foire aux questions
          </h2>
          <p className="text-[#69635C] text-sm leading-relaxed">
            Trouvez rapidement des réponses aux interrogations fréquentes sur l’électricité, la rénovation et l’accompagnement de Mr. Light Art Deco à Douala.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                id={`faq-accordion-item-${faq.id}`}
                key={faq.id}
                className="bg-white rounded-lg border border-[#E5DED3] hover:border-[#C9972B]/30 transition-colors duration-300 overflow-hidden shadow-sm"
              >
                {/* Accordion Trigger */}
                <button
                  id={`faq-trigger-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-sm sm:text-base text-[#211F1C] hover:text-[#C9972B] transition-colors duration-200 cursor-pointer"
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <HelpCircle className="w-5 h-5 text-[#C9972B] flex-shrink-0" />
                    <span>{faq.question}</span>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#69635C] transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'transform rotate-180 text-[#C9972B]' : ''
                    }`} 
                  />
                </button>

                {/* Accordion Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-content-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden border-t border-[#E5DED3]/60"
                    >
                      <div className="p-5 text-[#69635C] text-xs sm:text-sm leading-relaxed bg-[#FAF8F3]/40">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
