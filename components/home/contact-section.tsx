import Image from "next/image";
import { MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { contactDetails, contactInterests, siteImages } from "./content";
import { SectionHeading } from "./section-heading";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="space-y-2">
      <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-black/52">
        {label}
      </span>
      {children}
    </label>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow="Contatti"
          title="Portiamo I Selvatici dove serve cura, relazione e manualita."
          description="Se vuoi ospitare un laboratorio, costruire un percorso su misura o organizzare un'esperienza privata, raccontaci il contesto. Ti aiutiamo a capire quale forma puo prendere l'incontro."
        />

        <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="space-y-5">
            <Card className="overflow-hidden border-white/50 bg-white/80">
              <div className="relative h-72">
                <Image
                  src={siteImages.contactMain}
                  alt="Contesto di laboratorio pronto ad accogliere nuove esperienze"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 28vw"
                />
              </div>
              <CardContent className="grid gap-4 pt-6 sm:grid-cols-2">
                <div className="rounded-3xl bg-(--paper) px-4 py-4">
                  <div className="flex items-center gap-2 text-(--olive)">
                    <MapPin className="size-4" />
                    <p className="text-xs font-semibold uppercase tracking-[0.2em]">
                      Dove siamo
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-black/72">
                    {contactDetails.location}
                  </p>
                </div>
                <div className="rounded-3xl bg-(--paper) px-4 py-4">
                  <div className="flex items-center gap-2 text-(--brown)">
                    <Phone className="size-4" />
                    <p className="text-xs font-semibold uppercase tracking-[0.2em]">
                      Copertura
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-black/72">
                    {contactDetails.coverage}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-white/50 bg-white/78">
              <div className="grid gap-0 sm:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-52">
                  <Image
                    src={siteImages.contactDetail}
                    alt="Dettaglio di una giornata condivisa"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 18vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--brown)">
                    Contatto diretto
                  </p>
                  <div className="mt-4 space-y-3 text-base text-black/74">
                    {contactDetails.phones.map((phone) => (
                      <a
                        key={phone}
                        className="block rounded-[1.35rem] bg-(--paper) px-4 py-4 transition hover:bg-white"
                        href={`tel:${phone.replace(/\s+/g, "")}`}
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-black/66">
                    Email in aggiornamento. Intanto puoi contattarci
                    telefonicamente oppure usare il modulo per prepararci il
                    contesto.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="overflow-hidden border-white/55 bg-white/84">
            <div className="grid gap-0 xl:grid-cols-[0.42fr_0.58fr]">
              <div className="border-b border-black/6 bg-[linear-gradient(180deg,rgba(239,228,209,0.75),rgba(255,250,244,0.9))] p-6 sm:p-8 xl:border-b-0 xl:border-r">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--olive)">
                  Prima di scriverci
                </p>
                <p className="mt-4 font-display text-3xl leading-tight text-foreground">
                  Più ci racconti il contesto, piu possiamo proporti una forma
                  giusta.
                </p>
                <p className="mt-4 text-sm leading-7 text-black/70">
                  Puoi partire da uno dei temi qui sotto oppure raccontarci
                  liberamente cosa vuoi attivare.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {contactInterests.map((interest) => (
                    <span
                      key={interest}
                      className="rounded-full bg-white/86 px-3 py-2 text-xs font-medium uppercase tracking-[0.14em] text-black/66"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <CardHeader className="p-0 pb-8">
                  <CardTitle className="text-[1.8rem]">
                    Modulo di primo contatto
                  </CardTitle>
                  <CardDescription className="text-sm leading-7">
                    Raccontaci chi sei, che tipo di esperienza immagini e per
                    quale realta stai scrivendo.
                  </CardDescription>
                </CardHeader>

                <div className="space-y-7">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Nome e cognome">
                      <Input
                        placeholder="Nome e cognome"
                        aria-label="Nome e cognome"
                      />
                    </Field>
                    <Field label="Email">
                      <Input
                        placeholder="Email"
                        aria-label="Email"
                        type="email"
                      />
                    </Field>
                    <Field label="Telefono">
                      <Input
                        placeholder="Telefono"
                        aria-label="Telefono"
                        type="tel"
                      />
                    </Field>
                    <Field label="Organizzazione o contesto">
                      <Input
                        placeholder="Scuola, gruppo, struttura, famiglia..."
                        aria-label="Organizzazione o contesto"
                      />
                    </Field>
                  </div>

                  <Field label="Interesse principale">
                    <select
                      aria-label="Interesse"
                      className="flex h-12 w-full rounded-full border border-black/10 bg-white/80 px-4 text-sm text-foreground outline-none transition focus-visible:border-(--petrol) focus-visible:ring-2 focus-visible:ring-(--petrol)/20"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Interesse principale
                      </option>
                      {contactInterests.map((interest) => (
                        <option key={interest} value={interest}>
                          {interest}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <div className="pt-2">
                    <Field label="Messaggio">
                      <Textarea
                        placeholder="Raccontaci il pubblico coinvolto, il luogo, l'obiettivo del percorso e il periodo in cui vorresti realizzarlo."
                        aria-label="Messaggio"
                      />
                    </Field>
                  </div>

                  <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                    <Button asChild size="lg" variant="earth">
                      <a href="tel:+393477930530">Chiama per prenotare</a>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="bg-white/70"
                    >
                      <a href="tel:+393471551887">Parla con il team</a>
                    </Button>
                  </div>

                  <p className="text-sm leading-7 text-black/60">
                    Questa prima versione raccoglie gia la struttura del
                    contatto. L&apos;invio via email verra collegato appena il
                    canale definitivo sara attivo.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
