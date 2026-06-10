import Link from "next/link";

const team = [
  { name: "Diego López", role: "Director General" },
  { name: "María García", role: "Diseñadora Gráfica" },
  { name: "Carlos Mendoza", role: "Operador de Impresión" },
  { name: "Ana Torres", role: "Ejecutiva de Ventas" },
];

const values = [
  { title: "Calidad", desc: "Nos esforzamos por superar las expectativas en cada proyecto." },
  { title: "Compromiso", desc: "Cumplimos con nuestros plazos y promesas." },
  { title: "Innovación", desc: "Adoptamos las últimas tecnologías del sector." },
  { title: "Cercanía", desc: "Trabajamos codo a codo con nuestros clientes." },
];

export default function NosotrosPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary via-primary to-primary-light py-20">
        <div className="container-page text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Nosotros
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-200">
            Conoce más sobre Diego Publicidad y nuestro equipo.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-text">Nuestra Historia</h2>
            <div className="mt-6 space-y-4 text-text-secondary leading-relaxed">
              <p>
                Diego Publicidad nació hace más de 10 años con la visión de
                ofrecer servicios de impresión de alta calidad en Lima. Desde
                nuestros inicios, nos hemos enfocado en entender las necesidades
                de cada cliente para ofrecer soluciones personalizadas.
              </p>
              <p>
                Hoy contamos con equipos de última generación en impresión
                digital, offset y gran formato, así como un equipo creativo
                capaz de llevar cualquier idea al papel (y más allá).
              </p>
              <p>
                Nuestra filosofía es simple: calidad sin compromisos, entregas
                puntuales y un trato cercano con cada uno de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-secondary py-16">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-text text-center">
            Nuestros Valores
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-xl border border-border bg-white p-6 text-center"
              >
                <h3 className="text-lg font-semibold text-text">{v.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-text text-center">
            Nuestro Equipo
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <div
                key={m.name}
                className="rounded-xl border border-border bg-white p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                  {m.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="font-semibold text-text">{m.name}</h3>
                <p className="text-sm text-text-muted">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent py-16">
        <div className="container-page text-center">
          <h2 className="text-2xl font-bold text-primary">
            Trabajemos juntos
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-primary/80">
            Cuéntanos sobre tu proyecto y te daremos una cotización
            personalizada.
          </p>
          <div className="mt-6">
            <Link
              href="/cotizar"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-light"
            >
              Solicitar Cotización
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
