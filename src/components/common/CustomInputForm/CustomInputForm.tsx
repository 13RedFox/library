import clsx from 'clsx';
import { CSSProperties, FC } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { LoginSchema } from 'schema/loginSchema';
import { Icon, IconType } from '..';
import styles from './CustomInputForm.module.scss';

interface CustomInputProps {
  label: string;
  className?: string;
  style?: errorsProps;
  iconNameRight: IconType;
  name: 'email' | 'password';
  errors: FieldErrors<LoginSchema>;
  type: 'text' | 'email' | 'password';
  register: UseFormRegister<LoginSchema>;
}

interface errorsProps {
  input: CSSProperties;
  message: CSSProperties;
}

export const CustomInputForm: FC<CustomInputProps> = ({
  name,
  type,
  label,
  style,
  errors,
  register,
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
        style={style?.input}
        {...register(name)}
        className={styles.InputCustom__input}
      />
      <span
        style={style?.message}
        className={styles.InputCustom__error}>
        {errors[name]?.message}
      </span>
      <Icon
        name={iconNameRight}
        size={20}
        className={styles.InputCustom__iconRight}
      />
    </div>
  );
};
