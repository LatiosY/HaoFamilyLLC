import { localizedPath, site, type Locale } from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries";

export function Footer({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const links = [
    { href: localizedPath(lang, "/"), label: dict.nav.home },
    { href: localizedPath(lang, "/buy"), label: dict.nav.buy },
    { href: localizedPath(lang, "/sell"), label: dict.nav.sell },
    { href: localizedPath(lang, "/contact"), label: dict.nav.contact },
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-3 md:px-8">
        <div>
          <p className="text-[11px] tracking-[0.28em] uppercase">{site.company}</p>
          <p className="mt-4 text-sm text-white/70">
            {dict.footer.dre} {site.dre}
          </p>
          <p className="mt-6 flex items-center gap-2 text-xs tracking-[0.12em] text-white/80 uppercase">
            <FairHousingMark />
            {dict.footer.fairHousing}
          </p>
        </div>

        <div>
          <p className="text-[11px] tracking-[0.22em] text-white/50 uppercase">
            {dict.footer.navigation}
          </p>
          <ul className="mt-4 space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-white/85 hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] tracking-[0.22em] text-white/50 uppercase">
            {dict.footer.contact}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/85">
            {site.phones.map((phone) => (
              <li key={phone.href}>
                <a href={phone.href} className="hover:text-white">
                  {phone.label}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              WeChat {site.wechat}
            </li>
            <li>
              <a href={site.address.mapsUrl} className="hover:text-white">
                {site.address.line1}
                <br />
                {site.address.line2}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-6 text-center text-xs text-white/45 md:px-8">
        {dict.footer.disclaimer}
      </div>
    </footer>
  );
}

function FairHousingMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M12 3 3 10h2v10h5v-6h4v6h5V10h2L12 3z" />
      <circle cx="12" cy="13.2" r="1.15" className="fill-navy" />
    </svg>
  );
}
