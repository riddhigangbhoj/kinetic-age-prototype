import { useNavDelegation, useRoute } from './router';
import { Footer, Nav, StickyCTA } from './ui';

import Home from './pages/Home';
import Conditions from './pages/Conditions';
import ConditionPage from './pages/ConditionPage';
import Exercises from './pages/Exercises';
import HowWeWork from './pages/HowWeWork';
import PillarPage from './pages/PillarPage';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Quiz from './pages/Quiz';

export default function App() {
  useNavDelegation();
  const route = useRoute();

  // /quiz is a sealed flow — no nav, no footer, one goal.
  if (route === '/quiz') return <Quiz />;

  const onExercises = route === '/exercises';
  const body = render(route);

  return (
    <>
      <Nav route={topMatch(route)} hideTrial={onExercises} />
      <main>{body}</main>
      <Footer cta={onExercises ? 'quiz' : 'trial'} />
      <StickyCTA kind={onExercises ? 'quiz' : 'trial'} />
    </>
  );
}

// map a route to the nav item it should highlight
function topMatch(route: string) {
  if (route.startsWith('/conditions')) return '/conditions';
  if (route.startsWith('/services')) return '';
  return route;
}

function render(route: string) {
  if (route === '/') return <Home />;
  if (route === '/conditions') return <Conditions />;
  if (route.startsWith('/conditions/')) return <ConditionPage slug={route.split('/')[2]} />;
  if (route === '/exercises') return <Exercises />;
  if (route === '/how-we-work') return <HowWeWork />;
  if (route.startsWith('/services/')) return <PillarPage slug={route.split('/')[2]} />;
  if (route === '/about') return <About />;
  if (route === '/blogs') return <Blogs />;
  return <Home />;
}
