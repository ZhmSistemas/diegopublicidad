import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-white">
      <div className="container-page py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2 text-lg font-bold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-sm font-bold text-primary">
                DP
              </span>
              Diego Publicidad
            </div>
            <p className="text-sm leading-relaxed text-blue-200">
              Transformamos tus ideas en impresiones de alta calidad. Servicio
              profesional de litografía y publicidad.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent-light">
              Enlaces
            </h3>
            <ul className="space-y-2 text-sm text-blue-200">
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
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent-light">
              Servicios
            </h3>
            <ul className="space-y-2 text-sm text-blue-200">
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
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent-light">
              Contacto
            </h3>
            <ul className="space-y-2 text-sm text-blue-200">
              <li>info@diegopublicidad.com</li>
              <li>+57 304 6372758</li>
              <li>Calle 9 No 27 - 45-Bogotá</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-blue-800 pt-8 text-center text-sm text-blue-300">
          &copy; {new Date().getFullYear()} Diego Publicidad. Todos los
          derechos reservados.
        </div>
      </div>
    </footer>
  );
}
