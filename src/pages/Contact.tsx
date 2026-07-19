"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Phone, MapPin, Calendar, Clock, AlertCircle, FileText, Send, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, SERVICE_OPTIONS, BUILDING_TYPES } from '../data';
import { WhatsAppIcon, TikTokIcon } from '../components/SocialIcons';
import { motion } from 'motion/react';

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  serviceType?: string;
  buildingType?: string;
  message?: string;
}

export default function Contact() {
  const searchParams = useSearchParams();
  const prefilledServiceParam = searchParams?.get('service') || "";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Form States
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [serviceType, setServiceType] = useState(prefilledServiceParam);
  const [buildingType, setBuildingType] = useState("");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [startDate, setStartDate] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync prefilled service parameter from query URL if it changes
  useEffect(() => {
    if (prefilledServiceParam) {
      setServiceType(prefilledServiceParam);
    }
  }, [prefilledServiceParam]);

  const validateForm = (): boolean => {
    const tempErrors: FormErrors = {};
    let isValid = true;

    if (!fullName.trim()) {
      tempErrors.fullName = "Le nom complet est obligatoire.";
      isValid = false;
    }

    if (!phone.trim()) {
      tempErrors.phone = "Le numéro de téléphone est obligatoire.";
      isValid = false;
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      tempErrors.email = "L'adresse e-mail n'est pas valide.";
      isValid = false;
    }

    if (!serviceType) {
      tempErrors.serviceType = "Veuillez sélectionner un type de service.";
      isValid = false;
    }

    if (!buildingType) {
      tempErrors.buildingType = "Veuillez sélectionner un type de bâtiment.";
      isValid = false;
    }

    if (!message.trim()) {
      tempErrors.message = "Le message décrivant votre projet est obligatoire.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        // Clear inputs
        setFullName("");
        setPhone("");
        setEmail("");
        setServiceType("");
        setBuildingType("");
        setLocation("");
        setBudget("");
        setStartDate("");
        setMessage("");
        setErrors({});
      }, 1000);
    }
  };

  return (
    <motion.div 
      id="contact-page-root" 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-[#FAF8F3]"
    >
      
      {/* 1. BANNIÈRE */}
      <section id="contact-banner" className="relative py-24 bg-[#11100F] text-white overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/installation-lustres-05.jpeg"
            alt="Warm lighting decoration banner"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-[#11100F]/90" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="text-xs font-bold text-[#C9972B] uppercase tracking-[0.3em] block mb-3">
            Contact
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Parlons de votre projet
          </h1>
          <p className="text-sm sm:text-base text-[#FAF8F3]/75 max-w-xl mx-auto leading-relaxed mb-6">
            Électricité, rénovation ou décoration intérieure à Douala : décrivez-nous votre besoin.
          </p>
          
          {/* Fil d'Ariane */}
          <div className="flex justify-center items-center gap-2 text-xs text-[#FAF8F3]/60 font-medium tracking-wide">
            <Link href="/" className="hover:text-[#C9972B] transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-[#C9972B]">Contact</span>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section id="contact-intro" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#211F1C] tracking-tight mb-4">
            Contactez Mr. Light Art Deco
          </h2>
          <p className="text-[#69635C] text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            Vous avez besoin d’un professionnel pour un projet d’électricité bâtiment, de rénovation ou de décoration intérieure à Douala ? Expliquez-nous votre projet. Nous vous répondrons afin de mieux comprendre votre besoin et de vous orienter vers une solution adaptée.
          </p>
        </div>
      </section>

      {/* 3. COORDONNÉES CARDS & FORM BLOCK */}
      <section id="contact-details-and-form" className="py-12 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          {/* Coordinates Grid of 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Card 1: Téléphone principal */}
            <a 
              id="coord-card-phone1"
              href={`tel:${COMPANY_INFO.phones[0].formatted}`}
              className="bg-white rounded-lg p-6 border border-[#E5DED3] hover:border-[#C9972B] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="bg-[#C9972B]/10 p-3 rounded-full text-[#C9972B] mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xs uppercase tracking-wider text-[#69635C] mb-1">Téléphone principal</h3>
              <p className="text-[#211F1C] font-extrabold text-sm sm:text-base">{COMPANY_INFO.phones[0].display}</p>
            </a>

            {/* Card 2: Deuxième téléphone */}
            <a 
              id="coord-card-phone2"
              href={`tel:${COMPANY_INFO.phones[1].formatted}`}
              className="bg-white rounded-lg p-6 border border-[#E5DED3] hover:border-[#C9972B] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="bg-[#C9972B]/10 p-3 rounded-full text-[#C9972B] mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xs uppercase tracking-wider text-[#69635C] mb-1">Deuxième téléphone</h3>
              <p className="text-[#211F1C] font-extrabold text-sm sm:text-base">{COMPANY_INFO.phones[1].display}</p>
            </a>

            {/* Card 3: Localisation */}
            <div 
              id="coord-card-location"
              className="bg-white rounded-lg p-6 border border-[#E5DED3] hover:border-[#C9972B]/40 transition-all duration-300 shadow-sm flex flex-col items-center text-center group"
            >
              <div className="bg-[#C9972B]/10 p-3 rounded-full text-[#C9972B] mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xs uppercase tracking-wider text-[#69635C] mb-1">Localisation</h3>
              <p className="text-[#211F1C] font-extrabold text-sm sm:text-base">{COMPANY_INFO.location}</p>
            </div>

            {/* Card 4: TikTok */}
            <a 
              id="coord-card-tiktok"
              href={COMPANY_INFO.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg p-6 border border-[#E5DED3] hover:border-[#C9972B] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="bg-[#11100F] p-3 rounded-full text-[#C9972B] mb-4 group-hover:scale-110 transition-transform">
                <TikTokIcon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xs uppercase tracking-wider text-[#69635C] mb-1">TikTok officiel</h3>
              <p className="text-[#211F1C] font-extrabold text-sm sm:text-base">{COMPANY_INFO.tiktokHandle}</p>
            </a>
          </div>

          {/* Form and Guide columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-10">
            
            {/* Left Form column (7 spans) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-lg border border-[#E5DED3] shadow-lg p-6 sm:p-8">
                <h3 className="text-xl font-bold text-[#211F1C] tracking-tight mb-2">
                  Parlez-nous de votre projet
                </h3>
                <p className="text-xs text-[#69635C] mb-6">
                  Remplissez ce formulaire d’étude de projet et notre équipe d’experts vous recontactera.
                </p>

                {submitted ? (
                  <div className="text-center py-12 px-4 transition-all duration-300">
                    <div className="bg-[#C9972B]/10 p-4 rounded-full text-[#C9972B] inline-block mb-6">
                      <CheckCircle2 className="w-14 h-14" />
                    </div>
                    <h4 className="text-xl font-bold text-[#211F1C] mb-2">Message envoyé !</h4>
                    <p className="text-sm text-[#69635C] max-w-sm mx-auto leading-relaxed mb-6">
                      Nous avons bien reçu vos coordonnées et détails de projet. Sylvestre Kom et son équipe l’analyseront sous peu.
                    </p>
                    <button
                      id="reset-contact-form"
                      onClick={() => setSubmitted(false)}
                      className="bg-[#11100F] hover:bg-[#C9972B] text-white hover:text-[#11100F] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded transition-colors"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase text-[#211F1C] tracking-wider mb-1">
                        Nom complet <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Jean Dupont"
                        className={`w-full px-4 py-2.5 rounded border bg-[#FAF8F3]/50 text-sm focus:outline-none focus:ring-1 ${
                          errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-[#E5DED3] focus:border-[#C9972B] focus:ring-[#C9972B]'
                        }`}
                      />
                      {errors.fullName && <p className="text-red-500 text-[10px] mt-1 font-medium">{errors.fullName}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-bold uppercase text-[#211F1C] tracking-wider mb-1">
                          Téléphone <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="658 030 613"
                          className={`w-full px-4 py-2.5 rounded border bg-[#FAF8F3]/50 text-sm focus:outline-none focus:ring-1 ${
                            errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-[#E5DED3] focus:border-[#C9972B] focus:ring-[#C9972B]'
                          }`}
                        />
                        {errors.phone && <p className="text-red-500 text-[10px] mt-1 font-medium">{errors.phone}</p>}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-bold uppercase text-[#211F1C] tracking-wider mb-1">
                          Adresse e-mail <span className="text-xs text-[#69635C] font-normal italic">(opt.)</span>
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="votre@email.com"
                          className={`w-full px-4 py-2.5 rounded border bg-[#FAF8F3]/50 text-sm focus:outline-none focus:ring-1 ${
                            errors.email ? 'border-red-500 focus:ring-red-500' : 'border-[#E5DED3] focus:border-[#C9972B] focus:ring-[#C9972B]'
                          }`}
                        />
                        {errors.email && <p className="text-red-500 text-[10px] mt-1 font-medium">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Service Type */}
                      <div>
                        <label className="block text-xs font-bold uppercase text-[#211F1C] tracking-wider mb-1">
                          Type de service <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={serviceType}
                          onChange={(e) => setServiceType(e.target.value)}
                          className={`w-full px-4 py-2.5 rounded border bg-[#FAF8F3]/50 text-sm focus:outline-none focus:ring-1 ${
                            errors.serviceType ? 'border-red-500' : 'border-[#E5DED3] focus:border-[#C9972B]'
                          }`}
                        >
                          <option value="">Sélectionnez un service</option>
                          {SERVICE_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                        {errors.serviceType && <p className="text-red-500 text-[10px] mt-1 font-medium">{errors.serviceType}</p>}
                      </div>

                      {/* Building Type */}
                      <div>
                        <label className="block text-xs font-bold uppercase text-[#211F1C] tracking-wider mb-1">
                          Type de bâtiment <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={buildingType}
                          onChange={(e) => setBuildingType(e.target.value)}
                          className={`w-full px-4 py-2.5 rounded border bg-[#FAF8F3]/50 text-sm focus:outline-none focus:ring-1 ${
                            errors.buildingType ? 'border-red-500' : 'border-[#E5DED3] focus:border-[#C9972B]'
                          }`}
                        >
                          <option value="">Sélectionnez un bâtiment</option>
                          {BUILDING_TYPES.map((b) => (
                            <option key={b} value={b}>{b}</option>
                          ))}
                        </select>
                        {errors.buildingType && <p className="text-red-500 text-[10px] mt-1 font-medium">{errors.buildingType}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {/* Localisation */}
                      <div className="sm:col-span-1">
                        <label className="block text-xs font-bold uppercase text-[#211F1C] tracking-wider mb-1">
                          Localisation
                        </label>
                        <input
                          type="text"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          placeholder="Ex: Akwa"
                          className="w-full px-4 py-2.5 rounded border border-[#E5DED3] bg-[#FAF8F3]/50 text-sm focus:outline-none focus:border-[#C9972B] focus:ring-1 focus:ring-[#C9972B]"
                        />
                      </div>

                      {/* Budget */}
                      <div className="sm:col-span-1">
                        <label className="block text-xs font-bold uppercase text-[#211F1C] tracking-wider mb-1">
                          Budget estimatif
                        </label>
                        <input
                          type="text"
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          placeholder="Ex: 800 000 FCFA"
                          className="w-full px-4 py-2.5 rounded border border-[#E5DED3] bg-[#FAF8F3]/50 text-sm focus:outline-none focus:border-[#C9972B] focus:ring-1 focus:ring-[#C9972B]"
                        />
                      </div>

                      {/* Start Date */}
                      <div className="sm:col-span-1">
                        <label className="block text-xs font-bold uppercase text-[#211F1C] tracking-wider mb-1">
                          Démarrage souhaité
                        </label>
                        <div className="relative">
                          <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#69635C]" />
                          <input
                            type="text"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            placeholder="Ex: Dès que possible"
                            className="w-full pl-4 pr-10 py-2.5 rounded border border-[#E5DED3] bg-[#FAF8F3]/50 text-sm focus:outline-none focus:border-[#C9972B]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold uppercase text-[#211F1C] tracking-wider mb-1">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Décrivez précisément votre projet..."
                        rows={4}
                        className={`w-full px-4 py-2.5 rounded border bg-[#FAF8F3]/50 text-sm focus:outline-none focus:ring-1 ${
                          errors.message ? 'border-red-500 focus:ring-red-500' : 'border-[#E5DED3] focus:border-[#C9972B] focus:ring-[#C9972B]'
                        }`}
                      />
                      {errors.message && <p className="text-red-500 text-[10px] mt-1 font-medium">{errors.message}</p>}
                    </div>

                    {/* Form actions */}
                    <div className="pt-4 border-t border-[#E5DED3]/40 flex flex-col sm:flex-row gap-4 items-center justify-between">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto bg-[#11100F] hover:bg-[#C9972B] text-white hover:text-[#11100F] font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded transition-colors duration-300 flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        <span>{isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}</span>
                      </button>

                      <a
                        href={COMPANY_INFO.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded inline-flex items-center justify-center gap-2 transition-colors"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                        <span>Écrire sur WhatsApp</span>
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Right Guide column (5 spans) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Instructions pour le client */}
              <div className="bg-white rounded-lg border border-[#E5DED3] p-6 shadow-md">
                <div className="flex items-center gap-2.5 text-[#C9972B] mb-4">
                  <FileText className="w-5 h-5" />
                  <h3 className="font-extrabold text-[#211F1C] text-sm uppercase tracking-wider">Pour recevoir une réponse précise</h3>
                </div>
                <p className="text-xs text-[#69635C] leading-relaxed mb-4">
                  Dans votre message, pensez à préciser :
                </p>
                <ul className="space-y-2 text-xs text-[#69635C] list-disc pl-4">
                  <li>Le type de bâtiment (maison, bureau, commerce, etc.) ;</li>
                  <li>Les travaux précis à réaliser (recâblage, spots, etc.) ;</li>
                  <li>La localisation exacte du chantier à Douala ;</li>
                  <li>L'état actuel de l'espace (neuf, en rénovation, ancien) ;</li>
                  <li>Votre délai de livraison souhaité ;</li>
                  <li>Votre enveloppe budgétaire approximative.</li>
                </ul>
                <div className="mt-4 p-3.5 bg-[#FAF8F3] rounded border-l-2 border-[#C9972B] text-[11px] text-[#211F1C] leading-relaxed">
                  <strong>Pratique :</strong> Vous pouvez également envoyer des photos ou des vidéos du bâtiment directement par WhatsApp pour un pré-diagnostic !
                </div>
              </div>

              {/* Bloc WhatsApp direct */}
              <div className="bg-[#11100F] text-white rounded-lg border border-[#C9972B]/35 p-6 shadow-md relative overflow-hidden">
                <div className="absolute top-[-30px] right-[-30px] w-24 h-24 bg-[#25D366]/5 rounded-full pointer-events-none" />
                
                <div className="flex items-center gap-3 text-[#25D366] mb-4">
                  <WhatsAppIcon className="w-6 h-6" />
                  <h3 className="font-bold text-[#F2CE6A] text-sm uppercase tracking-wider">Échangez directement avec nous</h3>
                </div>
                
                <p className="text-xs text-[#FAF8F3]/75 leading-relaxed mb-6">
                  Envoyez-nous les informations de votre projet et, si possible, quelques photos ou vidéos du chantier.
                </p>
                
                <a
                  href={COMPANY_INFO.whatsappPrefilled}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3 px-4 rounded text-xs text-center block transition-colors duration-300 uppercase tracking-widest"
                >
                  Ouvrir WhatsApp
                </a>
              </div>

              {/* Horaires et Dépannage */}
              <div className="bg-white rounded-lg border border-[#E5DED3] p-6 shadow-md">
                <div className="flex items-center gap-2.5 text-[#C9972B] mb-4">
                  <Clock className="w-5 h-5" />
                  <h3 className="font-extrabold text-[#211F1C] text-sm uppercase tracking-wider">Horaires</h3>
                </div>
                <p className="text-sm font-bold text-[#211F1C]">Lundi au samedi : sur rendez-vous.</p>
                <p className="text-xs text-[#69635C] leading-relaxed mt-2">
                  Nous organisons nos visites et travaux de manière flexible pour minimiser le dérangement de vos locaux.
                </p>
                
                <div className="mt-4 pt-4 border-t border-[#E5DED3]/60">
                  <p className="text-xs font-bold text-[#C9972B] uppercase tracking-wider flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4" />
                    <span>Urgence électrique à Douala ?</span>
                  </p>
                  <p className="text-xs text-[#69635C] leading-relaxed mt-1.5">
                    Pour une urgence électrique, contactez directement l’un de nos numéros afin de vérifier la disponibilité d’une intervention immédiate.
                  </p>
                </div>
              </div>

              {/* Réseaux sociaux (TikTok) */}
              <div className="bg-[#FAF8F3] rounded-lg border border-[#C9972B]/20 p-6 shadow-md text-center">
                <div className="inline-flex bg-[#11100F] text-[#C9972B] p-2.5 rounded-full mb-3">
                  <TikTokIcon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-[#211F1C] uppercase tracking-wider mb-2">Retrouvez-nous sur TikTok</h3>
                <p className="text-xs text-[#69635C] leading-relaxed mb-4">
                  Découvrez nos travaux en vidéo, nos réalisations étape par étape et les coulisses de nos chantiers à Douala.
                </p>
                <a
                  href={COMPANY_INFO.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#11100F] hover:bg-[#C9972B] text-[#FAF8F3] hover:text-[#11100F] font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-md inline-block transition-colors"
                >
                  Suivre @mr.light_art_deco
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

    </motion.div>
  );
}
