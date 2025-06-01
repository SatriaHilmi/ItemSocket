export const Profile = () => {
    return (
        <>
            <div className="flex items-center justify-center h-screen w-full bg-gradient-to-b from-green-500 to-white">
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-6xl font-bold text-gray-800 mb-4">Profile Page</h1>
                    <p className="text-xl text-gray-600 mb-8">This is the profile page.</p>
                    <button className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300 shadow-lg">
                        Go Back
                    </button>
                </div>
            </div>
        </>
    )
}