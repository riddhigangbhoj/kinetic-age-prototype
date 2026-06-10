// Placeholder content config. Every human-facing string that needs real
// copy later is wrapped in [PLACEHOLDER] so it greps cleanly.
export const WA = 'https://wa.me/PLACEHOLDER_NUMBER?text=';

export const wa = (text: string) => WA + encodeURIComponent(text);

export type Pillar = {
  slug: string;
  name: string;
  blurb: string;
  who: string;
  conditions: string[]; // condition slugs this pillar helps
};

export const PILLARS: Pillar[] = [
  {
    slug: 'physiotherapy',
    name: 'Physiotherapy',
    blurb: '[PLACEHOLDER] Movement and pain work, guided in the home.',
    who: '[PLACEHOLDER] For older adults with joint pain, stiffness, or recovery needs.',
    conditions: ['knee-pain', 'post-stroke-recovery', 'balance-and-falls'],
  },
  {
    slug: 'strength-training',
    name: 'Strength Training',
    blurb: '[PLACEHOLDER] Safe, progressive strength for stability and energy.',
    who: '[PLACEHOLDER] For older adults who feel weak, tire quickly, or fear falling.',
    conditions: ['balance-and-falls', 'knee-pain'],
  },
  {
    slug: 'nutrition',
    name: 'Nutrition',
    blurb: '[PLACEHOLDER] Everyday food guidance built around their conditions.',
    who: '[PLACEHOLDER] For older adults managing diabetes, weight, or low appetite.',
    conditions: ['knee-pain', 'post-stroke-recovery'],
  },
  {
    slug: 'mental-wellness',
    name: 'Mental Wellness',
    blurb: '[PLACEHOLDER] Mood, memory, and motivation, taken seriously.',
    who: '[PLACEHOLDER] For older adults feeling low, anxious, or withdrawn, and the families who notice it.',
    conditions: ['post-stroke-recovery', 'balance-and-falls'],
  },
  {
    slug: 'doctor-oversight',
    name: 'Doctor Oversight',
    blurb: '[PLACEHOLDER] A doctor designs and reviews the whole plan.',
    who: '[PLACEHOLDER] For anyone who wants one accountable medical view of their care.',
    conditions: ['knee-pain', 'post-stroke-recovery', 'balance-and-falls'],
  },
];

export type Condition = {
  slug: string;
  name: string;
  symptom: string; // symptom-language card title
  intro: string;
  reasons: string[]; // the 2-3 reasons reframe
  testimonial: string;
  faqs: { q: string; a: string }[];
};

export const CONDITIONS: Condition[] = [
  {
    slug: 'knee-pain',
    name: 'Knee Pain',
    symptom: 'Knee pain that cuts the walk short',
    intro: '[PLACEHOLDER] When the knees hurt, the whole day shrinks. Here is what is usually going on, and what helps.',
    reasons: [
      '[PLACEHOLDER] The muscles around the joint have weakened, so the knee takes the load.',
      '[PLACEHOLDER] Movement patterns changed to avoid pain, which spreads strain elsewhere.',
      '[PLACEHOLDER] An underlying condition is quietly making it worse.',
    ],
    testimonial: '[PLACEHOLDER] Quote from a family whose parent has knee pain.',
    faqs: [
      { q: '[PLACEHOLDER] Is knee pain in seniors always arthritis?', a: '[PLACEHOLDER]' },
      { q: '[PLACEHOLDER] Can exercise make knee pain worse?', a: '[PLACEHOLDER]' },
      { q: '[PLACEHOLDER] How long until we see a change?', a: '[PLACEHOLDER]' },
      { q: '[PLACEHOLDER] Do we need a scan first?', a: '[PLACEHOLDER]' },
    ],
  },
  {
    slug: 'post-stroke-recovery',
    name: 'Post-Stroke Recovery',
    symptom: 'Rebuilding strength after a stroke',
    intro: '[PLACEHOLDER] Recovery after a stroke is steady work. The right plan keeps it moving in the right direction.',
    reasons: [
      '[PLACEHOLDER] Recovery stalls when therapy stops too early.',
      '[PLACEHOLDER] Strength and balance need to be rebuilt together, not separately.',
      '[PLACEHOLDER] Mood and motivation shape how much progress sticks.',
    ],
    testimonial: '[PLACEHOLDER] Quote from a family in post-stroke recovery.',
    faqs: [
      { q: '[PLACEHOLDER] When should recovery work start?', a: '[PLACEHOLDER]' },
      { q: '[PLACEHOLDER] Is it too late to improve after a year?', a: '[PLACEHOLDER]' },
      { q: '[PLACEHOLDER] How do you keep them motivated?', a: '[PLACEHOLDER]' },
      { q: '[PLACEHOLDER] Can this be done at home?', a: '[PLACEHOLDER]' },
    ],
  },
  {
    slug: 'balance-and-falls',
    name: 'Balance and Falls',
    symptom: 'When standing up feels risky',
    intro: '[PLACEHOLDER] A fall is rarely just bad luck. Balance can be trained, and the risk can come down.',
    reasons: [
      '[PLACEHOLDER] Weak legs and core make small stumbles hard to recover from.',
      '[PLACEHOLDER] Confidence drops after a near-fall, so they move less and weaken more.',
      '[PLACEHOLDER] Medication or vision issues add a hidden layer of risk.',
    ],
    testimonial: '[PLACEHOLDER] Quote from a family worried about falls.',
    faqs: [
      { q: '[PLACEHOLDER] Can balance really be improved at this age?', a: '[PLACEHOLDER]' },
      { q: '[PLACEHOLDER] What makes falls more likely?', a: '[PLACEHOLDER]' },
      { q: '[PLACEHOLDER] How do you keep sessions safe?', a: '[PLACEHOLDER]' },
      { q: '[PLACEHOLDER] What if they have already fallen?', a: '[PLACEHOLDER]' },
    ],
  },
];

