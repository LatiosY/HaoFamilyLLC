import type { Metadata } from "next";
import { hasLocale, localizedPath, type Locale } from "@/config/site";
import { getDictionary } from "@/i18n/dictionaries";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/buy">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang);
  return { title: dict.meta.buyTitle, description: dict.meta.buyDescription };
}

export default async function BuyPage({ params }: PageProps<"/[lang]/buy">) {
  const { lang } = await params;
  if (!hasLocale(lang)) return null;
  const dict = getDictionary(lang);

  return (
    <main className="bg-background">
      <PageHero kicker={dict.buy.kicker} title={dict.buy.title} intro={dict.buy.intro} />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <h2 className="font-serif text-3xl">{dict.buy.stepsTitle}</h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-2">
          {dict.buy.steps.map((step, index) => (
            <li key={step.title} className="border-t border-line pt-6">
              <p className="text-[11px] tracking-[0.22em] text-muted uppercase">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <h2 className="font-serif text-3xl">{dict.buy.valuesTitle}</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {dict.buy.values.map((value) => (
              <div key={value.title}>
                <h3 className="text-lg">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{value.body}</p>
              </div>
            ))}
          </div>
          <a
            href={localizedPath(lang as Locale, "/contact")}
            className="mt-12 inline-flex border border-foreground px-8 py-3 text-[11px] tracking-[0.22em] uppercase"
          >
            {dict.buy.cta}
          </a>
        </div>
      </section>
    </main>
  );
}

function PageHero({
  kicker,
  title,
  intro,
}: {
  kicker: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="bg-navy px-5 pt-32 pb-16 text-white md:px-8 md:pt-40 md:pb-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] tracking-[0.28em] text-white/60 uppercase">{kicker}</p>
        <h1 className="font-serif mt-4 max-w-3xl text-4xl font-medium text-balance md:text-5xl">{title}</h1>
        <p className="mt-8 max-w-2xl text-sm leading-7 text-white/70 md:text-base">{intro}</p>
      </div>
    </section>
  );
}
