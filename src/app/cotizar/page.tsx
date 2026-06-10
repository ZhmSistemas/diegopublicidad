"use client";

import { useState } from "react";

type ProductType = {
  id: string;
  name: string;
  sizes: { label: string; width: number; height: number }[];
  papers: string[];
};

const products: ProductType[] = [
  {
    id: "volantes",
    name: "Volantes / Flyers",
    sizes: [
      { label: "A5 (148 x 210 mm)", width: 148, height: 210 },
      { label: "A6 (105 x 148 mm)", width: 105, height: 148 },
      { label: "1/3 Carta (92 x 210 mm)", width: 92, height: 210 },
      { label: "Personalizado", width: 0, height: 0 },
    ],
    papers: ["Bond 75g", "Bond 90g", "Couché Mate 130g", "Couché Brillante 130g", "Couché Mate 200g"],
  },
  {
    id: "tarjetas",
    name: "Tarjetas de Presentación",
    sizes: [
      { label: "Estándar (90 x 50 mm)", width: 90, height: 50 },
      { label: "Cuadrada (55 x 55 mm)", width: 55, height: 55 },
      { label: "Personalizado", width: 0, height: 0 },
    ],
    papers: ["Couché Mate 300g", "Couché Brillante 300g", "Opalina 250g", "Plástico PVC", "Reciclado 300g"],
  },
  {
    id: "brochures",
    name: "Brochures / Folletos",
    sizes: [
      { label: "A4 (210 x 297 mm)", width: 210, height: 297 },
      { label: "A5 (148 x 210 mm)", width: 148, height: 210 },
      { label: "Carta (216 x 279 mm)", width: 216, height: 279 },
      { label: "Personalizado", width: 0, height: 0 },
    ],
    papers: ["Couché Mate 130g", "Couché Brillante 130g", "Couché Mate 200g", "Bond 90g"],
  },
  {
    id: "banners",
    name: "Banners / Pendones",
    sizes: [
      { label: "60 x 160 cm", width: 600, height: 1600 },
      { label: "80 x 200 cm", width: 800, height: 2000 },
      { label: "100 x 200 cm", width: 1000, height: 2000 },
      { label: "Personalizado", width: 0, height: 0 },
    ],
    papers: ["Lona Front", "Lona Backlit", "Vinilo Autoadhesivo", "Mesh Microperforado"],
  },
  {
    id: "afiches",
    name: "Afiches / Posters",
    sizes: [
      { label: "A3 (297 x 420 mm)", width: 297, height: 420 },
      { label: "A2 (420 x 594 mm)", width: 420, height: 594 },
      { label: "50 x 70 cm", width: 500, height: 700 },
      { label: "Personalizado", width: 0, height: 0 },
    ],
    papers: ["Couché Mate 150g", "Couché Brillante 150g", "Bond 120g"],
  },
  {
    id: "stickers",
    name: "Stickers / Calcomanías",
    sizes: [
      { label: "A4 (210 x 297 mm)", width: 210, height: 297 },
      { label: "A5 (148 x 210 mm)", width: 148, height: 210 },
      { label: "10 x 10 cm", width: 100, height: 100 },
      { label: "Personalizado", width: 0, height: 0 },
    ],
    papers: ["Vinilo Blanco", "Vinilo Transparente", "Papel Adhesivo Mate", "Papel Adhesivo Brillante"],
  },
  {
    id: "invitaciones",
    name: "Invitaciones",
    sizes: [
      { label: "A5 (148 x 210 mm)", width: 148, height: 210 },
      { label: "A6 (105 x 148 mm)", width: 105, height: 148 },
      { label: "DL (99 x 210 mm)", width: 99, height: 210 },
      { label: "Personalizado", width: 0, height: 0 },
    ],
    papers: ["Opalina 250g", "Texturizado 250g", "Reciclado 250g", "Metalizado"],
  },
];

const paperTypes = [
  "Bond",
  "Couché Mate",
  "Couché Brillante",
  "Opalina",
  "Texturizado",
  "Reciclado",
  "Adhesivo",
  "Vinilo",
  "Lona",
  "Metalizado",
];

