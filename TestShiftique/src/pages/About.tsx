import { Users, Target, Lightbulb, Heart } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const traits = [
  { icon: Users, label: "Mensgericht" },
  { icon: Target, label: "Resultaatgericht" },
  { icon: Lightbulb, label: "Pragmatisch" },
  { icon: Heart, label: "Bruggenbouwer" },
];

const About = () => (
  <main>
    {/* Intro */}
    <section className="py-24 md:py-32">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">Over mij</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="mb-8 text-3xl font-bold md:text-5xl leading-[1.1]">
            Van projectmanager naar programmamanager — altijd op het snijvlak.
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Als projectmanager werk ik op de plek waar IT en business samenkomen. Ik groei richting programmamanagement en heb ervaring opgebouwd bij zowel scale-ups als corporates, in België en internationaal. Ik ben actief lid van JCI (Junior Chamber International), waar ik mijn leiderschaps- en netwerkvaardigheden verder ontwikkel.
            </p>
            <p>
              Mijn aanpak? Er zijn meer uitdagingen dan problemen, en er is altijd meer dan één oplossing. Ik geloof in de kracht van samenwerking, heldere communicatie en een pragmatische blik.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Working style */}
    <section className="py-20 bg-card">
      <div className="container">
        <ScrollReveal>
          <h2 className="mb-10 text-2xl font-bold md:text-3xl">Werkstijl</h2>
        </ScrollReveal>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {traits.map((t, i) => (
            <ScrollReveal key={t.label} delay={i * 0.07}>
              <div className="flex flex-col items-center gap-3 rounded-xl border border-border bg-background p-6 text-center shadow-sm">
                <div className="rounded-lg bg-secondary/10 p-3 text-secondary">
                  <t.icon size={22} />
                </div>
                <span className="text-sm font-semibold">{t.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Tech & Bruges */}
    <section className="py-20">
      <div className="container grid gap-16 md:grid-cols-2">
        <ScrollReveal direction="left">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Tech & Innovatie</h2>
            <p className="leading-relaxed text-muted-foreground">
              Ik ben gefascineerd door de mogelijkheden van AI en low-code tools. Microsoft Power Platform is een van mijn favoriete ecosystemen — het democratiseert technologie en stelt teams in staat om sneller en slimmer te werken. Ik blijf voortdurend experimenteren met nieuwe tools en deel graag mijn inzichten.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="right">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Brugge in het hart</h2>
            <p className="leading-relaxed text-muted-foreground">
              Brugge is meer dan chocolade en kanalen. Als local schrijf ik over de verborgen kant van de stad — van stille binnentuinen tot de beste koffietentjes. Ik wil laten zien wat het leven in Brugge echt bijzonder maakt, voorbij de toeristische clichés.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default About;
