import clsx from 'clsx';
import { FC } from 'react';
import { CoffeeShopMenuProps } from 'utils/types';
import styles from '../../HomeCoffeeShop.module.scss';

interface HomeCoffeeShopMenuProps {
  menu: CoffeeShopMenuProps;
}
export const HomeCoffeeShopMenu: FC<HomeCoffeeShopMenuProps> = ({ menu }) => {
  return (
    <li className={styles.CoffeeShop__menuList_item}>
      <span className={clsx(styles.Descr, styles[menu.position])}>{menu.description}</span>
      <div className={styles.Line} />
      <span className={styles.Price}>{menu.price}</span>
    </li>
  );
};
