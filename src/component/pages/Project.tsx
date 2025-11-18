import { CardProject } from "../CardProject";

const projects = [
    {
        title: "Itemsocket",
        description: "Itemsocket is an inventory management application designed to streamline the process of tracking and organizing items. It offers features such as item categorization, stock level monitoring, and reporting tools to help users efficiently manage their inventory.",
        imageUrl: "./assets/tree_un.jpg"
    },
    {
        title: "Project Two",
        description: "This is the description for Project Two. It is a web application that helps users manage their tasks and improve productivity.",
        imageUrl: "./assets/CatDev.jpg"
    },
    {
        title: "Project Three",
        description: "This is the description for Project Two. It is a web application that helps users manage their tasks and improve productivity.",
        imageUrl: "./assets/keyboard.jpg"
    },
]


export const Project = () => {
    return (
        <>
            <div className="flex items-center justify-center h-screen w-full bg-gradient-to-b from-green-500 to-white">
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-6xl font-bold text-gray-800 mb-4">The Project!</h1>
                    <p className="text-xl text-gray-600 mb-8">This is the project.</p>
                    {/* <button className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300 shadow-lg">
                        Go Back
                    </button> */}
                </div>
            </div>
            <section className="relative bg-center bg-no-repeat mb-4">
                <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-700/20 to-white"></div>
                <div className="flex justify-center">
                    <img
                        src="./assets/keyboard.jpg"
                        alt="Itemsocket"
                        className="w-full h-[400px] object-cover rounded-lg"
                    />
                    <div className="absolute px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-48">
                        <h1 className="mb-4 text-4xl font-extrabold font-mono tracking-tight leading-none text-white md:text-5xl italic">
                            "Let's build something amazing together."
                        </h1>
                    </div>
                </div>
            </section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 mb-10 mt-20 gap-y-10">
                {projects.map((project, index) => (
                    <div key={index} className="flex justify-center">
                        <CardProject
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                        />
                    </div>
                ))}
            </div>

        </>
    )
}