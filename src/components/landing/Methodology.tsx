import { Camera, Cpu, FileOutput } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    num: "01",
    icon: Camera,
    title: "Capturás datos en campo",
    desc: "Registrás imágenes, coordenadas y observaciones georreferenciadas en un solo recorrido.",
  },
  {
    num: "02",
    icon: Cpu,
    title: "La plataforma organiza y estructura",
    desc: "Toda la información se estandariza automáticamente para evitar errores y retrabajos.",
  },
  {
    num: "03",
    icon: FileOutput,
    title: "Exportás listo para AutoCAD y GIS",
    desc: "Generás entregables compatibles sin conversiones manuales ni pérdida de tiempo.",
  },
];

const STAGGER_MS = 400;

export default function Methodology() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          steps.forEach((_, i) => {
            setTimeout(() => {
              setVisibleSteps((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * STAGGER_MS);
          });
        } else {
          setVisibleSteps([false, false, false]);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="metodologia" className="section-padding bg-muted/30">
      <div ref={sectionRef} className="section-container">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight">
            Cómo funciona <span className="gradient-text">AI Mapping</span>.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            En tres pasos simples transformás relevamientos de campo en datos
            listos para trabajar.
          </p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-8 md:gap-6">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5">
            <div
              className="w-full h-full"
              style={{
                background:
                  "repeating-linear-gradient(90deg, hsl(170 50% 47% / 0.3) 0, hsl(170 50% 47% / 0.3) 8px, transparent 8px, transparent 16px)",
              }}
            />
          </div>

          {steps.map((s, i) => (
            <div
              key={i}
              className="relative text-center space-y-5"
              style={{
                opacity: visibleSteps[i] ? 1 : 0,
                transform: visibleSteps[i] ? "translateY(0)" : "translateY(28px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
              }}
            >
              <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center relative z-10">
                <s.icon className="h-7 w-7 text-primary" />
              </div>
              <span className="font-heading text-sm font-bold text-primary tracking-wider">
                {s.num}
              </span>
              <h3 className="font-heading font-semibold text-lg">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
