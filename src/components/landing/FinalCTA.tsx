import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function FinalCTA() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-muted/30">
      <div
        ref={ref}
        className={`section-container text-center max-w-3xl space-y-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight">
          ¿Listo para optimizar tus relevamientos desde el{" "}
          <span className="gradient-text">primer día</span>?
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Coordinemos una reunión técnica y evaluemos cómo AI Mapping puede
          integrarse a tu operación.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button variant="glow" size="lg" asChild>
            <a href="#contacto">Solicitar demo técnica</a>
          </Button>
          <Button variant="outline-glow" size="lg" asChild>
            <a href="#contacto">Hablar con un asesor</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
