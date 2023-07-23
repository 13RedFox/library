import { TheHeader } from 'components/TheHeader';
import { HomeAbout, HomeFavorites, HomeWelcome } from 'components/home';

export const HomePage = () => {
  return (
    <>
      <TheHeader />
      <HomeWelcome />
      <HomeAbout />
      <HomeFavorites />
    </>
  );
};
