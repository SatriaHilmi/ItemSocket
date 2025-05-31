import { usePage } from "../hooks/UsePage"

export const Navbar = () => {
    const { setPage, back } = usePage();
    return (
        <div>
            <nav className="sticky top-0 left-0 right-0 flex justify-between items-center px-8 py-4 bg-green-500 z-50">
                <h2 className="text-end font-bold z-20 text-3xl">Biograph</h2>
                <div className="flex justify-items-center space-x-4">
                    <img src="/logo192.png" alt="logo" className="w-10 h-10 rounded-full" />
                    <ul className="flex gap-4 items-start rounded-2xl bg-green-600 px-4 py-2 shadow-lg">
                        <li onClick={() => setPage('profile')} className="text-black hover:text-white cursor-pointer">Profile</li>
                        <li onClick={() => setPage('home')} className="text-black hover:text-white cursor-pointer">Home</li>
                        <li onClick={() => setPage('project')} className="text-black hover:text-white cursor-pointer">Project</li>
                        {/* <li onClick={back} className="text-orange-500 hover:text-orange-300">Back</li> */}
                    </ul>
                </div>
            </nav>
        </div>
    )
}