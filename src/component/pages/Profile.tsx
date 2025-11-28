export const Profile = () => {
    return (
        <>
            <div className="flex items-center justify-center h-screen w-full bg-gradient-to-b from-black via-gray-900">
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-6xl font-bold text-white mb-4 flex gap-2.5"><span className="text-yellow-500">Profile</span> Page</h1>
                    <p className="text-xl text-white mb-8">This is the profile page.</p>
                    <button className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300 shadow-lg">
                        Go Back
                    </button>
                </div>
            </div>
        </>
    )
}