import { conditionBySlug } from '../data';
import {
  Eyebrow, FAQList, LinkNav, Quiz, Reframe, SectionHead, Slot, WhatsApp,
} from '../ui';

export default function ConditionPage({ slug }: { slug: string }) {
  const c = conditionBySlug(slug);
  if (!c) return <NotFound />;

  // FAQ schema markup (spec requirement)
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* 1. symptom-matched headline + intro */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="rise">
            <Eyebrow>Conditions · {c.name}</Eyebrow>
            <h1 className="display" style={{ fontSize: 'clamp(2.1rem,6vw,3.6rem)' }}>{c.symptom}</h1>
            <p className="lede">{c.intro}</p>
            <div className="hero-cta">
              <WhatsApp text={`Hi, please send me the 7-day plan for ${c.name}`} label="Get the free 7-day plan" />
            </div>
          </div>
          <div className="rise d2">
            <Slot label={`${c.name} · hero`} style={{ aspectRatio: '4/3' }} />
          </div>
        </div>
      </section>

      {/* 2. mini reframe — most important section on this page */}
      <section className="section-tight">
        <div className="wrap">
          <Reframe
            soft
            eyebrow="Why this usually happens in seniors"
            title="It is rarely just one thing."
            intro="[PLACEHOLDER] Two or three contributing causes that tend to stack up for this condition."
            reasons={c.reasons}
          />
        </div>
      </section>

      {/* 3. three free exercises */}
      <section className="section-tight">
        <div className="wrap">
          <SectionHead eyebrow="Start today, free" title="Three exercises that usually help." blue />
          <div className="grid cols-3">
            {[1, 2, 3].map((n) => (
              <div className="card stack" key={n} style={{ ['--gap' as string]: '14px' }}>
                <Slot video label={`Exercise ${n}`} style={{ aspectRatio: '16/10' }} />
                <h4 style={{ fontSize: '1.1rem' }}>[PLACEHOLDER] Exercise {n} name</h4>
                <p className="muted" style={{ fontSize: 14 }}>[PLACEHOLDER] One line on what it does.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. whatsapp 7-day plan */}
      <section className="section-tight">
        <div className="wrap">
          <div className="card card-pad-lg two-col" style={{ alignItems: 'center' }}>
            <div className="stack" style={{ ['--gap' as string]: '12px' }}>
              <Eyebrow blue>Free, on WhatsApp</Eyebrow>
              <h3 className="sub">Want the full 7-day plan for {c.name.toLowerCase()}?</h3>
              <p className="muted">[PLACEHOLDER] What is inside the plan and how it arrives.</p>
            </div>
            <WhatsApp text={`Hi, please send me the 7-day plan for ${c.name}`} label={`Send me the ${c.name} plan`} />
          </div>
        </div>
      </section>

      {/* 5. how we treat this */}
      <section className="section-tight">
        <div className="wrap two-col">
          <div className="split-head">
            <Eyebrow>Our approach</Eyebrow>
            <h2 className="title">How we treat {c.name.toLowerCase()}.</h2>
            <p className="lede">
              [PLACEHOLDER] Short block on how the connected pillars address this specific condition, under doctor oversight.
            </p>
            <LinkNav to="/how-we-work">See how we work</LinkNav>
          </div>
          <Slot label="Treatment approach" style={{ aspectRatio: '4/3' }} />
        </div>
      </section>

      {/* 6. one matching testimonial */}
      <section className="section-tight">
        <div className="wrap">
          <div className="card card-pad-lg stack" style={{ ['--gap' as string]: '16px', maxWidth: 760 }}>
            <span className="tag green">{c.name}</span>
            <p className="quote" style={{ fontSize: 'clamp(1.3rem,3vw,1.7rem)' }}>“{c.testimonial}”</p>
            <div className="quote-foot">
              <Slot label="" className="round" style={{ width: 44, height: 44, minHeight: 0 }} />
              <span className="faint" style={{ fontSize: 14 }}>[PLACEHOLDER] Name, relation</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. quiz */}
      <section className="section-tight">
        <div className="wrap" style={{ textAlign: 'center', display: 'grid', justifyItems: 'center', gap: 18 }}>
          <h2 className="title" style={{ maxWidth: '20ch' }}>See what is likely driving it for you.</h2>
          <Quiz />
        </div>
      </section>

      {/* 8. condition FAQ */}
      <section className="section">
        <div className="wrap two-col">
          <div className="split-head">
            <Eyebrow>{c.name} questions</Eyebrow>
            <h2 className="title">What families ask about {c.name.toLowerCase()}.</h2>
          </div>
          <FAQList items={c.faqs} />
        </div>
      </section>
    </>
  );
}

function NotFound() {
  return (
    <section className="section">
      <div className="wrap stack">
        <h1 className="title">[PLACEHOLDER] Condition not found</h1>
        <LinkNav to="/conditions">Back to all conditions</LinkNav>
      </div>
    </section>
  );
}
