import { InputProps } from './types';

export const Input = ({
    id,
    type,
    label,
    placeholder,
    className,
    required = false    
}: InputProps) => {
    return (
        <div className={className}>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} placeholder={placeholder} required={required} />
        </div>
    );
};
