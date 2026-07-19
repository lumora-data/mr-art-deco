import type { Metadata } from "next";
import "../index.css";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWhatsAppButton from "../components/FloatingWhatsAppButton";
import BackToTopButton from "../components/BackToTopButton";

export const metadata: Metadata = {
  title: "Mr. Light Art Deco | Électricité, rénovation et décoration à Douala",
  description:
    "Mr. Light Art Deco réalise vos projets d'électricité bâtiment, rénovation complète, décoration intérieure et installation de luminaires à Douala.",
  icons: {
    icon: "/images/logo.jpeg",
    apple: "/images/logo.jpeg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <div
          id="app-root-wrapper"
          className="flex min-h-screen flex-col bg-[#FAF8F3] text-[#211F1C] selection:bg-[#C9972B]/30 selection:text-[#11100F]"
        >
          <TopBar />
          <Header />
          <main id="app-main-content-area" className="flex-grow">
            {children}
          </main>
          <Footer />
          <FloatingWhatsAppButton />
          <BackToTopButton />
        </div>
      </body>
    </html>
  );
}
