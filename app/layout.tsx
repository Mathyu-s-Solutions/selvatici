import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { PageLoader } from "@/components/ui/page-loader";
import "./globals.css";

const bodyFont = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const displayFont = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "I Selvatici | Esperienze di comunita tra terra, cibo e tradizione",
  description:
    "Laboratori di cucina, ortoterapia, cucito, personal chef e percorsi esperienziali radicati a Castelgrande, in Basilicata, e disponibili in tutta Italia.",
  keywords: [
    "I Selvatici",
    "laboratori di cucina",
    "ortoterapia",
    "laboratori di cucito",
    "chef a domicilio",
    "esperienze gastronomiche",
    "Castelgrande",
    "Basilicata",
    "comunita",
    "biodiversita",
  ],
  openGraph: {
    title: "I Selvatici",
    description:
      "Esperienze di comunita tra terra, cibo e tradizione: laboratori, cucina e percorsi territoriali da vivere insieme.",
    locale: "it_IT",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${bodyFont.variable} ${displayFont.variable} bg-background text-foreground font-sans antialiased`}
      >
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
