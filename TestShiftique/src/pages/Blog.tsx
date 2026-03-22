import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const posts = [
  {
    category: "PM & Tech",
    title: "Hoe AI projectmanagement transformeert",
    excerpt: "Ontdek hoe slimme tools je dagelijkse workflow efficiënter maken en betere resultaten opleveren voor je team.",
    date: "12 mrt 2026",
    readTime: "4 min",
  },
  {
    category: "PM & Tech",
    title: "Low-code: hype of toekomst?",
    excerpt: "Een eerlijke blik op de beloftes en beperkingen van low-code platformen in enterprise-omgevingen.",
    date: "28 feb 2026",
    readTime: "5 min",
  },
  {
    category: "Bruges Local",
    title: "5 verborgen binnentuinen in Brugge",
    excerpt: "Stap even weg van de drukte en ontdek de stilste plekjes in het hart van de stad.",
    date: "5 mrt 2026",
    readTime: "3 min",
  },
  {
    category: "Bruges Local",
    title: "De beste koffietentjes volgens een local",
    excerpt: "Vergeet de toeristenvallen — hier drink je de lekkerste koffie van Brugge, getest en goedgekeurd.",
    date: "18 feb 2026",
    readTime: "4 min",
  },
];

const categories = ["Alles", "PM & Tech", "Bruges Local"] as const;

const Blog = () => {
  const [active, setActive] = useState<string>("Alles");
  const filtered = active === "Alles" ? posts : posts.filter((p) => p.category === active);

  return (
    <main>
      <section className="py-24 md:py-32">
        <div className="container">
          <ScrollReveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">Blog</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="mb-8 text-3xl font-bold md:text-5xl leading-[1.1]">Inzichten & verhalen</h1>
          </ScrollReveal>

          {/* Category filter */}
          <ScrollReveal delay={0.15}>
            <div className="mb-10 flex gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors active:scale-[0.97] ${
                    active === cat
                      ? "bg-secondary text-secondary-foreground shadow-sm"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid gap-8 sm:grid-cols-2">
            {filtered.map((post, i) => (
              <ScrollReveal key={post.title} delay={i * 0.07}>
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
};

export default Blog;
