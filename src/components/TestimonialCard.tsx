/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Star, Quote, AlertCircle } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  key?: React.Key;
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div 
      id={`testimonial-card-${testimonial.id}`}
      className="bg-white rounded-lg p-6 sm:p-8 border border-[#E5DED3] hover:border-[#C9972B]/40 transition-all duration-300 shadow-sm relative flex flex-col justify-between"
    >
      {/* Decorative quotes background */}
      <div className="absolute top-6 right-6 text-[#C9972B]/10">
        <Quote className="w-12 h-12 transform rotate-180" />
      </div>

      {/* Demo Warning Banner */}
      <div className="inline-flex items-center gap-1.5 bg-[#C9972B]/5 border border-[#C9972B]/20 rounded px-2.5 py-1 mb-4 self-start">
        <AlertCircle className="w-3.5 h-3.5 text-[#C9972B]" />
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#C9972B]">Contenu de démonstration</span>
      </div>

      <div>
        {/* Rating stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#C9972B] text-[#C9972B]" />
          ))}
        </div>

        {/* Feedback text */}
        <p className="text-[#69635C] italic text-sm leading-relaxed mb-6">
          "{testimonial.text}"
        </p>
      </div>

      {/* Author and Info */}
      <div className="border-t border-[#E5DED3]/50 pt-4 flex items-center justify-between">
        <div>
          <h4 className="font-bold text-[#211F1C] text-sm sm:text-base">
            {testimonial.author}
          </h4>
          <p className="text-[#69635C] text-[11px] sm:text-xs">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
}
