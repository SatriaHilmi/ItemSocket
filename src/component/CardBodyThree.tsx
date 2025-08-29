interface CardBodyThreeProps {
    onClickClose?: () => void;
}

export const CardBodyThree: React.FC<CardBodyThreeProps> = () => {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="text-center mb-4 space-x-4">
                <h3 className="text-black">
                    After graduating from high school, I continued my studies at State Poltytechnic of Jember, in the Informatics Engineering program. During my time at university, in which helped me develop both my technical skills and soft skills i am take a webinar or event, etc.
                    I am hardwork for studies in university, allowing me to grow as a well-rounded individual. My university experience has been enriching, providing me with opportunities to learn, collaborate, and contribute to the community and company.
                </h3>
            </div>
        </div>
    );
};