/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Link from 'next/link';
import { Zap, Home, Palette, ArrowRight } from 'lucide-react';

export default function SuperposedCards() {
  const cards = [
    {
      id: "superposed-1",
      title: "Électricité bâtiment",
      description: "Installation, rénovation et dépannage électrique pour les maisons, appartements, bureaux et commerces.",
      imageUrl: "/images/installation-electrique-02.jpeg",
      icon: <Zap className="w-5 h-5 text-[#FAF8F3]" />,
      target: "Installation électrique"
    },
    {
      id: "superposed-2",
      title: "Rénovation complète",
      description: "Transformation et modernisation de vos espaces, de l’analyse du besoin jusqu’aux dernières finitions.",
      imageUrl: "/images/renovation-interieur-01.jpeg",
      icon: <Home className="w-5 h-5 text-[#FAF8F3]" />,
      target: "Rénovation complète"
    },
    {
      id: "superposed-3",
      title: "Décoration intérieure",
      description: "Aménagement, éclairage et décoration pour créer des espaces modernes, harmonieux et agréables.",
      imageUrl: "/images/renovation-interieur-02.jpeg",
      icon: <Palette className="w-5 h-5 text-[#FAF8F3]" />,
      target: "Décoration intérieure"
    }
  ];

  return (
    <section id="superposed-services" className="px-4 md:px-6 relative z-20 pb-12 bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Superposition Container (translates upwards to overlap the hero) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:-mt-20 relative z-30">
          {cards.map((card) => (
            <div
              id={`superposed-card-item-${card.id}`}
              key={card.id}
              className="bg-white rounded-lg overflow-hidden border border-[#E5DED3] hover:border-[#C9972B] transition-all duration-300 shadow-lg hover:shadow-2xl group flex flex-col h-full transform hover:-translate-y-1"
            >
              {/* Image with zoom effect */}
              <div className="aspect-[3/4] md:aspect-square w-full overflow-hidden relative bg-[#11100F]">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Gold icon badge on image */}
                <div className="absolute top-4 right-4 bg-[#C9972B] p-2 rounded-md shadow-md">
                  {card.icon}
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-[#211F1C] text-lg mb-2 group-hover:text-[#C9972B] transition-colors duration-200">
                    {card.title}
                  </h3>
                  <p className="text-[#69635C] text-sm leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                <Link
                  id={`superposed-card-link-${card.id}`}
                  href={`/contact?service=${encodeURIComponent(card.target)}`}
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#C9972B] hover:text-[#8A6418] transition-colors duration-200 mt-auto self-start group/link"
                >
                  <span>En savoir plus</span>
                  <ArrowRight className="w-3.5 h-3.5 transform transition-transform duration-200 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
