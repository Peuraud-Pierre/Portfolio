import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { Code } from "lucide-react";

export const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: Code,
    title: "Atm-management",
    description:
      "Ce projet est une simulation d'interface de Distributeur a billet dans le terminal de commande ",
    url: "https://github.com/Peuraud-Pierre/atm-management-system",
  },
  {
    Logo: Code,
    title: "Social_Network",
    description:
      "Ce projet est un resaux social contenant des groupes, un tchat, et une page de poste s'inspirant de Pinterest",
    url: "https://github.com/Peuraud-Pierre/Social_Network",
  },
  {
    Logo: Code,
    title: "Rust-Server",
    description:
      "Ce projet est un server fait en rust, l'un de mes tous premier projet dans ce language",
    url: "https://github.com/Peuraud-Pierre/Rust-Server",
  },
];

type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

export const SideProject = (props: SideProjectProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm flex items-center justify-center">
        {" "}
        <props.Logo className="w-6 h-6" />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};