const finishingOptions = [
  { id: "ninguno", label: "Ninguno" },
  { id: "laminado_mate", label: "Laminado Mate" },
  { id: "laminado_brillante", label: "Laminado Brillante" },
  { id: "plastificado", label: "Plastificado" },
  { id: "relieve", label: "Relieve (Grabado en Seco)" },
  { id: "barniz_uv", label: "Barniz UV Selectivo" },
  { id: "corte_laser", label: "Corte Láser" },
  { id: "doblez", label: "Doblez / Pliegue" },
  { id: "perforado", label: "Perforado" },
  { id: "empastado", label: "Empastado (Brochures)" },
];

const colorsOptions = [
  { id: "byN", label: "Blanco y Negro" },
  { id: "full_color", label: "Full Color (4/0)" },
  { id: "full_color_doble", label: "Full Color (4/4)" },
  { id: "1_tinta", label: "1 Tinta" },
  { id: "2_tintas", label: "2 Tintas" },
];

const basePrices: Record<string, number> = {
  volantes: 50,
  tarjetas: 80,
  brochures: 120,
  banners: 150,
  afiches: 60,
  stickers: 70,
  invitaciones: 90,
};

const paperPrices: Record<string, number> = {
  "Bond 75g": 0,
  "Bond 90g": 5,
  "Bond 120g": 8,
  "Couché Mate 130g": 10,
  "Couché Brillante 130g": 12,
  "Couché Mate 150g": 12,
  "Couché Brillante 150g": 14,
  "Couché Mate 200g": 15,
  "Couché Mate 300g": 20,
  "Couché Brillante 300g": 22,
  "Opalina 250g": 18,
  "Texturizado 250g": 22,
  "Reciclado 250g": 15,
  "Reciclado 300g": 18,
  "Plástico PVC": 30,
  "Lona Front": 20,
  "Lona Backlit": 25,
  "Vinilo Autoadhesivo": 18,
  "Vinilo Blanco": 15,
  "Vinilo Transparente": 18,
  "Mesh Microperforado": 28,
  "Papel Adhesivo Mate": 10,
  "Papel Adhesivo Brillante": 12,
  "Metalizado": 25,
};

const quantityMultipliers: Record<string, number> = {
  "100": 1,
  "250": 1.8,
  "500": 3,
  "1000": 5,
  "2000": 9,
  "5000": 20,
};

const colorMultipliers: Record<string, number> = {
  byN: 1,
  full_color: 1.2,
  full_color_doble: 1.4,
  "1_tinta": 1.05,
  "2_tintas": 1.1,
};

const finishingPrices: Record<string, number> = {
  ninguno: 0,
  laminado_mate: 15,
  laminado_brillante: 15,
  plastificado: 20,
  relieve: 25,
  barniz_uv: 30,
  corte_laser: 40,
  doblez: 10,
  perforado: 15,
  empastado: 35,
};

const deliveryMultipliers: Record<string, number> = {
  urgente: 1.3,
  rapido: 1.15,
  normal: 1,
};

function formatPrice(amount: number): string {
  return `$${(amount * 1000).toLocaleString("es-CO")}`;
}

