import { ArrowRight, Briefcase, Cpu, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const iconBlocks = [
  {
    icon: Briefcase,
    title: "Project Management",
    desc: "Resultaatgericht programma- en projectmanagement op het snijvlak van IT en business.",
  },
  {
    icon: Cpu,
    title: "Tech & Innovatie",
    desc: "Verkennen en implementeren van AI, low-code tools en Microsoft Power Platform.",
  },
  {
    icon: MapPin,
    title: "Bruges Local",
    desc: "Brugge ontdekken voorbij de toeristische paden — verborgen parels en lokale tips.",
  },
];

const recentPosts = [
  {
    category: "PM & Tech",
    title: "Hoe AI projectmanagement transformeert",
    excerpt: "Ontdek hoe slimme tools je dagelijkse workflow efficiënter maken en betere resultaten opleveren.",
    date: "12 mrt 2026",
    readTime: "4 min",
  },
  {
    category: "Bruges Local",
    title: "5 verborgen binnentuinen in Brugge",
    excerpt: "Stap even weg van de drukte en ontdek de stilste plekjes in het hart van de stad.",
    date: "5 mrt 2026",
    readTime: "3 min",
  },
];

const Home = () => (
  <main>
    {/* Hero */}
    <section className="relative overflow-hidden py-24 md:py-36">
      <div className="container relative z-10 flex flex-col items-start gap-6">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
            Bridging IT &amp; Business · Bruges Local · PM &amp; Innovator
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="text-4xl font-bold leading-[1.08] md:text-6xl lg:text-7xl">
            Hallo, ik ben{" "}
            <span className="text-secondary">Evelyn</span>.
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            Ik verbind IT en business als projectmanager met een passie voor innovatieve technologie.
            Daarnaast schrijf ik graag over het Brugge dat toeristen niet kennen.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <Link
            to="/contact"
            className="group mt-2 inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground shadow-lg shadow-secondary/20 transition-all hover:shadow-xl hover:shadow-secondary/30 active:scale-[0.97]"
          >
            Let's connect
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </ScrollReveal>
      </div>
      {/* Decorative blob */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-secondary/8 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-gold/6 blur-3xl" />
    </section>

    {/* Icon blocks */}
    <section className="py-20">
      <div className="container grid gap-8 md:grid-cols-3">
        {iconBlocks.map((block, i) => (
          <ScrollReveal key={block.title} delay={i * 0.08}>
            <div className="group rounded-xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 inline-flex rounded-lg bg-secondary/10 p-3 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                <block.icon size={24} />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{block.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{block.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* Recent blog posts */}
    <section className="py-20">
      <div className="container">
        <ScrollReveal>
          <h2 className="mb-10 text-2xl font-bold md:text-3xl">Recente artikelen</h2>
        </ScrollReveal>
        <div className="grid gap-8 md:grid-cols-2">
          {recentPosts.map((post, i) => (
            <ScrollReveal key={post.title} delay={i * 0.08}>
              <article className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <span className={`mb-3 w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                  post.category === "PM & Tech"
                    ? "bg-secondary/10 text-secondary"
                    : "bg-rose/10 text-rose"
                }`}>
                  {post.category}
                </span>
                <h3 className="mb-2 text-lg font-semibold group-hover:text-secondary transition-colors">{post.title}</h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime} leestijd</span>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Home;
