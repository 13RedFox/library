import clsx from 'clsx';
import { FC } from 'react';
import { Icon, IconType } from '..';
import styles from './CustomInputForm.module.scss';

interface CustomInputProps {
  className?: string;
  label: string;
  error: string;
  iconNameRight: IconType;
  name: 'email' | 'password';
  type: 'text' | 'email' | 'password';
}

export const CustomInputForm: FC<CustomInputProps> = ({
  name,
  type,
  label,
  error,
  iconNameRight,
  className,
}) => {
  return (
    <div className={clsx(styles.InputCustom, className)}>
      <label
        htmlFor={name}
        className={styles.InputCustom__label}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        className={styles.InputCustom__input}
      />
      <span className={styles.InputCustom__error}>{error}</span>
      <Icon
        name={iconNameRight}
        size={20}
        className={styles.InputCustom__iconRight}
      />
    </div>
  );
};
