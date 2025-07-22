import { buttonVariants } from "@/components/ui/button";
import { Section } from "./Section";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { GithubIcon } from "./icons/Githubicon";
import { Linkedinicons } from "./icons/Linkedinicon";

export const Header = () => {
  return (
    <header className="sticky top-0">
      <Section classname="flex items-baseline">
        <h1 className="flex mt-3 text-4xl font-bold">Peuraud_pierre.com</h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link
            href="https://github.com/Peuraud-Pierre"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <GithubIcon size={16} className="text-foreground" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/pierre-peuraud-83b555304/"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <Linkedinicons size={16} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
