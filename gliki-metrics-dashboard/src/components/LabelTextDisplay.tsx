import React, { ReactNode } from "react";

type ResponsiveBodyText = {
    text: ReactNode;
    defaultStyle: string;
    smStyle?: string;
    mdStyle?: string;
    lgStyle?: string;
    xlStyle?: string;
}

export const LabelTextDisplay = ({
    text, 
    defaultStyle, 
    smStyle="", 
    mdStyle="", 
    lgStyle="", 
    xlStyle=""
    }: ResponsiveBodyText) => {

    const combinedStyle = `${defaultStyle} ${smStyle} ${mdStyle} ${lgStyle} ${xlStyle}`;

    return <p className={combinedStyle}>{text}</p>
}