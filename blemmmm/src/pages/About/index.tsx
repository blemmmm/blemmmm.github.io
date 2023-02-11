import { lazy, Suspense } from 'react';

const About = lazy(() => import('./AboutContainer'));

export const AboutPage = () => {
  return (
    <Suspense>
      <About />
    </Suspense>
  );
};
