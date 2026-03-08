import { ScanLine, ListChecks, TrendingDown } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const benefits = [
  {
    icon: ScanLine,
    title: "Un solo recorrido, datos completos",
    desc: "Capturá imágenes y datos georreferenciados en una sola pasada, evitando recorridos repetidos y pérdidas de información.",
  },
  {
    icon: ListChecks,
    title: "Información ordenada y estandarizada",
    desc: "Todos los datos se registran bajo un mismo criterio, listos para ser interpretados por todo el equipo.",
  },
  {
    icon: TrendingDown,
    title: "Menos tiempo, menos costos, menos errores",
    desc: "Reducí horas de trabajo, evitá retrabajos y acelerá la toma de decisiones desde el primer día.",
  },
];

export default function ValueProposition() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="solucion" className="section-padding">
      <div
        ref={ref}
        className={`section-container transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight">
            La forma inteligente de relevar y convertir datos en{" "}
            <span className="gradient-text">información útil</span>.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            AI Mapping digitaliza el relevamiento desde el primer recorrido,
            capturando datos georreferenciados listos para trabajar en AutoCAD y
            plataformas GIS, sin reprocesos ni pérdida de información.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="glow-card p-7 space-y-4 text-center">
              <div className="mx-auto w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <b.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
