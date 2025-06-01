import { PopUpOnLoad } from "../PopUpOnLoad";
import { TextIn } from "../TextIn";
import { usePage } from "../../hooks/UsePage";
import { useNavbar } from "../../hooks/useNavbar";
import { Dynamic } from "../Dynamic";

export const HomePage = () => {
    const { setPage } = usePage();
    const { setActive } = useNavbar();
    return (
        <>
            <div className="flex items-center justify-center h-screen w-full bg-gradient-to-b from-green-500 to-white">
                <div className="flex flex-col items-center text-center">
                    <PopUpOnLoad message="Welcome Dude!" />
                    <TextIn text="Hello, I'm Satria" />
                    {/* <h1 className="text-6xl font-bold text-gray-800 mb-4">Hello, I'm Satria</h1> */}
                    <p className="text-xl text-gray-600 mb-8">This is my personal web profile.</p>
                    <button className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300 shadow-lg" onClick={() => { setPage('project'); setActive('project'); }}>
                        Project
                    </button>
                </div>
            </div>
            <div className="flex justify-start w-full">
                <Dynamic src="./assets/III.png" alt="" className="w-15" />
            </div>

            <section className="relative bg-center bg-no-repeat bg-cover bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')]">
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-700/20 to-white"></div>

                {/* Konten */}
                <div className="relative px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-48">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl italic" style={{ textShadow: '2px 2px 0 white' }}>
                        "Some day you will look back and see that all along you were blooming."
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                        Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
                    </p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <a
                            href="#"
                            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                        >
                            Get started
                        </a>
                        <a
                            href="#"
                            className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
                        >
                            Learn more
                        </a>
                    </div>
                </div>
            </section>


            <div className="flex justify-end-safe px-5">
                <Dynamic src="./assets/III.png" alt="" className="w-15" />
            </div>
        </>
    );
}