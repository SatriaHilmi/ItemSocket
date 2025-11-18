import { useState } from "react";
import { usePage } from "../hooks/UsePage";
import { useNavbar } from "../hooks/useNavbar";

export const Navbar = () => {
    const { setPage } = usePage();
    const { active, setActive } = useNavbar();
    const [open, setOpen] = useState(false);
    const pages = ["home", "project", "profile"];

    return (
        <nav className="top-0 left-0 right-0 bg-green-500 px-6 py-3 z-50">
            <div className="grid grid-cols-2 md:grid-cols-3 items-center w-full">

                {/* Title (kiri) */}
                <h2 className="text-3xl font-bold font-mono">Biograph</h2>

                {/* Logo (tengah) */}
                <img
                    src="./assets/Code.jpg"
                    alt="logo"
                    className="w-12 h-12 rounded-full mx-auto shadow-lg shadow-black/30 md:block hidden"
                />

                {/* Hamburger + Menu (kanan) */}
                <div className="flex justify-end items-center gap-4">
                    {/* Hamburger (mobile) */}
                    <button
                        className="md:hidden text-black"
                        onClick={() => setOpen(!open)}
                    >
                        <div className="space-y-[6px]">
                            <span className="block w-7 h-[3px] bg-black"></span>
                            <span className="block w-7 h-[3px] bg-black"></span>
                            <span className="block w-7 h-[3px] bg-black"></span>
                        </div>
                    </button>

                    {/* Menu desktop */}
                    <ul className="hidden md:flex gap-4 bg-green-600 px-5 py-2 rounded-full shadow-lg shadow-black/30">
                        {pages.map((page) => (
                            <li
                                key={page}
                                onClick={() => {
                                    setPage(page);
                                    setActive(page);
                                }}
                                className={`cursor-pointer text-black hover:text-gray-200 font-mono ${active === page
                                    ? "font-bold border-b-2 border-green-800"
                                    : ""
                                    }`}
                            >
                                {page.charAt(0).toUpperCase() + page.slice(1)}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Mobile dropdown */}
            {open && (
                <ul className="md:hidden mt-4 bg-green-600 rounded-lg flex flex-col gap-4 p-4">
                    {pages.map((page) => (
                        <li
                            key={page}
                            onClick={() => {
                                setPage(page);
                                setActive(page);
                                setOpen(false);
                            }}
                            className={`cursor-pointer text-black hover:text-gray-200 font-mono ${active === page
                                ? "font-bold border-b-2 border-green-800"
                                : ""
                                }`}
                        >
                            {page.charAt(0).toUpperCase() + page.slice(1)}
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}