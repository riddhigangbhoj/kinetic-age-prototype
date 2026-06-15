import { useState, type ReactNode } from 'react';

import { PILLARS, wa } from './data';

/* ---------------- icons ---------------- */
export const Arrow = ({ c = 'arr' }: { c?: string }) => (
  <svg className={c} width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const WhatsAppIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
  </svg>
);

export const Check = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ---------------- the four CTA classes ---------------- */
export const Trial = ({ label = 'Book Trial', wide = false }: { label?: string; wide?: boolean }) => (
  <button className="btn cta-trial" data-go="/quiz" style={wide ? { width: '100%' } : undefined}>
    {label}
  </button>
);

export const Quiz = ({ label = 'Take the 2-Minute Quiz' }: { label?: string }) => (
  <button className="btn cta-quiz" data-go="/quiz">
    {label}
  </button>
);

export const WhatsApp = ({ text, label = 'Message us on WhatsApp' }: { text: string; label?: string }) => (
  <a className="btn cta-whatsapp" href={wa(text)} target="_blank" rel="noreferrer">
    <WhatsAppIcon />
    {label}
  </a>
);

export const LinkNav = ({ to, children }: { to: string; children: ReactNode }) => (
  <a className="link-nav" data-go={to} href={'#' + to}>
    {children} <Arrow />
  </a>
);

/* ---------------- primitives ---------------- */
export const Eyebrow = ({ children, blue = false }: { children: ReactNode; blue?: boolean }) => (
  <span className={'eyebrow' + (blue ? ' blue' : '')}>{children}</span>
);