export const conditionBySlug = (slug: string) => CONDITIONS.find((c) => c.slug === slug);
export const pillarBySlug = (slug: string) => PILLARS.find((p) => p.slug === slug);

export const OTHER_CONDITIONS = [
  'Arthritis', 'Diabetes care', 'Parkinson’s support', 'Hip replacement recovery',
  'Back pain', 'Shoulder pain', 'Osteoporosis', 'General weakness',
  'Post-surgery recovery', 'Low energy and fatigue',
].map((s) => `[PLACEHOLDER] ${s}`);

export const HOME_FAQS = [
  { q: '[PLACEHOLDER] How does the first visit work?', a: '[PLACEHOLDER]' },
  { q: '[PLACEHOLDER] Who are the providers?', a: '[PLACEHOLDER]' },
  { q: '[PLACEHOLDER] Do you come to our home?', a: '[PLACEHOLDER]' },
  { q: '[PLACEHOLDER] What does it cost?', a: '[PLACEHOLDER]' },
  { q: '[PLACEHOLDER] What if my parent is reluctant?', a: '[PLACEHOLDER]' },
];

export const CONDITIONS_FAQS = [
  { q: '[PLACEHOLDER] My parent’s condition is not listed. Can you help?', a: '[PLACEHOLDER]' },
  { q: '[PLACEHOLDER] Do you treat more than one condition at once?', a: '[PLACEHOLDER]' },
  { q: '[PLACEHOLDER] How do you decide what to focus on?', a: '[PLACEHOLDER]' },
  { q: '[PLACEHOLDER] Is a diagnosis required to start?', a: '[PLACEHOLDER]' },
  { q: '[PLACEHOLDER] Can the plan change over time?', a: '[PLACEHOLDER]' },
];

export const HOW_FAQS = [
  { q: '[PLACEHOLDER] What happens in the assessment?', a: '[PLACEHOLDER]' },
  { q: '[PLACEHOLDER] What is in the family report?', a: '[PLACEHOLDER]' },
  { q: '[PLACEHOLDER] How often will we hear from you?', a: '[PLACEHOLDER]' },
  { q: '[PLACEHOLDER] Can we change the plan later?', a: '[PLACEHOLDER]' },
  { q: '[PLACEHOLDER] Who do we contact between sessions?', a: '[PLACEHOLDER]' },
];

export const TESTIMONIALS = [
  { slug: 'knee-pain', label: 'Knee pain', quote: '[PLACEHOLDER] A short, specific result a daughter saw with her mother.' },
  { slug: 'post-stroke-recovery', label: 'Post-stroke', quote: '[PLACEHOLDER] A short, specific result after a stroke.' },
  { slug: 'balance-and-falls', label: 'Balance', quote: '[PLACEHOLDER] A short, specific result on steadiness and confidence.' },
];

export const PROVIDERS = [
  { name: '[PLACEHOLDER] Dr. Name', role: 'Medical oversight' },
  { name: '[PLACEHOLDER] Name', role: 'Physiotherapist' },
  { name: '[PLACEHOLDER] Name', role: 'Strength coach' },
  { name: '[PLACEHOLDER] Name', role: 'Nutritionist' },
];

export const ONBOARDING = [
  { t: '[PLACEHOLDER] Tell us what is going on', d: '[PLACEHOLDER] A short call or quiz to understand your situation, for you or a parent.' },
  { t: '[PLACEHOLDER] Home assessment', d: '[PLACEHOLDER] A provider visits and assesses in person.' },
  { t: '[PLACEHOLDER] You get a plan', d: '[PLACEHOLDER] A doctor-reviewed plan and a report for you and your family.' },
  { t: '[PLACEHOLDER] Ongoing sessions', d: '[PLACEHOLDER] Regular visits with progress you can see.' },
];

export const REPORT_TIMELINE = [
  { w: 'Week 1', t: '[PLACEHOLDER] Baseline and first plan', d: '[PLACEHOLDER] What we found and where we are starting.' },
  { w: 'Week 2', t: '[PLACEHOLDER] First check-in', d: '[PLACEHOLDER] Early adjustments and what to expect.' },
  { w: 'Week 4', t: '[PLACEHOLDER] Progress review', d: '[PLACEHOLDER] Measured changes shared with the family.' },
  { w: 'Week 8', t: '[PLACEHOLDER] Plan update', d: '[PLACEHOLDER] What is working, what changes next.' },
];

export const BLOG_FILTERS = ['Knee pain', 'Balance and falls'];

export const BLOG_POSTS = [
  {
    filter: 'Knee pain',
    condition: 'knee-pain',
    title: '[PLACEHOLDER] Why knee pain in seniors is rarely just the knee',
    body: '[PLACEHOLDER] Body of the post explaining the reframe in plain language.',
  },
  {
    filter: 'Balance and falls',
    condition: 'balance-and-falls',
    title: '[PLACEHOLDER] The quiet reasons balance gets worse with age',
    body: '[PLACEHOLDER] Body of the post explaining contributing causes.',
  },
];
