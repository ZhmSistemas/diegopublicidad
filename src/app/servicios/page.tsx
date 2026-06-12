import Link from "next/link";
import VideoInView from "@/components/VideoInView";

const serviceCategories = [
  {
    title: "Impresión Digital",
    items: [
      "Impresión digital a color y blanco/negro",
      "Tiradas cortas y medianas",
      "Alta resolución (hasta 1200 dpi)",
      "Papel bond, couché, adhesivo y más",
      "Impresión sobre materiales especiales",
    ],
    desc: "Perfecta para tiradas pequeñas y medianas con resultados de alta calidad y tiempos de entrega rápidos.",
  },
  {
    title: "Impresión Offset",
    items: [
      "Impresión offset multicolor",
      "Tiradas grandes con costo unitario bajo",
      "Calidad consistente en toda la tirada",
      "Compatibilidad con diversos papeles",
      "Acabados profesionales",
    ],
    desc: "Ideal para grandes volúmenes donde se requiere la máxima calidad y el mejor costo por unidad.",
  },
  {
    title: "Grandes Formatos",
    items: [
      "Banners y lonas publicitarias",
      "Vinilos impresos y cortados",
      "Gigantografías para exteriores",
      "Backings y stands feriales",
      "Impresión en lona, mesh y más",
    ],
    desc: "Comunicación visual de alto impacto para exteriores e interiores con materiales resistentes.",
  },
  {
    title: "Diseño Gráfico",
    items: [
      "Diseño de marca e identidad corporativa",
      "Diseño editorial (revistas, catálogos)",
      "Piezas publicitarias y promocionales",
      "Pre-prensa y preparación de archivos",
      "Corrección de color y retoque digital",
    ],
    desc: "Transformamos tus ideas en piezas gráficas profesionales listas para impresión.",
  },
  {
    title: "Papelería Corporativa",
    items: [
      "Tarjetas de presentación",
      "Sobres y folders corporativos",
      "Blocks de notas y agendas",
      "Hojas membretadas",
      "Carpetas institucionales",
    ],
    desc: "Todo lo que tu empresa necesita para proyectar una imagen profesional y coherente.",
  },
  {
    title: "Acabados Especiales",
    items: [
      "Laminado brillante y mate",
      "Plastificado y enmicado",
      "Relieve (grabado en seco)",
      "Corte láser personalizado",
      "Barniz selectivo UV",
    ],
    desc: "Acabados que elevan la calidad percibida de tus impresiones y las hacen destacar.",
  },
];

export default function ServiciosPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-black py-20">
        <img
          src="https://res.cloudinary.com/zhamat-tecnologia/image/upload/v1781113224/diego/servicios_mvxazs.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container-page relative text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Nuestros Servicios
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Ofrecemos soluciones completas de impresión y diseño para empresas y
            particulares.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page space-y-16">
          {serviceCategories.map((cat, i) => (
            <div
              key={cat.title}
              className={`grid items-center gap-8 ${
                i % 2 === 0
                  ? "lg:grid-cols-2"
                  : "lg:grid-cols-2 lg:direction-rtl"
              }`}
            >
              <div className={`${i % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
                <h2 className="text-2xl font-bold text-text">{cat.title}</h2>
                <p className="mt-3 text-text-secondary">{cat.desc}</p>
                <ul className="mt-6 space-y-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <span className="mt-0.5 text-accent">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`flex items-center justify-center rounded-xl bg-surface-secondary p-8 ${i % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}
              >
                <div className="text-center">
                  {i === 0 ? (
                    <VideoInView
                      src="https://res.cloudinary.com/zhamat-tecnologia/video/upload/v1781227468/diego/impresiondigital_movimiento_tjjsmh.mp4"
                      className="h-48 w-full object-contain"
                      loop
                    />
                  ) : i === 1 ? (
                    <VideoInView
                      src="https://res.cloudinary.com/zhamat-tecnologia/video/upload/v1781229844/diego/offset_movimiento_lsewvx.mp4"
                      className="h-48 w-full object-contain"
                    />
                  ) : i === 2 ? (
                    <img
                      src="https://res.cloudinary.com/zhamat-tecnologia/image/upload/v1781138792/diego/grandesformatos_fihvsh.png"
                      alt="Grandes Formatos"
                      className="h-48 w-full object-contain"
                    />
                  ) : i === 3 ? (
                    <img
                      src="https://res.cloudinary.com/zhamat-tecnologia/image/upload/v1781138899/diego/disenografico_cvxhkb.png"
                      alt="Diseño Gráfico"
                      className="h-48 w-full object-contain"
                    />
                  ) : i === 4 ? (
                    <img
                      src="https://res.cloudinary.com/zhamat-tecnologia/image/upload/v1781139411/diego/especiales_uin3t3.png"
                      alt="Acabados Especiales"
                      className="h-48 w-full object-contain"
                    />
                  ) : i === 5 ? (
                    <img
                      src="https://res.cloudinary.com/zhamat-tecnologia/image/upload/v1781139576/diego/corporativa_ucmfsh.jpg"
                      alt="Papelería Corporativa"
                      className="h-48 w-full object-contain"
                    />
                  ) : (
                    <span className="text-6xl">
                      {["🖨️", "⚙️", "📐", "🎨", "📑", "✨"][i]}
                    </span>
                  )}
                  <p className="mt-4 text-sm font-medium text-text-muted">
                    {cat.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-accent py-16">
        <div className="container-page text-center">
          <h2 className="text-2xl font-bold text-primary">
            ¿Necesitas un servicio personalizado?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-primary/80">
            Contáctanos y te prepararemos una cotización a la medida de tu
            proyecto.
          </p>
          <div className="mt-6">
            <Link
              href="/cotizar"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-gray-800"
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
