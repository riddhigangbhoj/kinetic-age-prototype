import { conditionBySlug, pillarBySlug } from '../data';
import { Arrow, Eyebrow, LinkNav, Quiz, Reframe, SectionHead, Slot } from '../ui';

export default function PillarPage({ slug }: { slug: string }) {
  const p = pillarBySlug(slug);
  if (!p) {
    return (
      <section className="section">
        <div className="wrap stack">
          <h1 className="title">[PLACEHOLDER] Service not found</h1>
          <LinkNav to="/how-we-work">Back to how we work</LinkNav>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* 1. pillar value + who it is for */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="rise">
            <Eyebrow>Services · {p.name}</Eyebrow>
            <h1 className="display" style={{ fontSize: 'clamp(2.2rem,6vw,3.8rem)' }}>{p.name}</h1>
            <p className="lede">{p.blurb}</p>
            <div className="card card-pad-lg" style={{ marginTop: 24 }}>
              <Eyebrow blue>Who it is for</Eyebrow>
              <p style={{ marginTop: 10, fontSize: 16.5 }}>{p.who}</p>
            </div>
          </div>
          <div className="rise d2">
            <Slot label={`${p.name} · session`} style={{ aspectRatio: '4/3' }} />
          </div>
        </div>
      </section>

      {/* 2. what sessions look like */}
      <section className="section-tight">
        <div className="wrap">
          <SectionHead eyebrow="In a session" title="What it actually looks like." blue />
          <div className="grid cols-3">
            {[1, 2, 3].map((n) => (
              <div className="card stack" key={n} style={{ ['--gap' as string]: '12px' }}>
                <span className="kicker-num">{String(n).padStart(2, '0')}</span>
                <h4 style={{ fontSize: '1.15rem' }}>[PLACEHOLDER] Session step {n}</h4>
                <p className="muted" style={{ fontSize: 14.5 }}>[PLACEHOLDER] A short line on what happens.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. reframe — mandatory on every pillar instance */}
      <section className="section">
        <div className="wrap">
          <Reframe
            eyebrow="Doctor-led, by design"
            title={<>Our doctor decides what you actually need, including what you don’t.</>}
            intro="[PLACEHOLDER] Why a doctor scopes every pillar: the right amount of this service for you or your parent, no upsell, sometimes less than you expected. This block stays on every service page."
          />
        </div>
      </section>

      {/* 4. conditions this pillar helps — links to condition pages only */}
      <section className="section-tight">
        <div className="wrap">
          <SectionHead eyebrow="Where it helps" title={`Conditions ${p.name.toLowerCase()} supports.`} />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {p.conditions.map((cs) => {
              const c = conditionBySlug(cs);
              return c ? (
                <a className="chip" key={cs} data-go={`/conditions/${cs}`} href={`#/conditions/${cs}`}>
                  {c.name} <Arrow />
                </a>
              ) : null;
            })}
          </div>
        </div>
      </section>

      {/* 5. provider credentials */}
      <section className="section-tight">
        <div className="wrap two-col">
          <div className="providers" style={{ gridTemplateColumns: '1fr 1fr' }}>
            {[1, 2].map((n) => (
              <div className="provider" key={n}>
                <Slot label="Provider" />
                <h4>[PLACEHOLDER] Name</h4>
                <div className="role">[PLACEHOLDER] Credential</div>
              </div>
            ))}
          </div>
          <div className="split-head">
            <Eyebrow blue>Who delivers it</Eyebrow>
            <h2 className="title">Credentialed for {p.name.toLowerCase()}.</h2>
            <p className="lede">[PLACEHOLDER] How providers for this pillar are qualified and vetted.</p>
          </div>
        </div>
      </section>

      {/* 6. quiz */}
      <section className="section">
        <div className="wrap" style={{ textAlign: 'center', display: 'grid', justifyItems: 'center', gap: 18 }}>
          <h2 className="title" style={{ maxWidth: '20ch' }}>Is {p.name.toLowerCase()} what you need? Find out.</h2>
          <Quiz />
        </div>
      </section>
    </>
  );
}
