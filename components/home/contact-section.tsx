"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { contactDetails, contactInterests, siteImages } from "./content";

function InterestChips({
  selected,
  onToggle,
}: {
  selected: Set<string>;
  onToggle: (interest: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {contactInterests.map((interest) => {
        const active = selected.has(interest);
        return (
          <button
            key={interest}
            type="button"
            onClick={() => onToggle(interest)}
            className={`rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-200 ${
              active
                ? "bg-(--peach) text-foreground shadow-sm ring-1 ring-(--peach)"
                : "bg-white/60 text-black/50 hover:bg-white/80 hover:text-black/68 active:bg-white/90"
            }`}
          >
            {interest}
          </button>
        );
      })}
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="space-y-1.5">
      <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-black/45">
        {label}
      </span>
      {children}
    </label>
  );
}

export function ContactSection() {
  const [selectedInterests, setSelectedInterests] = useState<Set<string>>(
    new Set(),
  );

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) => {
      const next = new Set(prev);
      if (next.has(interest)) {
        next.delete(interest);
      } else {
        next.add(interest);
      }
      return next;
    });
  };

  return (
    <section id="contact" className="scroll-mt-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="overflow-hidden rounded-2xl border border-white/50 bg-[linear-gradient(145deg,rgba(239,228,209,0.5),rgba(255,250,244,0.75))] shadow-[0_8px_32px_-12px_rgba(51,51,51,0.12)] sm:rounded-3xl">
            <div className="grid lg:grid-cols-[0.42fr_0.58fr]">
              {/* Left — Image + contact info */}
              <div className="relative min-h-56 sm:min-h-72 lg:min-h-0">
                <Image
                  src={siteImages.contactMain}
                  alt="Laboratorio pronto ad accogliere nuove esperienze"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/25 to-black/5 lg:bg-linear-to-r lg:from-black/5 lg:via-black/25 lg:to-black/65" />

                {/* Contact overlay */}
                <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-5 sm:p-7 lg:p-8">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-white/85">
                      <MapPin className="size-4 shrink-0" />
                      <span className="text-sm font-medium">
                        {contactDetails.location}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-white/55">
                      {contactDetails.coverage}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {contactDetails.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone.replace(/\s+/g, "")}`}
                          className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition active:bg-white/30 hover:bg-white/25"
                        >
                          <Phone className="size-3.5" />
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right — Form */}
              <div className="p-5 sm:p-8 lg:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--olive)">
                  Contatti
                </p>
                <h2 className="mt-2 font-display text-2xl leading-tight text-foreground sm:text-3xl lg:text-4xl">
                  Raccontaci il tuo progetto
                </h2>
                <p className="mt-2 max-w-md text-sm leading-6 text-black/52">
                  Descrivi il contesto e ti aiutiamo a trovare la forma giusta.
                </p>

                <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Nome e cognome">
                      <Input
                        placeholder="Il tuo nome"
                        aria-label="Nome e cognome"
                      />
                    </Field>
                    <Field label="Email">
                      <Input
                        placeholder="email@esempio.it"
                        aria-label="Email"
                        type="email"
                      />
                    </Field>
                    <Field label="Telefono">
                      <Input
                        placeholder="+39 ..."
                        aria-label="Telefono"
                        type="tel"
                      />
                    </Field>
                    <Field label="Organizzazione">
                      <Input
                        placeholder="Scuola, gruppo, struttura..."
                        aria-label="Organizzazione"
                      />
                    </Field>
                  </div>

                  <div className="space-y-2">
                    <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-black/45">
                      Cosa ti interessa?
                    </span>
                    <InterestChips
                      selected={selectedInterests}
                      onToggle={toggleInterest}
                    />
                  </div>

                  <Field label="Messaggio">
                    <Textarea
                      placeholder="Descrivi il pubblico, il luogo e il periodo desiderato..."
                      aria-label="Messaggio"
                    />
                  </Field>

                  <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center">
                    <Button
                      size="lg"
                      variant="earth"
                      className="w-full sm:w-auto"
                    >
                      Invia richiesta
                      <ArrowRight className="size-4" />
                    </Button>
                    <span className="text-center text-xs text-black/38 sm:text-left">
                      oppure chiamaci direttamente
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
