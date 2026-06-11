"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  FileText,
  Users,
  TrendingUp,
  Clock,
  ArrowUpRight,
  CheckCircle2,
  XCircle,
  Eye,
  MessageSquare,
} from "lucide-react";

type Stat = {
  label: string;
  value: string;
  change: string;
  positive: boolean;
  icon: React.ReactNode;
};

type Quote = {
  id: string;
  client: string;
  product: string;
  total: string;
  status: "pendiente" | "aprobada" | "rechazada" | "completada";
  date: string;
};

const stats: Stat[] = [
  {
    label: "Cotizaciones",
    value: "48",
    change: "+12%",
    positive: true,
    icon: <FileText className="h-5 w-5" />,
  },
  {
    label: "Usuarios",
    value: "124",
    change: "+8%",
    positive: true,
    icon: <Users className="h-5 w-5" />,
  },
  {
    label: "Ingresos",
    value: "$18.5M",
    change: "+23%",
    positive: true,
    icon: <TrendingUp className="h-5 w-5" />,
  },
  {
    label: "Pendientes",
    value: "14",
    change: "-3%",
    positive: false,
    icon: <Clock className="h-5 w-5" />,
  },
];

const recentQuotes: Quote[] = [
  {
    id: "COT-001",
    client: "Carlos Martínez",
    product: "Volantes A5",
    total: "$450.000",
    status: "pendiente",
    date: "Hoy",
  },
  {
    id: "COT-002",
    client: "María Gómez",
    product: "Tarjetas x500",
    total: "$320.000",
    status: "aprobada",
    date: "Ayer",
  },
  {
    id: "COT-003",
    client: "Pedro López",
    product: "Banner 80x200",
    total: "$280.000",
    status: "completada",
    date: "Ayer",
  },
  {
    id: "COT-004",
    client: "Ana Torres",
    product: "Brochures A4",
    total: "$890.000",
    status: "rechazada",
    date: "Hace 2 días",
  },
  {
    id: "COT-005",
    client: "Juan Díaz",
    product: "Stickers x1000",
    total: "$150.000",
    status: "pendiente",
    date: "Hace 2 días",
  },
];

const statusConfig = {
  pendiente: {
    label: "Pendiente",
    class: "bg-amber-100 text-amber-800",
    icon: <Clock className="h-3.5 w-3.5" />,
  },
  aprobada: {
    label: "Aprobada",
    class: "bg-emerald-100 text-emerald-800",
    icon: <CheckCircle2 className="h-3.5 w-3.5" />,
  },
  rechazada: {
    label: "Rechazada",
    class: "bg-red-100 text-red-800",
    icon: <XCircle className="h-3.5 w-3.5" />,
  },
  completada: {
    label: "Completada",
    class: "bg-blue-100 text-blue-800",
    icon: <CheckCircle2 className="h-3.5 w-3.5" />,
  },
};

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  if (status === "unauthenticated" || !session?.user?.isAdmin) {
    router.push("/auth/login");
    return null;
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-text">
            Bienvenido, {session.user.name}
          </h1>
          <p className="mt-1 text-sm text-text-secondary">
            Resumen de tu negocio de impresión
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-surface-secondary hover:text-text">
            <MessageSquare className="h-4 w-4" />
            Nueva Cotización
          </button>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="relative overflow-hidden rounded-xl border border-border bg-white p-6"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-text-secondary">
                {stat.label}
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-secondary text-text-muted">
                {stat.icon}
              </span>
            </div>
            <p className="mt-3 text-2xl font-bold tracking-tight text-text">
              {stat.value}
            </p>
            <div className="mt-1 flex items-center gap-1.5">
              <span
                className={`inline-flex items-center gap-0.5 text-xs font-medium ${
                  stat.positive ? "text-emerald-600" : "text-red-600"
                }`}
              >
                <ArrowUpRight
                  className={`h-3 w-3 ${
                    stat.positive ? "" : "rotate-90"
                  }`}
                />
                {stat.change}
              </span>
              <span className="text-xs text-text-muted">vs mes anterior</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-white lg:col-span-2">
          <div className="flex items-center justify-between border-b border-border px-6 py-4">
            <div>
              <h2 className="font-semibold text-text">Cotizaciones Recientes</h2>
              <p className="mt-0.5 text-xs text-text-muted">
                Últimas 5 cotizaciones recibidas
              </p>
            </div>
            <button className="text-sm font-medium text-primary transition-colors hover:text-primary-light">
              Ver todas
            </button>
          </div>
          <div className="divide-y divide-border">
            {recentQuotes.map((quote) => {
              const status = statusConfig[quote.status];
              return (
                <div
                  key={quote.id}
                  className="flex items-center justify-between px-6 py-4 transition-colors hover:bg-surface-secondary"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-secondary">
                      <FileText className="h-4 w-4 text-text-muted" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-text">
                          {quote.client}
                        </span>
                        <span className="text-xs text-text-muted">
                          {quote.id}
                        </span>
                      </div>
                      <p className="mt-0.5 text-xs text-text-secondary">
                        {quote.product} · {quote.total}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${
                        status.class
                      }`}
                    >
                      {status.icon}
                      {status.label}
                    </span>
                    <span className="text-xs text-text-muted">
                      {quote.date}
                    </span>
                    <button className="rounded-lg p-1.5 text-text-muted transition-colors hover:bg-surface-secondary hover:text-text">
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-xl border border-border bg-white">
          <div className="border-b border-border px-6 py-4">
            <h2 className="font-semibold text-text">Acceso Rápido</h2>
            <p className="mt-0.5 text-xs text-text-muted">
              Acciones frecuentes
            </p>
          </div>
          <div className="space-y-1 p-4">
            {[
              { label: "Ver Cotizaciones", icon: FileText, href: "#" },
              { label: "Usuarios", icon: Users, href: "#" },
              { label: "Productos", icon: TrendingUp, href: "#" },
              { label: "Reportes", icon: Eye, href: "#" },
            ].map((action) => (
              <button
                key={action.label}
                className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-text-secondary transition-colors hover:bg-surface-secondary hover:text-text"
              >
                <action.icon className="h-4 w-4" />
                {action.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
