"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, ClipboardList, Send, CheckCircle2 } from 'lucide-react';
import { SERVICE_OPTIONS, BUILDING_TYPES, COMPANY_INFO } from '../data';
import { WhatsAppIcon } from './SocialIcons';

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  serviceType?: string;
  buildingType?: string;
  message?: string;
}

interface QuoteFormProps {
  prefilledService?: string;
}

export default function QuoteForm({ prefilledService = "" }: QuoteFormProps) {
  // Form States
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [serviceType, setServiceType] = useState(prefilledService);
  const [buildingType, setBuildingType] = useState("");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validate form fields
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

  // Form submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate real submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        // Reset states
        setFullName("");
        setPhone("");
        setEmail("");
        setServiceType("");
        setBuildingType("");
        setLocation("");
        setBudget("");
        setMessage("");
        setErrors({});
      }, 1000);
    }
  };

  return (
    <div 
      id="quote-form-container-card"
      className="bg-[#FAF8F3] rounded-lg overflow-hidden border border-[#E5DED3] shadow-xl max-w-2xl mx-auto"
    >
      {/* Header Banner - Black & Gold */}
      <div className="bg-[#11100F] border-b border-[#C9972B]/30 px-6 py-8 text-center relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#C9972B] to-transparent" />
        <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wider mb-2">
          Demandez votre devis
        </h3>
        <p className="text-[#FAF8F3]/75 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
          Décrivez-nous votre projet et nous vous contacterons pour mieux comprendre votre besoin.
        </p>
      </div>

      <div className="p-6 sm:p-8 relative">
        {submitted ? (
          /* Success Message Overlay */
          <div 
            id="quote-form-success-alert"
            className="flex flex-col items-center text-center py-12 px-4 transition-all duration-300"
          >
            <div className="bg-[#C9972B]/10 p-4 rounded-full text-[#C9972B] mb-6">
              <CheckCircle2 className="w-16 h-16 animate-bounce" />
            </div>
            <h4 className="text-2xl font-bold text-[#211F1C] tracking-tight mb-3">
              Demande envoyée avec succès !
            </h4>
            <p className="text-[#69635C] text-sm max-w-md leading-relaxed mb-8">
              Merci pour votre confiance. L'équipe de <strong>Mr. Light Art Deco</strong>, dirigée par Sylvestre Kom, étudiera vos informations et vous recontactera rapidement par téléphone ou e-mail.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <button
                id="quote-form-reset-btn"
                onClick={() => setSubmitted(false)}
                className="bg-[#11100F] hover:bg-[#292521] text-[#FAF8F3] font-bold px-6 py-3 rounded text-xs tracking-wider uppercase transition-all duration-200"
              >
                Faire une nouvelle demande
              </button>
              <a
                id="quote-form-success-whatsapp"
                href={COMPANY_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C9972B] hover:bg-[#E0B64B] text-[#11100F] font-bold px-6 py-3 rounded text-xs tracking-wider uppercase inline-flex items-center justify-center gap-2 transition-all duration-200"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Nous écrire directement</span>
              </a>
            </div>
          </div>
        ) : (
          /* The Form */
          <form id="quote-submission-form" onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase text-[#211F1C] tracking-wider mb-1.5">
                  Nom complet <span className="text-red-500">*</span>
                </label>
                <input
                  id="form-input-fullname"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ex: Jean Dupont"
                  className={`w-full px-4 py-3 rounded border bg-white text-sm text-[#211F1C] focus:outline-none focus:ring-1 transition-all ${
                    errors.fullName 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-[#E5DED3] focus:border-[#C9972B] focus:ring-[#C9972B]'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.fullName}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold uppercase text-[#211F1C] tracking-wider mb-1.5">
                  Numéro de téléphone <span className="text-red-500">*</span>
                </label>
                <input
                  id="form-input-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ex: 658 030 613"
                  className={`w-full px-4 py-3 rounded border bg-white text-sm text-[#211F1C] focus:outline-none focus:ring-1 transition-all ${
                    errors.phone 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-[#E5DED3] focus:border-[#C9972B] focus:ring-[#C9972B]'
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Email (Optional) */}
            <div>
              <label className="block text-xs font-bold uppercase text-[#211F1C] tracking-wider mb-1.5">
                Adresse e-mail <span className="text-[#69635C] font-normal text-[10px] lowercase italic">(optionnelle)</span>
              </label>
              <input
                id="form-input-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ex: client@exemple.com"
                className={`w-full px-4 py-3 rounded border bg-white text-sm text-[#211F1C] focus:outline-none focus:ring-1 transition-all ${
                  errors.email 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'border-[#E5DED3] focus:border-[#C9972B] focus:ring-[#C9972B]'
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.email}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Service Type */}
              <div>
                <label className="block text-xs font-bold uppercase text-[#211F1C] tracking-wider mb-1.5">
                  Type de service <span className="text-red-500">*</span>
                </label>
                <select
                  id="form-select-service"
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className={`w-full px-4 py-3 rounded border bg-white text-sm text-[#211F1C] focus:outline-none focus:ring-1 transition-all ${
                    errors.serviceType 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-[#E5DED3] focus:border-[#C9972B] focus:ring-[#C9972B]'
                  }`}
                >
                  <option value="">Sélectionnez un service</option>
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                {errors.serviceType && (
                  <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.serviceType}</p>
                )}
              </div>

              {/* Building Type */}
              <div>
                <label className="block text-xs font-bold uppercase text-[#211F1C] tracking-wider mb-1.5">
                  Type de bâtiment <span className="text-red-500">*</span>
                </label>
                <select
                  id="form-select-building"
                  value={buildingType}
                  onChange={(e) => setBuildingType(e.target.value)}
                  className={`w-full px-4 py-3 rounded border bg-white text-sm text-[#211F1C] focus:outline-none focus:ring-1 transition-all ${
                    errors.buildingType 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-[#E5DED3] focus:border-[#C9972B] focus:ring-[#C9972B]'
                  }`}
                >
                  <option value="">Sélectionnez un bâtiment</option>
                  {BUILDING_TYPES.map((bld) => (
                    <option key={bld} value={bld}>{bld}</option>
                  ))}
                </select>
                {errors.buildingType && (
                  <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.buildingType}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Location of chantier */}
              <div>
                <label className="block text-xs font-bold uppercase text-[#211F1C] tracking-wider mb-1.5">
                  Localisation du chantier
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#69635C]" />
                  <input
                    id="form-input-location"
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Ex: Bonapriso, Douala"
                    className="w-full pl-10 pr-4 py-3 rounded border border-[#E5DED3] bg-white text-sm text-[#211F1C] focus:outline-none focus:border-[#C9972B] focus:ring-1 focus:ring-[#C9972B] transition-all"
                  />
                </div>
              </div>

              {/* Approximative Budget */}
              <div>
                <label className="block text-xs font-bold uppercase text-[#211F1C] tracking-wider mb-1.5">
                  Budget approximatif
                </label>
                <div className="relative">
                  <ClipboardList className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#69635C]" />
                  <input
                    id="form-input-budget"
                    type="text"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="Ex: 500 000 FCFA"
                    className="w-full pl-10 pr-4 py-3 rounded border border-[#E5DED3] bg-white text-sm text-[#211F1C] focus:outline-none focus:border-[#C9972B] focus:ring-1 focus:ring-[#C9972B] transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Message Description */}
            <div>
              <label className="block text-xs font-bold uppercase text-[#211F1C] tracking-wider mb-1.5">
                Message & détails du projet <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-[#69635C]" />
                <textarea
                  id="form-textarea-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Décrivez votre besoin (nombre de pièces, état de l'installation existante, finitions souhaitées, etc.)"
                  rows={4}
                  className={`w-full pl-10 pr-4 py-3 rounded border bg-white text-sm text-[#211F1C] focus:outline-none focus:ring-1 transition-all ${
                    errors.message 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-[#E5DED3] focus:border-[#C9972B] focus:ring-[#C9972B]'
                  }`}
                />
              </div>
              {errors.message && (
                <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.message}</p>
              )}
            </div>

            {/* Submission Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-[#E5DED3]/45">
              <button
                id="form-submit-button"
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto bg-[#11100F] hover:bg-[#C9972B] text-white hover:text-[#11100F] font-bold text-xs tracking-wider uppercase px-8 py-3.5 rounded transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Envoi en cours...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Envoyer ma demande</span>
                  </>
                )}
              </button>

              <div className="text-center sm:text-right w-full sm:w-auto">
                <span className="text-xs text-[#69635C] block mb-2 sm:inline-block sm:mb-0 sm:mr-4">
                  Ou envoyez directement :
                </span>
                <a
                  id="form-whatsapp-direct-backup"
                  href={COMPANY_INFO.whatsappPrefilled}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs tracking-wider uppercase px-5 py-3 rounded inline-flex items-center justify-center gap-2 transition-all duration-300 w-full sm:w-auto"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Sur WhatsApp</span>
                </a>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
