import { PopUpOnLoad } from "../PopUpOnLoad";
import { usePage } from "../../hooks/UsePage";
import { useNavbar } from "../../hooks/useNavbar";
import { Button } from "@/components/ui/button";
import { PopUpCard } from "../PopUpCard";
import { useState } from "react";
import { CardBodyOne } from "../CardBodyOne";
import { CardBodyTwo } from "../CardBodyTwo";
import { CardBodyThree } from "../CardBodyThree";
import { FaLaravel, FaReact, FaNodeJs, FaVuejs, FaPhp, FaCss3Alt, FaHtml5, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiJavascript, SiMongodb, SiMysql, SiPrisma, SiSqlite, SiExpress } from "react-icons/si";

export const HomePage = () => {
    const { setPage } = usePage();
    const { setActive } = useNavbar();
    const [OpenCard, setIsOpenCard] = useState<string | null>(null);

    const techStack = [
        <FaLaravel className="text-5xl md:text-6xl text-white" />,
        <FaReact className="text-5xl md:text-6xl text-white" />,
        <FaNodeJs className="text-5xl md:text-6xl text-white" />,
        <FaBootstrap className="text-5xl md:text-6xl text-white" />,
        <SiExpress className="text-5xl md:text-6xl text-white" />,
        <span className="text-2xl md:text-4xl font-bold text-white">Tech Stack</span>,
        <FaVuejs className="text-5xl md:text-6xl text-white" />,
        <SiTailwindcss className="text-5xl md:text-6xl text-white" />,
        <SiTypescript className="text-5xl md:text-6xl text-white" />,
        <SiJavascript className="text-5xl md:text-6xl text-white" />,
        <SiMongodb className="text-5xl md:text-6xl text-white" />,
        <SiMysql className="text-5xl md:text-6xl text-white" />,
        <span className="text-2xl md:text-4xl font-bold text-white">Tech Stack</span>,
        <SiPrisma className="text-5xl md:text-6xl text-white" />,
        <FaPhp className="text-5xl md:text-6xl text-white" />,
        <SiSqlite className="text-5xl md:text-6xl text-white" />,
        <FaCss3Alt className="text-5xl md:text-6xl text-white" />,
        <FaHtml5 className="text-5xl md:text-6xl text-white" />,
        <span className="text-2xl md:text-4xl font-bold text-white">Tech Stack</span>,
    ];

    return (
        <>
            {/* HERO SECTION */}
            <div className="flex items-center justify-center min-h-screen w-full bg-gradient-to-b from-green-500 to-white px-6">
                <div className="flex flex-col items-center text-center">
                    <PopUpOnLoad message="Welcome!" />

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                        Hai, I am Satria Hilmi An'amta Cahyono
                    </h2>

                    <p className="text-lg md:text-xl text-gray-600 mb-8">
                        This is my personal web profile.
                    </p>

                    <button
                        className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300 shadow-lg cursor-pointer"
                        onClick={() => { setPage("project"); setActive("project"); }}
                    >
                        Project
                    </button>
                </div>
            </div>

            {/* QUOTE SECTION */}
            <section className="relative bg-center bg-no-repeat bg-cover bg-[url('./assets/tree_un.jpg')] mb-4">
                <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-700/20 to-white"></div>

                <div className="relative px-4 mx-auto max-w-screen-xl text-center py-20 md:py-48">
                    <h1 className="text-2xl md:text-5xl font-extrabold font-mono text-white italic leading-relaxed">
                        "Some day you will look back and see that all along you were blooming."
                    </h1>
                </div>
            </section>

            {/* EDUCATION CARDS */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-6 pt-10 mb-10">

                {/* SMP */}
                <div className="max-w-sm w-full bg-white p-5 rounded-xl">
                    <h5 className="mb-2 text-xl md:text-2xl font-bold text-gray-900">
                        Graduated Junior High School at SMPN 10 Probolinggo 2019
                    </h5>
                    <p className="mb-3 text-gray-700">
                        Similar to a gifted student who pursued his potential...
                    </p>
                    <Button variant="ghost" className="hover:bg-gray-300 cursor-pointer" onClick={() => setIsOpenCard("smp")}>
                        Read More
                    </Button>
                    <PopUpCard isOpen={OpenCard === "smp"} onClickClose={() => setIsOpenCard(null)} title="Graduated Junior High School at SMPN 10 Probolinggo 2019">
                        <CardBodyOne />
                    </PopUpCard>
                </div>

                {/* SMA */}
                <div className="max-w-sm w-full bg-white p-5 rounded-xl">
                    <h5 className="mb-2 text-xl md:text-2xl font-bold text-gray-900">
                        Graduated Senior High School at SMAN 3 Probolinggo 2022
                    </h5>
                    <p className="mb-3 text-gray-700">
                        From junior high school to high school, I studied diligently...
                    </p>
                    <Button variant="ghost" className="hover:bg-gray-300 cursor-pointer" onClick={() => setIsOpenCard("sma")}>
                        Read More
                    </Button>
                    <PopUpCard isOpen={OpenCard === "sma"} onClickClose={() => setIsOpenCard(null)} title="Graduated Senior High School at SMAN 3 Probolinggo 2022">
                        <CardBodyTwo />
                    </PopUpCard>
                </div>

                {/* KULIAH */}
                <div className="max-w-sm w-full bg-white p-5 rounded-xl">
                    <h5 className="mb-2 text-xl md:text-2xl font-bold text-gray-900">
                        Graduated Diploma at State Polytechnic of Jember
                    </h5>
                    <p className="mb-3 text-gray-700">
                        After graduating from high school, I continued my studies...
                    </p>
                    <Button variant="ghost" className="hover:bg-gray-300 cursor-pointer" onClick={() => setIsOpenCard("kuliah")}>
                        Read More
                    </Button>
                    <PopUpCard isOpen={OpenCard === "kuliah"} onClickClose={() => setIsOpenCard(null)} title="Graduated Diploma at State Polytechnic of Jember">
                        <CardBodyThree />
                    </PopUpCard>
                </div>
            </div>

            {/* TECH STACK MARQUEE */}
            <div className="w-full bg-green-500 py-4 overflow-hidden">
                <div className="animate-marquee flex items-center space-x-10 md:space-x-16">
                    {[...techStack, ...techStack].map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-10">
                            {item}
                            <span className="text-white text-3xl md:text-4xl">•</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
