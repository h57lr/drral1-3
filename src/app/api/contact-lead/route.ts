import { NextResponse } from "next/server";

type ContactLeadRequest = {
  fullName?: unknown;
  phoneNumber?: unknown;
  treatmentInterestedIn?: unknown;
  message?: unknown;
  language?: unknown;
  pageUrl?: unknown;
  sourceMedium?: unknown;
  campaign?: unknown;
  formName?: unknown;
};

const MAX_FIELD_LENGTH = 1000;

function sanitize(value: unknown, maxLength = MAX_FIELD_LENGTH) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function createSubmissionId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `lead_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

export async function POST(request: Request) {
  const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_WEB_APP_URL;
  const secret = process.env.LEAD_FORM_SHARED_SECRET;

  if (!scriptUrl || !secret) {
    return NextResponse.json({ success: false, error: "Lead form is not configured." }, { status: 500 });
  }

  let body: ContactLeadRequest;

  try {
    body = (await request.json()) as ContactLeadRequest;
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request." }, { status: 400 });
  }

  const fullName = sanitize(body.fullName, 160);
  const phoneNumber = sanitize(body.phoneNumber, 80);
  const treatmentInterestedIn = sanitize(body.treatmentInterestedIn, 160);
  const message = sanitize(body.message, 1200);
  const language = sanitize(body.language, 8);
  const pageUrl = sanitize(body.pageUrl, 500);
  const sourceMedium = sanitize(body.sourceMedium, 180);
  const campaign = sanitize(body.campaign, 180);
  const formName = sanitize(body.formName, 120) || "contact_consultation_form";

  if (!fullName || !phoneNumber || !treatmentInterestedIn) {
    return NextResponse.json({ success: false, error: "Missing required fields." }, { status: 400 });
  }

  const payload = {
    secret,
    fullName,
    phoneNumber,
    treatmentInterestedIn,
    message,
    language,
    pageUrl,
    sourceMedium,
    campaign,
    formName,
    submissionId: createSubmissionId()
  };

  try {
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store"
    });

    const result = (await response.json().catch(() => null)) as { success?: boolean; error?: string } | null;

    if (!response.ok || !result?.success) {
      return NextResponse.json({ success: false, error: result?.error || "Google Sheets submission failed." }, { status: 502 });
    }

    return NextResponse.json({ success: true, submissionId: payload.submissionId });
  } catch {
    return NextResponse.json({ success: false, error: "Google Sheets submission failed." }, { status: 502 });
  }
}
