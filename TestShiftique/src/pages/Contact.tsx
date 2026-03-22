import { useState } from "react";
import { Linkedin, Send } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Bericht verzonden! Ik neem snel contact met je op.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main>
      <section className="py-24 md:py-32">
        <div className="container max-w-xl">
          <ScrollReveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">Contact</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="mb-4 text-3xl font-bold md:text-5xl leading-[1.1]">Laten we praten.</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mb-10 text-muted-foreground">
              Heb je een vraag, een projectidee of wil je gewoon even kennismaken? Stuur me een bericht!
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">Naam</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm shadow-sm outline-none transition-shadow focus:ring-2 focus:ring-secondary/40"
                  placeholder="Je naam"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">E-mail</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm shadow-sm outline-none transition-shadow focus:ring-2 focus:ring-secondary/40"
                  placeholder="je@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Bericht</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm shadow-sm outline-none transition-shadow focus:ring-2 focus:ring-secondary/40 resize-none"
                  placeholder="Waar kan ik je mee helpen?"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground shadow-lg shadow-secondary/20 transition-all hover:shadow-xl active:scale-[0.97]"
              >
                Verstuur
                <Send size={16} />
              </button>
            </form>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <div className="mt-12 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-foreground/70 transition-colors hover:bg-muted active:scale-[0.97]"
              >
                <Linkedin size={18} />
                Vind me op LinkedIn
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Contact;
