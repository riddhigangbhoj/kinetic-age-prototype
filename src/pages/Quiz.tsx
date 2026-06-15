import { useState } from 'react';

import { go } from '../router';
import { Check, Trial } from '../ui';

type Q = { q: string; opts: string[]; multi?: boolean };

const QUESTIONS: Q[] = [
  { q: 'Who needs care?', opts: ['Mother', 'Father', 'Myself', 'Other relative'] },
  { q: 'What is their age range?', opts: ['60 to 70', '70 to 80', '80 plus'] },
  {
    q: 'What is the main concern?',
    opts: [
      'Knee or joint pain', 'Balance and falls', 'Recovery after surgery or stroke',
      'Weakness and low energy', 'Memory or mood', 'Something else',
    ],
  },
  { q: 'How long has this been going on?', opts: ['Under 1 month', '1 to 6 months', 'Over 6 months'] },
  { q: 'What have they tried so far?', opts: ['Physiotherapy', 'Medicines only', 'Home exercises', 'Nothing yet'] },
  {
    q: 'What does it stop them from doing?',
    opts: ['Walking outside', 'Climbing stairs', 'Sleeping well', 'Daily tasks', 'Being independent'],
    multi: true,
  },
  {
    q: 'Any other health conditions?',
    opts: ['Diabetes', 'Blood pressure', 'Heart condition', 'None', 'Not sure'],
    multi: true,
  },
];

const CONDITION_OPTS = ['Diabetes', 'Blood pressure', 'Heart condition'];

type Ans = Record<number, string | string[]>;

export default function Quiz() {
  // step 0..6 = questions, 7 = gate, 8 = summary
  const [step, setStep] = useState(0);
  const [ans, setAns] = useState<Ans>({});
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const onGate = step === 7;
  const onSummary = step === 8;
  const progress = onSummary ? 100 : Math.round(((Math.min(step, 7)) / 7) * 100);

  const pick = (i: number, opt: string, multi?: boolean) => {
    if (multi) {
      const cur = (ans[i] as string[]) || [];
      setAns({ ...ans, [i]: cur.includes(opt) ? cur.filter((o) => o !== opt) : [...cur, opt] });
    } else {
      setAns({ ...ans, [i]: opt });
      setStep(i + 1); // auto-advance on single select
    }
  };

  const submit = () => {
    // no backend — log answers, then show summary
    console.log('[KA quiz] answers:', { ...ans, name, phone });
    setStep(8);
  };

  return (
    <div className="quiz-shell">
      <div className="quiz-top">
        <a className="brand" data-go="/" href="#/" style={{ fontSize: 18 }}>
          <span className="dot">K</span>
        </a>
        <div className="progress">
          <i style={{ width: progress + '%' }} />
        </div>
        <span className="quiz-step-no">{onSummary ? 'Done' : `${Math.min(step + 1, 8)} / 8`}</span>
        <button className="drawer-x" onClick={() => go('/')} aria-label="Close" style={{ width: 38, height: 38 }}>
          ×
        </button>
      </div>

      <div className="quiz-body">
        {!onGate && !onSummary && (
          <Question
            key={step}
            q={QUESTIONS[step]}
            value={ans[step]}
            onPick={(opt) => pick(step, opt, QUESTIONS[step].multi)}
            onBack={step > 0 ? () => setStep(step - 1) : undefined}
            onContinue={QUESTIONS[step].multi ? () => setStep(step + 1) : undefined}
            canContinue={!!(ans[step] as string[])?.length}
          />
        )}

        {onGate && (
          <div className="quiz-card rise">
            <div>
              <span className="quiz-hint">Last step</span>
              <h2 className="quiz-q" style={{ marginTop: 8 }}>Where should we send the full report?</h2>
            </div>
            <div className="field">
              <label htmlFor="nm">Your name</label>
              <input id="nm" value={name} onChange={(e) => setName(e.target.value)} placeholder="[PLACEHOLDER] e.g. Anita" />
            </div>
            <div className="field">
              <label htmlFor="wa">WhatsApp number</label>
              <input id="wa" value={phone} onChange={(e) => setPhone(e.target.value)} inputMode="tel" placeholder="[PLACEHOLDER] 10-digit number" />
            </div>
            <div className="quiz-actions">
              <button className="quiz-back" onClick={() => setStep(6)}>← Back</button>
              <button
                className="btn cta-trial"
                style={{ flex: 1 }}
                disabled={!name || !phone}
                onClick={submit}
              >
                Send my report
              </button>
            </div>
          </div>
        )}

        {onSummary && <Summary ans={ans} />}
      </div>
    </div>
  );
}

function Question({
  q, value, onPick, onBack, onContinue, canContinue,
}: {
  q: Q;
  value?: string | string[];
  onPick: (opt: string) => void;
  onBack?: () => void;
  onContinue?: () => void;
  canContinue: boolean;
}) {
  const sel = (opt: string) =>
    q.multi ? ((value as string[]) || []).includes(opt) : value === opt;

  return (
    <div className="quiz-card rise">
      <div>
        {q.multi && <span className="quiz-hint">Choose any that apply</span>}
        <h2 className="quiz-q" style={{ marginTop: q.multi ? 8 : 0 }}>{q.q}</h2>
      </div>
      <div className="opts">
        {q.opts.map((opt) => (
          <button key={opt} className={'opt' + (sel(opt) ? ' sel' : '')} onClick={() => onPick(opt)}>
            <span className="box">{sel(opt) && <Check />}</span>
            {opt}
          </button>
        ))}
      </div>
      <div className="quiz-actions">
        {onBack && <button className="quiz-back" onClick={onBack}>← Back</button>}
        {onContinue && (
          <button className="btn cta-quiz" style={{ flex: 1 }} disabled={!canContinue} onClick={onContinue}>
            Continue
          </button>
        )}
      </div>
    </div>
  );
}

function Summary({ ans }: { ans: Ans }) {
  const concern = (ans[2] as string) || 'their main concern';
  const duration = ans[3] as string;
  const tried = ans[4] as string;
  const conditions = (ans[6] as string[]) || [];
  const realCondition = conditions.find((c) => CONDITION_OPTS.includes(c));

  const lines: { text: string; accent?: boolean }[] = [];

  // rule 1
  if (duration === 'Over 6 months' && realCondition) {
    lines.push({
      text: `Pain lasting over 6 months alongside ${realCondition.toLowerCase()} usually has more than one contributing factor.`,
      accent: true,
    });
  }
  // rule 2
  if (tried === 'Home exercises' || tried === 'Nothing yet') {
    lines.push({
      text: 'Home effort helps, but it works best when someone confirms what is actually causing the problem.',
    });
  }
  // always
  lines.push({
    text: `You told us the main concern is ${concern.toLowerCase()}. Your full report is on its way to WhatsApp.`,
  });

  return (
    <div className="quiz-card rise">
      <div>
        <span className="quiz-hint">Your quick read</span>
        <h2 className="quiz-q" style={{ marginTop: 8 }}>Here is what stands out.</h2>
      </div>
      <div className="stack" style={{ ['--gap' as string]: '12px' }}>
        {lines.map((l, i) => (
          <div className={'observe' + (l.accent ? ' accent' : '')} key={i}>
            <span className="ico"><Check /></span>
            <span>{l.text}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 6 }}>
        <Trial wide />
      </div>
    </div>
  );
}
