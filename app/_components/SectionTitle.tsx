import { SplitText } from "./SplitText";

export const SectionTitle = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
    <SplitText
      text={title}
      className="font-display text-5xl font-extrabold uppercase leading-none tracking-[-0.03em] text-bone sm:text-6xl lg:text-7xl"
      stagger={0.02}
    />
    <p className="mt-6 max-w-2xl sm:mt-10 font-sub text-xs font-bold uppercase leading-relaxed tracking-[0.3em] text-neutral-300 sm:text-sm">
      {subtitle}
    </p>
  </div>
);
