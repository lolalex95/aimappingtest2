import { Button } from "@/components/ui/button";
import MappingCarSVG from "./MappingCarSVG";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 animate-gradient-bg opacity-60"
        style={{
          background:
            "linear-gradient(135deg, hsl(170 50% 47% / 0.08), hsl(235 34% 47% / 0.08), hsl(170 50% 47% / 0.04), hsl(235 34% 47% / 0.12))",
        }}
      />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 section-container w-full px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="space-y-6 md:space-y-8">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Menos tiempo relevando.{" "}
              <span className="gradient-text">Más información para decidir.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Digitalizá el relevamiento y transformá recorridos en datos
              georreferenciados listos para usar en AutoCAD y plataformas GIS.
              Reducí tiempos, costos y retrabajos desde el primer relevamiento.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="glow" size="lg" asChild>
                <a href="#contacto">Solicitar demo</a>
              </Button>
              <Button variant="outline-glow" size="lg" asChild>
                <a href="#contacto">Hablar con un asesor</a>
              </Button>
            </div>
          </div>

          {/* SVG illustration */}
          <div className="w-full max-w-lg lg:max-w-none mx-auto">
            <MappingCarSVG />
          </div>
        </div>
      </div>
    </section>
  );
}
