import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries";

export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-ink text-white">
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-5 text-center">
        <p className="text-[11px] tracking-[0.32em] text-white/80 uppercase">
          {dict.hero.kicker}
        </p>
        <h1 className="font-serif mt-6 max-w-5xl text-5xl leading-[1.15] font-medium tracking-[0.12em] uppercase sm:text-6xl md:text-7xl">
          {dict.hero.title}
        </h1>
        <p className="mt-8 text-sm tracking-[0.2em] text-white/80 uppercase">
          {dict.hero.companyLine}
        </p>
        <p className="mt-3 text-xs tracking-[0.18em] text-white/60">
          {dict.hero.dreLine}
        </p>
      </div>
    </section>
  );
}
