"use client";

import { useEffect, useState } from "react";
import { localizedPath, site, switchLocalePath, type Locale } from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries";

type HeaderProps = {
  lang: Locale;
  dict: Dictionary;
};

export function Header({ lang, dict }: HeaderProps) {
  const [pathname, setPathname] = useState("/");

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);
  const [open, setOpen] = useState(false);
  const otherLang: Locale = lang === "en" ? "zh" : "en";
  const links = [
    { href: localizedPath(lang, "/"), label: dict.nav.home },
    { href: localizedPath(lang, "/buy"), label: dict.nav.buy },
    { href: localizedPath(lang, "/sell"), label: dict.nav.sell },
    { href: localizedPath(lang, "/contact"), label: dict.nav.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-30 bg-gradient-to-b from-black/55 to-transparent">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8">
        <a
          href={localizedPath(lang, "/")}
          className="text-[11px] font-medium tracking-[0.22em] text-white uppercase"
        >
          Hao Family
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] tracking-[0.22em] text-white/90 uppercase transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.phones[0].href}
            className="text-[11px] tracking-[0.18em] text-white/90 hover:text-white"
          >
            {site.phones[0].label}
          </a>
          <a
            href={switchLocalePath(pathname, otherLang)}
            className="text-[11px] tracking-[0.22em] text-white uppercase"
          >
            {dict.nav.otherLanguage}
          </a>
        </nav>

        <button
          type="button"
          className="text-white md:hidden"
          aria-expanded={open}
          aria-label={open ? dict.nav.closeMenu : dict.nav.openMenu}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="block h-px w-6 bg-white" />
          <span className="mt-1.5 block h-px w-6 bg-white" />
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/20 bg-ink/95 px-5 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-[0.18em] text-white uppercase"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href={site.phones[0].href} className="text-sm text-white/90">
              {site.phones[0].label}
            </a>
            <a
              href={switchLocalePath(pathname, otherLang)}
              className="text-sm tracking-[0.18em] text-white uppercase"
              onClick={() => setOpen(false)}
            >
              {dict.nav.otherLanguage}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
