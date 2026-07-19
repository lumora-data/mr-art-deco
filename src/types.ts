/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  iconName: string;
  imageUrl: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'electricite' | 'renovation' | 'decoration' | 'eclairage';
  imageUrl: string;
  description: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  text: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  serviceType: string;
  buildingType: string;
  location: string;
  budget: string;
  message: string;
}
