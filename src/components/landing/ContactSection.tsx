import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const SECTOR_OPTIONS = [
  "Telecomunicaciones",
  "Energía",
  "Catastro / Municipios",
  "Infraestructura urbana",
  "Cooperativas de servicios",
  "Obra pública",
  "Otro"];


const SURVEY_TYPE_OPTIONS = [
  "Infraestructura lineal",
  "Activos puntuales",
  "Redes urbanas",
  "Catastro",
  "Mixto"];


// ⚠️ Pegá aquí la URL de tu Apps Script deployment
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwUagkzC-gkXByBW7DPcnTZFIKRhDUBgYCwlI0Lp9bGF1G0fk9t_xShxM6nKdOYKp61dQ/exec";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal();
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [honeypot, setHoneypot] = useState("");

  const validate = (form: HTMLFormElement): boolean => {
    const data = new FormData(form);
    const newErrors: Record<string, string> = {};

    const name = (data.get("name") as string)?.trim();
    const company = (data.get("company") as string)?.trim();
    const role = (data.get("role") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const sector = (data.get("sector") as string)?.trim();

    if (!name) newErrors.name = "Campo requerido."; else
      if (name.length > 100) newErrors.name = "Máximo 100 caracteres.";

    if (!company) newErrors.company = "Campo requerido."; else
      if (company.length > 100) newErrors.company = "Máximo 100 caracteres.";

    if (!role) newErrors.role = "Campo requerido."; else
      if (role.length > 100) newErrors.role = "Máximo 100 caracteres.";

    if (!email) newErrors.email = "Campo requerido."; else
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Email inválido."; else
        if (email.length > 255) newErrors.email = "Máximo 255 caracteres.";

    if (!sector) newErrors.sector = "Campo requerido.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (honeypot) return;
    const form = e.currentTarget;
    if (!validate(form)) return;

    setFormState("submitting");

    const data = new FormData(form);

    const params = new URLSearchParams({
      name: String(data.get("name") ?? ""),
      company: String(data.get("company") ?? ""),
      role: String(data.get("role") ?? ""),
      email: String(data.get("email") ?? ""),
      sector: String(data.get("sector") ?? ""),
      survey_type: String(data.get("survey_type") ?? ""),
      context: String(data.get("context") ?? ""),
    });

    try {
      await fetch(`${APPS_SCRIPT_URL}?${params.toString()}`, {
        method: "GET",
        mode: "no-cors",
      });
      setFormState("success");
    } catch {
      setFormState("error");
    }
  };


  const inputClasses =
    "w-full h-11 px-4 rounded-[10px] border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-colors";
  const selectClasses =
    "w-full h-11 px-4 rounded-[10px] border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-colors appearance-none";
  const labelClasses = "block text-sm font-medium text-foreground mb-1.5";
  const errorClasses = "text-xs text-destructive mt-1";

  return (
    <section
      id="contacto"
      className="py-24 md:py-32 px-4 md:px-8"
      style={{
        backgroundColor: "var(--contact-bg)"
      }}>

      <style>{`
        :root { --contact-bg: #f8fafc; --contact-card-bg: #ffffff; }
        .dark { --contact-bg: #0f172a; --contact-card-bg: #111827; }
      `}</style>

      <div
        ref={ref}
        className={`max-w-[960px] mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`
        }>

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Solicitud de evaluación técnica

          </h2>
          <p className="text-muted-foreground text-base mt-3 leading-relaxed">
            [No compartiremos tus datos con nadie]
          </p>
          <div className="mx-auto mt-6 w-16 h-px bg-primary/30" />
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form card */}
          <div className="lg:col-span-3">
            <div
              className="rounded-xl border border-border p-8 md:p-10"
              style={{ backgroundColor: "var(--contact-card-bg)" }}>

              {formState === "success" ? (
                <div className="text-center py-16 space-y-3">
                  <p className="font-heading text-lg font-semibold text-foreground">
                    Solicitud recibida.
                  </p>
                  <p className="text-muted-foreground text-sm max-w-sm mx-auto leading-relaxed">
                    Nuestro equipo técnico te contactará en menos de 24 horas hábiles.
                  </p>
                </div>
              ) : formState === "error" ? (
                <div className="text-center py-16 space-y-3">
                  <p className="font-heading text-lg font-semibold text-destructive">
                    Ocurrió un error al enviar.
                  </p>
                  <p className="text-muted-foreground text-sm max-w-sm mx-auto leading-relaxed">
                    Por favor intentá de nuevo o escribinos directamente por email.
                  </p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="text-sm text-primary underline underline-offset-4 mt-2"
                  >
                    Volver al formulario
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-8">
                  <p className="text-xs text-muted-foreground">
                    Tiempo estimado: menos de 1 minuto.
                  </p>

                  {/* Honeypot */}
                  <div className="absolute -left-[9999px]" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      id="website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)} />

                  </div>

                  {/* Section 1 */}
                  <fieldset className="space-y-5">
                    <legend className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                      Datos de la organización
                    </legend>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="c-name" className={labelClasses}>
                          Nombre completo <span className="text-destructive">*</span>
                        </label>
                        <input
                          id="c-name"
                          name="name"
                          required
                          maxLength={100}
                          className={inputClasses}
                          placeholder="Tu nombre" />

                        {errors.name &&
                          <p className={errorClasses} role="alert">{errors.name}</p>
                        }
                      </div>
                      <div>
                        <label htmlFor="c-company" className={labelClasses}>
                          Empresa <span className="text-destructive">*</span>
                        </label>
                        <input
                          id="c-company"
                          name="company"
                          required
                          maxLength={100}
                          className={inputClasses}
                          placeholder="Nombre de la empresa" />

                        {errors.company &&
                          <p className={errorClasses} role="alert">{errors.company}</p>
                        }
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="c-role" className={labelClasses}>
                          Cargo <span className="text-destructive">*</span>
                        </label>
                        <input
                          id="c-role"
                          name="role"
                          required
                          maxLength={100}
                          className={inputClasses}
                          placeholder="Tu cargo" />

                        {errors.role &&
                          <p className={errorClasses} role="alert">{errors.role}</p>
                        }
                      </div>
                      <div>
                        <label htmlFor="c-email" className={labelClasses}>
                          Email corporativo <span className="text-destructive">*</span>
                        </label>
                        <input
                          id="c-email"
                          name="email"
                          type="email"
                          required
                          maxLength={255}
                          className={inputClasses}
                          placeholder="email@empresa.com" />

                        {errors.email &&
                          <p className={errorClasses} role="alert">{errors.email}</p>
                        }
                      </div>
                    </div>
                  </fieldset>

                  {/* Section 2 */}
                  <fieldset className="space-y-5">
                    <legend className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                      Contexto operativo
                    </legend>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="c-sector" className={labelClasses}>
                          Sector <span className="text-destructive">*</span>
                        </label>
                        <div className="relative">
                          <select id="c-sector" name="sector" required className={selectClasses} defaultValue="">
                            <option value="" disabled>Seleccioná un sector</option>
                            {SECTOR_OPTIONS.map((s) =>
                              <option key={s} value={s}>{s}</option>
                            )}
                          </select>
                          <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                        </div>
                        {errors.sector &&
                          <p className={errorClasses} role="alert">{errors.sector}</p>
                        }
                      </div>
                      <div>
                        <label htmlFor="c-survey" className={labelClasses}>
                          Tipo de relevamiento actual
                        </label>
                        <div className="relative">
                          <select id="c-survey" name="survey_type" className={selectClasses} defaultValue="">
                            <option value="" disabled>Seleccioná una opción</option>
                            {SURVEY_TYPE_OPTIONS.map((s) =>
                              <option key={s} value={s}>{s}</option>
                            )}
                          </select>
                          <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="c-context" className={labelClasses}>
                        Descripción breve del contexto operativo
                      </label>
                      <textarea
                        id="c-context"
                        name="context"
                        rows={4}
                        maxLength={1000}
                        className="w-full px-4 py-3 rounded-[10px] border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-colors resize-none"
                        placeholder="Ej: extensión aproximada, volumen de activos, herramientas actuales (AutoCAD, GIS), principales desafíos." />

                    </div>
                  </fieldset>

                  {/* Submit */}
                  <div className="space-y-3">
                    <button
                      type="submit"
                      disabled={formState === "submitting"}
                      className="inline-flex items-center justify-center h-11 px-8 rounded-[10px] bg-primary text-primary-foreground text-sm font-medium hover:brightness-95 transition-all duration-200 disabled:opacity-60 disabled:pointer-events-none">

                      {formState === "submitting" ? "Enviando…" : "Solicitar evaluación técnica"}
                    </button>
                    <p className="text-xs text-muted-foreground">
                      Tus datos se utilizan únicamente para coordinar una reunión técnica.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right side — trust block */}
          <div className="lg:col-span-2 flex items-start">
            <div className="space-y-6 w-full">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
                Contacto directo
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">[EMAIL_ADDRESS]</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Teléfono</p>
                    <p className="text-sm text-muted-foreground">[PHONE_NUMBER]</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Ubicación</p>
                    <p className="text-sm text-muted-foreground">[LOCATION]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}