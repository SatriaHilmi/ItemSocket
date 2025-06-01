import { usePage } from "../hooks/UsePage"
import { useNavbar } from "../hooks/useNavbar";

export const Navbar = () => {
    const { setPage } = usePage();
    const { active, setActive } = useNavbar();
    const pages = ['home', 'project', 'profile'];
    return (
        <div>
            <nav className="sticky top-0 left-0 right-0 flex justify-between items-center px-8 py-4 bg-green-500 z-50">
                <h2 className="text-end font-bold z-20 text-3xl">Biograph</h2>
                <div className="flex justify-items-center space-x-3">
                    <img src="./assets/CatDev.jpg" alt="logo" className="w-12 h-12 rounded-full shadow-lg shadow-black/30" />
                    <ul className="flex gap-4 items-start rounded-full bg-green-600 px-3 py-3 shadow-lg">
                        {pages.map((page) => (
                            <li
                                key={page}
                                onClick={() => {
                                    setPage(page);
                                    setActive(page);
                                }}
                                className={`text-black hover:text-gray-200 cursor-pointer ${active === page ? 'font-bold border-b-2 border-green-700/70' : ''}`}
                            >
                                {page.charAt(0).toUpperCase() + page.slice(1)}
                            </li>
                        ))}
                        {/* <li onClick={() => setPage('profile')} className="text-black hover:text-white cursor-pointer">Profile</li>
                        <li onClick={() => setPage('home')} className="text-black hover:text-white cursor-pointer">Home</li>
                        <li onClick={() => setPage('project')} className="text-black hover:text-white cursor-pointer">Project</li>
                        <li onClick={back} className="text-orange-500 hover:text-orange-300">Back</li> */}
                    </ul>
                </div>
            </nav>
        </div>
    )
}