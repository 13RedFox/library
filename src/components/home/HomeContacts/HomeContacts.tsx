import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import clsx from 'clsx';
import { Container, CustomTitle } from 'components/common';
import { FC } from 'react';
import styles from './HomeContacts.module.scss';

export const HomeContacts: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const API: string = import.meta.env.VITE_API_KEY;

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API,
  });

  console.log(API);

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
        <div className={styles.Contacts__maps}>
          {isLoaded && (
            <GoogleMap
              options={{ disableDefaultUI: true }}
              zoom={17}
              center={{ lat: 40.69566321775667, lng: -73.99129745711582 }}
              mapContainerStyle={{ width: '100%', height: '414px' }}>
              <Marker position={{ lat: 40.69566321775667, lng: -73.99129745711582 }} />
            </GoogleMap>
          )}
        </div>
      </Container>
    </section>
  );
};
