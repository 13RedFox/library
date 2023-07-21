import styles from './HomeWelcome.module.scss';

export const HomeWelcome = () => {
  return (
    <section className={styles.Welcome}>
      <div className={styles.Welcome__inner}>
        <p className={styles.Welcome__inner_text}>
          Welcome <br />
          to the Brooklyn <br />
          Library
        </p>
      </div>
    </section>
  );
};
