"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle, ShieldCheck, Heart, Eye, Target, Users, Landmark, Flame } from 'lucide-react';
import { COMPANY_INFO } from '../data';
import { WhatsAppIcon } from '../components/SocialIcons';
import { motion } from 'motion/react';

export default function About() {
  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    { title: "Sérieux", desc: "Nous traitons chaque projet avec attention, quelle que soit sa taille." },
    { title: "Écoute", desc: "Nous prenons le temps de comprendre les attentes du client avant de proposer une solution." },
    { title: "Qualité", desc: "Nous recherchons un résultat propre, fonctionnel et durable." },
    { title: "Transparence", desc: "Les travaux recommandés et les besoins du projet sont expliqués avant le démarrage." },
    { title: "Sens du détail", desc: "Les finitions, l’éclairage et l’harmonie générale contribuent à la qualité d’un projet." },
    { title: "Satisfaction du client", desc: "Nous recherchons des résultats conformes aux attentes définies dès le début du projet." }
  ];

  const expertises = [
    "Installation électrique",
    "Éclairage d'ambiance",
    "Rénovation complète",
    "Aménagement d'espace",
    "Décoration intérieure",
    "Travaux de finition"
  ];

  const commitments = [
    "Écouter attentivement le besoin du client",
    "Proposer une solution réaliste et sécurisée",
    "Tenir compte du budget disponible",
    "Accorder une importance cruciale à la sécurité électrique",
    "Travailler avec le plus grand soin",
    "Rechercher un résultat parfaitement conforme aux attentes",
    "Assurer un suivi clair et transparent pendant toute la durée des travaux"
  ];

  const missionAspects = [
    { id: "ma-1", title: "Besoins du client", text: "Comprendre vos habitudes de vie et objectifs." },
    { id: "ma-2", title: "Caractéristiques du bâtiment", text: "Analyser les contraintes techniques du chantier." },
    { id: "ma-3", title: "Utilisation de l’espace", text: "Agencer pour un confort de circulation maximal." },
    { id: "ma-4", title: "Style recherché", text: "Composer des décors harmonieux, modernes et épurés." },
    { id: "ma-5", title: "Budget disponible", text: "Optimiser l'achat de matériel de qualité." }
  ];

  return (
    <motion.div 
      id="about-page-root" 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-[#FAF8F3]"
    >
      {/* 1. BANNIÈRE DE PAGE */}
      <section id="about-banner" className="relative py-24 bg-[#11100F] text-white overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/renovation-interieur-02.jpeg"
            alt="Modern premium interior"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-[#11100F]/90" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="text-xs font-bold text-[#C9972B] uppercase tracking-[0.3em] block mb-3">
            À propos
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Découvrez Mr. Light Art Deco
          </h1>
          
          {/* Fil d'Ariane */}
          <div className="flex justify-center items-center gap-2 text-xs text-[#FAF8F3]/60 font-medium tracking-wide">
            <Link href="/" className="hover:text-[#C9972B] transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-[#C9972B]">À propos</span>
          </div>
        </div>
      </section>

      {/* 2. PRÉSENTATION */}
      <section id="about-intro" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Texts column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-[#C9972B] uppercase tracking-[0.2em] block">
                Notre Philosophie
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#211F1C] tracking-tight leading-tight">
                Une entreprise au service de vos espaces
              </h2>
              
              <div className="text-[#69635C] text-sm sm:text-base leading-relaxed space-y-5">
                <p>
                  <strong>{COMPANY_INFO.name}</strong> est une entreprise basée à Douala, spécialisée dans l’électricité bâtiment, la rénovation complète et la décoration intérieure.
                </p>
                <p>
                  Nous accompagnons les particuliers, les entreprises et les commerces souhaitant construire, rénover, moderniser ou embellir leurs espaces.
                </p>
                <p>
                  Notre approche repose sur une idée simple : un bâtiment doit être à la fois sûr, fonctionnel, confortable et agréable à vivre.
                </p>
                <p>
                  Nous ne considérons donc pas uniquement l’aspect esthétique d’un projet. Nous accordons également une grande importance à la qualité de l’installation électrique, à l’organisation de l’espace, à l’éclairage et aux finitions.
                </p>
              </div>
            </div>

            {/* Right Photo column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-lg overflow-hidden shadow-2xl border border-[#E5DED3]">
                <img
                  src="/images/renovation-interieur-03.jpeg"
                  alt="Finitions soignées Mr. Light Art Deco"
                  className="w-full h-96 object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#11100F] to-transparent p-6">
                  <p className="text-xs font-bold text-[#C9972B] uppercase tracking-widest">Rénovation Douala</p>
                  <p className="text-white text-sm mt-1 font-semibold">Qualité de câblage et finitions parfaites.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SECTION CEO - SYLVESTRE KOM */}
      <section id="about-ceo-spotlight" className="py-20 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="bg-white rounded-lg overflow-hidden border border-[#E5DED3] shadow-lg grid grid-cols-1 md:grid-cols-12 items-stretch">
            
            {/* CEO Portrait Photo */}
            <div className="md:col-span-5 relative min-h-[350px] bg-[#11100F]">
              <img
                src="/images/ceo-01.jpeg"
                alt="Sylvestre Kom - CEO Mr. Light Art Deco"
                className="w-full h-full object-cover object-center md:absolute inset-0 grayscale contrast-125 opacity-90"
              />
              {/* Floating Name Overlay for mobile */}
              <div className="absolute bottom-6 left-6 z-10 bg-[#11100F]/90 border border-[#C9972B]/40 px-4 py-2 rounded">
                <p className="text-white text-sm font-bold tracking-wide">{COMPANY_INFO.ceo}</p>
                <p className="text-[#C9972B] text-[10px] font-bold uppercase tracking-widest mt-0.5">CEO & Fondateur</p>
              </div>
            </div>

            {/* CEO Quote & Details */}
            <div className="md:col-span-7 p-6 sm:p-10 flex flex-col justify-center">
              <span className="text-xs font-bold text-[#C9972B] uppercase tracking-[0.2em] block mb-2">
                Direction
              </span>
              
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#211F1C] tracking-tight mb-5">
                {COMPANY_INFO.ceo}, CEO de Mr. Light Art Deco
              </h3>

              <div className="text-[#69635C] text-sm leading-relaxed space-y-4 mb-8">
                <p>
                  Sylvestre Kom dirige <strong>Mr. Light Art Deco</strong> avec la volonté d’apporter aux clients des solutions adaptées à leurs besoins, à leur espace et à leur budget.
                </p>
                <p>
                  Sous sa direction, l’entreprise accompagne les projets avec une approche fondée sur l’écoute, le sérieux, la qualité du travail et la recherche d’un résultat propre, fonctionnel et esthétique.
                </p>
              </div>

              {/* CEO Blockquote Statement */}
              <div className="bg-[#FAF8F3] border-l-4 border-[#C9972B] p-5 rounded-r">
                <p className="text-[#211F1C] italic text-xs sm:text-sm leading-relaxed font-medium">
                  « Notre objectif est de comprendre les besoins de chaque client et de lui proposer une solution adaptée à son espace, à ses attentes et à son budget. Nous voulons réaliser des travaux qui apportent à la fois sécurité, confort et esthétique. »
                </p>
                <p className="text-right text-xs font-bold text-[#C9972B] mt-3 uppercase tracking-wider">
                  — Sylvestre Kom, CEO
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. MISSION & VISION */}
      <section id="about-mission-vision" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Mission Panel */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-[#C9972B] bg-[#C9972B]/10 px-3.5 py-1.5 rounded-full">
                <Target className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Notre Mission</span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#211F1C] tracking-tight">
                Accompagner votre transformation d'espace
              </h3>
              <p className="text-[#69635C] text-sm leading-relaxed mb-6">
                Notre mission est d’aider nos clients à transformer leurs idées en espaces concrets, fonctionnels et esthétiques, tout en assurant une sécurité absolue au niveau électrique. Nous intégrons 5 aspects cruciaux dans chaque analyse :
              </p>

              {/* Mission Grid List */}
              <div className="space-y-4">
                {missionAspects.map((aspect) => (
                  <div key={aspect.id} className="flex items-start gap-3 bg-[#FAF8F3] p-4 rounded border border-[#E5DED3]">
                    <div className="bg-[#C9972B] text-[#FAF8F3] text-xs font-extrabold font-mono w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#211F1C]">{aspect.title}</h4>
                      <p className="text-[#69635C] text-xs mt-0.5">{aspect.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vision Panel */}
            <div className="space-y-6 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-[#C9972B] bg-[#C9972B]/10 px-3.5 py-1.5 rounded-full">
                  <Eye className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Notre Vision</span>
                </div>
                <h3 className="text-2xl font-extrabold text-[#211F1C] tracking-tight mt-4">
                  Devenir la référence à Douala
                </h3>
                <p className="text-[#69635C] text-sm leading-relaxed mt-4">
                  Notre ambition est de devenir une référence à Douala dans les domaines de l’électricité bâtiment, de la rénovation et de la décoration intérieure.
                </p>
                <p className="text-[#69635C] text-sm leading-relaxed mt-3">
                  Nous souhaitons construire notre réputation grâce à la qualité de notre travail, au respect de nos engagements et à la satisfaction de nos clients. Un projet Mr. Light Art Deco doit être synonyme de sérénité.
                </p>
              </div>

              {/* Vision Highlight Card */}
              <div className="bg-[#11100F] text-white p-6 sm:p-8 rounded-lg border border-[#C9972B]/30 relative overflow-hidden mt-6">
                <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-[#C9972B]/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <h4 className="font-bold text-base text-[#F2CE6A] uppercase tracking-wide mb-2">Qualité camerounaise premium</h4>
                <p className="text-xs text-[#FAF8F3]/70 leading-relaxed">
                  Nous nous entourons d'artisans qualifiés et choisissons minutieusement nos luminaires et fournitures pour un résultat d'artisanat haut de gamme à Douala.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. NOS VALEURS */}
      <section id="about-values" className="py-20 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#C9972B] uppercase tracking-[0.2em]">
              Nos Piliers
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#211F1C] tracking-tight mt-3">
              Les valeurs qui guident Mr. Light Art Deco
            </h2>
            <div className="w-12 h-1 bg-[#C9972B] mx-auto mt-4 rounded" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((v, i) => (
              <div
                id={`value-card-${i + 1}`}
                key={v.title}
                className="bg-white rounded-lg p-6 sm:p-8 border border-[#E5DED3] hover:border-[#C9972B]/50 transition-all duration-300 shadow-sm flex flex-col justify-between h-full group"
              >
                <div>
                  <div className="text-[#C9972B] font-bold text-xs uppercase tracking-widest mb-3">
                    Valeur 0{i + 1}
                  </div>
                  <h3 className="font-bold text-[#211F1C] text-lg mb-3 tracking-tight group-hover:text-[#C9972B] transition-colors duration-200">
                    {v.title}
                  </h3>
                  <p className="text-[#69635C] text-xs sm:text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. NOTRE SAVOIR-FAIRE */}
      <section id="about-savoir-faire" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-[#C9972B] uppercase tracking-[0.2em] block">
                Notre Savoir-faire
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#211F1C] tracking-tight leading-tight">
                Plusieurs compétences pour un projet cohérent
              </h2>
              <p className="text-[#69635C] text-sm sm:text-base leading-relaxed">
                Grâce à la combinaison de nos compétences, nous pouvons intervenir sur plusieurs aspects d’un même projet. Cette approche permet une meilleure cohérence entre les travaux techniques (électricité, câblage) et le rendu esthétique final (finitions, éclairage et décoration).
              </p>

              {/* List Grid of skills */}
              <div className="grid grid-cols-2 gap-4">
                {expertises.map((exp, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9972B] flex-shrink-0" />
                    <span className="text-sm font-semibold text-[#211F1C]">{exp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              {/* Photo representation */}
              <div className="relative rounded-lg overflow-hidden border border-[#C9972B]/20 shadow-xl">
                <img
                  src="/images/installation-electrique-01.jpeg"
                  alt="Électricien professionnel à Douala"
                  className="w-full h-80 object-cover object-center"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. NOTRE ENGAGEMENT (dark section) */}
      <section id="about-commitments" className="py-20 bg-[#11100F] text-white relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-xs font-bold text-[#C9972B] uppercase tracking-[0.25em] block mb-3">
            Engagements
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-8">
            La charte de qualité Mr. Light Art Deco
          </h2>

          <div className="text-left space-y-4 max-w-2xl mx-auto border border-[#C9972B]/35 bg-[#1C1A18] rounded-lg p-6 sm:p-8 shadow-2xl">
            {commitments.map((cmt, idx) => (
              <div key={idx} className="flex items-start gap-3.5 pb-3 border-b border-[#FAF8F3]/5 last:border-0 last:pb-0">
                <div className="bg-[#C9972B]/20 text-[#C9972B] p-1 rounded flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span className="text-[#FAF8F3]/90 text-xs sm:text-sm font-medium leading-normal">
                  {cmt}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA PAGE À PROPOS */}
      <section id="about-cta" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#211F1C] tracking-tight mb-4">
            Confiez-nous votre projet
          </h2>
          <p className="text-[#69635C] text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Vous avez une maison, un appartement, un bureau ou un commerce à rénover à Douala ? Contactez <strong className="text-[#211F1C]">Mr. Light Art Deco</strong> pour discuter de votre projet et convenir d’un rendez-vous.
          </p>

          <a
            id="about-cta-whatsapp-link"
            href={COMPANY_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-8 py-4 rounded-md transition-all duration-300 shadow-xl shadow-[#25D366]/10 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <WhatsAppIcon className="w-5 h-5" />
            <span>Discuter de mon projet</span>
          </a>
        </div>
      </section>
    </motion.div>
  );
}
