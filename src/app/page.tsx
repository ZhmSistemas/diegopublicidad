import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Impresión Digital",
    desc: "Impresión de alta calidad en tiradas cortas y medianas con tiempos de entrega rápidos.",
    icon: "https://res.cloudinary.com/zhamat-tecnologia/image/upload/v1781138292/diego/impresiondigital_qpmi45.png",
  },
  {
    title: "Impresión Offset",
    desc: "Producción masiva con calidad superior para grandes volúmenes de impresión.",
    icon: "https://res.cloudinary.com/zhamat-tecnologia/image/upload/v1781138651/diego/impresionoffset_m0dqgc.png",
  },
  {
    title: "Grandes Formatos",
    desc: "Banners, lonas, vinilos y gigantografías para exterior e interior.",
    icon: "https://res.cloudinary.com/zhamat-tecnologia/image/upload/v1781138792/diego/grandesformatos_fihvsh.png",
  },
  {
    title: "Diseño Gráfico",
    desc: "Creamos piezas gráficas profesionales adaptadas a tu marca y necesidades.",
    icon: "https://res.cloudinary.com/zhamat-tecnologia/image/upload/v1781138899/diego/disenografico_cvxhkb.png",
  },
  {
    title: "Acabados Especiales",
    desc: "Laminado, plastificado, relieve, corte láser y más acabados de calidad.",
    icon: "https://res.cloudinary.com/zhamat-tecnologia/image/upload/v1781139411/diego/especiales_uin3t3.png",
  },
  {
    title: "Papelería Corporativa",
    desc: "Tarjetas, sobres, folders, blocks y toda la línea corporativa de tu empresa.",
    icon: "https://res.cloudinary.com/zhamat-tecnologia/image/upload/v1781139576/diego/corporativa_ucmfsh.jpg",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/zhamat-tecnologia/video/upload/v1781059912/diego/diegopublicidad2_iaaxgt.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <div className="container-page relative py-24 sm:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Transformamos tus ideas en
              <span className="text-accent"> impresiones </span>
              de alta calidad
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              Somos tu aliado en comunicación visual. Ofrecemos servicios
              completos de litografía, impresión digital y diseño gráfico con
              los más altos estándares de calidad.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/cotizar"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-accent-light"
              >
                Solicitar Cotización
                <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                Ver Servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-secondary py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-text">
              Nuestros Servicios
            </h2>
            <p className="mt-4 text-text-secondary">
              Ofrecemos una amplia gama de servicios de impresión y diseño para
              satisfacer todas tus necesidades.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-xl border border-border bg-white p-6 transition-shadow hover:shadow-lg"
              >
                {service.icon.startsWith("http") ? (
                  <img src={service.icon} alt={service.title} className="mb-4 h-36 w-full object-contain" />
                ) : (
                  <span className="mb-4 block text-3xl">{service.icon}</span>
                )}
                <h3 className="text-lg font-semibold text-text">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-light"
            >
              Ver todos los servicios
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-text">
              ¿Por qué elegirnos?
            </h2>
            <p className="mt-4 text-text-secondary">
              Más de 10 años de experiencia nos respaldan como líderes en el
              sector.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                title: "Calidad Superior",
                desc: "Utilizamos equipos de última generación y materiales premium para garantizar resultados impecables.",
                icon: "⭐",
              },
              {
                title: "Entrega Puntual",
                desc: "Cumplimos con los plazos acordados para que tu proyecto no se detenga.",
                icon: "⏱️",
              },
              {
                title: "Asesoría Personalizada",
                desc: "Te guiamos en cada paso para elegir los mejores materiales y acabados.",
                icon: "🤝",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <span className="mb-4 inline-block text-4xl">{item.icon}</span>
                <h3 className="text-lg font-semibold text-text">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-surface-secondary py-28">
        <div className="pointer-events-none absolute left-8 top-8 h-[280px] w-[280px] rounded-full bg-primary/30" />
        <div className="pointer-events-none absolute bottom-8 right-8 h-[220px] w-[220px] rounded-full bg-accent/30" />
        <div className="container-page relative text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text">
            ¿Listo para tu próximo proyecto?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-secondary">
            Solicita una cotización sin compromiso y descubre la calidad de
            nuestro servicio.
          </p>
          <div className="mt-8">
            <Link
              href="/cotizar"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-light"
            >
              Solicitar Cotización
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface-secondary py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-text">
              Contáctanos
            </h2>
            <p className="mt-4 text-text-secondary">
              Estamos ubicados en Bogotá. Escríbenos o visítanos.
            </p>
          </div>
          <div className="mt-10 grid gap-6 text-center sm:grid-cols-3">
            {[
              { label: "Email", value: "info@diegopublicidad.com" },
              { label: "Teléfono", value: "+57 304 6372758" },
              { label: "Dirección", value: "Calle 9 No 27 - 45-Bogotá" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-border bg-white p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-text-muted">
                  {item.label}
                </p>
                <p className="mt-2 text-text">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
