import { TheFooter } from 'components/TheFooter';
import { TheHeader } from 'components/TheHeader';
import { HomeAbout, HomeCoffeeShop, HomeFavorites, HomeWelcome } from 'components/home';

export const HomePage = () => {
  return (
    <>
      <TheHeader />
      <HomeWelcome />
      <HomeAbout />
      <HomeFavorites />
      <HomeCoffeeShop />
      <TheFooter />
    </>
  );
};
