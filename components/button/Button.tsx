import React from 'react';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({
    description,
    className,
    action
}) => {
    return <button className={className} onClick={action}>{description}</button>;
}
