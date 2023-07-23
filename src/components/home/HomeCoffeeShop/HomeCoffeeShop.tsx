import { Container, CustomTitle } from 'components/common';
import coffeeData from 'data/coffee-shop.json';
import { FC } from 'react';
import styles from './HomeCoffeeShop.module.scss';
import { HomeCoffeeShopList } from './components';

export const HomeCoffeeShop: FC = () => {
  return (
    <section
      id={'coffee-shop'}
      className={styles.CoffeeShop}>
      <CustomTitle title='coffee shop' />
      <Container>
        <p className={styles.CoffeeShop__descr}>
          In our library, we have of cozy coffee shop, welcoming in customers with frothy
          cappuccinos and friendly conversation. You can get a favorite book and read in coffee
          shop. Our barista to cook you best coffee, and also you can try desserts from bakery.
        </p>
        <div className={styles.CoffeeShop__wrapper}>
          {[] &&
            coffeeData.map((list) => (
              <HomeCoffeeShopList
                list={list}
                key={list.id}
              />
            ))}
        </div>
      </Container>
    </section>
  );
};
