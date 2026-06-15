import { PROVIDERS } from '../data';
import { Eyebrow, SectionHead, Slot, Trial } from '../ui';

const JOURNEY = [
  { y: '[PLACEHOLDER] Year', t: '[PLACEHOLDER] How it began' },
  { y: '[PLACEHOLDER] Year', t: '[PLACEHOLDER] The pivot' },
  { y: '[PLACEHOLDER] Year', t: '[PLACEHOLDER] Where we are now' },
];

export default function About() {
  return (
    <>
      {/* 1. header */}
      <section className="section" style={{ paddingBottom: 'clamp(24px,4vw,40px)' }}>
        <div className="wrap" style={{ maxWidth: 880 }}>
          <Eyebrow>About us</Eyebrow>
          <h1 className="display" style={{ fontSize: 'clamp(2.2rem,6vw,3.8rem)', marginTop: 18 }}>
            Built because good care for older adults was too <span className="serif-em">fragmented</span>.
          </h1>
          <p className="lede" style={{ marginTop: 20 }}>
            [PLACEHOLDER] Who we are and why we are different: one accountable medical view, care at home, the whole person in focus, whether you came for yourself or for a parent.
          </p>
        </div>
      </section>

      {/* 2. providers in detail */}
      <section className="section-tight">
        <div className="wrap">
          <SectionHead eyebrow="The team" title="Providers, in detail." blue />
          <div className="providers">
            {PROVIDERS.map((p) => (
              <div className="provider card" key={p.name} style={{ padding: 16 }}>
                <Slot label="Provider" />
                <h4>{p.name}</h4>
                <div className="role">{p.role}</div>
                <p className="muted" style={{ fontSize: 13.5, marginTop: 8 }}>[PLACEHOLDER] Credentials and a line of background.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. our journey */}
      <section className="section-tight">
        <div className="wrap two-col">
          <div className="split-head">
            <Eyebrow>Our journey</Eyebrow>
            <h2 className="title">A short history.</h2>
          </div>
          <div className="timeline">
            {JOURNEY.map((j, i) => (
              <div className="tl-item" key={i}>
                <span className="tl-dot" />
                <div>
                  <div className="tl-week">{j.y}</div>
                  <h4 style={{ fontSize: '1.08rem', marginTop: 2 }}>{j.t}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. team group photo */}
      <section className="section-tight">
        <div className="wrap">
          <Slot label="Team group photo" style={{ aspectRatio: '16/7' }} />
        </div>
      </section>

      {/* 5. founders message */}
      <section className="section-tight">
        <div className="wrap two-col">
          <Slot video label="Founder's message" style={{ aspectRatio: '16/10' }} />
          <div className="split-head">
            <Eyebrow blue>From the founder</Eyebrow>
            <h2 className="title">Why we keep it personal.</h2>
            <p className="lede">[PLACEHOLDER] A short framing of the founder's message in the video.</p>
          </div>
        </div>
      </section>

      {/* 6. backed by / operators */}
      <section className="section-tight">
        <div className="wrap stack" style={{ ['--gap' as string]: '18px' }}>
          <span className="eyebrow">Backed by · operators from</span>
          <div className="logos">
            {[1, 2, 3, 4, 5].map((i) => (
              <div className="logo-slot" key={i}>Logo {i}</div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. the only in-content trial CTA on this page */}
      <section className="section">
        <div className="wrap" style={{ textAlign: 'center', display: 'grid', justifyItems: 'center', gap: 18 }}>
          <h2 className="title" style={{ maxWidth: '20ch' }}>If this sounds like the care you want, start with a trial.</h2>
          <p className="lede" style={{ textAlign: 'center' }}>[PLACEHOLDER] One reassuring line before the trial ask.</p>
          <Trial />
        </div>
      </section>
    </>
  );
}
