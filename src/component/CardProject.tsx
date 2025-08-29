interface CardProjectProps {
    title: string;
    description: string;
    imageUrl: string;
}

export const CardProject: React.FC<CardProjectProps> = ({ title, description, imageUrl }) => {
    return (
        <>
            <div className="max-w-xl" style={{ perspective: '1000px' }}>
                <div className="overflow-hidden shadow-lg bg-white rounded-xl 
                  transform transition-transform duration-500 
                  hover:rotate-x-6 hover:rotate-y-6 hover:scale-105">
                    <img className="w-full h-[500px] object-cover" src={imageUrl} alt={title} />
                </div>
                <div className="px-2 mt-5 text-center">
                    <h3 className="font-bold text-xl mb-2 text-black">{title}</h3>
                    <p className="text-gray-600 text-base">
                        {description}
                    </p>
                </div>
            </div>
        </>
    );
}