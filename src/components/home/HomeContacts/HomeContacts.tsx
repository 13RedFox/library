import clsx from 'clsx';
import { Container, CustomTitle } from 'components/common';
import { FC } from 'react';
import styles from './HomeContacts.module.scss';

export const HomeContacts: FC = () => {


  return (
    <section
      id={'contacts'}
      className={styles.Contacts}>
      <Container className={styles.Container}>
        <CustomTitle title='Our Contacts' />
        <div className={styles.Contacts__wrapper}>
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
          <div className={styles.Contacts__maps}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3025.015975743674!2d-73.9912976!3d40.6956458!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a49b6395abd%3A0x5b6c5e44eb578313!2sBrooklyn%20Public%20Library%20-%20Brooklyn%20Heights%20Branch!5e0!3m2!1sru!2sua!4v1690818180847!5m2!1sru!2sua" width="100%" height="450" style={{border: 'none'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </Container>
    </section>
  );
};
