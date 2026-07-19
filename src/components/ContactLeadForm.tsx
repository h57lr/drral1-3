"use client";

import { FormEvent, useMemo, useState } from "react";
import { site } from "@/lib/content";
import { pushDataLayerEvent } from "@/lib/analytics";
import type { Locale } from "@/lib/i18n";

type ContactLeadFormProps = {
  locale: Locale;
};

type FormState = "idle" | "submitting" | "success" | "error";

const labels = {
  en: {
    eyebrow: "Consultation Request",
    title: "Send a private consultation request.",
    intro: "Share a few details and Dr. Ali's team will follow up with clear next steps.",
    fullName: "Full Name",
    phoneNumber: "Phone Number",
    treatmentInterestedIn: "Treatment Interested In",
    treatmentPlaceholder: "Select a treatment",
    message: "Message / Notes",
    messagePlaceholder: "Tell us what you would like to improve or ask about.",
    submit: "Submit Consultation Request",
    submitting: "Submitting...",
    helperPrefix: "Prefer a faster reply?",
    helperLink: "WhatsApp Us",
    requiredError: "Please add your name, phone number, and treatment interest.",
    success: "Thank you. Your consultation request has been received. Dr. Ali's team will contact you soon.",
    error: "Something went wrong. Please try again or contact us on WhatsApp."
  },
  ar: {
    eyebrow: "طلب استشارة",
    title: "أرسل طلب استشارة خاصة.",
    intro: "شارك بعض التفاصيل وسيتواصل معك فريق الدكتور علي بخطوات واضحة.",
    fullName: "الاسم الكامل",
    phoneNumber: "رقم الهاتف",
    treatmentInterestedIn: "العلاج المهتم به",
    treatmentPlaceholder: "اختر العلاج",
    message: "الرسالة / الملاحظات",
    messagePlaceholder: "أخبرنا بما ترغب في تحسينه أو السؤال عنه.",
    submit: "إرسال طلب الاستشارة",
    submitting: "جارٍ الإرسال...",
    helperPrefix: "تفضّل رداً أسرع؟",
    helperLink: "تواصل معنا عبر واتساب",
    requiredError: "يرجى إضافة الاسم ورقم الهاتف والعلاج المهتم به.",
    success: "شكراً لك. تم استلام طلب الاستشارة وسيتواصل معك فريق الدكتور علي قريباً.",
    error: "حدث خطأ. يرجى المحاولة مرة أخرى أو تواصل معنا عبر واتساب."
  }
} satisfies Record<Locale, Record<string, string>>;

const treatmentOptions = {
  en: ["Hollywood Smile / Veneers", "Teeth Whitening", "Dental Implants", "Orthodontics", "Gummy Smile Treatment", "Other / Not sure"],
  ar: ["هوليود سمايل / فينير", "تبييض الأسنان", "زراعة الأسنان", "تقويم الأسنان", "علاج الابتسامة اللثوية", "أخرى / غير متأكد"]
} satisfies Record<Locale, string[]>;

function getUrlValue(param: string) {
  if (typeof window === "undefined") return "";
  return new URLSearchParams(window.location.search).get(param) ?? "";
}

