import { HOW_FAQS, ONBOARDING, REPORT_TIMELINE } from '../data';
import {
  Eyebrow, FAQList, LinkNav, Pillars, Quiz, SectionHead, Slot, Trial,
} from '../ui';

export default function HowWeWork() {
  return (
    <>
      {/* 1. header statement */}
      <section className="section" style={{ paddingBottom: 'clamp(24px,4vw,40px)' }}>
        <div className="wrap" style={{ maxWidth: 880 }}>
          <Eyebrow>How we work</Eyebrow>
          <h1 className="display" style={{ fontSize: 'clamp(2.2rem,6vw,3.8rem)', marginTop: 18 }}>
            One assessment. One doctor. One plan that <span className="serif-em">adapts</span>.
          </h1>
          <p className="lede" style={{ marginTop: 20 }}>
            [PLACEHOLDER] A short statement of the operating idea: we look at the whole person, design around it, and keep the family in the loop.
          </p>
        </div>
      </section>

      {/* 2. five pillars as one system */}
      <section className="section-tight">
        <div className="wrap two-col">
          <div className="split-head">
            <Eyebrow blue>The system</Eyebrow>
            <h2 className="title">Five pillars, one connected plan.</h2>
            <p className="lede">[PLACEHOLDER] How the pillars feed each other instead of working in silos. Each name opens its page.</p>
          </div>
          <Pillars spine />
        </div>
      </section>

      {/* 3. assessment and report */}
      <section className="section-tight">
        <div className="wrap two-col">
          <Slot label="The family report" style={{ aspectRatio: '4/3' }} />
          <div className="split-head">
            <Eyebrow>The first visit</Eyebrow>
            <h2 className="title">A real assessment, then a report you can hold.</h2>
            <p className="lede">
              [PLACEHOLDER] What the first home visit covers, and the plain-language report you and your family receive afterward.
            </p>
            <Trial />
          </div>
        </div>
      </section>

      {/* 4. personalised plans */}
      <section className="section-tight">
        <div className="wrap two-col">
          <div className="split-head">
            <Eyebrow blue>Built for one person</Eyebrow>
            <h2 className="title">Plans shaped around the person, not a template.</h2>
            <p className="lede">[PLACEHOLDER] How the plan is tailored to your specific condition and goals, whether it is for you or an ageing parent.</p>
            <LinkNav to="/conditions">Browse conditions we plan for</LinkNav>
          </div>
          <Slot label="Personalised plan" style={{ aspectRatio: '4/3' }} />
        </div>
      </section>

      {/* 5. onboarding steps */}
      <section className="section-tight">
        <div className="wrap">
          <SectionHead eyebrow="Getting started" title="Four steps to your first session." />
          <div className="stepper">
            {ONBOARDING.map((s, i) => (
              <div className="step" key={i}>
                <span className="num" />
                <div>
                  <h4>{s.t}</h4>
                  <p>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. reporting timeline + quiz */}
      <section className="section-tight">
        <div className="wrap two-col">
          <div className="split-head">
            <Eyebrow blue>What you will see</Eyebrow>
            <h2 className="title">Progress, week by week.</h2>
            <p className="lede">[PLACEHOLDER] How reporting keeps the family informed as the plan unfolds.</p>
            <Quiz />
          </div>
          <div className="timeline">
            {REPORT_TIMELINE.map((t, i) => (
              <div className="tl-item" key={i}>
                <span className="tl-dot" />
                <div>
                  <div className="tl-week">{t.w}</div>
                  <h4 style={{ fontSize: '1.08rem', marginTop: 2 }}>{t.t}</h4>
                  <p className="muted" style={{ fontSize: 14.5, marginTop: 3 }}>{t.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="section">
        <div className="wrap two-col">
          <div className="split-head">
            <Eyebrow>Good questions</Eyebrow>
            <h2 className="title">How the process actually runs.</h2>
          </div>
          <FAQList items={HOW_FAQS} />
        </div>
      </section>
    </>
  );
}
