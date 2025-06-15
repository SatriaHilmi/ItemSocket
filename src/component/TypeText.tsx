import React, { useEffect, useState } from "react";

interface TypeTextProps {
    text: string;
    speed?: number;
}

export const TypeText: React.FC<TypeTextProps> = ({ text, speed = 100 }) => {
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let index = 0;
        setDisplayText(""); // Reset teks sebelum mulai
        const interval = setInterval(() => {
            if (index < text.length) {
                setDisplayText((prev) => prev + text.charAt(index));
                index++;
            } else {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return (
        <h1 className="text-6xl font-bold font-mono text-black mb-4">
            {displayText}
            <span className="animate-pulse">|</span>
        </h1>
    );
};