export function ContactLeadForm({ locale }: ContactLeadFormProps) {
  const copy = labels[locale];
  const treatments = treatmentOptions[locale];
  const [status, setStatus] = useState<FormState>("idle");
  const [feedback, setFeedback] = useState("");

  const fieldIds = useMemo(
    () => ({
      fullName: `contact-full-name-${locale}`,
      phoneNumber: `contact-phone-number-${locale}`,
      treatmentInterestedIn: `contact-treatment-${locale}`,
      message: `contact-message-${locale}`
    }),
    [locale]
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const fullName = String(formData.get("fullName") ?? "").trim();
    const phoneNumber = String(formData.get("phoneNumber") ?? "").trim();
    const treatmentInterestedIn = String(formData.get("treatmentInterestedIn") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!fullName || !phoneNumber || !treatmentInterestedIn) {
      setStatus("error");
      setFeedback(copy.requiredError);
      pushDataLayerEvent("form_submit_error", {
        form_name: "contact_consultation_form",
        form_location: "contact_page",
        error_type: "validation_error"
      });
      return;
    }

    const utmSource = getUrlValue("utm_source");
    const utmMedium = getUrlValue("utm_medium");
    const campaign = getUrlValue("utm_campaign");
    const sourceMedium = [utmSource, utmMedium].filter(Boolean).join(" / ");
    const pageUrl = typeof window !== "undefined" ? window.location.href : "";

    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("/api/contact-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          phoneNumber,
          treatmentInterestedIn,
          message,
          language: locale,
          pageUrl,
          sourceMedium,
          campaign,
          formName: "contact_consultation_form"
        })
      });

      const result = (await response.json().catch(() => null)) as { success?: boolean; submissionId?: string } | null;

      if (!response.ok || !result?.success) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      setFeedback(copy.success);
      form.reset();

      const leadPayload = {
        form_name: "contact_consultation_form",
        form_location: "contact_page",
        treatment_interested_in: treatmentInterestedIn,
        lead_type: "contact_form",
        lead_source: "contact_form",
        submission_id: result.submissionId,
        event_id: result.submissionId,
        page_url: pageUrl
      };

      pushDataLayerEvent("contact_form_submit", leadPayload);
      pushDataLayerEvent("generate_lead", leadPayload);
    } catch {
      setStatus("error");
      setFeedback(copy.error);
      pushDataLayerEvent("form_submit_error", {
        form_name: "contact_consultation_form",
        form_location: "contact_page",
        treatment_interested_in: treatmentInterestedIn,
        error_type: "api_error"
      });
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <section className="section compact contact-lead-section" aria-labelledby="contact-lead-title">
      <div className="container contact-lead-panel">
        <div className="contact-lead-copy">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 id="contact-lead-title" className="section-title">
            {copy.title}
          </h2>
          <p className="lead">{copy.intro}</p>
          <p className="contact-lead-helper">
            {copy.helperPrefix} <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">{copy.helperLink}</a>
          </p>
        </div>

        <form className="contact-lead-form" onSubmit={handleSubmit} noValidate>
          <div className="contact-field-grid">
            <label className="contact-field" htmlFor={fieldIds.fullName}>
              <span>{copy.fullName}</span>
              <input id={fieldIds.fullName} name="fullName" type="text" autoComplete="name" required disabled={isSubmitting} />
            </label>
            <label className="contact-field" htmlFor={fieldIds.phoneNumber}>
              <span>{copy.phoneNumber}</span>
              <input id={fieldIds.phoneNumber} name="phoneNumber" type="tel" autoComplete="tel" required disabled={isSubmitting} />
            </label>
          </div>

          <label className="contact-field" htmlFor={fieldIds.treatmentInterestedIn}>
            <span>{copy.treatmentInterestedIn}</span>
            <select id={fieldIds.treatmentInterestedIn} name="treatmentInterestedIn" required defaultValue="" disabled={isSubmitting}>
              <option value="" disabled>
                {copy.treatmentPlaceholder}
              </option>
              {treatments.map((treatment) => (
                <option key={treatment} value={treatment}>
                  {treatment}
                </option>
              ))}
            </select>
          </label>

          <label className="contact-field" htmlFor={fieldIds.message}>
            <span>{copy.message}</span>
            <textarea id={fieldIds.message} name="message" rows={4} placeholder={copy.messagePlaceholder} disabled={isSubmitting} />
          </label>

          <div className="contact-form-actions">
            <button className="button" type="submit" disabled={isSubmitting}>
              {isSubmitting ? copy.submitting : copy.submit}
            </button>
          </div>

          {feedback ? (
            <p className={`contact-form-message ${status === "success" ? "success" : "error"}`} role="status" aria-live="polite">
              {feedback}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
