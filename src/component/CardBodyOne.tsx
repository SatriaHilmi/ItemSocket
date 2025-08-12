import type React from "react";

interface CardBodyOneProps {
    onClickClose?: () => void;
}

export const CardBodyOne: React.FC<CardBodyOneProps> = () => {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="text-center mb-4 space-x-4">
                <h3 className="text-black">
                    Similar to a gifted student who pursued his potential, he started an organization to become a certified student at school. He studied hard and diligently to achieve his goals. He collaborated with friends and received awards, and had a positive and enjoyable school life. He started his new studies in 2016 and graduated in 2019. He became an enthusiastic student who embraced learning and friendships.
                </h3>
            </div>
        </div>
    );
}