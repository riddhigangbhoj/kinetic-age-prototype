import { useState } from 'react';

import { BLOG_FILTERS, BLOG_POSTS, conditionBySlug } from '../data';
import { Eyebrow, LinkNav, Quiz, SectionHead, Slot } from '../ui';

export default function Blogs() {
  const [tab, setTab] = useState('All');
  const [open, setOpen] = useState<number | null>(null);

  if (open !== null) {
    const post = BLOG_POSTS[open];
    const c = conditionBySlug(post.condition)!;
    return (
      <section className="section" style={{ paddingTop: 'clamp(28px,5vw,56px)' }}>
        <article className="wrap" style={{ maxWidth: 760 }}>
          <button className="quiz-back" onClick={() => setOpen(null)} style={{ marginBottom: 18 }}>
            ← All posts
          </button>
          <span className="tag green">{post.filter}</span>
          <h1 className="display" style={{ fontSize: 'clamp(2rem,5.4vw,3.2rem)', margin: '16px 0 20px' }}>
            {post.title}
          </h1>
          <Slot label="Post hero" style={{ aspectRatio: '16/8', marginBottom: 28 }} />
          <div className="stack" style={{ ['--gap' as string]: '18px' }}>
            <p className="lede">{post.body}</p>
            <p className="muted">[PLACEHOLDER] Further paragraphs of the post body.</p>
            <p className="muted">[PLACEHOLDER] More body content for the template.</p>
          </div>
          {/* end of post: link to related condition + quiz only */}
          <div className="card card-pad-lg stack" style={{ marginTop: 36, ['--gap' as string]: '16px' }}>
            <Eyebrow blue>Keep going</Eyebrow>
            <h3 className="sub">Read more about {c.name.toLowerCase()}.</h3>
            <LinkNav to={`/conditions/${c.slug}`}>Go to {c.name.toLowerCase()}</LinkNav>
            <div style={{ marginTop: 4 }}>
              <Quiz />
            </div>
          </div>
        </article>
      </section>
    );
  }

  const posts = tab === 'All' ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.filter === tab);

  return (
    <section className="section-tight" style={{ paddingTop: 'clamp(34px,6vw,72px)' }}>
      <div className="wrap">
        <SectionHead
          eyebrow="Blogs"
          title="Plain reading on ageing well."
          intro="[PLACEHOLDER] A line on what the blog covers and who it is for."
        />
        {/* filter tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 26 }}>
          {['All', ...BLOG_FILTERS].map((f) => (
            <button
              key={f}
              className="chip"
              onClick={() => setTab(f)}
              style={
                tab === f
                  ? { borderColor: 'var(--green)', background: 'var(--green-tint)', color: 'var(--green-deep)' }
                  : undefined
              }
            >
              {f}
            </button>
          ))}
        </div>
        <div className="grid cols-3">
          {posts.map((p) => {
            const idx = BLOG_POSTS.indexOf(p);
            return (
              <button
                key={idx}
                className="card hover stack"
                onClick={() => setOpen(idx)}
                style={{ ['--gap' as string]: '14px', textAlign: 'left', cursor: 'pointer' }}
              >
                <Slot label="Post cover" style={{ aspectRatio: '16/10' }} />
                <span className="tag green">{p.filter}</span>
                <h3 className="sub" style={{ fontSize: '1.3rem' }}>{p.title}</h3>
                <span className="link-nav">Read post →</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
