import { CONDITIONS, HOME_FAQS, ONBOARDING, PROVIDERS, TESTIMONIALS } from '../data';
import {
  Check, Eyebrow, FAQList, LinkNav, Pillars, Quiz, Reframe,
  SectionHead, Slot, Trial,
} from '../ui';

export default function Home() {
  return (
    <>
      {/* 1. hero */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="rise">
            <Eyebrow>In-home care for older adults</Eyebrow>
            <h1 className="display">
              Care that keeps you <span className="serif-em">moving</span>, not just managed.
            </h1>
            <p className="lede">
              [PLACEHOLDER] One short, warm sentence for you or an ageing parent: whole-person care at home, with a doctor behind every plan.
            </p>
            <div className="hero-cta">
              <Trial />
              <LinkNav to="/how-we-work">See how we work</LinkNav>
            </div>
            <div className="trust-row">
              <span className="ti"><b>5</b> connected pillars</span>
              <span className="ti"><Check /> Doctor-designed plans</span>
              <span className="ti"><Check /> Care at home</span>
            </div>
          </div>
          <div className="hero-media rise d2" aria-hidden>
            <Slot label="Rotating hero · parent walking" />
            <Slot label="Session at home" />
            <Slot label="Provider + family" />
          </div>
        </div>
      </section>

      {/* 2. condition cards */}
      <section className="section-tight">
        <div className="wrap">
          <SectionHead
            eyebrow="Start where it hurts"
            title="What is making the day smaller?"
            intro="[PLACEHOLDER] Pick the one that sounds most like you, or like someone you care for. The quiz takes two minutes."
          />
          <div className="grid cols-3">
            {CONDITIONS.map((c) => (
              <div className="card hover stack" key={c.slug} style={{ ['--gap' as string]: '16px' }}>
                <Slot label={`${c.name} · photo`} style={{ aspectRatio: '16/10' }} />
                <span className="tag green">{c.name}</span>
                <h3 className="sub">{c.symptom}</h3>
                <p className="muted" style={{ fontSize: 15 }}>{c.intro}</p>
                <Quiz />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. problem reframe — most important section on the page */}
      <section className="section">
        <div className="wrap">
          <Reframe
            eyebrow="Why most senior care falls short"
            title={<>Treating one part at a time keeps recovery stuck.</>}
            intro="[PLACEHOLDER] The reframe: pain, weakness, mood and nutrition feed each other. Fix one in isolation and the others quietly pull progress back. This is the single idea the whole site turns on."
            reasons={[
              '[PLACEHOLDER] A physio fixes the knee, but no one rebuilds the strength that protects it.',
              '[PLACEHOLDER] Strength improves, but low mood and poor nutrition stall it.',
              '[PLACEHOLDER] No single person is accountable for the whole picture.',
            ]}
          />
        </div>
      </section>

      {/* 4. services as 5 pillars — one connected visual */}
      <section className="section-tight">
        <div className="wrap two-col">
          <div className="split-head">
            <Eyebrow blue>One system, not five services</Eyebrow>
            <h2 className="title">Five pillars, working as one plan.</h2>
            <p className="lede">
              [PLACEHOLDER] A line on how the pillars connect under a single doctor-led plan.
            </p>
            <LinkNav to="/how-we-work">See how they connect</LinkNav>
          </div>
          <Pillars spine />
        </div>
      </section>

      {/* 5. testimonials, tagged by condition */}
      <section className="section-tight">
        <div className="wrap">
          <SectionHead eyebrow="Seniors and families like you" title="Small wins that change a week." blue />
          <div className="grid cols-3">
            {TESTIMONIALS.map((t) => (
              <div className="card card-pad-lg stack" key={t.slug} style={{ ['--gap' as string]: '14px' }}>
                <span className="tag">{t.label}</span>
                <p className="quote">“{t.quote}”</p>
                <div className="quote-foot">
                  <Slot label="" className="round" style={{ width: 40, height: 40, minHeight: 0 }} />
                  <span className="faint" style={{ fontSize: 13.5 }}>[PLACEHOLDER] Name, relation</span>
                </div>
                <LinkNav to={`/conditions/${t.slug}`}>Read about {t.label.toLowerCase()}</LinkNav>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. providers */}
      <section className="section-tight">
        <div className="wrap two-col">
          <div className="split-head">
            <Eyebrow>The people who show up</Eyebrow>
            <h2 className="title">Vetted providers, one accountable doctor.</h2>
            <p className="lede">[PLACEHOLDER] A line on how providers are selected and overseen.</p>
            <LinkNav to="/about">Meet the team</LinkNav>
          </div>
          <div className="providers">
            {PROVIDERS.map((p) => (
              <div className="provider" key={p.name}>
                <Slot label="Provider" />
                <h4>{p.name}</h4>
                <div className="role">{p.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. onboarding preview */}
      <section className="section-tight">
        <div className="wrap">
          <SectionHead eyebrow="What happens next" title="From first hello to first session." blue />
          <div className="grid cols-4">
            {ONBOARDING.map((s, i) => (
              <div className="card stack" key={i} style={{ ['--gap' as string]: '10px' }}>
                <span className="kicker-num">{String(i + 1).padStart(2, '0')}</span>
                <h4 style={{ fontSize: '1.1rem' }}>{s.t}</h4>
                <p className="muted" style={{ fontSize: 14 }}>{s.d}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 22 }}>
            <LinkNav to="/how-we-work">See the full process</LinkNav>
          </div>
        </div>
      </section>

      {/* 8. backed by / operators */}
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

      {/* 9. FAQ */}
      <section className="section">
        <div className="wrap two-col">
          <div className="split-head">
            <Eyebrow>Good questions</Eyebrow>
            <h2 className="title">The things families ask first.</h2>
          </div>
          <FAQList items={HOME_FAQS} />
        </div>
      </section>
    </>
  );
}
