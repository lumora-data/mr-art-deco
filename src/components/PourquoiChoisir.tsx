/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { UserCheck, LayoutGrid, Coins, Eye } from 'lucide-react';

export default function PourquoiChoisir() {
  const points = [
    {
      id: "pq-1",
      icon: <UserCheck className="w-6 h-6 text-[#F2CE6A]" />,
      title: "Accompagnement personnalisé",
      text: "Chaque projet est analysé selon vos besoins, votre espace, vos priorités et votre budget."
    },
    {
      id: "pq-2",
      icon: <LayoutGrid className="w-6 h-6 text-[#F2CE6A]" />,
      title: "Plusieurs compétences réunies",
      text: "Électricité, rénovation et décoration intérieure peuvent être prises en charge dans le cadre d’un même projet."
    },
    {
      id: "pq-3",
      icon: <Coins className="w-6 h-6 text-[#F2CE6A]" />,
      title: "Solutions adaptées au budget",
      text: "Nous vous aidons à identifier les travaux prioritaires et les options les plus adaptées à vos moyens."
    },
    {
      id: "pq-4",
      icon: <Eye className="w-6 h-6 text-[#F2CE6A]" />,
      title: "Attention aux finitions",
      text: "Nous accordons de l’importance à l’éclairage, à l’alignement, à la propreté et à l’harmonie générale de l’espace."
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-[#1C1A18] text-white relative overflow-hidden">
      {/* Decorative gold lines */}
      <div className="absolute top-0 right-0 w-64 h-64 border-r border-t border-[#C9972B]/10 rounded-tr-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 border-l border-b border-[#C9972B]/10 rounded-bl-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold text-[#C9972B] uppercase tracking-[0.25em] block mb-3">
            Pourquoi Mr. Light Art Deco ?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Un seul interlocuteur pour <span className="text-[#F2CE6A]">plusieurs besoins</span>
          </h2>
          <div className="w-20 h-1 bg-[#C9972B] mt-5 rounded" />
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((pt, index) => (
            <div
              id={`why-choose-item-${pt.id}`}
              key={pt.id}
              className="bg-[#292521] rounded-lg p-6 sm:p-8 border border-[#C9972B]/15 hover:border-[#C9972B]/55 transition-all duration-300 flex flex-col justify-between h-full group"
            >
              <div>
                {/* Icon wrapper */}
                <div className="bg-[#1C1A18] w-12 h-12 rounded-lg flex items-center justify-center border border-[#C9972B]/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {pt.icon}
                </div>

                <h3 className="font-bold text-white text-base sm:text-lg mb-3 tracking-tight group-hover:text-[#F2CE6A] transition-colors duration-200">
                  {pt.title}
                </h3>

                <p className="text-[#FAF8F3]/70 text-xs sm:text-sm leading-relaxed">
                  {pt.text}
                </p>
              </div>

              {/* Step indicator footer */}
              <div className="text-[10px] font-bold font-mono text-[#C9972B]/40 uppercase tracking-widest mt-8">
                AVANTAGE 0{index + 1}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
