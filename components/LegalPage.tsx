import { Colophon } from '@/components/Colophon';
import { Masthead } from '@/components/Masthead';

type LegalPageProps = {
  index: string;
  label: string;
  title: string;
  /** Champs à compléter par l'éditeur du site — aucune mention inventée. */
  fields: { label: string; value?: string }[];
  note?: string;
};

export function LegalPage({ index, label, title, fields, note }: LegalPageProps) {
  return (
    <>
      <Masthead />
      <main className="shell">
        <div className="pt-5 md:pt-6">
          <div className="rule-strong" />
          <div className="mt-3 flex items-baseline justify-between gap-4">
            <div className="flex items-baseline gap-3 md:gap-5">
              <span className="label text-blue">{index}</span>
              <span className="label text-ink">{label}</span>
            </div>
            <a href="/" className="label text-ink-mute transition-colors hover:text-blue">
              ← Retour
            </a>
          </div>
        </div>

        <div className="grid12 pt-10 md:pt-16">
          <div className="col-span-4 md:col-span-9">
            <h1 className="display display-lg">{title}</h1>
          </div>
        </div>

        <dl className="mt-12 border-b border-[var(--rule-strong)] md:mt-16">
          {fields.map((field) => (
            <div
              key={field.label}
              className="grid12 items-baseline border-t border-[var(--rule-strong)] py-4 md:py-5"
            >
              <dt className="label col-span-4 text-ink-soft md:col-span-3">{field.label}</dt>
              <dd className="col-span-4 mt-2 md:col-span-8 md:col-start-5 md:mt-0">
                {field.value ? (
                  <p className="body-text">{field.value}</p>
                ) : (
                  <p className="label text-signal">À compléter</p>
                )}
              </dd>
            </div>
          ))}
        </dl>

        {note ? <p className="body-text mt-8 max-w-measure">{note}</p> : null}

        <div className="h-16 md:h-24" />
      </main>
      <Colophon />
    </>
  );
}