export const Slot = ({
  label,
  video = false,
  className = '',
  style,
}: {
  label: string;
  video?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <div className={`slot ${video ? 'video' : ''} ${className}`} data-label={label} style={style}>
    {video && <span className="play" />}
  </div>
);

export const SectionHead = ({
  eyebrow,
  title,
  intro,
  blue = false,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  blue?: boolean;
}) => (
  <div className="section-head">
    <Eyebrow blue={blue}>{eyebrow}</Eyebrow>
    <h2 className="title">{title}</h2>
    {intro && <p className="lede">{intro}</p>}
  </div>
);

/* the most-important reframe block; orange-accented. `soft` = light inline variant. */
export const Reframe = ({
  eyebrow = 'The real picture',
  title,
  intro,
  reasons,
  soft = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  reasons?: string[];
  soft?: boolean;
}) => (
  <div className={'reframe' + (soft ? ' soft' : '')}>
    {!soft && <span className="reframe-edge" />}
    <Eyebrow>{eyebrow}</Eyebrow>
    <h2 className="title" style={{ marginTop: 16, maxWidth: '20ch' }}>
      {title}
    </h2>
    {intro && <p className="lede" style={{ marginTop: 16 }}>{intro}</p>}
    {reasons && (
      <div className="reframe-reasons" style={{ marginTop: 26 }}>
        {reasons.map((r, i) => (
          <div className="reframe-reason" key={i}>
            <span className="n">{String(i + 1).padStart(2, '0')}</span>
            <span>{r}</span>
          </div>
        ))}
      </div>
    )}
  </div>
);

export const FAQList = ({ items }: { items: { q: string; a: string }[] }) => (
  <div className="faq">
    {items.map((f, i) => (
      <details key={i} open={i === 0}>
        <summary>
          {f.q}
          <span className="pm" />
        </summary>
        <div className="faq-a">{f.a}</div>
      </details>
    ))}
  </div>
);

export const Pillars = ({ spine = false }: { spine?: boolean }) => (
  <div className={'pillars' + (spine ? ' spine' : '')}>
    {PILLARS.map((p) => (
      <a className="pillar" key={p.slug} data-go={'/services/' + p.slug} href={'#/services/' + p.slug}>
        <span className="pillar-node">{p.name[0]}</span>
        <span className="pillar-body">
          <h4>{p.name}</h4>
          <p>{p.blurb}</p>
        </span>
        <Arrow />
      </a>
    ))}
  </div>
);

/* ---------------- nav + footer ---------------- */
const NAV = [
  ['Conditions', '/conditions'],
  ['How We Work', '/how-we-work'],
  ['Exercises', '/exercises'],
  ['About', '/about'],
  ['Blogs', '/blogs'],
];

export function Nav({ route, hideTrial = false }: { route: string; hideTrial?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <>
    <header className="nav">
      <div className="wrap nav-row">
        <a className="brand" data-go="/" href="#/">
          <span className="dot">K</span> Kinetic Age
        </a>

        <nav className="nav-links">
          {NAV.map(([label, to]) => (
            <a key={to} data-go={to} href={'#' + to} className={route === to ? 'active' : ''}>
              {label}
            </a>
          ))}
          <div className="nav-drop">
            <button>
              Services <Arrow c="" />
            </button>
            <div className="nav-drop-menu">
              {PILLARS.map((p) => (
                <a key={p.slug} data-go={'/services/' + p.slug} href={'#/services/' + p.slug}>
                  {p.name}
                  <small>{p.who.replace('[PLACEHOLDER] ', '')}</small>
                </a>
              ))}
            </div>
          </div>
        </nav>

        <div className="nav-right">
          {!hideTrial && <Trial />}
          <button className="hamburger" aria-label="Menu" onClick={() => setOpen(true)}>
            <span />
          </button>
        </div>
      </div>
    </header>

    <div className={'drawer' + (open ? ' open' : '')} onClick={() => setOpen(false)}>
        <div className="drawer-panel" onClick={(e) => e.stopPropagation()}>
          <div className="drawer-head">
            <span className="brand">
              <span className="dot">K</span> Kinetic Age
            </span>
            <button className="drawer-x" onClick={() => setOpen(false)} aria-label="Close">
              ×
            </button>
          </div>
          {NAV.map(([label, to]) => (
            <a key={to} data-go={to} href={'#' + to} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <div className="drawer-group-label">Services</div>
          {PILLARS.map((p) => (
            <a key={p.slug} data-go={'/services/' + p.slug} href={'#/services/' + p.slug} onClick={() => setOpen(false)}>
              {p.name}
            </a>
          ))}
          <div style={{ marginTop: 18 }}>{hideTrial ? <Quiz /> : <Trial wide />}</div>
        </div>
      </div>
    </>
  );
}

export function Footer({ cta = 'trial' }: { cta?: 'trial' | 'quiz' }) {
  return (
    <footer className="footer">
      <div className="wrap footer-top">
        <div className="stack" style={{ ['--gap' as string]: '16px' }}>
          <span className="brand">
            <span className="dot">K</span> Kinetic Age
          </span>
          <p style={{ maxWidth: '34ch' }}>[PLACEHOLDER] One line on what Kinetic Age does for older adults and the families who care for them.</p>
          {cta === 'trial' ? <Trial /> : <Quiz />}
        </div>
        <div className="footer-cols">
          <div className="footer-col">
            <h5>Explore</h5>
            {NAV.map(([label, to]) => (
              <a key={to} data-go={to} href={'#' + to}>
                {label}
              </a>
            ))}
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            {PILLARS.map((p) => (
              <a key={p.slug} data-go={'/services/' + p.slug} href={'#/services/' + p.slug}>
                {p.name}
              </a>
            ))}
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <a href={wa('Hi, I have a question about Kinetic Age')} target="_blank" rel="noreferrer">
              WhatsApp us
            </a>
            <a href="#/">[PLACEHOLDER] phone</a>
            <a href="#/">[PLACEHOLDER] email</a>
            <a href="#/">[PLACEHOLDER] city</a>
          </div>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© Kinetic Age [PLACEHOLDER]</span>
        <span>[PLACEHOLDER] Privacy · Terms</span>
      </div>
    </footer>
  );
}

/* sticky thumb-reach CTA for mobile (hidden on desktop via CSS) */
export const StickyCTA = ({ kind = 'trial' }: { kind?: 'trial' | 'quiz' }) => (
  <div className="sticky-cta">{kind === 'trial' ? <Trial wide /> : <Quiz />}</div>
);
