import { Timer, DollarSign, BarChart3, Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const metrics = [
  { icon: Timer, value: "[XX%]", label: "Reducción de tiempos de relevamiento." },
  { icon: DollarSign, value: "[XX%]", label: "Menor costo operativo." },
  { icon: BarChart3, value: "[XX%]", label: "Mejor control y planificación." },
  { icon: Zap, value: "[XX%]", label: "Presupuestación más rápida." },
];

export default function OperationalImpact() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-muted/30">
      <div
        ref={ref}
        className={`section-container transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight">
            Impacto real en tu operación.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            AI Mapping no solo digitaliza relevamientos. Reduce tiempos
            operativos, mejora la precisión y acelera la toma de decisiones en
            campo y oficina.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {metrics.map((m, i) => (
            <div key={i} className="glow-card p-6 text-center space-y-3">
              <m.icon className="h-8 w-8 text-primary mx-auto" />
              <p className="font-heading text-3xl font-bold gradient-text">{m.value}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
