/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Project, Testimonial, FAQItem } from './types';

export const COMPANY_INFO = {
  name: "Mr. Light Art Deco",
  ceo: "Sylvestre Kom",
  location: "Douala, Cameroun",
  phones: [
    { display: "658 030 613", raw: "658030613", formatted: "+237658030613" },
    { display: "651 993 990", raw: "651993990", formatted: "+237651993990" }
  ],
  whatsapp: "https://wa.me/237658030613",
  whatsappPrefilled: "https://wa.me/237658030613?text=Bonjour%20Mr.%20Light%20Art%20Deco%2C%20je%20souhaite%20obtenir%20des%20informations%20concernant%20un%20projet%20d%E2%80%99%C3%A9lectricit%C3%A9%2C%20de%20r%C3%A9novation%20ou%20de%20d%C3%A9coration%20int%C3%A9rieure%20%C3%A0%20Douala.",
  tiktok: "https://www.tiktok.com/@mr.light_art_deco?_r=1&_t=ZS-98ANjx65bC1",
  tiktokHandle: "@mr.light_art_deco",
  emailPlaceholder: "contact@mrlightartdeco.com", // Just for visual placeholder since no official email was given
};

export const SERVICES: Service[] = [
  {
    id: "installation-complete",
    title: "Installation électrique complète",
    description: "Mise en place du câblage, des prises, des interrupteurs, des luminaires et des équipements nécessaires au fonctionnement du bâtiment.",
    longDescription: "Nous prenons en charge la conception et la réalisation de l'ensemble de votre réseau électrique, de l'armoire de distribution aux interrupteurs et prises. Nos installations respectent scrupuleusement les normes de sécurité en vigueur pour garantir une fiabilité à toute épreuve.",
    iconName: "Zap",
    imageUrl: "/images/installation-electrique-01.jpeg"
  },
  {
    id: "depannage-electrique",
    title: "Dépannage électrique",
    description: "Recherche des pannes, remplacement des équipements défectueux et remise en état des installations électriques.",
    longDescription: "Une panne d'électricité peut paralyser votre activité ou perturber votre confort quotidien. Notre équipe de techniciens intervient rapidement à Douala pour diagnostiquer avec précision les défauts et réparer vos installations en toute sécurité.",
    iconName: "Flame",
    imageUrl: "/images/installation-electrique-02.jpeg"
  },
  {
    id: "renovation-electrique",
    title: "Rénovation électrique",
    description: "Modernisation des installations anciennes afin d’améliorer leur sécurité, leur fiabilité et leur fonctionnement.",
    longDescription: "Les installations anciennes présentent des risques d'incendie et de surtension. Nous remplaçons les tableaux électriques obsolètes, mettons les circuits à la terre et optimisons la consommation d'énergie de votre bâtiment.",
    iconName: "RefreshCw",
    imageUrl: "/images/installation-electrique-03.jpeg"
  },
  {
    id: "renovation-batiment",
    title: "Rénovation de bâtiments",
    description: "Rénovation de maisons, appartements, bureaux, boutiques, commerces et autres espaces professionnels.",
    longDescription: "De la maçonnerie légère à la peinture, nous transformons vos intérieurs pour les remettre au goût du jour. Nous réorganisons les volumes et redonnons de la valeur à vos biens immobiliers à Douala.",
    iconName: "Hammer",
    imageUrl: "/images/renovation-interieur-01.jpeg"
  },
  {
    id: "installation-luminaires",
    title: "Installation de luminaires",
    description: "Installation d’éclairages fonctionnels et décoratifs adaptés à chaque pièce et à l’ambiance recherchée.",
    longDescription: "L'éclairage structure l'espace et crée l'atmosphère. Nous installons des spots encastrés, des suspensions majestueuses, des bandeaux LED indirects et des appliques murales pour sublimer votre aménagement intérieur.",
    iconName: "Lightbulb",
    imageUrl: "/images/installation-lustres-01.jpeg"
  },
  {
    id: "decoration-interieure",
    title: "Décoration intérieure",
    description: "Choix des couleurs, organisation de l’espace, décoration des murs, amélioration de l’éclairage et création d’ambiances modernes.",
    longDescription: "Nous concevons des décors uniques en harmonie avec votre personnalité ou l'image de marque de votre commerce. Nous sélectionnons les matériaux, les textures, les teintes et les agencements pour un rendu d'exception.",
    iconName: "Palette",
    imageUrl: "/images/renovation-interieur-02.jpeg"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Installation électrique d'une villa moderne",
    category: "electricite",
    imageUrl: "/images/renovation-interieur-03.jpeg",
    description: "Système électrique complet, tableau intelligent, intégration de spots LED et de lustres décoratifs pour une résidence privée."
  },
  {
    id: "proj-2",
    title: "Rénovation d'un appartement de standing",
    category: "renovation",
    imageUrl: "/images/renovation-interieur-04.jpeg",
    description: "Transformation des sols, réfection des murs, faux plafonds en placo et aménagement de pièces de vie lumineuses."
  },
  {
    id: "proj-3",
    title: "Décoration d'un salon Art Déco",
    category: "decoration",
    imageUrl: "/images/meuble-tv-01.jpeg",
    description: "Alliance de tons beiges, de finitions dorées et d'un éclairage tamisé pour une ambiance chaleureuse et sophistiquée."
  },
  {
    id: "proj-4",
    title: "Éclairage d'un commerce haut de gamme",
    category: "eclairage",
    imageUrl: "/images/installation-lustres-02.jpeg",
    description: "Mise en lumière des produits, bandeaux LED intégrés aux étagères et spots directionnels pour valoriser l'espace de vente."
  },
  {
    id: "proj-5",
    title: "Transformation de bureaux d'entreprise",
    category: "renovation",
    imageUrl: "/images/meuble-tv-02.jpeg",
    description: "Cloisonnement vitré, chemins de câbles optimisés, éclairage ergonomique pour le bien-être des collaborateurs."
  },
  {
    id: "proj-6",
    title: "Travaux de finition et peinture d'intérieur",
    category: "decoration",
    imageUrl: "/images/renovation-interieur-05.jpeg",
    description: "Préparation des supports, application d'enduit de lissage de haute qualité, peinture mate et pose de baguettes dorées décoratives."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    author: "Témoignage client à remplacer",
    role: "Propriétaire de villa, Douala",
    text: "Ajoutez ici un véritable retour reçu après la réalisation d’un projet. Mr. Light Art Deco s'engage à offrir un service d'une qualité irréprochable et un suivi personnalisé.",
    rating: 5
  },
  {
    id: "test-2",
    author: "Témoignage client à remplacer",
    role: "Gérante de boutique, Akwa",
    text: "Ajoutez ici un véritable retour reçu après la réalisation d’un projet. Nos clients à Douala apprécient le respect des délais et le soin méticuleux apporté aux finitions d'éclairage.",
    rating: 5
  },
  {
    id: "test-3",
    author: "Témoignage client à remplacer",
    role: "Directeur de bureaux, Bonapriso",
    text: "Ajoutez ici un véritable retour reçu après la réalisation d’un projet. L'électricité et la rénovation complète de nos locaux professionnels ont été menées avec un grand sérieux.",
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Intervenez-vous uniquement à Douala ?",
    answer: "Mr. Light Art Deco intervient principalement à Douala. Pour un projet situé en dehors de Douala (Kribi, Yaoundé, etc.), contactez-nous afin d’étudier les possibilités d’intervention."
  },
  {
    id: "faq-2",
    question: "Réalisez-vous des installations électriques complètes ?",
    answer: "Oui. Nous pouvons intervenir pour une nouvelle installation complète de A à Z (câblage, pieuvre électrique, tableaux, etc.), une rénovation électrique, un dépannage ou le remplacement de certains équipements."
  },
  {
    id: "faq-3",
    question: "Peut-on vous confier une rénovation complète ?",
    answer: "Oui. Nous pouvons vous accompagner dans la rénovation complète de maisons, d’appartements, de bureaux, de commerces et d’autres espaces, de la planification aux finitions de décoration."
  },
  {
    id: "faq-4",
    question: "Proposez-vous un devis avant les travaux ?",
    answer: "Oui. Après un premier échange téléphonique ou par écrit, et si nécessaire une visite gratuite ou payante du site (selon la complexité), nous vous présentons une estimation claire et détaillée des travaux."
  },
  {
    id: "faq-5",
    question: "Travaillez-vous avec les entreprises ?",
    answer: "Oui. Nos services s’adressent aux particuliers pour leurs résidences, mais aussi aux entreprises, commerces, boutiques, salons de beauté et responsables de bâtiments professionnels."
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Échange sur votre besoin",
    description: "Vous nous expliquez votre projet, les travaux souhaités et le résultat recherché."
  },
  {
    step: "02",
    title: "Visite du site",
    description: "Nous évaluons l’état du bâtiment, les dimensions et les contraintes techniques."
  },
  {
    step: "03",
    title: "Proposition et devis",
    description: "Nous vous présentons les travaux recommandés et une estimation adaptée."
  },
  {
    step: "04",
    title: "Réalisation des travaux",
    description: "Les travaux sont exécutés conformément aux éléments définis avec le client."
  },
  {
    step: "05",
    title: "Vérification et finitions",
    description: "Nous contrôlons le résultat et effectuons les derniers ajustements."
  }
];

export const BUILDING_TYPES = [
  "Maison",
  "Appartement",
  "Bureau",
  "Boutique",
  "Commerce",
  "Restaurant",
  "Immeuble",
  "Autre"
];

export const SERVICE_OPTIONS = [
  "Installation électrique",
  "Dépannage électrique",
  "Rénovation électrique",
  "Rénovation complète",
  "Décoration intérieure",
  "Installation de luminaires",
  "Travaux de finition",
  "Autre projet"
];
