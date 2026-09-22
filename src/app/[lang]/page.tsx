import { Hero } from "@/components/Hero";
import { Meet } from "@/components/Meet";
import { ServiceCards } from "@/components/ServiceCards";
import { hasLocale, type Locale } from "@/config/site";
import { getDictionary } from "@/i18n/dictionaries";

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) return null;
  const dict = getDictionary(lang);

  return (
    <main>
      <Hero dict={dict} />
      <ServiceCards lang={lang as Locale} dict={dict} />
      <Meet dict={dict} />
    </main>
  );
}
