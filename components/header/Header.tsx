import React, { use } from "react";
import { HeaderProps } from "./types";
import { Button } from "../button/Button";
import { Text } from "../text/Text";
import { useState } from "react";

export const Header: React.FC<HeaderProps> = ({ title, className }) => {
    const [ showHelloCard, setShowHelloCard ] = useState(false);
    return (
        <div className={className}>
            <Text className="title" text={title}/>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Button description="Hello" className='button' action={() => {}} />
                <Button description="Hola" className="button" />
            </div>
        </div>
    );
};
