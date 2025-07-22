import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  return (
    <Section classname="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Skills</Badge>
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        <p>J&apos;aime le code.</p>
      </h2>
      <div className="flex flex-col gap-6">
        <div>
          <div className="flex flex-row items-center gap-2 mb-2">
            <svg
              className="w-10 h-10 text-primary-foreground lg:w-6 lg:h-6"
              fill="rgb(170, 170, 192)"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.1371 6.91018C13.4184 6.7695 13.7123 6.59981 14 6.40001V8C14 9.65685 11.3137 11 8 11C4.68629 11 2 9.65685 2 8V6.40001C2.28772 6.59981 2.58158 6.7695 2.86293 6.91018C4.28096 7.61919 6.09998 8 8 8C9.90002 8 11.719 7.61919 13.1371 6.91018Z"
                fill="rgb(170, 170, 192)"
              />
              <path
                d="M2 11.4V13C2 14.6569 4.68629 16 8 16C11.3137 16 14 14.6569 14 13V11.4C13.7123 11.5998 13.4184 11.7695 13.1371 11.9102C11.719 12.6192 9.90002 13 8 13C6.09998 13 4.28096 12.6192 2.86293 11.9102C2.58158 11.7695 2.28772 11.5998 2 11.4Z"
                fill="rgb(170, 170, 192)"
              />
              <path
                d="M8 0C11.3137 0 14 1.34315 14 3C14 4.65685 11.3137 6 8 6C4.68629 6 2 4.65685 2 3C2 1.34315 4.68629 0 8 0Z"
                fill="rgb(170, 170, 192)"
              />
            </svg>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">SQL</h3>
          </div>

          <p className="text-sm text-muted-foreground">
            Gérant la gestion de bases de données relationnelles des mes projets, je maîtrise la
            conception, l’optimisation et la sécurisation des structures SQL. Capable d’écrire des
            requêtes complexes et de gérer efficacement de gros volumes de données, je veille
            toujours à la performance et à la fiabilité des systèmes. Mon approche rigoureuse
            garantit une intégrité des données sans compromis.
          </p>
        </div>

        <div>
          <div className="flex flex-row items-center gap-2 mb-2">
            <svg
              className="w-10 h-10 text-primary-foreground lg:w-6 lg:h-6"
              fill="currentColor"
              viewBox="0 0 261.76 226.69"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  fill="rgb(170, 170, 192)"
                  d="M261.76,0H209.6L130.88,130.85L52.16,0H0L130.88,226.69Z"
                />
                <path
                  fill="#35495e"
                  d="M52.16,0l78.72,130.85L209.6,0h-52.16l-26.56,45.71L78.72,0Z"
                />
              </g>
            </svg>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Vue js</h3>
          </div>

          <p className="text-sm text-muted-foreground">
            Développeur expérimenté avec Vue.js, je conçois des interfaces utilisateur dynamiques,
            réactives et performantes. Maîtrisant la composition d’applications modulaires avec Vue
            CLI, Vue Router et Pinia, je construis des solutions maintenables et scalables. Attentif
            à l’expérience utilisateur et à la qualité du code, je mets un point d’honneur à
            respecter les bonnes pratiques du framework. Mon approche structurée assure une
            navigation fluide et une intégration optimale côté front-end.
          </p>
        </div>
        <div>
          <div className="flex flex-row items-center gap-2 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 120" width="40" height="36">
              <path
                d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                fill="rgb(170, 170, 192)"
              />
            </svg>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Tailwind</h3>
          </div>

          <p className="text-sm text-muted-foreground">
            Développeur passionné par les design systems, je m’investis activement dans
            l’utilisation de Tailwind CSS pour sa philosophie minimaliste et son efficacité dans la
            création d’interfaces modernes. J’intègre cet outil avec enthousiasme dans mes projets
            afin de concevoir des interfaces cohérentes, élégantes et adaptatives. Grâce à son
            approche utilitaire, je développe rapidement des composants UI réutilisables tout en
            maintenant un code clair, lisible et maintenable. Je suis attentif aux évolutions de
            l’écosystème Tailwind (plugins, conventions, bonnes pratiques) et j’exploite ses
            fonctionnalités avancées pour personnaliser chaque design. Tailwind me permet d’offrir
            une expérience utilisateur fluide, performante et accessible, en respectant les
            standards actuels du web et les attentes des utilisateurs.
          </p>
        </div>
      </div>
    </Section>
  );
};
