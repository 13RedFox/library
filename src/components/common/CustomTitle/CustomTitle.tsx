import clsx from 'clsx';
import { FC } from 'react';
import styles from './CustomTitle.module.scss';

interface CustomTitleProps {
  title: string;
  className?: string;
}

export const CustomTitle: FC<CustomTitleProps> = ({ title, className, ...rest }) => {
  return (
    <div
      className={clsx(styles.CustomTitle, className)}
      {...rest}>
      <h2 className={styles.CustomTitle__descr}>{title}</h2>
      <div className={styles.CustomTitle__line} />
    </div>
  );
};
