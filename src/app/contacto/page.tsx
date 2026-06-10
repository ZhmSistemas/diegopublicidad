import Link from "next/link";

const contactInfo = [
  { label: "Dirección", value: "Av. Ejemplo 123, San Isidro, Lima" },
  { label: "Teléfono", value: "+51 999 999 999" },
  { label: "Email", value: "info@diegopublicidad.com" },
  { label: "Horario", value: "Lun - Vie: 9:00 AM - 6:00 PM" },
];

export default function ContactoPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary via-primary to-primary-light py-20">
        <div className="container-page text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Contáctanos
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-200">
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
                  className="rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
