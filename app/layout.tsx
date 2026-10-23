import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Josefin_Sans, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const josefin = Josefin_Sans({ subsets: ["latin"], variable: "--font-josefin" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Peuraud Pierre — Développeur Full-Stack",
  description:
    "Portfolio de Peuraud Pierre, développeur Full-Stack et étudiant à Zone01 Rouen Normandie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark scroll-smooth">
      <head>
        {/* Cabinet Grotesk (Fontshare, licence gratuite) pour les gros titres */}
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@500,700,800&display=swap"
        />
      </head>
      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          josefin.variable,
          poppins.variable,
          "font-sans bg-black text-slate-100 antialiased overflow-x-hidden selection:bg-pink-300/30 selection:text-pink-100"
        )}
      >
        {children}
      </body>
    </html>
  );
}
