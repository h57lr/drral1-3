import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { getPreferredLocale, localeCookieName } from "@/lib/i18n";

export default async function RootPage() {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const preferredLocale = getPreferredLocale(
    headerStore.get("accept-language"),
    cookieStore.get(localeCookieName)?.value
  );

  redirect(`/${preferredLocale}`);
}
