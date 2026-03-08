const navLinks = [
  { href: "#hero", label: "Inicio" },
  { href: "#solucion", label: "Solución" },
  { href: "#metodologia", label: "Cómo Funciona" },
  { href: "#sectores", label: "Sectores" },
  { href: "#contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-12 px-4 md:px-8">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <a href="#hero" className="font-heading font-bold text-lg tracking-tight">
            <span className="gradient-text">AI</span>
            <span className="text-foreground">MAPPING</span>
          </a>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {["linkedin", "twitter", "github"].map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="w-9 h-9 rounded-lg bg-muted/60 flex items-center justify-center hover:bg-primary/10 transition-colors"
              >
                <svg className="w-4 h-4 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} AI Mapping. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-primary transition-colors">Términos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
