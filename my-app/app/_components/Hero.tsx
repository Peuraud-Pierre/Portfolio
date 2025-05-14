import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/30 border border-accent hover:bg-accent/50 transition-colors rounded-sm font-mono px-1 py-0.5",
        className
      )}
      {...props}
    />
  );
};
export const Hero = () => {
  return (
    <Section classname="flex max-lg:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption text-5xl">Peuraud Pierre</h2>
        <h3 className="text-3xl font-caption">Software developer and creator</h3>
        <p>
          Bienvenue sur mon portfolio ! Je suis un passionné de création de contenu et un
          développeur actif sur{" "}
          <Link href="https://github.com/Peuraud-Pierre">
            <Code>Github</Code>
          </Link>
          . Actuellement, je travaille chez{" "}
          <Link href="https://zone01rouennormandie.org/">
            <Code>Zone01</Code>
          </Link>
          , une entreprise dynamique où je mets à profit mes compétences techniques et créatives
          pour développer des solutions innovantes. En tant que créateur de contenu, je partage
          régulièrement mes projets, mes expériences et mes idées avec la communauté. Je suis
          constamment en quête de nouveaux défis pour perfectionner mes compétences et contribuer à
          des projets passionnants.
        </p>
      </div>
      <div className=" w-full h-auto -max-w-xs max-md:w-56 m-auto flex-[2]  aspect-square rounded-full bg-[url('https://i.pinimg.com/736x/57/6c/d5/576cd5147cc1cb750df33ef6af22e25f.jpg')] bg-cover bg-center bg-no-repeat ring-4 ring-gray-300"></div>
    </Section>
  );
};
