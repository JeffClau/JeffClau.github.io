import ScrollReveal from "@/components/ScrollReveal";

const projects = [
  {
    sector: "Financiële sector",
    title: "Digitale transformatie klantportaal",
    challenge: "Een verouderd klantportaal moderniseren zonder operationele downtime.",
    approach: "Agile migratie in sprints met nauwe samenwerking tussen IT en klantenteams.",
    result: "40% snellere laadtijden en 25% hogere klanttevredenheid binnen 6 maanden.",
    tools: ["Azure DevOps", "Power Automate", "React"],
  },
  {
    sector: "Gezondheidszorg",
    title: "Workflow-automatisering ziekenhuisgroep",
    challenge: "Handmatige processen tussen afdelingen leidden tot vertragingen en fouten.",
    approach: "Procesanalyse en implementatie van low-code automatisering met Power Platform.",
    result: "60% reductie in handmatige taken en nul kritieke fouten in het eerste kwartaal.",
    tools: ["Power Apps", "Power Automate", "SharePoint"],
  },
  {
    sector: "Retail & E-commerce",
    title: "Omnichannel inventarisbeheer",
    challenge: "Voorraaddata was gefragmenteerd over meerdere systemen en kanalen.",
    approach: "Centrale data-integratie met real-time dashboarding en geautomatiseerde alerts.",
    result: "Voorraadnauwkeurigheid steeg van 78% naar 97%, out-of-stock daalde met 35%.",
    tools: ["Power BI", "Dynamics 365", "Azure Functions"],
  },
];

const Projects = () => (
  <main>
    <section className="py-24 md:py-32">
      <div className="container">
        <ScrollReveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">Projecten</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="mb-12 text-3xl font-bold md:text-5xl leading-[1.1]">Geselecteerde cases</h1>
        </ScrollReveal>

        <div className="grid gap-8">
          {projects.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.08}>
              <article className="rounded-xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md">
                <span className="mb-4 inline-block rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold">
                  {p.sector}
                </span>
                <h3 className="mb-5 text-xl font-bold">{p.title}</h3>

                <div className="grid gap-6 md:grid-cols-3">
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Uitdaging</p>
                    <p className="text-sm leading-relaxed text-foreground/80">{p.challenge}</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Aanpak</p>
                    <p className="text-sm leading-relaxed text-foreground/80">{p.approach}</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Resultaat</p>
                    <p className="text-sm leading-relaxed text-foreground/80">{p.result}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-2">
                  {p.tools.map((tool) => (
                    <span key={tool} className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                      {tool}
                    </span>
                  ))}
                </div>

                <button className="mt-6 text-sm font-semibold text-secondary hover:underline underline-offset-4 transition-colors active:scale-[0.97]">
                  Lees meer →
                </button>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Projects;
