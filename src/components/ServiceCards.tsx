import { localizedPath, type Locale } from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries";

export function ServiceCards({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const cards = [
    { href: localizedPath(lang, "/buy"), title: dict.services.buyersTitle, body: dict.services.buyersBody },
    { href: localizedPath(lang, "/sell"), title: dict.services.sellersTitle, body: dict.services.sellersBody },
    { href: localizedPath(lang, "/contact"), title: dict.services.contactTitle, body: dict.services.contactBody },
  ];

  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-6xl gap-px bg-line md:grid-cols-3">
        {cards.map((card) => (
          <a
            key={card.href}
            href={card.href}
            className="group bg-background px-8 py-16 transition-colors hover:bg-white"
          >
            <h2 className="font-serif text-4xl font-medium tracking-wide">
              {card.title}
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-muted">
              {card.body}
            </p>
            <p className="mt-8 text-[11px] tracking-[0.22em] uppercase">
              {dict.services.learnMore} →
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
