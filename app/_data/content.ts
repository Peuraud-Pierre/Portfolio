// Tout le contenu du portfolio est centralisé ici : modifie ce fichier pour changer les textes.

export const SITE = {
  brand: "PIERRE",
  name: "Peuraud Pierre",
  role: "Développeur Full-Stack",
  tagline: "Développeur Full-Stack & étudiant à Zone01 — je construis des applications rapides, robustes et soignées.",
  email: "peuraudpierre9@gmail.com",
  phone: "06 67 84 54 01",
  phoneHref: "tel:+33667845401",
  address: "Rouen, Normandie",
};

export const SOCIALS = {
  github: "https://github.com/Peuraud-Pierre",
  linkedin: "https://www.linkedin.com/in/pierre-peuraud-83b555304/",
};

export const NAV_ITEMS = [
  { label: "Accueil", href: "#home" },
  { label: "À propos", href: "#about" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  headline: "Crafting",
  subtitle: "Des expériences digitales fluides",
  cta: "Voir les projets",
};

export const ABOUT = {
  titleTop: "Je transforme les idées",
  titleBottom: "en réalité digitale.",
  paragraphs: [
    "Je suis développeur, actuellement en formation chez Zone01 Rouen Normandie. J'aime concevoir des applications complètes, du back-end au front-end, en alliant code propre, performances et interfaces soignées.",
    "En dehors des projets de l'école, j'explore de nouvelles technologies, je teste de nouveaux outils et je construis des projets qui me poussent à progresser. Je suis toujours ouvert aux collaborations, aux nouveaux défis et aux opportunités de créer quelque chose qui compte.",
  ],
  tools: [
    {
      title: "Front-end",
      icon: "layout",
      items: "JavaScript, TypeScript, React, Next.js, Vue.js, HTML5, CSS3, Tailwind CSS.",
    },
    {
      title: "Back-end",
      icon: "server",
      items: "Go, Rust, C, Node.js, SQL / SQLite, API REST, WebSockets.",
    },
    {
      title: "Outils",
      icon: "wrench",
      items: "Git / GitHub, Docker, Linux, Makefile, Vercel, Figma.",
    },
  ],
} as const;

// Bandeau défilant : les jeux vidéo que je recommande (images et liens Steam, via leur ID).
export const MARQUEE = {
  caption: "Quelques jeux que je recommande si tu cherches ta prochaine aventure :)",
  items: [
    { title: "Spiritfarer", steamId: 972660 },
    { title: "The Binding of Isaac: Rebirth", steamId: 250900 },
    { title: "Valheim", steamId: 892970 },
    { title: "Terraria", steamId: 105600 },
    { title: "Subnautica", steamId: 264710 },
    { title: "Monster Hunter Wilds", steamId: 2246340 },
  ],
};

export const PROJECTS_INTRO = {
  title: "Projets sélectionnés",
  subtitle:
    "Des apps desktop aux réseaux sociaux temps réel — chaque projet résout un vrai problème, avec rigueur et efficacité.",
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  url: string;
  // Capture d'écran optionnelle (ex: "/projects/social.png"), sinon un aperçu stylisé est généré.
  image?: string;
  preview: { kind: "terminal" | "web" | "code" | "vinyl"; lines: string[] };
  // Projet mis en avant : badge "Projet phare" et lien de téléchargement
  featured?: boolean;
  downloadUrl?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Vinyl",
    description:
      "Une platine vinyle pour Mac qui affiche et pilote Apple Music et Spotify : le disque tourne à 33⅓ tours/min avec la pochette au centre, et glisser le bras de lecture avance dans le morceau. Widget flottant, textures de disque, bibliothèque, pages artiste et carte de partage.",
    tags: ["GO", "WAILS", "TYPESCRIPT", "SWIFT", "SPOTIFY API"],
    url: "https://github.com/Peuraud-Pierre/vinyl",
    downloadUrl: "https://github.com/Peuraud-Pierre/vinyl/releases/latest",
    featured: true,
    preview: { kind: "vinyl", lines: ["Now playing", "Apple Music · Spotify"] },
  },
  {
    title: "Social Network",
    description:
      "Un réseau social complet avec groupes, chat en temps réel et fil de publications inspiré de Pinterest — back-end en Go, front-end en Vue.js.",
    tags: ["GO", "VUE.JS", "WEBSOCKETS"],
    url: "https://github.com/Peuraud-Pierre/Social_Network",
    preview: { kind: "web", lines: ["Fil d'actualité", "Groupes", "Messages"] },
  },
  {
    title: "Rust Server",
    description:
      "Un serveur HTTP écrit en Rust, l'un de mes tout premiers projets dans ce langage — gestion des requêtes, routage et fichiers statiques.",
    tags: ["RUST", "HTTP", "MAKEFILE"],
    url: "https://github.com/Peuraud-Pierre/Rust-Server",
    preview: {
      kind: "code",
      lines: [
        "fn main() -> std::io::Result<()> {",
        "    let listener = TcpListener::bind(\"0.0.0.0:8080\")?;",
        "    for stream in listener.incoming() {",
        "        handle_connection(stream?);",
        "    }",
        "    Ok(())",
        "}",
      ],
    },
  },
  {
    title: "ATM Management",
    description:
      "Une simulation d'interface de distributeur de billets dans le terminal : comptes, transactions et persistance des données, entièrement en C.",
    tags: ["C", "SQLITE", "CLI"],
    url: "https://github.com/Peuraud-Pierre/atm-management-system",
    preview: {
      kind: "terminal",
      lines: [
        "$ ./atm",
        "======= ATM =======",
        "[1] Créer un compte",
        "[2] Consulter mes comptes",
        "[3] Faire une transaction",
        "[4] Quitter",
        "> _",
      ],
    },
  },
];

export const CONTACT_INTRO = {
  title: "Restons en contact",
  subtitle: "Une idée ou un projet en tête ? Écris-moi et construisons quelque chose de génial ensemble.",
  cardTitle: "Me contacter",
  cardText:
    "Pour toute question, proposition de stage ou de collaboration, remplis le formulaire. Je réponds généralement sous 24 h.",
};
