export const site = {
  company: "Hao Family Investment LLC",
  agentName: "Zhixin Hao",
  dre: "TBD",
  address: {
    line1: "4311 El Camino Real, Suite 4218",
    line2: "Santa Clara, CA 95050",
    mapsUrl:
      "https://maps.google.com/?q=4311+El+Camino+Real+Suite+4218+Santa+Clara+CA+95050",
  },
  phones: [
    { label: "+1 650-586-8170", href: "tel:+16505868170" },
    { label: "+86 182-2233-0629", href: "tel:+8618222330629" },
  ],
  email: "zhixin.hao@alumni.scu.edu",
  wechat: "18222330629",
  domain: "haofamilyinvestment.com",
  area: "Bay Area",
} as const;

export const locales = ["en", "zh"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function hasLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localizedPath(lang: Locale, path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (lang === "en") return normalized;
  return normalized === "/" ? "/zh" : `/zh${normalized}`;
}

export function pathnameWithoutLocale(pathname: string) {
  if (pathname === "/zh" || pathname === "/en") return "/";
  if (pathname.startsWith("/zh/")) return pathname.slice(3);
  if (pathname.startsWith("/en/")) return pathname.slice(3);
  return pathname || "/";
}

export function switchLocalePath(currentPath: string, next: Locale) {
  return localizedPath(next, pathnameWithoutLocale(currentPath));
}
