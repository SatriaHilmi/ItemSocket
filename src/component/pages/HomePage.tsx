import { PopUpOnLoad } from "../PopUpOnLoad";
import { TextIn } from "../TextIn";
import { usePage } from "../../hooks/UsePage";

export const HomePage = () => {
    const { setPage } = usePage();
    return (
        <>
            <div className="flex items-center justify-center h-screen w-full bg-gradient-to-b from-green-500 to-white">
                <div className="flex flex-col items-center text-center">
                    <PopUpOnLoad message="Welcome Dude!" />
                    <TextIn text="Hello, I'm Satria" />
                    {/* <h1 className="text-6xl font-bold text-gray-800 mb-4">Hello, I'm Satria</h1> */}
                    <p className="text-xl text-gray-600 mb-8">This is my personal web profile.</p>
                    <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300" onClick={() => setPage('project')}>
                        Project
                    </button>
                </div>
            </div>
        </>
    );
}