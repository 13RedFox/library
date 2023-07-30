import clsx from 'clsx';
import { Icon } from 'components/common';
import { FC } from 'react';
import styles from './CustomInput.module.scss';

interface CustomInputProps {
  label?: string;
  error?: string;
  withIcon: boolean;
  className?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number';
}
export const CustomInput: FC<CustomInputProps> = ({
  label,
  error,
  withIcon,
  className,
  placeholder,
  type = 'text',
}) => {
  return (
    <div className={clsx(styles.CustomInput, className)}>
      <label className={styles.CustomInput__label}>{label}</label>
      <div className={styles.CustomInput__wrapper}>
        <input
          className={clsx(styles.CustomInput__wrapper_input, withIcon ? styles.withIcon : null)}
          type={type}
          placeholder={placeholder}
          // required
        />
        {withIcon ? (
          <Icon
            name='Email'
            size={20}
            className={styles.CustomInput__wrapper_icon}
          />
        ) : null}
        <span className={styles.CustomInput__wrapper_errors}>{error}</span>
      </div>
    </div>
  );
};
