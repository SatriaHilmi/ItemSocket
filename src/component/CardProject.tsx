interface CardProjectProps {
    title: string;
    description: string;
    imageUrl: string;
}

export const CardProject: React.FC<CardProjectProps> = ({ title, description, imageUrl }) => {
    return (
        <>
            <div className="max-w-xl">
                <div className="flex items-center justify-center overflow-hidden
                  transform transition-transform duration-500 hover:scale-105">
                    <img className="w-[600px] h-[500px] object-cover rounded-xl" src={imageUrl} alt={title} />
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