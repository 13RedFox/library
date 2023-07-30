import { FC } from 'react';
import clsx from 'clsx';
import styles from './CustomFormButton.module.scss';

interface CustomFormButtonProps {
  title: string;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export const CustomFormButton: FC<CustomFormButtonProps> = ({
  type,
  title,
  onClick,
  disabled,
  className,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={() => onClick}
      className={clsx(styles.Button, className)}>
      {title}
    </button>
  );
};
