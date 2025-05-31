import { useEffect, useState } from "react";

export const PopUpOnLoad = ({ message }: { message: string }) => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        setShowPopup(true);
        const timer = setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
        return () => clearTimeout(timer); // Cleanup timer on unmount
        // Cleanup timer on unmount
    }, []);

    return (
        <>
            <div
                className={`fixed top-20 left-1/2 -translate-x-1/2 px-6 py-3 rounded text-white outline-indigo-300 text-4xl font-semibold transition-all duration-500 ease-in-out
                ${showPopup ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"}`} style={{ zIndex: 1000 }}>
                {message}
            </div>
        </>
    )
}