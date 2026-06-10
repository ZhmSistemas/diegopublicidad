"use client";

import Image from "next/image";
import { useState } from "react";

type ProductType = {
  id: string;
  name: string;
  sizes: { label: string; width: number; height: number; price: number }[];
  papers: string[];
};

const products: ProductType[] = [
  {
    id: "volantes",
    name: "Volantes / Flyers",
    sizes: [
      { label: "A5 (148 x 210 mm)", width: 148, height: 210, price: 500 },
      { label: "A6 (105 x 148 mm)", width: 105, height: 148, price: 350 },
      { label: "1/3 Carta (92 x 210 mm)", width: 92, height: 210, price: 400 },
      { label: "Personalizado", width: 0, height: 0, price: 600 },
    ],
    papers: ["Bond 75g", "Bond 90g", "Couché Mate 130g", "Couché Brillante 130g", "Couché Mate 200g"],
  },
  {
    id: "tarjetas",
    name: "Tarjetas de Presentación",
    sizes: [
      { label: "Estándar (90 x 50 mm)", width: 90, height: 50, price: 80 },
      { label: "Cuadrada (55 x 55 mm)", width: 55, height: 55, price: 70 },
      { label: "Personalizado", width: 0, height: 0, price: 100 },
    ],
    papers: ["Couché Mate 300g", "Couché Brillante 300g", "Opalina 250g", "Plástico PVC", "Reciclado 300g"],
  },
  {
    id: "brochures",
    name: "Brochures / Folletos",
    sizes: [
      { label: "A4 (210 x 297 mm)", width: 210, height: 297, price: 1500 },
      { label: "A5 (148 x 210 mm)", width: 148, height: 210, price: 1200 },
      { label: "Carta (216 x 279 mm)", width: 216, height: 279, price: 1400 },
      { label: "Personalizado", width: 0, height: 0, price: 1800 },
    ],
    papers: ["Couché Mate 130g", "Couché Brillante 130g", "Couché Mate 200g", "Bond 90g"],
  },
  {
    id: "banners",
    name: "Banners / Pendones",
    sizes: [
      { label: "60 x 160 cm", width: 600, height: 1600, price: 1500 },
      { label: "80 x 200 cm", width: 800, height: 2000, price: 2000 },
      { label: "100 x 200 cm", width: 1000, height: 2000, price: 2500 },
      { label: "Personalizado", width: 0, height: 0, price: 3000 },
    ],
    papers: ["Lona Front", "Lona Backlit", "Vinilo Autoadhesivo", "Mesh Microperforado"],
  },
  {
    id: "afiches",
    name: "Afiches / Posters",
    sizes: [
      { label: "A3 (297 x 420 mm)", width: 297, height: 420, price: 600 },
      { label: "A2 (420 x 594 mm)", width: 420, height: 594, price: 800 },
      { label: "50 x 70 cm", width: 500, height: 700, price: 700 },
      { label: "Personalizado", width: 0, height: 0, price: 900 },
    ],
    papers: ["Couché Mate 150g", "Couché Brillante 150g", "Bond 120g"],
  },
  {
    id: "stickers",
    name: "Stickers / Calcomanías",
    sizes: [
      { label: "A4 (210 x 297 mm)", width: 210, height: 297, price: 700 },
      { label: "A5 (148 x 210 mm)", width: 148, height: 210, price: 500 },
      { label: "10 x 10 cm", width: 100, height: 100, price: 300 },
      { label: "Personalizado", width: 0, height: 0, price: 800 },
    ],
    papers: ["Vinilo Blanco", "Vinilo Transparente", "Papel Adhesivo Mate", "Papel Adhesivo Brillante"],
  },
  {
    id: "invitaciones",
    name: "Invitaciones",
    sizes: [
      { label: "A5 (148 x 210 mm)", width: 148, height: 210, price: 900 },
      { label: "A6 (105 x 148 mm)", width: 105, height: 148, price: 700 },
      { label: "DL (99 x 210 mm)", width: 99, height: 210, price: 800 },
      { label: "Personalizado", width: 0, height: 0, price: 1100 },
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

// Precios por unidad en COP
const sizeUnitPrices: Record<string, number> = {
  volantes: 60,
  tarjetas: 80,
  brochures: 120,
  banners: 150,
  afiches: 40,
  stickers: 30,
  invitaciones: 70,
};

const paperUnitPrices: Record<string, number> = {
  "Bond 75g": 0,
  "Bond 90g": 50,
  "Bond 120g": 80,
  "Couché Mate 130g": 100,
  "Couché Brillante 130g": 120,
  "Couché Mate 150g": 120,
  "Couché Brillante 150g": 140,
  "Couché Mate 200g": 150,
  "Couché Mate 300g": 200,
  "Couché Brillante 300g": 220,
  "Opalina 250g": 180,
  "Texturizado 250g": 220,
  "Reciclado 250g": 0,
  "Reciclado 300g": 0,
  "Plástico PVC": 300,
  "Lona Front": 200,
  "Lona Backlit": 250,
  "Vinilo Autoadhesivo": 180,
  "Vinilo Blanco": 150,
  "Vinilo Transparente": 180,
  "Mesh Microperforado": 280,
  "Papel Adhesivo Mate": 100,
  "Papel Adhesivo Brillante": 120,
  "Metalizado": 250,
};

const colorUnitPrices: Record<string, number> = {
  byN: 0,
  full_color: 100,
  full_color_doble: 200,
  "1_tinta": 25,
  "2_tintas": 50,
};

const finishingUnitPrices: Record<string, number> = {
  ninguno: 0,
  laminado_mate: 150,
  laminado_brillante: 150,
  plastificado: 200,
  relieve: 250,
  barniz_uv: 300,
  corte_laser: 400,
  doblez: 100,
  perforado: 150,
  empastado: 350,
};

const deliverySurcharges: Record<string, number> = {
  urgente: 1.3,
  rapido: 1.15,
  normal: 1,
};

function formatPrice(amount: number): string {
  return `$${Math.round(amount).toLocaleString("es-CO")}`;
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

  const selectedSize = selectedProduct?.sizes.find((s) => s.label === size);

  const calculateTotal = () => {
    if (!productId || !size || !paper || !quantity || !colors) return 0;
    const qty = parseInt(quantity) || 0;
    const sizePrice = selectedSize?.price || 0;
    const paperPrice = paperUnitPrices[paper] || 0;
    const colorPrice = colorUnitPrices[colors] || 0;
    const finishingPrice = finishing
      .filter((f) => f !== "ninguno")
      .reduce((sum, f) => sum + (finishingUnitPrices[f] || 0), 0);
    let total = (sizePrice + paperPrice + colorPrice + finishingPrice) * qty;
    total *= deliverySurcharges[delivery] || 1;
    if (size === "Personalizado") total *= 1.2;
    return Math.round(total);
  };

  const getPriceBreakdown = () => {
    if (!productId || !size || !paper || !quantity || !colors) return [];
    const qty = parseInt(quantity) || 0;
    const sizePrice = selectedSize?.price || 0;
    const paperPrice = paperUnitPrices[paper] || 0;
    const colorPrice = colorUnitPrices[colors] || 0;
    const finishingItems: { label: string; value: string; total: string }[] = finishing
      .filter((f) => f !== "ninguno")
      .map((f) => ({
        label: `Acabado: ${finishingOptions.find((o) => o.id === f)?.label}`,
        value: `${formatPrice(finishingUnitPrices[f])}/und × ${qty}`,
        total: formatPrice(finishingUnitPrices[f] * qty),
      }));
    const items: { label: string; value: string; total: string }[] = [
      { label: `Tamaño (${selectedProduct?.name})`, value: `${formatPrice(sizePrice)}/und × ${qty}`, total: formatPrice(sizePrice * qty) },
      { label: `Papel (${paper})`, value: `${formatPrice(paperPrice)}/und × ${qty}`, total: formatPrice(paperPrice * qty) },
      { label: "Color", value: `${formatPrice(colorPrice)}/und × ${qty}`, total: formatPrice(colorPrice * qty) },
      ...finishingItems,
    ];
    const delSurcharge = deliverySurcharges[delivery] || 1;
    items.push({
      label: "Entrega",
      value:
        delivery === "urgente"
          ? "24 horas (+30%)"
          : delivery === "rapido"
          ? "2-3 días (+15%)"
          : "5-7 días",
      total: delSurcharge !== 1 ? `${Math.round((delSurcharge - 1) * 100)}%` : "Sin recargo",
    });
    if (size === "Personalizado") {
      items.push({ label: "Tamaño personalizado", value: "Recargo 20%", total: "" });
    }
    return items;
  };

  const totalPrice = calculateTotal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <section className="relative overflow-hidden bg-black py-20">
          <Image
            src="https://res.cloudinary.com/zhamat-tecnologia/image/upload/v1781113478/diego/litografia_a6gv7t.avif"
            alt=""
            width={1600}
            height={500}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="container-page relative text-center">
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
      <section className="relative overflow-hidden bg-black py-16">
        <Image
          src="https://res.cloudinary.com/zhamat-tecnologia/image/upload/v1781113478/diego/litografia_a6gv7t.avif"
          alt=""
          width={1600}
          height={500}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container-page relative text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Solicitar Cotización
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
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

            {totalPrice > 0 && (
              <div className="mb-6 rounded-xl border border-accent/30 bg-amber-50 p-4 text-center">
                <p className="text-sm text-text-muted">Valor total estimado:</p>
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
                            <p className="mt-1 text-sm font-semibold text-accent">
                              {formatPrice(s.price)}/und
                            </p>
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
                            <p className="mt-1 text-sm font-semibold text-accent">
                              {formatPrice(paperUnitPrices[p])}/und
                            </p>
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
                      className="rounded-lg bg-gray-900 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
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
                          <p className="mt-1 text-sm font-semibold text-accent">
                            {formatPrice(colorUnitPrices[c.id])}/und
                          </p>
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
                          <p className="mt-1 text-sm font-semibold text-accent">
                            {f.id === "ninguno" ? "$0" : `${formatPrice(finishingUnitPrices[f.id])}/und`}
                          </p>
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
                          <p className="mt-1 text-sm font-semibold text-accent">
                            {d.id === "normal" ? "Sin recargo" : `+${Math.round((deliverySurcharges[d.id] - 1) * 100)}%`}
                          </p>
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
                      className="mt-4 block w-full text-sm text-text-secondary file:mr-4 file:rounded-lg file:border-0 file:bg-gray-900 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white file:cursor-pointer hover:file:bg-gray-800"
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
                      className="rounded-lg bg-gray-900 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
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
                      className="rounded-lg bg-gray-900 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
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

                  <div className="rounded-xl border border-border bg-surface-secondary p-6">
                    <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                      Desglose de Precios
                    </p>
                    <div className="mt-3 space-y-3">
                      <div className="grid grid-cols-3 gap-2 text-xs font-semibold uppercase tracking-wide text-text-muted">
                        <span>Concepto</span>
                        <span className="text-center">Valor/und × Cant</span>
                        <span className="text-right">Subtotal</span>
                      </div>
                      <div className="divide-y divide-border">
                        {getPriceBreakdown().map((item, i) => (
                          <div
                            key={i}
                            className="grid grid-cols-3 gap-2 py-2 text-sm"
                          >
                            <span className="text-text-secondary">{item.label}</span>
                            <span className="text-center font-medium text-text">{item.value}</span>
                            <span className="text-right font-semibold text-text">{item.total}</span>
                          </div>
                        ))}
                      </div>
                    </div>
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
