import clsx from 'clsx';
import { Container, CustomTitle } from 'components/common';
import { FC } from 'react';
import styles from './HomeContacts.module.scss';

export const HomeContacts: FC = () => {
  return (
    <section
      id={'contacts'}
      className={styles.Contacts}>
      <CustomTitle title='Our Contacts' />
      <Container className={styles.Container}>
        <div className={styles.Contacts__info}>
          <p className={clsx(styles.Contacts__info_title, styles.Bold)}>
            For all Library inquiries:
          </p>
          <ul className={styles.Contacts__info_listPhone}>
            <li className={styles.Item}>
              <span>Please call </span> <a href='tel:+16177302370'>(617) 730-2370</a>
            </li>
            <li className={styles.Item}>
              <span>For TTY service, please call </span>
              <a href='tel:+16177302370'>(617) 730-2370</a>
            </li>
            <li className={styles.Item}>
              <span>Putterham Library: </span>
              <a href='tel:+16177302385'>(617) 730-2385</a>
            </li>
          </ul>
          <p className={clsx(styles.Contacts__info_staff, styles.Bold)}>Senior Staff:</p>
          <p>
            Library Director:{' '}
            <a
              className={clsx(styles.Contacts__info_mail, styles.Bold)}
              href='mailto:amandahirst@gmail.com'>
              Amanda Hirst
            </a>
          </p>
        </div>
        <div className={styles.Contacts__maps} />
      </Container>
    </section>
  );
};
