import { PopUpOnLoad } from "../PopUpOnLoad";
import { TypeText } from "../TypeText";
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
                    <TypeText text="Hello Satria!" speed={100} />
                    {/* <h1 className="text-6xl font-bold text-gray-800 mb-4">Hello, I'm Satria</h1> */}
                    <p className="text-xl text-gray-600 mb-8 font-mono">This is my personal web profile.</p>
                    <button className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300 shadow-lg" onClick={() => { setPage('project'); setActive('project'); }}>
                        Project
                    </button>
                </div>
            </div>
            <div className="flex justify-start w-full">
                <Dynamic src="./assets/leaf.png" alt="" className="w-15" />
            </div>

            <section className="relative bg-center bg-no-repeat bg-cover bg-[url('./assets/tree_un.jpg')]">
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-700/20 to-white"></div>

                {/* Konten */}
                <div className="relative px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-48">
                    <h1 className="mb-4 text-4xl font-extrabold font-mono tracking-tight leading-none text-white md:text-5xl italic">
                        "Some day you will look back and see that all along you were blooming."
                    </h1>
                    {/* <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
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
                    </div> */}
                </div>
            </section>

            <div className="flex justify-end-safe px-4">
                <Dynamic src="./assets/leaf.png" alt="" className="w-15" />
            </div>
            <br />

            <div className="justify-center flex items-center mb-5 pt-10 space-x-4">
                <div className="max-w-sm">
                    <a href="#">
                        <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Graduated junior high school at SMPN 10 Probolinggo 2019</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-500">Similar to prodigy student and take a potential, start a organization to make sertified student at school.</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="max-w-sm">
                    <a href="#">
                        <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Noteworthy technology acquisitions 2021</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-500">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="max-w-sm">
                    <a href="#">
                        <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Noteworthy technology acquisitions 2021</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-500">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>

        </>
    );
}