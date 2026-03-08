import { useScrollReveal } from "@/hooks/useScrollReveal";

const logos = Array.from({ length: 5 }, (_, i) => `Cliente ${i + 1}`);

export default function TrustedBy() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-12 px-4 md:px-8 border-y border-border/40">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {logos.map((name) => (
            <div
              key={name}
              className="h-8 px-6 flex items-center justify-center rounded bg-muted/50 text-xs font-medium text-muted-foreground"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
