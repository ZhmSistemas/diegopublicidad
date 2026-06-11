import Image from "next/image";
import Link from "next/link";

const contactInfo = [
  { label: "Dirección", value: "Calle 9 No 27 - 45-Bogotá" },
  { label: "Teléfono", value: "+57 304 6372758" },
  { label: "Email", value: "info@diegopublicidad.com" },
  { label: "Horario", value: "Lun - Vie: 9:00 AM - 6:00 PM" },
];

export default function ContactoPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-black py-20">
        <Image
          src="https://res.cloudinary.com/zhamat-tecnologia/image/upload/v1781113308/diego/contactanos_rjj18p.jpg"
          alt=""
          width={1200}
          height={600}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container-page relative text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Contáctanos
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Estamos aquí para ayudarte. Escríbenos o visítanos.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-text">
                Envíanos un mensaje
              </h2>
              <p className="mt-2 text-text-secondary">
                Completa el formulario y te responderemos a la brevedad.
              </p>
              <form className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="mt-1 block w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="mt-1 block w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="mt-1 block w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="mt-1 block w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary resize-y"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-lg bg-gray-900 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text">
                Información de Contacto
              </h2>
              <p className="mt-2 text-text-secondary">
                También puedes contactarnos directamente.
              </p>
              <div className="mt-8 space-y-6">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-border bg-surface-secondary p-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                      {item.label}
                    </p>
                    <p className="mt-1 text-text">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/cotizar"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-light"
                >
                  Solicitar una cotización
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
              <div className="mt-8 overflow-hidden rounded-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.963532814159!2d-74.078179!3d4.60971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a1c8b1c6c5%3A0x7e8b7c8f8a8b8c8d!2sCl.%209%20%2326%2C%20Bogot%C3%A1!5e0!3m2!1ses-419!2sco!4v1"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
