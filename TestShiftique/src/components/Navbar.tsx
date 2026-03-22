import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Over mij", path: "/over-mij" },
  { label: "Projecten", path: "/projecten" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="text-lg font-bold tracking-tight text-primary">
          Evelyn D
        </Link>

        {/* Desktop */}
        <ul className="hidden gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary/10 hover:text-secondary ${
                  location.pathname === item.path ? "text-secondary" : "text-foreground/70"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-foreground md:hidden active:scale-95 transition-transform"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="container flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                    location.pathname === item.path ? "bg-secondary/10 text-secondary" : "text-foreground/70"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
