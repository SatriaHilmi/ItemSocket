interface CardBodyTwoProps {
    onClickClose?: () => void;
}

export const CardBodyTwo: React.FC<CardBodyTwoProps> = () => {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="text-center mb-4 space-x-4">
                <h3 className="text-black">
                    From junior high school to high school, I studied diligently and diligently, allowing me to compete with my peers. With high enthusiasm, I never gave up on my studies, especially during my time at school when I was involved in numerous organizations.
                    So, there was a lot to accomplish, but I remained enthusiastic throughout my three years of high school, striving alongside my friends, continuously improving my skills from junior high school to high school.
                </h3>
            </div>
        </div>
    );
}