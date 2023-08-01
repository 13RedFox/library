import { Container, Icon, IconType } from 'components/common';
import { FC } from 'react';
import styles from './TheFooter.module.scss';

interface SocialIconsProps {
  name: IconType;
  size: number;
  link: string;
}

const socialIcons: SocialIconsProps[] = [
  { name: 'Twitter', size: 24, link: 'https://twitter.com/' },
  { name: 'Instagram', size: 24, link: 'https://www.instagram.com/' },
  { name: 'Facebook', size: 24, link: 'https://www.facebook.com' },
];

export const TheFooter: FC = () => {
  return (
    <footer className={styles.Footer}>
      <Container className={styles.Container}>
        <div className={styles.Footer__contacts}>
          <div className={styles.Footer__info}>
            <a
              className={styles.Footer__info_adress}
              target='_blank'
              href='https://www.google.com/maps/place/Brooklyn+Public+Library+-+Brooklyn+Heights+Branch/@40.6956458,-73.9912976,17z/data=!4m6!3m5!1s0x89c25a49b6395abd:0x5b6c5e44eb578313!8m2!3d40.6956458!4d-73.9912976!16s%2Fg%2F11c4592c3x?entry=ttu'>
              286 Cadman Plaza, New York,
              <br /> NY 11238, United States
            </a>
            <ul className={styles.Footer__info_social}>
              {[] &&
                socialIcons.map(({ name, size, link }) => (
                  <li
                    className={styles.Footer__info_socialItem}
                    key={name}>
                    <a
                      href={link}
                      target='_blank'
                      className={styles.Footer__info_socialLink}>
                      <Icon
                        name={name}
                        size={size}
                        className={styles.Footer__info_socialLinkIcon}
                      />
                    </a>
                  </li>
                ))}
            </ul>
          </div>
          <div className={styles.Footer__times}>
            <p className={styles.Footer__times_text}>
              Mon - Fri <br /> 08:00 am - 07:00 pm
            </p>
            <p className={styles.Footer__times_text}>
              Mon - Fri <br /> 08:00 am - 07:00 pm
            </p>
          </div>
        </div>
        <div className={styles.Footer__line} />
        <div className={styles.Footer__wrapperCopy}>
          <span className={styles.Footer__wrapperCopy_year}>{new Date().getFullYear()}</span>
          <a
            href='https://rs.school/js-stage0/'
            className={styles.Footer__wrapperCopy_title}>
            <span>The Rolling Scopes School</span>
          </a>
          <a
            className={styles.Footer__wrapperCopy_github}
            href='https://github.com/13RedFox'
            target='_blank'>
            13RedFox
          </a>
        </div>
      </Container>
    </footer>
  );
};
