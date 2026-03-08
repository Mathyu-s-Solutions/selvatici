"use client";

import { useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { camminoPillars, siteImages } from "./content";

const CamminoParticles = dynamic(
  () => import("./cammino-particles").then((m) => m.CamminoParticles),
  { ssr: false },
);

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function CamminoSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section id="cammino" className="scroll-mt-24 px-4 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-(--petrol) text-(--paper) shadow-[0_30px_90px_-38px_rgba(51,51,51,0.55)] sm:rounded-[3rem]">
        {/* Three.js floating seeds */}
        <CamminoParticles />

        {/* ── Hero ── */}
        <div
          ref={heroRef}
          className="relative h-[48vh] min-h-72 overflow-hidden sm:h-[54vh] sm:min-h-96"
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

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(142,159,147,0.35)_0%,transparent_40%,transparent_55%,rgb(142,159,147)_100%)]" />

          {/* Hero content */}
          <div className="absolute inset-0 flex flex-col justify-end px-5 pb-8 sm:px-10 sm:pb-12 lg:px-14 lg:pb-14">
            <FadeUp>
              <Badge variant="inverted" className="mb-4">
                Cammino dei Selvatici
              </Badge>
            </FadeUp>
            <FadeUp delay={0.12}>
              <h2 className="max-w-3xl font-display text-3xl leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Un cammino che unisce{" "}
                <span className="text-(--sun)">territori</span>, persone e{" "}
                <span className="text-(--sun)">saperi</span>.
              </h2>
            </FadeUp>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="relative space-y-10 px-5 pb-10 pt-8 sm:space-y-14 sm:px-8 sm:pb-14 sm:pt-10 lg:space-y-16 lg:px-12 lg:pb-16 lg:pt-12">
          {/* Description */}
          <FadeUp className="mx-auto max-w-3xl text-center">
            <p className="text-base leading-8 text-white/72 sm:text-lg sm:leading-9">
              La visione a lungo termine è una rete diffusa di orti, cucine,
              ricette, biodiversità e comunità. Non un luogo unico, ma molti
              luoghi collegati da pratiche condivise, memoria viva e benessere
              collettivo.
            </p>
          </FadeUp>

          {/* Oggi / Domani */}
          <div className="grid gap-4 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/8 p-6 backdrop-blur-sm transition-colors duration-300 hover:bg-white/12 sm:p-8"
            >
              <span className="absolute -right-4 -top-5 select-none font-display text-[7rem] font-bold leading-none text-white/[0.03]">
                01
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--sun)">
                Oggi
              </p>
              <p className="mt-3 text-sm leading-7 text-white/72">
                Laboratori, esperienze culinarie e incontri che costruiscono
                relazione tra persone, cibo e territorio.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/8 p-6 backdrop-blur-sm transition-colors duration-300 hover:bg-white/12 sm:p-8"
            >
              <span className="absolute -right-4 -top-5 select-none font-display text-[7rem] font-bold leading-none text-white/[0.03]">
                02
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--sun)">
                Domani
              </p>
              <p className="mt-3 text-sm leading-7 text-white/72">
                Una rete attiva di orti, cucine, ricette e memoria locale,
                capace di mettere in circolo pratiche di cura e conoscenza.
              </p>
            </motion.div>
          </div>

          {/* Decorative path marker */}
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
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
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          </div>

          {/* Pillar cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {camminoPillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/8 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/18 hover:bg-white/12 hover:shadow-[0_0_30px_-8px_rgba(248,206,121,0.12)]"
                >
                  {/* Watermark number */}
                  <span className="absolute -right-1 -top-3 select-none font-display text-[4.5rem] font-bold leading-none text-white/[0.04] transition-colors duration-300 group-hover:text-white/[0.07]">
                    0{i + 1}
                  </span>

                  {/* Icon */}
                  <div className="relative mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-white/10 text-(--sun) transition-all duration-300 group-hover:bg-(--sun)/15 group-hover:shadow-[0_0_20px_-4px_rgba(248,206,121,0.25)]">
                    <Icon className="size-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <h3 className="mb-2 font-display text-xl leading-tight text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-7 text-white/62">
                    {pillar.text}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Vision card */}
          <FadeUp>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="grid gap-0 md:grid-cols-[1fr_1.15fr]">
                <div className="relative min-h-64 sm:min-h-72">
                  <Image
                    src={siteImages.camminoVision}
                    alt="Un momento di condivisione nella comunità"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#8e9f93]/30 max-md:bg-gradient-to-b max-md:from-transparent max-md:to-[#8e9f93]/50" />
                </div>

                <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--sun)">
                    Visione in divenire
                  </p>
                  <p className="mt-4 font-display text-2xl leading-tight text-white sm:text-3xl">
                    Dalle esperienze di oggi a una rete viva di territori in
                    ascolto reciproco.
                  </p>
                  <p className="mt-4 text-sm leading-7 text-white/68">
                    Un domani fatto di cucine condivise, orti connessi, identità
                    locali valorizzate e nuovi modi di riconoscersi comunità
                    attraverso la cura.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-white/8 bg-white/8 px-4 py-3.5 text-sm leading-7 text-white/68">
                      Scambio di ricette, semi, tecniche e memoria locale.
                    </div>
                    <div className="rounded-xl border border-white/8 bg-white/8 px-4 py-3.5 text-sm leading-7 text-white/68">
                      Connessioni tra persone, paesaggi, biodiversità e
                      ospitalità.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Closing row */}
          <div className="grid gap-4 md:grid-cols-[0.45fr_0.55fr]">
            <FadeUp>
              <div className="relative h-full min-h-48 overflow-hidden rounded-2xl sm:min-h-56">
                <Image
                  src={siteImages.camminoDetail}
                  alt="Dettaglio di un momento condiviso"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="flex h-full flex-col justify-center rounded-2xl border border-white/10 bg-white/8 p-6 sm:p-8">
                <p className="font-display text-2xl leading-tight text-white sm:text-3xl">
                  Un cammino distribuito, concreto,{" "}
                  <span className="text-(--sun)">praticabile</span>.
                </p>
                <p className="mt-4 text-sm leading-7 text-white/68">
                  Non un manifesto astratto, ma una somma di luoghi reali e
                  relazioni attive che possono crescere nel tempo, tratto dopo
                  tratto.
                </p>
              </div>
            </FadeUp>
          </div>

          {/* CTA */}
          <FadeUp className="flex justify-center pt-2">
            <Button asChild size="lg" variant="earth">
              <a href="#contact">
                Parliamo del prossimo tratto di cammino
                <ArrowRight className="ml-1 size-4" />
              </a>
            </Button>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
