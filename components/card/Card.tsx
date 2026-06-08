import React from "react";
import { CardProps } from "./types";
import { Text } from "../text/Text";

export const Card: React.FC<CardProps> = ({ title, content }) => {
    return (
        <div>
            <Text text={title} className="title"/>
            <hr />
            <Text text={content} className="title" />
        </div>
    );
};
