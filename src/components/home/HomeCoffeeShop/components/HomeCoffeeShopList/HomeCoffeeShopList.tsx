import clsx from 'clsx';
import { FC } from 'react';
import { CoffeeShopProps } from 'utils/types';
import styles from '../../HomeCoffeeShop.module.scss';
import { HomeCoffeeShopMenu } from '../HomeCoffeeShopMenu';

interface HomeCoffeeShopListProps {
  list: CoffeeShopProps;
}

export const HomeCoffeeShopList: FC<HomeCoffeeShopListProps> = ({ list }) => {
  return (
    <ul
      className={styles.CoffeeShop__menuList}
      key={list.id}>
      <h3 className={clsx(styles.CoffeeShop__menuList_title, styles[list.position])}>
        {list.title}
      </h3>
      {[] &&
        list.menu.map((menu) => (
          <HomeCoffeeShopMenu
            menu={menu}
            key={menu.id}
          />
        ))}
    </ul>
  );
};
