import { CSSProperties, FC } from 'react';
import * as iconComponents from './icons';
import { IconType } from './types';

export interface IconProps {
  name: IconType;
  size?: number;
  fill?: string;
  style?: CSSProperties;
  className?: string;
  onClick?: () => void;
}

const getIconName = (name: IconType) => `Icon${name}`;

export const Icon: FC<IconProps> = ({ fill, name, size, style, className, onClick, ...rest }) => {
  const IconComponent = iconComponents[getIconName(name) as keyof typeof iconComponents] || null;

  return (
    IconComponent && (
      <IconComponent
        {...rest}
        data-name={name}
        fill={fill}
        className={className}
        onClick={onClick}
        style={{ ...style, width: size, height: size }}
      />
    )
  );
};
