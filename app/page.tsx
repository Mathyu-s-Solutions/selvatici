import {
  AboutSection,
  AudiencesSection,
  CamminoSection,
  ContactSection,
  HeroSection,
  ServicesSection,
  SiteFooter,
  SiteHeader,
} from "@/components/home";

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-136 bg-[radial-gradient(circle_at_18%_0%,rgba(255,176,103,0.24),transparent_36%),radial-gradient(circle_at_88%_8%,rgba(142,159,147,0.2),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-96 bg-[radial-gradient(circle_at_50%_100%,rgba(248,206,121,0.18),transparent_36%)]" />

      <SiteHeader />
      <HeroSection />

      <main className="space-y-24 pb-16 lg:space-y-32 lg:pb-20">
        <AboutSection />
        <ServicesSection />
        <AudiencesSection />
        <CamminoSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
