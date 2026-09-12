import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionHeader } from '@/components/ui/Section';
import { brand, finalManifesto } from '@/content/site';

export function FinalManifesto() {
  return (
    <Section id="manifeste" className="bg-paper-deep">
      <div className="shell">
        <SectionHeader
          index={finalManifesto.index}
          label={finalManifesto.sectionLabel}
          note="POSITION / 02"
        />

        <div className="grid12 pt-10 md:pt-20">
          <div className="col-span-4 md:col-span-9">
            <p className="display display-md text-ink-soft">
              <Reveal className="block">{finalManifesto.opening[0]} </Reveal>
              <Reveal delay={120} className="block">
                {finalManifesto.opening[1]}
              </Reveal>
            </p>
          </div>
        </div>

        <div className="grid12 pt-10 md:pt-16">
          <div className="col-span-4 md:col-span-10">
            <p className="display display-xl text-blue">
              <Reveal>{finalManifesto.pivot}</Reveal>
            </p>
          </div>
        </div>

        <ul className="mt-12 border-b border-[var(--rule-strong)] md:mt-20">
          {finalManifesto.lines.map((line, i) => (
            <li key={line} className="border-t border-[var(--rule-strong)]">
              <Reveal
                delay={i * 90}
                className="grid grid-cols-[auto_1fr] items-baseline gap-x-4 py-5 md:grid-cols-12 md:gap-x-6 md:py-7"
              >
                <span className="label text-ink-mute md:col-span-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="display display-md md:col-span-10">{line}</p>
              </Reveal>
            </li>
          ))}
        </ul>

        {/* ── Signature ───────────────────────────────────────────────────── */}
        <div className="pb-14 pt-12 md:pb-20 md:pt-20">
          <Reveal>
            <p className="font-semibold leading-[0.78] tracking-tightest text-ink text-[clamp(4rem,31vw,30rem)]">
              {brand.wordmark}
            </p>
          </Reveal>

          <div className="mt-10 flex flex-col gap-5 border-t border-ink pt-6 md:flex-row md:items-center md:justify-between">
            <p className="label max-w-[44ch] leading-relaxed text-ink">{brand.signatureMono}</p>
            <a href={finalManifesto.cta.href} className="btn btn-primary shrink-0">
              {finalManifesto.cta.label}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
