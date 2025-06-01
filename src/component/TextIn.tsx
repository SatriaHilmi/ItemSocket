import { useEffect, useState } from "react";

export const TextIn = ({ text }: { text: string }) => {
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        setShowText(true);
        const timer = setTimeout(() => setShowText(false), 900); // Hide text after 3 seconds
        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []);

    return (
        <div
            className={`flex flex-col items-center text-center text-6xl font-bold left-1/2 px-6 py-3 rounded text-black outline-indigo-300 transition-all duration-500 ease-in mb-4
            ${showText ? "opacity-0" : "opacity-100 pointer-events-none"}`} style={{ zIndex: 1000, textShadow: "2px 2px 0 white" }}>
            {text}
        </div>
    )
}