export default function CotizarPage() {
  const [step, setStep] = useState(1);
  const [productId, setProductId] = useState("");
  const [size, setSize] = useState("");
  const [customWidth, setCustomWidth] = useState("");
  const [customHeight, setCustomHeight] = useState("");
  const [paper, setPaper] = useState("");
  const [quantity, setQuantity] = useState("");
  const [colors, setColors] = useState("full_color");
  const [finishing, setFinishing] = useState<string[]>(["ninguno"]);
  const [delivery, setDelivery] = useState("normal");
  const [files, setFiles] = useState<FileList | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const selectedProduct = products.find((p) => p.id === productId);

  const toggleFinishing = (id: string) => {
    if (id === "ninguno") {
      setFinishing(["ninguno"]);
      return;
    }
    setFinishing((prev) => {
      const withoutNone = prev.filter((f) => f !== "ninguno");
      if (withoutNone.includes(id)) {
        return withoutNone.filter((f) => f !== id).length === 0
          ? ["ninguno"]
          : withoutNone.filter((f) => f !== id);
      }
      return [...withoutNone, id];
    });
  };

  const totalSteps = 4;

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const canGoNext = () => {
    switch (step) {
      case 1:
        return productId && size && paper;
      case 2:
        return quantity && colors;
      case 3:
        return name && email;
      default:
        return true;
    }
  };

  const calculateTotal = () => {
    if (!productId || !size || !paper || !quantity || !colors) return 0;
    const basePrice = basePrices[productId] || 0;
    const paperPrice = paperPrices[paper] || 0;
    const qty = parseInt(quantity) || 0;
    const qtyMultiplier = quantityMultipliers[quantity] || (qty > 0 ? qty / 100 : 0);
    const colorMultiplier = colorMultipliers[colors] || 1;
    let total = (basePrice + paperPrice) * qtyMultiplier * colorMultiplier;
    finishing.forEach((f) => {
      if (f !== "ninguno") {
        total += (finishingPrices[f] || 0) * (qtyMultiplier || 1);
      }
    });
    total *= deliveryMultipliers[delivery] || 1;
    if (size === "Personalizado") total *= 1.2;
    return Math.round(total);
  };

  const totalPrice = calculateTotal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <section className="bg-gradient-to-br from-primary via-primary to-primary-light py-20">
          <div className="container-page text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Cotización Enviada
            </h1>
          </div>
        </section>
        <section className="py-20">
          <div className="container-page">
            <div className="mx-auto max-w-lg text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
                ✅
              </div>
              <h2 className="text-2xl font-bold text-text">
                ¡Gracias por tu solicitud!
              </h2>
              <p className="mt-4 text-text-secondary">
                Hemos recibido tu cotización. Uno de nuestros asesores se
                comunicará contigo en las próximas 24 horas hábiles.
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="bg-gradient-to-br from-primary via-primary to-primary-light py-16">
        <div className="container-page text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Solicitar Cotización
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-200">
            Completa los pasos para recibir una cotización personalizada.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10">
              <div className="flex items-center justify-between">
                {[1, 2, 3, 4].map((s) => (
                  <div key={s} className="flex items-center">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${
                        s <= step
                          ? "bg-accent text-primary"
                          : "bg-surface-secondary text-text-muted"
                      }`}
                    >
                      {s}
                    </div>
                    {s < 4 && (
                      <div
                        className={`mx-2 h-1 w-12 rounded sm:w-20 ${
                          s < step ? "bg-accent" : "bg-border"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-2 flex justify-between px-0.5 text-xs text-text-muted">
                <span>Producto</span>
                <span>Detalles</span>
                <span>Datos</span>
                <span>Revisar</span>
              </div>
            </div>

            {totalPrice > 0 && step < 4 && (
              <div className="mb-6 rounded-xl border border-accent/30 bg-amber-50 p-4 text-center">
                <p className="text-sm text-text-muted">Valor estimado:</p>
                <p className="text-2xl font-bold text-accent">
                  {formatPrice(totalPrice)}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="space-y-8">
                  <div>
                    <label className="block text-lg font-semibold text-text">
                      Tipo de Producto
                    </label>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {products.map((p) => (
                        <button
                          type="button"
                          key={p.id}
                          onClick={() => {
                            setProductId(p.id);
                            setSize("");
                            setPaper("");
                          }}
                          className={`rounded-xl border-2 p-4 text-left transition-all ${
                            productId === p.id
                              ? "border-accent bg-amber-50"
                              : "border-border hover:border-primary/30"
                          }`}
                        >
                          <p className="font-medium text-text">{p.name}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {selectedProduct && (
                    <div>
                      <label className="block text-lg font-semibold text-text">
                        Tamaño
                      </label>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {selectedProduct.sizes.map((s) => (
                          <button
                            type="button"
                            key={s.label}
                            onClick={() => setSize(s.label)}
                            className={`rounded-xl border-2 p-4 text-left transition-all ${
                              size === s.label
                                ? "border-accent bg-amber-50"
                                : "border-border hover:border-primary/30"
                            }`}
                          >
                            <p className="font-medium text-text">{s.label}</p>
                          </button>
                        ))}
                      </div>
                      {size === "Personalizado" && (
                        <div className="mt-4 grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-text">
                              Ancho (mm)
                            </label>
                            <input
                              type="number"
                              value={customWidth}
                              onChange={(e) => setCustomWidth(e.target.value)}
                              className="mt-1 block w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-text">
                              Alto (mm)
                            </label>
                            <input
                              type="number"
                              value={customHeight}
                              onChange={(e) => setCustomHeight(e.target.value)}
                              className="mt-1 block w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {selectedProduct && size && (
                    <div>
                      <label className="block text-lg font-semibold text-text">
                        Tipo de Papel / Material
                      </label>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {selectedProduct.papers.map((p) => (
                          <button
                            type="button"
                            key={p}
                            onClick={() => setPaper(p)}
                            className={`rounded-xl border-2 p-4 text-left transition-all ${
                              paper === p
                                ? "border-accent bg-amber-50"
                                : "border-border hover:border-primary/30"
                            }`}
                          >
                            <p className="font-medium text-text">{p}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!canGoNext()}
                      className="rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Continuar
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-8">
                  <div>
                    <label className="block text-lg font-semibold text-text">
                      Cantidad
                    </label>
                    <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {["100", "250", "500", "1000", "2000", "5000", "Otro"].map(
                        (q) => (
                          <button
                            type="button"
                            key={q}
                            onClick={() => setQuantity(q)}
                            className={`rounded-xl border-2 p-4 text-center transition-all ${
                              quantity === q
                                ? "border-accent bg-amber-50"
                                : "border-border hover:border-primary/30"
                            }`}
                          >
                            <p className="font-medium text-text">{q}</p>
                          </button>
                        )
                      )}
                    </div>
                    {quantity === "Otro" && (
                      <div className="mt-4">
                        <label className="block text-sm font-medium text-text">
                          Especificar cantidad
                        </label>
                        <input
                          type="number"
                          value={quantity === "Otro" ? "" : quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                          placeholder="Ingresa la cantidad"
                          className="mt-1 block w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-text">
                      Colores
                    </label>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {colorsOptions.map((c) => (
                        <button
                          type="button"
                          key={c.id}
                          onClick={() => setColors(c.id)}
                          className={`rounded-xl border-2 p-4 text-left transition-all ${
                            colors === c.id
                              ? "border-accent bg-amber-50"
                              : "border-border hover:border-primary/30"
                          }`}
                        >
                          <p className="font-medium text-text">{c.label}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-text">
                      Acabados Especiales
                    </label>
                    <p className="mt-1 text-sm text-text-muted">
                      Selecciona los acabados que deseas (opcional).
                    </p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {finishingOptions.map((f) => (
                        <button
                          type="button"
                          key={f.id}
                          onClick={() => toggleFinishing(f.id)}
                          className={`rounded-xl border-2 p-4 text-left transition-all ${
                            finishing.includes(f.id)
                              ? "border-accent bg-amber-50"
                              : "border-border hover:border-primary/30"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`flex h-5 w-5 items-center justify-center rounded border-2 ${
                                finishing.includes(f.id)
                                  ? "border-accent bg-accent"
                                  : "border-border"
                              }`}
                            >
                              {finishing.includes(f.id) && (
                                <span className="text-xs text-primary">✓</span>
                              )}
                            </div>
                            <p className="font-medium text-text">{f.label}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-text">
                      Tiempo de Entrega
                    </label>
                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      {[
                        { id: "urgente", label: "24 horas", desc: "Recargo del 30%" },
                        { id: "rapido", label: "2-3 días", desc: "Sin recargo" },
                        { id: "normal", label: "5-7 días", desc: "Mejor precio" },
                      ].map((d) => (
                        <button
                          type="button"
                          key={d.id}
                          onClick={() => setDelivery(d.id)}
                          className={`rounded-xl border-2 p-4 text-center transition-all ${
                            delivery === d.id
                              ? "border-accent bg-amber-50"
                              : "border-border hover:border-primary/30"
                          }`}
                        >
                          <p className="font-medium text-text">{d.label}</p>
                          <p className="mt-1 text-xs text-text-muted">{d.desc}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-text">
                      Sube tu archivo (opcional)
                    </label>
                    <p className="mt-1 text-sm text-text-muted">
                      Aceptamos PDF, AI, PSD, CDR, JPG, PNG.
                    </p>
                    <input
                      type="file"
                      onChange={(e) => setFiles(e.target.files)}
                      accept=".pdf,.ai,.psd,.cdr,.jpg,.jpeg,.png"
                      className="mt-4 block w-full text-sm text-text-secondary file:mr-4 file:rounded-lg file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white file:cursor-pointer hover:file:bg-primary-light"
                    />
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-text transition-colors hover:bg-surface-secondary"
                    >
                      Atrás
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!canGoNext()}
                      className="rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Continuar
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-lg font-semibold text-text">
                      Tus Datos
                    </h2>
                    <p className="mt-1 text-sm text-text-muted">
                      Déjanos tus datos para que podamos enviarte la cotización.
                    </p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-1 block w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text">
                      Teléfono / WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="mt-1 block w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-text">
                      Notas o comentarios adicionales
                    </label>
                    <textarea
                      id="notes"
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="mt-1 block w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary resize-y"
                    />
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-text transition-colors hover:bg-surface-secondary"
                    >
                      Atrás
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!canGoNext()}
                      className="rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Revisar Cotización
                    </button>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-lg font-semibold text-text">
                      Revisa tu Solicitud
                    </h2>
                    <p className="mt-1 text-sm text-text-muted">
                      Verifica que todos los datos sean correctos antes de enviar.
                    </p>
                  </div>

                  <div className="space-y-4 rounded-xl border border-border bg-surface-secondary p-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                          Producto
                        </p>
                        <p className="mt-1 text-text">
                          {selectedProduct?.name}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                          Tamaño
                        </p>
                        <p className="mt-1 text-text">{size}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                          Material
                        </p>
                        <p className="mt-1 text-text">{paper}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                          Cantidad
                        </p>
                        <p className="mt-1 text-text">{quantity}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                          Colores
                        </p>
                        <p className="mt-1 text-text">
                          {colorsOptions.find((c) => c.id === colors)?.label}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                          Tiempo de Entrega
                        </p>
                        <p className="mt-1 text-text capitalize">
                          {delivery === "urgente"
                            ? "24 horas"
                            : delivery === "rapido"
                              ? "2-3 días"
                              : "5-7 días"}
                        </p>
                      </div>
                    </div>

                    {finishing.filter((f) => f !== "ninguno").length > 0 && (
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                          Acabados
                        </p>
                        <div className="mt-1 flex flex-wrap gap-2">
                          {finishing
                            .filter((f) => f !== "ninguno")
                            .map((f) => (
                              <span
                                key={f}
                                className="rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-primary"
                              >
                                {finishingOptions.find((o) => o.id === f)?.label}
                              </span>
                            ))}
                        </div>
                      </div>
                    )}

                    <hr className="border-border" />

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                          Nombre
                        </p>
                        <p className="mt-1 text-text">{name}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                          Email
                        </p>
                        <p className="mt-1 text-text">{email}</p>
                      </div>
                      {phone && (
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                            Teléfono
                          </p>
                          <p className="mt-1 text-text">{phone}</p>
                        </div>
                      )}
                    </div>

                    {notes && (
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                          Notas
                        </p>
                        <p className="mt-1 text-text">{notes}</p>
                      </div>
                    )}
                  </div>

                  <div className="rounded-xl border-2 border-accent bg-amber-50 p-6 text-center">
                    <p className="text-sm font-medium uppercase tracking-wide text-text-muted">
                      Total Estimado
                    </p>
                    <p className="mt-2 text-4xl font-bold text-accent">
                      {formatPrice(totalPrice)}
                    </p>
                    <p className="mt-1 text-xs text-text-muted">
                      *Precio estimado sujeto a verificación
                    </p>
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-text transition-colors hover:bg-surface-secondary"
                    >
                      Atrás
                    </button>
                    <button
                      type="submit"
                      className="rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-primary transition-colors hover:bg-accent-light"
                    >
                      Enviar Cotización
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
