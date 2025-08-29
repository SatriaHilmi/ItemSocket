import { PopUpOnLoad } from "../PopUpOnLoad";
// import { TypeText } from "../TypeText";
import { usePage } from "../../hooks/UsePage";
import { useNavbar } from "../../hooks/useNavbar";
import { Button } from "@/components/ui/button";
import { PopUpCard } from "../PopUpCard";
import { useState } from "react";
import { CardBodyOne } from "../CardBodyOne";
import { CardBodyTwo } from "../CardBodyTwo";
import { CardBodyThree } from "../CardBodyThree";
// import { Dynamic } from "../Dynamic";

export const HomePage = () => {
    const { setPage } = usePage();
    const { setActive } = useNavbar();
    const [OpenCard, setIsOpenCard] = useState<string | null>(null);
    return (
        <>
            <div className="flex items-center justify-center h-screen w-full bg-gradient-to-b from-green-500 to-white">
                <div className="flex flex-col items-center text-center">
                    <PopUpOnLoad message="Welcome Dude!" />
                    {/* <TypeText text="Hello Satria!" speed={100} /> */}
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Hai, I am Satria Hilmi An'amta Cahyono</h2>
                    <p className="text-xl text-gray-600 mb-8">This is my personal web profile.</p>
                    <button className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300 shadow-lg cursor-pointer" onClick={() => { setPage('project'); setActive('project'); }}>
                        Project
                    </button>
                </div>
            </div>

            <section className="relative bg-center bg-no-repeat bg-cover bg-[url('./assets/tree_un.jpg')] mb-4">
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-700/20 to-white"></div>

                {/* Konten */}
                <div className="relative px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-48">
                    <h1 className="mb-4 text-4xl font-extrabold font-mono tracking-tight leading-none text-white md:text-5xl italic">
                        "Some day you will look back and see that all along you were blooming."
                    </h1>
                </div>
            </section>

            <div className="flex justify-center items-center mb-5 pt-10 space-x-4">
                <div className="max-w-sm">
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Graduated Junior High School at SMPN 10 Probolinggo 2019</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-500">Similar to a gifted student who pursued his potential, he started an organization to become a certified student at school.</p>
                        <Button variant="ghost" className="cursor-pointer" onClick={() => setIsOpenCard("smp")}>Read More</Button>
                        <PopUpCard isOpen={OpenCard === "smp"} onClickClose={() => setIsOpenCard(null)} title="Graduated junior high school at SMPN 10 Probolinggo 2019">
                            <CardBodyOne />
                        </PopUpCard>
                    </div>
                </div>
                <div className="max-w-sm">
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Graduated Senior High School at SMAN 3 Probolinggo 2022</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-500">From junior high school to high school, I studied diligently and diligently, allowing me to compete with my peers.</p>
                        <Button variant="ghost" className="cursor-pointer" onClick={() => setIsOpenCard("sma")}>Read More</Button>
                        <PopUpCard isOpen={OpenCard === "sma"} onClickClose={() => setIsOpenCard(null)} title="Graduated senior high school at SMAN 3 Probolinggo 2022">
                            <CardBodyTwo />
                        </PopUpCard>
                    </div>
                </div>
                <div className="max-w-sm">
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Graduated Diploma at State Polytechnic of Jember</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-500">After graduating from high school, I continued my studies at State Poltytechnic of Jember, in the Informatics Engineering program.</p>
                        <Button variant="ghost" className="cursor-pointer" onClick={() => setIsOpenCard("kuliah")}>Read More</Button>
                        <PopUpCard isOpen={OpenCard === "kuliah"} onClickClose={() => setIsOpenCard(null)} title="Graduated diploma at State Polytechnic of Jember">
                            <CardBodyThree />
                        </PopUpCard>
                    </div>
                </div>
            </div>

            <hr className="w-1/2 mb-5 border-2 mx-auto border-green-500 rounded-full" />


        </>
    );
}