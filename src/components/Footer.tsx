import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="container-page py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2 text-lg font-bold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-sm font-bold text-black">
                DP
              </span>
              Diego Publicidad
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Transformamos tus ideas en impresiones de alta calidad. Servicio
              profesional de litografía y publicidad.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
              Enlaces
            </h3>
            <ul className="space-y-2 text-sm text-white/60">
              {[
                { href: "/", label: "Inicio" },
                { href: "/servicios", label: "Servicios" },
                { href: "/cotizar", label: "Cotizar" },
                { href: "/nosotros", label: "Nosotros" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
              Servicios
            </h3>
            <ul className="space-y-2 text-sm text-white/60">
              {[
                "Impresión Digital",
                "Offset",
                "Grandes Formatos",
                "Diseño Gráfico",
                "Acabados Especiales",
              ].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
              Contacto
            </h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>info@diegopublicidad.com</li>
              <li>+57 304 6372758</li>
              <li>Calle 9 No 27 - 45-Bogotá</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-white/40">
          &copy; {new Date().getFullYear()} Diego Publicidad. Todos los
          derechos reservados.
        </div>
      </div>
    </footer>
  );
}
