import clsx from 'clsx';
import { FC } from 'react';
import styles from './CustomTitleForm.module.scss';

interface CustomFormButtonProps {
  title: string;
  className?: string;
}

export const CustomTitleForm: FC<CustomFormButtonProps> = ({ title, className }) => {
  return <h2 className={clsx(styles.Title, className)}>{title}</h2>;
};
