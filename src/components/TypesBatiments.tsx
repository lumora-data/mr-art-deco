/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Home, Building2, Briefcase, ShoppingBag, Utensils, Sparkles, Store, Building, ShieldCheck } from 'lucide-react';

export default function TypesBatiments() {
  const spaces = [
    { id: "sp-1", icon: <Home className="w-6 h-6 text-[#C9972B]" />, title: "Maisons", desc: "Villas de standing et résidences privées" },
    { id: "sp-2", icon: <Building2 className="w-6 h-6 text-[#C9972B]" />, title: "Appartements", desc: "Duplex, studios modernes et appartements" },
    { id: "sp-3", icon: <Briefcase className="w-6 h-6 text-[#C9972B]" />, title: "Bureaux", desc: "Espaces corporatifs et salles de conférence" },
    { id: "sp-4", icon: <ShoppingBag className="w-6 h-6 text-[#C9972B]" />, title: "Boutiques", desc: "Showrooms et magasins d'exposition" },
    { id: "sp-5", icon: <Utensils className="w-6 h-6 text-[#C9972B]" />, title: "Restaurants", desc: "Salles de réception et lounges d'ambiance" },
    { id: "sp-6", icon: <Sparkles className="w-6 h-6 text-[#C9972B]" />, title: "Salons de beauté", desc: "Spas, coiffeurs et instituts de prestige" },
    { id: "sp-7", icon: <Store className="w-6 h-6 text-[#C9972B]" />, title: "Commerces", desc: "Établissements de vente et supermarchés" },
    { id: "sp-8", icon: <Building className="w-6 h-6 text-[#C9972B]" />, title: "Immeubles", desc: "Parties communes et cages d'escalier" },
    { id: "sp-9", icon: <ShieldCheck className="w-6 h-6 text-[#C9972B]" />, title: "Espaces professionnels", desc: "Hôtels, cliniques et autres locaux d'activité" }
  ];

  return (
    <section id="architectural-spaces-grid" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#C9972B] uppercase tracking-[0.2em]">
            Champs d'intervention
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#211F1C] tracking-tight mt-3 mb-4">
            Nous intervenons sur différents types d’espaces
          </h2>
          <p className="text-[#69635C] text-sm sm:text-base leading-relaxed">
            Qu’il s’agisse d’installations électriques domestiques ou de rénovation de surfaces commerciales à Douala, nous nous adaptons aux contraintes de chaque bâtiment.
          </p>
        </div>

        {/* Spaces Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {spaces.map((sp) => (
            <div
              id={`space-type-card-${sp.id}`}
              key={sp.id}
              className="bg-[#FAF8F3] rounded-lg p-6 border border-[#E5DED3] hover:border-[#C9972B]/50 hover:bg-white transition-all duration-300 flex items-start gap-4 group"
            >
              {/* Icon */}
              <div className="bg-white p-3 rounded-md border border-[#E5DED3] group-hover:bg-[#11100F] group-hover:border-[#C9972B] transition-all duration-300 flex-shrink-0">
                {sp.icon}
              </div>

              {/* Text info */}
              <div>
                <h3 className="font-bold text-[#211F1C] text-base group-hover:text-[#C9972B] transition-colors duration-200">
                  {sp.title}
                </h3>
                <p className="text-[#69635C] text-xs sm:text-sm mt-1 leading-relaxed">
                  {sp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
