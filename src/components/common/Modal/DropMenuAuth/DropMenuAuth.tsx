import { motion } from 'framer-motion';
import { FC } from 'react';
import styles from './DropMenuAuth.module.scss';
import { Link } from 'react-router-dom';
import { ROUTES } from 'router/routes.ts';

interface DropMenuAuthProps {
  isOpenProfile: boolean;
  auth?: boolean;
}

export const DropMenuAuth: FC<DropMenuAuthProps> = ({ isOpenProfile, auth }) => {
  const variants = {
    open: { opacity: 1, right: '20px' },
    closed: { opacity: 0, right: '-200px' },
  };

  return (
    <motion.div
      animate={isOpenProfile ? 'open' : 'closed'}
      variants={variants}
      className={styles.Auth}>
      <h3 className={styles.Auth__title}>Profile</h3>
      <Link
        to={ROUTES.LOGIN}
        className={styles.Auth__link}>
        {auth ? 'My profile' : 'Log In'}
      </Link>
      <Link
        to={ROUTES.REGISTRATION}
        className={styles.Auth__link}>
        {auth ? 'Log Out' : 'Register'}
      </Link>
    </motion.div>
  );
};
