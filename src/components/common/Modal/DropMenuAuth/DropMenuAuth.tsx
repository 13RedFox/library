import { motion } from 'framer-motion';
import { FC } from 'react';
import styles from './DropMenuAuth.module.scss';

interface DropMenuAuthProps {
  isOpenProfile: boolean;
  auth?: boolean;
}

export const DropMenuAuth: FC<DropMenuAuthProps> = ({ isOpenProfile, auth }) => {
  const variants = {
    open: { opacity: 1, x: '-20px' },
    closed: { opacity: 0, x: '100px' },
  };

  return (
    <motion.div
      animate={isOpenProfile ? 'open' : 'closed'}
      variants={variants}
      className={styles.Auth}>
      <h3 className={styles.Auth__title}>Profile</h3>
      <a
        href='#'
        className={styles.Auth__link}>
        {auth ? 'My profile' : 'Log In'}
      </a>
      <a
        href='#'
        className={styles.Auth__link}>
        {auth ? 'Log Out' : 'Register'}
      </a>
    </motion.div>
  );
};
