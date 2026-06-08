import React from 'react';
import { InputProps } from './types';

export const Input: React.FC<InputProps> = ({
    id,
    type,
    label,
    placeholder,
    className,
    required = false    
}) => {
    return (
        <div className={className}>
            {label && (<label htmlFor={id}>{label}</label>)}
            <input id={id} type={type} placeholder={placeholder} required={required} />
        </div>
    );
};
