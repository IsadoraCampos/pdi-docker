import React from "react";
import { TextProps } from "./types";

export const Text: React.FC<TextProps> = ({ text, className }) => {
    return <p className={className}>{text}</p>;
};
