/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Link from 'next/link';
import { Zap, Flame, RefreshCw, Hammer, Lightbulb, Palette, ArrowRight } from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  key?: React.Key;
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  // Map iconName to Lucide Icon components
  const renderIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-[#FAF8F3]" };
    switch (iconName) {
      case 'Zap':
        return <Zap {...props} />;
      case 'Flame':
        return <Flame {...props} />;
      case 'RefreshCw':
        return <RefreshCw {...props} />;
      case 'Hammer':
        return <Hammer {...props} />;
      case 'Lightbulb':
        return <Lightbulb {...props} />;
      case 'Palette':
        return <Palette {...props} />;
      default:
        return <Lightbulb {...props} />;
    }
  };

  return (
    <div 
      id={`service-card-${service.id}`}
      className="bg-white rounded-lg overflow-hidden border border-[#E5DED3] hover:border-[#C9972B]/50 transition-all duration-300 shadow-sm hover:shadow-xl group flex flex-col h-full"
    >
      {/* Service Image Container */}
      <div className="relative aspect-[3/4] md:aspect-square w-full overflow-hidden bg-[#11100F]">
        <img
          src={service.imageUrl}
          alt={service.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Subtle decorative gold overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Absolute floating golden icon badge */}
        <div className="absolute bottom-4 left-4 bg-[#C9972B] p-2.5 rounded-md shadow-lg transform transition-transform duration-300 group-hover:scale-110">
          {renderIcon(service.iconName)}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 pt-5 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-[#211F1C] tracking-tight mb-2 group-hover:text-[#C9972B] transition-colors duration-200">
            {service.title}
          </h3>
          <p className="text-[#69635C] text-sm leading-relaxed mb-6">
            {service.description}
          </p>
        </div>

        {/* Link / Button */}
        <Link
          id={`service-card-link-${service.id}`}
          href={`/contact?service=${encodeURIComponent(service.title)}`}
          className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#C9972B] hover:text-[#8A6418] transition-colors duration-200 mt-auto self-start group/link"
        >
          <span>En savoir plus</span>
          <ArrowRight className="w-3.5 h-3.5 transform transition-transform duration-200 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
