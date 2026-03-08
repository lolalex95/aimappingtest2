import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    name: "María González",
    role: "Gerente de Operaciones, TeleCo S.A.",
    text: "AI Mapping nos permitió reducir significativamente los tiempos de relevamiento. Lo que antes nos llevaba semanas, ahora lo resolvemos en días con datos listos para integrar.",
    stars: 5,
  },
  {
    name: "Carlos Méndez",
    role: "Director Técnico, Energía Sur",
    text: "La estandarización de los datos fue un cambio radical para nuestro equipo. Ya no perdemos tiempo formateando información manualmente para AutoCAD.",
    stars: 5,
  },
  {
    name: "Laura Fernández",
    role: "Jefa de Catastro, Municipalidad de Córdoba",
    text: "Implementamos AI Mapping en nuestras operaciones de catastro y los resultados superaron nuestras expectativas en precisión y velocidad de entrega.",
    stars: 5,
  },
];

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding">
      <div
        ref={ref}
        className={`section-container transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Lo que dicen nuestros clientes
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glow-card p-6 space-y-4">
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-2">
                <div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center text-xs font-semibold text-muted-foreground">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
