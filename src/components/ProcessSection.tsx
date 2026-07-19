/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PROCESS_STEPS } from '../data';

export default function ProcessSection() {
  return (
    <section id="process-method-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#C9972B] uppercase tracking-[0.2em]">
            Notre méthodologie
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#211F1C] tracking-tight mt-3 mb-4">
            Comment se déroule votre projet ?
          </h2>
          <p className="text-[#69635C] text-sm sm:text-base leading-relaxed">
            Nous avons mis au point une démarche claire et structurée pour garantir la sécurité de vos installations et un rendu décoratif à la hauteur de vos exigences.
          </p>
        </div>

        {/* Timeline representation */}
        <div className="relative mt-12">
          {/* Central Connecting Line (hidden on mobile, visible on desktop) */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#C9972B]/20 -translate-y-1/2 hidden lg:block z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <div 
                id={`process-step-${idx + 1}`}
                key={step.step}
                className="bg-[#FAF8F3] rounded-lg p-6 border border-[#E5DED3] hover:border-[#C9972B] transition-all duration-300 shadow-sm hover:shadow-md relative flex flex-col justify-between group h-full"
              >
                {/* Floating Large Number */}
                <div className="text-4xl sm:text-5xl font-extrabold text-[#C9972B]/15 group-hover:text-[#C9972B]/35 transition-colors duration-300 absolute top-4 right-4 font-mono select-none">
                  {step.step}
                </div>

                <div className="pt-4">
                  {/* Step Title */}
                  <h3 className="font-bold text-[#211F1C] text-sm sm:text-base tracking-tight mb-3 pr-8 group-hover:text-[#C9972B] transition-colors duration-200">
                    {step.title}
                  </h3>
                  {/* Step Description */}
                  <p className="text-[#69635C] text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom line decorator */}
                <div className="w-8 h-1 bg-[#C9972B] rounded mt-6 group-hover:w-16 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
