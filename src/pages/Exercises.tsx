import { useState } from 'react';

import { CONDITIONS } from '../data';
import { Eyebrow, LinkNav, Quiz, SectionHead, Slot, WhatsApp } from '../ui';

const FILTERS = ['All', ...CONDITIONS.map((c) => c.name)];

export default function Exercises() {
  const [active, setActive] = useState('All');
  // condition pulled from active filter; neutral default works whether the
  // visitor is a senior themselves or a family member
  const condition = active === 'All' ? 'my condition' : active;

  return (
    <>
      {/* 1. playlists grouped by condition, filterable */}
      <section className="section-tight" style={{ paddingTop: 'clamp(34px,6vw,72px)' }}>
        <div className="wrap">
          <SectionHead
            eyebrow="Free exercise library"
            title="Guided movement, grouped by what you need."
            intro="[PLACEHOLDER] A line on how the exercises are safe, simple, and easy to follow on your own or with help."
            blue
          />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 24 }}>
            {FILTERS.map((f) => (
              <button
                key={f}
                className="chip"
                onClick={() => setActive(f)}
                style={
                  active === f
                    ? { borderColor: 'var(--green)', background: 'var(--green-tint)', color: 'var(--green-deep)' }
                    : undefined
                }
              >
                {f}
              </button>
            ))}
          </div>
          <div className="grid cols-3">
            {Array.from({ length: 6 }).map((_, n) => (
              <div className="card stack" key={n} style={{ ['--gap' as string]: '12px' }}>
                <Slot video label={`${active === 'All' ? 'Exercise' : active} · video`} style={{ aspectRatio: '16/10' }} />
                <h4 style={{ fontSize: '1.05rem' }}>[PLACEHOLDER] Exercise {n + 1}</h4>
                <p className="muted" style={{ fontSize: 14 }}>[PLACEHOLDER] Short instruction line.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. whatsapp 7-day plan for active filter */}
      <section className="section-tight">
        <div className="wrap">
          <div className="card card-pad-lg two-col" style={{ alignItems: 'center' }}>
            <div className="stack" style={{ ['--gap' as string]: '12px' }}>
              <Eyebrow blue>Free, on WhatsApp</Eyebrow>
              <h3 className="sub">A full 7-day plan for {condition}.</h3>
              <p className="muted">[PLACEHOLDER] What the plan includes and how it is paced.</p>
            </div>
            <WhatsApp
              text={`Hi, please send me the 7-day exercise plan for ${condition}`}
              label="Send me the 7-day plan"
            />
          </div>
        </div>
      </section>

      {/* 3. social media videos */}
      <section className="section-tight">
        <div className="wrap">
          <SectionHead eyebrow="From our feed" title="Short videos you can follow along." />
          <div className="grid cols-4">
            {[1, 2, 3, 4].map((n) => (
              <Slot key={n} video label="Social embed" style={{ aspectRatio: '9/16' }} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. reframe bridge — the only forward link, to How We Work */}
      <section className="section">
        <div className="wrap">
          <div className="reframe soft" style={{ display: 'grid', gap: 18 }}>
            <Eyebrow>One honest note</Eyebrow>
            <h2 className="title" style={{ maxWidth: '24ch' }}>
              Exercises help. But the cause usually runs deeper.
            </h2>
            <p className="lede">
              [PLACEHOLDER] Knee pain in seniors usually has two to three contributing causes. Movement is one piece. Here is how the whole picture comes together.
            </p>
            <LinkNav to="/how-we-work">See how we work</LinkNav>
          </div>
        </div>
      </section>

      {/* 5. quiz */}
      <section className="section-tight">
        <div className="wrap" style={{ textAlign: 'center', display: 'grid', justifyItems: 'center', gap: 18 }}>
          <h2 className="title" style={{ maxWidth: '20ch' }}>Find what is actually holding them back.</h2>
          <Quiz />
        </div>
      </section>
    </>
  );
}
