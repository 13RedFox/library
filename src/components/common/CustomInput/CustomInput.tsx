import clsx from 'clsx';
import { Icon, IconType } from 'components/common';
import { FC } from 'react';
import styles from './CustomInput.module.scss';

interface CustomInputProps {
  name: IconType;
  label?: string;
  error?: string;
  withIcon: boolean;
  className?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number';
}

export const CustomInput: FC<CustomInputProps> = ({
  name,
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
        />
        {withIcon ? (
          <Icon
            name={name}
            size={20}
            className={styles.CustomInput__wrapper_icon}
          />
        ) : null}
        <span className={styles.CustomInput__wrapper_errors}>{error}</span>
      </div>
    </div>
  );
};
