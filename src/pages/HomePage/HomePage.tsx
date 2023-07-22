import { TheHeader } from 'components/TheHeader';
import { HomeAbout, HomeWelcome } from 'components/home';

export const HomePage = () => {
  return (
    <>
      <TheHeader />
      <HomeWelcome />
      <HomeAbout />
    </>
  );
};
