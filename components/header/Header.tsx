import React from "react";
import { HeaderProps } from "./types";
import { Button } from "../button/Button";

export const Header: React.FC<HeaderProps> = ({ title, className }) => {
    return (
        <div className={className}>
            <h1 className="title">{title}</h1>

            <div>
                <Button description="Hello" className='button' />
                <Button description="Hola" className="button" />
            </div>
        </div>
    );
};
