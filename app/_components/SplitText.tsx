"use client";

import { motion } from "framer-motion";

type Props = {
  text: string;
  as?: "h2" | "h3" | "p";
  className?: string;
  // délai entre chaque lettre, en secondes
  stagger?: number;
};

// Fait apparaître le texte lettre par lettre quand il entre dans l'écran.
export const SplitText = ({ text, as = "h2", className, stagger = 0.025 }: Props) => {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      aria-label={text}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1, margin: "-50px" }}
      transition={{ staggerChildren: stagger }}
    >
      {text.split(" ").map((word, w) => (
        <span key={w} className="inline-block whitespace-nowrap" aria-hidden="true">
          {word.split("").map((char, c) => (
            <motion.span
              key={c}
              className="inline-block"
              variants={{ hidden: { opacity: 0, y: 45 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {char}
            </motion.span>
          ))}
          {" "}
        </span>
      ))}
    </Tag>
  );
};
