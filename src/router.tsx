import { useEffect, useState } from 'react';

// Hash routing keeps every route a real, shareable URL (#/conditions/knee-pain)
// with zero dependencies and zero server config.
export const path = () => location.hash.replace(/^#/, '') || '/';

export const go = (to: string) => {
  location.hash = to;
};

export function useRoute() {
  const [p, setP] = useState(path);
  useEffect(() => {
    const on = () => {
      setP(path());
      window.scrollTo(0, 0);
    };
    addEventListener('hashchange', on);
    return () => removeEventListener('hashchange', on);
  }, []);
  return p;
}

// One delegated handler: any element with [data-go] navigates. Keeps page
// markup clean and avoids threading a navigate callback everywhere.
export function useNavDelegation() {
  useEffect(() => {
    const on = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>('[data-go]');
      if (!el) return;
      e.preventDefault();
      go(el.dataset.go!);
    };
    document.addEventListener('click', on);
    return () => document.removeEventListener('click', on);
  }, []);
}
