import type { Metadata } from "next";
import { site } from "@/config/site";
import { hasLocale } from "@/config/site";
import { getDictionary } from "@/i18n/dictionaries";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/contact">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang);
  return {
    title: dict.meta.contactTitle,
    description: dict.meta.contactDescription,
  };
}

export default async function ContactPage({
  params,
}: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  if (!hasLocale(lang)) return null;
  const dict = getDictionary(lang);

  return (
    <main className="bg-background">
      <section className="bg-navy px-5 pt-32 pb-16 text-white md:px-8 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] tracking-[0.28em] text-white/60 uppercase">
            {dict.contact.kicker}
          </p>
          <h1 className="font-serif mt-4 text-4xl font-medium text-balance md:text-5xl">
            {dict.contact.title}
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-8">
        <dl className="space-y-8">
          <div>
            <dt className="text-[11px] tracking-[0.22em] text-muted uppercase">
              {dict.contact.phone}
            </dt>
            {site.phones.map((phone) => (
              <dd key={phone.href} className="mt-2 text-lg">
                <a href={phone.href} className="hover:underline">
                  {phone.label}
                </a>
              </dd>
            ))}
          </div>
          <div>
            <dt className="text-[11px] tracking-[0.22em] text-muted uppercase">
              {dict.contact.email}
            </dt>
            <dd className="mt-2 text-lg">
              <a href={`mailto:${site.email}`} className="hover:underline">
                {site.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-[11px] tracking-[0.22em] text-muted uppercase">
              {dict.contact.wechat}
            </dt>
            <dd className="mt-2 text-lg">
              {dict.contact.wechatId}: {site.wechat}
            </dd>
          </div>
          <div>
            <dt className="text-[11px] tracking-[0.22em] text-muted uppercase">
              {dict.contact.address}
            </dt>
            <dd className="mt-2 text-lg">
              <a href={site.address.mapsUrl} className="hover:underline">
                {site.address.line1}
                <br />
                {site.address.line2}
              </a>
            </dd>
          </div>
        </dl>

        <div className="border border-line bg-white p-8">
          <p className="text-[11px] tracking-[0.22em] text-muted uppercase">
            {dict.contact.qrLabel}
          </p>
          <div className="mt-6 flex aspect-square max-w-[260px] items-center justify-center border border-dashed border-line bg-background">
            <p className="px-6 text-center text-sm text-muted">{dict.contact.qrHint}</p>
          </div>
          <p className="mt-4 text-sm text-muted">{site.wechat}</p>
        </div>
      </section>
    </main>
  );
}
