import { Router } from 'router';
import { TheHeader } from 'components/TheHeader';
import { TheFooter } from 'components/TheFooter';

export const App = () => {
  return (
    <>
      <TheHeader />
      <Router />
      <TheFooter />
    </>
  );
};
