import { CONDITIONS, CONDITIONS_FAQS, OTHER_CONDITIONS } from '../data';
import { Eyebrow, FAQList, LinkNav, Quiz, SectionHead, Slot, WhatsApp } from '../ui';

export default function Conditions() {
  return (
    <>
      <section className="section-tight" style={{ paddingTop: 'clamp(34px,6vw,72px)' }}>
        <div className="wrap">
          <SectionHead
            eyebrow="Conditions we work with"
            title="Find what is going on, in plain words."
            intro="[PLACEHOLDER] A line on how to use this page: start with a common one, or ask about anything not listed."
          />

          {/* 1. three main condition cards */}
          <div className="grid cols-3">
            {CONDITIONS.map((c) => (
              <div className="card hover stack" key={c.slug} style={{ ['--gap' as string]: '16px' }}>
                <Slot label={`${c.name} · photo`} style={{ aspectRatio: '16/10' }} />
                <span className="tag green">{c.name}</span>
                <h3 className="sub">{c.symptom}</h3>
                <p className="muted" style={{ fontSize: 15 }}>{c.intro}</p>
                <LinkNav to={`/conditions/${c.slug}`}>Read about {c.name.toLowerCase()}</LinkNav>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. all other conditions, two-column list + whatsapp */}
      <section className="section-tight">
        <div className="wrap">
          <div className="card card-pad-lg">
            <Eyebrow blue>More we help with</Eyebrow>
            <h3 className="sub" style={{ marginTop: 12, marginBottom: 20 }}>
              Not seeing it? It is probably still us.
            </h3>
            <div
              style={{
                columns: 2,
                columnGap: 28,
                marginBottom: 24,
              }}
            >
              {OTHER_CONDITIONS.map((c) => (
                <div
                  key={c}
                  style={{
                    breakInside: 'avoid',
                    padding: '9px 0',
                    borderBottom: '1px solid var(--line)',
                    fontWeight: 600,
                    fontSize: 15,
                  }}
                >
                  {c}
                </div>
              ))}
            </div>
            <WhatsApp
              text="Hi, I want to ask about a condition not listed on your site"
              label="Ask about a condition not listed"
            />
          </div>
        </div>
      </section>

      {/* 3. quiz */}
      <section className="section-tight">
        <div className="wrap" style={{ textAlign: 'center', display: 'grid', justifyItems: 'center', gap: 18 }}>
          <h2 className="title" style={{ maxWidth: '18ch' }}>Not sure which fits? Let the quiz point you.</h2>
          <p className="lede" style={{ textAlign: 'center' }}>[PLACEHOLDER] Two minutes, tap to answer, a report on WhatsApp.</p>
          <Quiz />
        </div>
      </section>

      {/* 4. FAQ */}
      <section className="section">
        <div className="wrap two-col">
          <div className="split-head">
            <Eyebrow>Good questions</Eyebrow>
            <h2 className="title">Before you pick a condition.</h2>
          </div>
          <FAQList items={CONDITIONS_FAQS} />
        </div>
      </section>
    </>
  );
}
