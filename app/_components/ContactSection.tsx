"use client";

import { FormEvent } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { CONTACT_INTRO, SITE } from "../_data/content";
import { SectionTitle } from "./SectionTitle";

const inputClass =
  "w-full rounded-md border border-white/15 bg-[#161618] px-3 py-2.5 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-pinkish/60";

export const ContactSection = () => {
  // Pas de back-end : on ouvre le client mail avec le message pré-rempli
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `Contact portfolio — ${data.get("name")}`;
    const body = `${data.get("message")}\n\n${data.get("name")}\n${data.get("email")}\n${data.get("phone") ?? ""}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="px-4 py-28 sm:px-8">
      <SectionTitle title={CONTACT_INTRO.title} subtitle={CONTACT_INTRO.subtitle} />

      <div className="mx-auto mt-20 grid max-w-[1056px] overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] md:grid-cols-[2fr_1fr]">
        <div className="p-8">
          <h3 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">{CONTACT_INTRO.cardTitle}</h3>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-400">{CONTACT_INTRO.cardText}</p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <Info icon={<Mail className="h-5 w-5" />} label="Email" value={SITE.email} href={`mailto:${SITE.email}`} />
            <Info icon={<Phone className="h-5 w-5" />} label="Téléphone" value={SITE.phone} href={SITE.phoneHref} />
            <Info icon={<MapPin className="h-5 w-5" />} label="Adresse" value={SITE.address} />
          </div>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-4 border-t border-white/10 p-5 md:border-l md:border-t-0">
          <Field label="Nom">
            <input name="name" required placeholder="Ton nom" className={inputClass} />
          </Field>
          <Field label="Email">
            <input name="email" type="email" required placeholder="ton.email@exemple.com" className={inputClass} />
          </Field>
          <Field label="Téléphone">
            <input name="phone" type="tel" placeholder="06 00 00 00 00" className={inputClass} />
          </Field>
          <Field label="Message">
            <textarea name="message" required rows={4} placeholder="Parle-moi de ton projet..." className={inputClass} />
          </Field>
          <button
            type="submit"
            className="mt-1 inline-flex items-center justify-center gap-2 rounded-md bg-white py-2.5 text-sm font-medium text-black transition-colors hover:bg-pinkish"
          >
            Envoyer <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
};

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <label className="flex flex-col gap-2 text-sm text-neutral-200">
    {label}
    {children}
  </label>
);

const Info = ({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) => (
  <div className="flex items-start gap-3">
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white/5 text-white">{icon}</span>
    <div>
      <p className="text-white">{label}</p>
      {href ? (
        <a href={href} className="text-xs text-neutral-400 hover:text-pinkish">
          {value}
        </a>
      ) : (
        <p className="text-xs text-neutral-400">{value}</p>
      )}
    </div>
  </div>
);
