"use client";

import { useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/fade-in";
import { camminoPillars, siteImages } from "./content";

const CamminoParticles = dynamic(
  () => import("./cammino-particles").then((m) => m.CamminoParticles),
  { ssr: false },
);

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function CamminoSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section id="cammino" className="scroll-mt-24 px-4 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-(--petrol) text-(--paper) shadow-[0_16px_48px_-20px_rgba(51,51,51,0.3)] sm:rounded-3xl">
        <CamminoParticles />

        {/* Hero */}
        <div
          ref={heroRef}
          className="relative h-[44vh] min-h-64 overflow-hidden sm:h-[50vh] sm:min-h-80"
        >
          <motion.div style={{ y: heroY }} className="absolute -inset-[12%]">
            <Image
              src={siteImages.camminoMain}
              alt="Una comunità al lavoro durante un laboratorio"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </motion.div>

          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(142,159,147,0.35)_0%,transparent_40%,transparent_55%,rgb(142,159,147)_100%)]" />

          <div className="absolute inset-0 flex flex-col justify-end px-5 pb-8 sm:px-10 sm:pb-10 lg:px-14 lg:pb-12">
            <FadeIn>
              <Badge variant="inverted" className="mb-3">
                Cammino dei Selvatici
              </Badge>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="max-w-3xl font-display text-3xl leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Un cammino che unisce{" "}
                <span className="text-(--sun)">territori</span>, persone e{" "}
                <span className="text-(--sun)">saperi</span>.
              </h2>
            </FadeIn>
          </div>
        </div>

        {/* Body */}
        <div className="relative space-y-10 px-5 pb-10 pt-8 sm:space-y-12 sm:px-8 sm:pb-12 sm:pt-10 lg:px-12 lg:pb-14 lg:pt-12">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <p className="text-base leading-8 text-white/70 sm:text-lg sm:leading-9">
              La visione a lungo termine è una rete diffusa di orti, cucine,
              ricette, biodiversità e comunità. Non un luogo unico, ma molti
              luoghi collegati da pratiche condivise e benessere collettivo.
            </p>
          </FadeIn>

          {/* Oggi / Domani */}
          <div className="grid gap-4 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease }}
              className="rounded-2xl border border-white/10 bg-white/8 p-6 sm:p-7"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--sun)">
                Oggi
              </p>
              <p className="mt-3 text-sm leading-7 text-white/68">
                Laboratori, esperienze culinarie e incontri che costruiscono
                relazione tra persone, cibo e territorio.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease }}
              className="rounded-2xl border border-white/10 bg-white/8 p-6 sm:p-7"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--sun)">
                Domani
              </p>
              <p className="mt-3 text-sm leading-7 text-white/68">
                Una rete attiva di orti, cucine, ricette e memoria locale,
                capace di mettere in circolo pratiche di cura e conoscenza.
              </p>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/15 to-transparent" />
            <div className="flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.08, ease }}
                  className="block size-1.5 rounded-full bg-(--sun)/40"
                />
              ))}
            </div>
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/15 to-transparent" />
          </div>

          {/* Pillar cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {camminoPillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease }}
                  className="group rounded-2xl border border-white/10 bg-white/8 p-6 transition-all duration-300 hover:border-white/18 hover:bg-white/12"
                >
                  <div className="relative mb-3 inline-flex size-10 items-center justify-center rounded-xl bg-white/10 text-(--sun)">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mb-2 font-display text-lg leading-tight text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-6 text-white/58">
                    {pillar.text}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Vision card */}
          <FadeIn>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="grid gap-0 md:grid-cols-[1fr_1.15fr]">
                <div className="relative min-h-56 sm:min-h-64">
                  <Image
                    src={siteImages.camminoVision}
                    alt="Un momento di condivisione nella comunità"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-transparent to-[#8e9f93]/30 max-md:bg-linear-to-b max-md:from-transparent max-md:to-[#8e9f93]/50" />
                </div>

                <div className="flex flex-col justify-center p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--sun)">
                    Visione in divenire
                  </p>
                  <p className="mt-3 font-display text-2xl leading-tight text-white sm:text-3xl">
                    Dalle esperienze di oggi a una rete viva di territori in
                    ascolto reciproco.
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/62">
                    Un domani fatto di cucine condivise, orti connessi e nuovi
                    modi di riconoscersi comunità attraverso la cura.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* CTA */}
          <FadeIn className="flex justify-center pt-2">
            <Button asChild size="lg" variant="earth">
              <a href="#contact">
                Parliamo del prossimo tratto
                <ArrowRight className="ml-1 size-4" />
              </a>
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
