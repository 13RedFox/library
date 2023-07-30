import {
  HomeAbout,
  HomeCoffeeShop,
  HomeContacts,
  HomeFavorites,
  HomeLibraryCard,
  HomeWelcome,
} from 'components/home';

export const HomePage = () => {
  return (
    <>
      <HomeWelcome />
      <HomeAbout />
      <HomeFavorites />
      <HomeCoffeeShop />
      <HomeContacts />
      <HomeLibraryCard />
    </>
  );
};
