import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-primary text-primary-foreground">
    <div className="container flex flex-col items-center justify-between gap-4 py-10 md:flex-row">
      <p className="text-sm opacity-80">© {new Date().getFullYear()} Evelyn D. Alle rechten voorbehouden.</p>
      <div className="flex items-center gap-6">
        <Link to="/contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Contact</Link>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-80 hover:opacity-100 transition-opacity"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
