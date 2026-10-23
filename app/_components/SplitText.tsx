import { Fragment } from "react";

type Props = {
  text: string;
  as?: "h2" | "h3" | "p";
  className?: string;
  // délai entre chaque lettre, en secondes
  stagger?: number;
};

// Fait apparaître le texte lettre par lettre quand il entre dans l'écran (animation en CSS,
// déclenchée par le script d'apparition de layout.tsx).
export const SplitText = ({ text, as: Tag = "h2", className, stagger = 0.025 }: Props) => {
  let index = 0;
  return (
    <Tag
      className={className}
      aria-label={text}
      data-reveal-split=""
      style={{ "--stagger": `${stagger}s` } as React.CSSProperties}
    >
      {text.split(" ").map((word, w) => (
        // L'espace est placé hors du mot : en fin de bloc inline-block, il serait supprimé
        <Fragment key={w}>
          {w > 0 && " "}
          <span className="inline-block whitespace-nowrap" aria-hidden="true">
            {word.split("").map((char, c) => (
              <span key={c} className="split-char" style={{ "--i": index++ } as React.CSSProperties}>
                {char}
              </span>
            ))}
          </span>
        </Fragment>
      ))}
    </Tag>
  );
};
