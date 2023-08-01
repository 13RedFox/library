import clsx from 'clsx';
import { FC } from 'react';
import styles from './CustomButtonForm.module.scss';

interface CustomButtonFormProps {
  text: string;
  disabled: boolean;
  className?: string;
  onClick?: () => void;
}

export const CustomButtonForm: FC<CustomButtonFormProps> = ({
  text,
  disabled,
  className,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={clsx(styles.Button, className)}>
      {text}
    </button>
  );
};
