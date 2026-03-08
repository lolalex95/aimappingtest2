import { Clock, AlertTriangle, FolderOpen, Layers } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const painPoints = [
  {
    icon: Clock,
    title: "Relevamientos lentos y manuales",
    desc: "Horas (o días) de recorridos y registro a mano antes de poder trabajar la información."
  },
  {
    icon: AlertTriangle,
    title: "Retrabajos por datos incompletos",
    desc: "Un dato faltante obliga a volver al lugar o rehacer parte del trabajo, con costos extra."
  },
  {
    icon: FolderOpen,
    title: "Información dispersa y difícil de ordenar",
    desc: "Fotos, notas y coordenadas quedan en distintos formatos, sin un estándar claro para el equipo."
  },
  {
    icon: Layers,
    title: "Integración lenta con AutoCAD y GIS",
    desc: "Convertir lo relevado en datos utilizables para CAD/GIS suele llevar más tiempo que el relevamiento mismo."
  }
];

export default function ProblemSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="problema" className="section-padding bg-muted/30">
      <div
        ref={ref}
        className={`section-container transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="space-y-10">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight">
              El relevamiento tradicional consume tiempo y genera errores.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Hoy los relevamientos de campo suelen implicar múltiples recorridos,
              datos desordenados y mucho trabajo manual antes de poder tomar
              decisiones.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {painPoints.map((p, i) => (
              <div key={i} className="glow-card p-5 space-y-3">
                <p.icon className="h-6 w-6 text-primary" />
                <h3 className="font-heading font-semibold text-sm">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}