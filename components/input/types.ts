import { HTMLInputTypeAttribute } from "react";

export interface InputProps {
    id: string,
    type: HTMLInputTypeAttribute,
    label?: string,
    placeholder?: string,
    className?: string,
    required?: boolean,
};
