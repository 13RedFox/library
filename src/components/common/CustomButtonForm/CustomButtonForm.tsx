import clsx from 'clsx';
import { CSSProperties, FC } from 'react';
import { FieldErrors } from 'react-hook-form';
import { LoginSchema } from 'schema/loginSchema';
import styles from './CustomButtonForm.module.scss';

interface CustomButtonFormProps {
  text: string;
  style?: CSSProperties;
  disabled: boolean;
  className?: string;
  onClick?: () => void;
  errors: FieldErrors<LoginSchema>;
}

export const CustomButtonForm: FC<CustomButtonFormProps> = ({
  text,
  style,
  disabled,
  className,
  onClick,
  errors,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(styles.Button, className)}>
      <div
        className={styles.Button__dot}
        style={style}
      />
      {text}
    </button>
  );
};
