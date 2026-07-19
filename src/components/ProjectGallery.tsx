"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PROJECTS, COMPANY_INFO } from '../data';
import { Project } from '../types';
import { Sparkles, Eye, X, Send } from 'lucide-react';
import { WhatsAppIcon } from './SocialIcons';
import { motion, AnimatePresence } from 'motion/react';

export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'electricite' | 'renovation' | 'decoration' | 'eclairage'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = [
    { value: 'all', label: 'Tous' },
    { value: 'electricite', label: 'Électricité' },
    { value: 'renovation', label: 'Rénovation' },
    { value: 'decoration', label: 'Décoration' },
    { value: 'eclairage', label: 'Éclairage' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'electricite': return 'Électricité';
      case 'renovation': return 'Rénovation';
      case 'decoration': return 'Décoration';
      case 'eclairage': return 'Éclairage';
      default: return cat;
    }
  };

  const handleInquireProject = (projTitle: string) => {
    const text = encodeURIComponent(`Bonjour Mr. Light Art Deco, je souhaiterais obtenir des informations concernant un projet similaire à votre réalisation : "${projTitle}".`);
    window.open(`https://wa.me/237658030613?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="portfolio-gallery-section" className="py-20 bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold text-[#C9972B] uppercase tracking-[0.2em] block mb-2">
              Nos réalisations
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#211F1C] tracking-tight">
              Des projets réalisés avec soin
            </h2>
          </div>

          {/* Filters List */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                id={`filter-btn-${f.value}`}
                key={f.value}
                onClick={() => setActiveFilter(f.value as any)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-md border transition-all duration-300 cursor-pointer ${
                  activeFilter === f.value
                    ? 'bg-[#11100F] text-[#C9972B] border-[#C9972B]'
                    : 'bg-white text-[#69635C] border-[#E5DED3] hover:border-[#C9972B]/50 hover:text-[#211F1C]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid with layout transitions */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p) => (
              <motion.div
                id={`project-item-card-${p.id}`}
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="group bg-white rounded-lg overflow-hidden border border-[#E5DED3] hover:border-[#C9972B]/50 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col h-full"
              >
                {/* Image Container with Zoom */}
                <div className="relative aspect-[3/4] md:aspect-square w-full overflow-hidden bg-[#11100F]">
                  <img
                    src={p.imageUrl}
                    alt={p.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11100F] via-[#11100F]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      id={`view-proj-overlay-btn-${p.id}`}
                      onClick={() => setSelectedProject(p)}
                      className="bg-[#C9972B] hover:bg-[#E0B64B] text-[#11100F] font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-md flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 cursor-pointer shadow-lg"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Voir le projet</span>
                    </button>
                  </div>

                  {/* Floating Category Tag */}
                  <div className="absolute top-4 left-4 bg-[#11100F]/80 backdrop-blur-sm border border-[#C9972B]/40 px-3 py-1 rounded text-[10px] font-bold text-[#F2CE6A] uppercase tracking-wider">
                    {getCategoryLabel(p.category)}
                  </div>
                </div>

                {/* Text info */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-[#211F1C] text-base mb-2 group-hover:text-[#C9972B] transition-colors duration-200">
                      {p.title}
                    </h3>
                    <p className="text-[#69635C] text-xs leading-relaxed line-clamp-2">
                      {p.description}
                    </p>
                  </div>
                  
                  {/* Static Button underneath */}
                  <button
                    id={`view-proj-btn-${p.id}`}
                    onClick={() => setSelectedProject(p)}
                    className="mt-4 text-[#C9972B] hover:text-[#8A6418] font-bold text-xs uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors duration-200 text-left self-start cursor-pointer"
                  >
                    <span>Détails & Devis</span>
                    <span>→</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox / Project Details Modal Popup */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              id="project-lightbox-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
            >
              <motion.div 
                initial={{ scale: 0.92, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.92, opacity: 0, y: 15 }}
                transition={{ type: "spring", damping: 26, stiffness: 210 }}
                className="bg-white rounded-lg overflow-hidden max-w-4xl w-full border border-[#C9972B]/30 shadow-2xl relative max-h-[90vh] flex flex-col"
              >
                {/* Close Button */}
                <button
                  id="lightbox-close-btn"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-20 bg-[#11100F]/80 text-[#FAF8F3] hover:text-[#C9972B] p-2 rounded-full border border-[#FAF8F3]/10 transition-colors"
                  aria-label="Fermer la vue"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Scrollable Modal Content - Responsive split layout optimized for Portrait images */}
                <div className="overflow-y-auto flex-grow">
                  <div className="grid grid-cols-1 md:grid-cols-12 h-full">
                    
                    {/* Left side: Tall Portrait Image */}
                    <div className="md:col-span-5 relative h-[380px] md:h-[550px] bg-[#11100F] flex items-center justify-center overflow-hidden">
                      <img
                        src={selectedProject.imageUrl}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                      
                      {/* Floating Category tag on image */}
                      <span className="absolute bottom-6 left-6 bg-[#C9972B] text-[#11100F] text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded shadow-md">
                        {getCategoryLabel(selectedProject.category)}
                      </span>
                    </div>

                    {/* Right side: Project Details */}
                    <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between h-full bg-[#FAF8F3]/30">
                      <div>
                        <span className="text-xs font-bold text-[#C9972B] uppercase tracking-wider">
                          Détails du projet d'exception
                        </span>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-[#211F1C] tracking-tight mt-1 mb-4 leading-snug">
                          {selectedProject.title}
                        </h3>
                        
                        <div className="text-[#69635C] text-sm leading-relaxed space-y-4 mb-8">
                          <p className="font-medium text-[#211F1C]/90">
                            {selectedProject.description}
                          </p>
                          <p>
                            Ce chantier a été mené d’une main de maître par nos équipes à Douala. Chaque raccordement, luminaire et élément décoratif a fait l’objet d’un soin scrupuleux, alliant sécurité technique et élégance visuelle.
                          </p>
                          <p>
                            Notre approche personnalisée garantit que chaque recoin de votre espace réponde à vos critères de confort les plus élevés.
                          </p>
                        </div>
                      </div>

                      {/* Modal Footer / Actions */}
                      <div className="flex flex-col gap-4 border-t border-[#E5DED3]/80 pt-6 mt-4">
                        <div className="text-xs text-[#69635C] text-center md:text-left font-medium">
                          Intéressé par une prestation ou une finition similaire pour votre espace ?
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 w-full justify-end">
                          <button
                            id="lightbox-whatsapp-inquire"
                            onClick={() => handleInquireProject(selectedProject.title)}
                            className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider px-5 py-3.5 rounded-md flex items-center justify-center gap-2 cursor-pointer transition-colors w-full sm:w-auto shadow-md hover:shadow-lg"
                          >
                            <WhatsAppIcon className="w-4 h-4" />
                            <span>S'informer sur WhatsApp</span>
                          </button>
                          <button
                            id="lightbox-back-btn"
                            onClick={() => setSelectedProject(null)}
                            className="bg-[#11100F] hover:bg-[#292521] text-[#FAF8F3] hover:text-[#C9972B] font-bold text-xs uppercase tracking-wider px-5 py-3.5 rounded-md cursor-pointer transition-colors w-full sm:w-auto border border-[#FAF8F3]/10"
                          >
                            Fermer
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
