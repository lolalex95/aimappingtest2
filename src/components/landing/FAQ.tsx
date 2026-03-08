import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  {
    q: "¿Cómo funciona AI Mapping y qué problema resuelve?",
    a: "AI Mapping es un servicio de captura y análisis de datos en campo impulsado por inteligencia artificial.\n\nUtilizamos vehículos equipados con sensores y visión computacional avanzada para relevar infraestructura de forma automatizada, georreferenciada y estructurada.\n\nEsto permite reemplazar relevamientos manuales lentos y propensos a errores por:\n\nDetección automatizada de activos\n\nExtracción estructurada de datos\n\nGeolocalización precisa\n\nEntregables listos para integrar\n\nResultado: mayor velocidad operativa, menor margen de error y visibilidad completa de la infraestructura en tiempo real.",
  },
  {
    q: "¿Qué tipo de infraestructura puede mapear AI Mapping?",
    a: "AI Mapping está diseñado para entornos de infraestructura a gran escala, como:\n\nPostes y líneas aéreas\n\nRedes de fibra óptica\n\nActivos eléctricos de distribución\n\nDuctos y canalizaciones subterráneas\n\nSeñalización vial y activos urbanos\n\nInfraestructura de obra pública\n\nSi puede capturarse en campo y georreferenciarse, puede estructurarse y analizarse con AI Mapping.",
  },
  {
    q: "¿Los datos son compatibles con nuestros sistemas GIS o plataformas internas?",
    a: "Sí.\n\nLos entregables se generan en formatos estructurados y estandarizados, compatibles con:\n\n- Plataformas GIS\n\nSistemas CAD\n\nSoftware de gestión de activos\n\nSistemas empresariales personalizados\n\nNuestros datos están listos para integrarse, minimizando fricción con su ecosistema tecnológico actual.",
  },
  {
    q: "¿Cuál es el retorno de inversión (ROI) frente a un relevamiento tradicional?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
  },
  {
    q: "¿Cómo podemos comenzar con una prueba piloto o demo?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
  },
];

export default function FAQ() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding">
      <div
        ref={ref}
        className={`section-container max-w-3xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-14">
          Preguntas frecuentes
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="glow-card px-6 border-none">
              <AccordionTrigger className="font-heading font-semibold text-left hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
