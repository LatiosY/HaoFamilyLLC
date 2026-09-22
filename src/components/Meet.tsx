import type { Dictionary } from "@/i18n/dictionaries";

export function Meet({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-[minmax(0,0.9fr)_1.2fr] md:gap-16 md:px-8 md:py-28">
        <div className="flex aspect-[4/5] items-center justify-center bg-[#161616]">
          <div className="text-center">
            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-white/20 text-2xl tracking-[0.2em]">
              ZH
            </div>
            <p className="sr-only">{dict.meet.photoAlt}</p>
          </div>
        </div>
        <div>
          <h2 className="font-serif text-4xl font-medium md:text-5xl">
            {dict.meet.title}
          </h2>
          <div className="mt-8 space-y-5 text-sm leading-7 text-white/75 md:text-base md:leading-8">
            <p>{dict.meet.p1}</p>
            <p>{dict.meet.p2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
