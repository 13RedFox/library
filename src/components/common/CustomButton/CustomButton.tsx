import clsx from 'clsx';
import { FC } from 'react';
import styles from './CustomButton.module.scss';

interface CustomButtonProps {
  title: string;
  disabled: boolean;
  className?: string;
  onClick?: () => void;
  variants?: 'Default' | 'Form';
}

export const CustomButton: FC<CustomButtonProps> = ({
  title,
  onClick,
  disabled,
  className,
  variants = 'Default',
  ...rest
}) => {
  return (
    <button
      className={clsx(styles.Button, styles[variants], className, { ...rest })}
      disabled={disabled}
      onClick={onClick}>
      {title}
    </button>
  );
};
