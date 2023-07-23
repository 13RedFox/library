export interface NavigationProps {
  link: string;
  descr: string;
}

export interface SlideProps {
  src: string;
  alt: string;
}

export interface FavoritesDataProps {
  id: string;
  seassons: string;
  isChecked: boolean;
  books: FavoritesDataCardProps[];
}

export interface FavoritesDataCardProps {
  title: string;
  descriptionBook: string;
  descriptionAuthor: string;
  text: string;
  src: string;
  isBuyed: boolean;
}

export interface CoffeeShopProps {
  id: string;
  title: string;
  position: string;
  menuTitle: CoffeeShopMenuProps[];
}

export interface CoffeeShopMenuProps {
  id: string;
  position: string;
  description: string;
  price: string;
}
