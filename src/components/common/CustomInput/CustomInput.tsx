import clsx from 'clsx';
import { Icon, IconType } from 'components/common';
import { FC } from 'react';
import styles from './CustomInput.module.scss';

interface CustomInputProps {
  id: string;
  label?: string;
  withIcon: boolean;
  inputName: 'email' | 'password';
  className?: string;
  iconName: IconType;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number';
}

export const CustomInput: FC<CustomInputProps> = ({
  id,
  iconName,
  label,
  inputName,
  withIcon,
  className,
  placeholder,
  type = 'text',
}) => {
  return (
    <div className={clsx(styles.CustomInput, className)}>
      <label
        className={styles.CustomInput__label}
        htmlFor={id}>
        {label}
      </label>
      <div className={styles.CustomInput__wrapper}>
        <input
          className={clsx(styles.CustomInput__wrapper_input, withIcon ? styles.withIcon : null)}
          id={id}
          type={type}
          name={inputName}
          placeholder={placeholder}
        />
        {withIcon ? (
          <Icon
            name={iconName}
            size={20}
            className={styles.CustomInput__wrapper_icon}
          />
        ) : null}
      </div>
    </div>
  );
};
