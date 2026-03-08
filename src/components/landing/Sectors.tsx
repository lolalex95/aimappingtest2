import { Radio, Zap, Building2, Landmark, Users, HardHat } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const sectors = [
  { icon: Radio, name: "Telecomunicaciones" },
  { icon: Zap, name: "Energía" },
  { icon: Building2, name: "Infraestructura urbana" },
  { icon: Landmark, name: "Catastro y municipios" },
  { icon: Users, name: "Cooperativas de servicios" },
  { icon: HardHat, name: "Obra pública" },
];

export default function Sectors() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="sectores" className="section-padding bg-muted/30">
      <div
        ref={ref}
        className={`section-container transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight">
            Aplicable a múltiples sectores.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            AI Mapping se adapta a operaciones técnicas donde necesitás
            relevamientos precisos y entregables listos para CAD/GIS.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {sectors.map((s, i) => (
            <div key={i} className="glow-card p-6 flex flex-col items-center gap-4 text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <s.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-sm">{s.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
