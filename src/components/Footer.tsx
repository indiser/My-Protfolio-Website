export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative py-16"
      style={{ borderTop: "1px solid rgba(255,255,255,0.03)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Branding */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span
              className="text-lg font-bold tracking-tight text-gradient-amber"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Indiser
            </span>
            <span className="text-[11px] text-muted-foreground/50 tracking-wide">
              © {currentYear} Indiser. Crafted with precision.
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a
              href="https://github.com/indiser"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-muted-foreground/40 hover:text-foreground/60 transition-colors duration-300"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/indiser"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-muted-foreground/40 hover:text-foreground/60 transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/indiser"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-muted-foreground/40 hover:text-foreground/60 transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="mailto:indiser01@gmail.com"
              className="text-[12px] text-muted-foreground/40 hover:text-foreground/60 transition-colors duration-300"
            >
              Email
            </a>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="mt-12 flex justify-center">
          <div
            className="w-12 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(201,169,110,0.2), transparent)",
            }}
          />
        </div>
      </div>
    </footer>
  );
}
