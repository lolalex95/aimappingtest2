import { FileText, Map, Database, ImageIcon } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const items = [
  {
    icon: FileText,
    title: "Archivos CAD listos (DXF / DWG)",
    desc: "Modelos estructurados compatibles con AutoCAD, listos para integrarse a tus proyectos sin conversiones adicionales.",
  },
  {
    icon: Map,
    title: "Capas GIS organizadas",
    desc: "Información estructurada como capas georreferenciadas para análisis espacial y planificación.",
  },
  {
    icon: Database,
    title: "Objetos con atributos técnicos",
    desc: "Cada activo incluye atributos configurables que facilitan presupuestación y control operativo.",
  },
  {
    icon: ImageIcon,
    title: "Imágenes georreferenciadas vinculadas",
    desc: "Acceso a imágenes con coordenadas precisas para validación visual y soporte técnico.",
  },
];

export default function Deliverables() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="entregables" className="section-padding">
      <div
        ref={ref}
        className={`section-container transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight">
            ¿Qué recibís al trabajar con{" "}
            <span className="gradient-text">AI Mapping</span>?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Entregables técnicos estructurados y listos para integrarse
            directamente en AutoCAD y plataformas GIS, sin reprocesos ni pérdidas
            de información.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {items.map((item, i) => (
            <div key={i} className="glow-card p-6 flex gap-5 items-start">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="font-heading font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
