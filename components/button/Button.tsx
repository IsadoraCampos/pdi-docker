import { ButtonProps } from './types';

export const Button = ({
    description,
    className,
    action
}: ButtonProps) => {
    return <button className={className} onClick={action}>{description}</button>;
}
