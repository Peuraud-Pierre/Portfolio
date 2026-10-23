import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { Geist_Mono, Josefin_Sans, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

// Police mono : seulement dans les aperçus de code, inutile de la précharger
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", preload: false });
const josefin = Josefin_Sans({ subsets: ["latin"], variable: "--font-josefin" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Peuraud Pierre — Développeur Full-Stack",
  description:
    "Portfolio de Peuraud Pierre, développeur Full-Stack diplômé de Zone01 Rouen Normandie, ex-Lead Developer chez Eurekafripe.",
};

// Apparitions au scroll pilotées par ces deux petits scripts intégrés au HTML : elles ne
// dépendent pas du chargement du JS de la page, qui peut prendre plusieurs secondes en 4G.
// Le premier, dans <head>, signale que le JS est actif (sans JS, tout reste simplement visible).
const REVEAL_FLAG = `document.documentElement.setAttribute("data-js","")`;
// Le second marque chaque élément [data-reveal…] dès qu'il entre dans l'écran.
const REVEAL_OBSERVER = `(()=>{
  const io=new IntersectionObserver((entries)=>{for(const e of entries)if(e.isIntersecting){e.target.setAttribute("data-in","");io.unobserve(e.target)}},{rootMargin:"0px 0px -40px 0px"});
  document.querySelectorAll("[data-reveal],[data-reveal-split],[data-reveal-draw]").forEach((el)=>io.observe(el));
})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: REVEAL_FLAG }} />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        {/* Cabinet Grotesk (Fontshare, licence gratuite) pour les gros titres */}
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@500,700,800&display=swap"
        />
      </head>
      <body
        className={cn(
          GeistSans.variable,
          geistMono.variable,
          josefin.variable,
          poppins.variable,
          "font-sans bg-black text-slate-100 antialiased overflow-x-hidden selection:bg-pink-300/30 selection:text-pink-100"
        )}
      >
        {children}
        <script dangerouslySetInnerHTML={{ __html: REVEAL_OBSERVER }} />
      </body>
    </html>
  );
}
