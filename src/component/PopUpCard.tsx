import { Button } from "@/components/ui/button";
import { CgClose } from "react-icons/cg";

interface PopUpCardProps {
    isOpen: boolean;
    onClickClose: () => void;
    children: React.ReactNode;
    title?: string;
}

export const PopUpCard: React.FC<PopUpCardProps> = ({ isOpen, onClickClose, children, title }) => {
    return (
        <div
            className={`fixed inset-0 bg-black/50 z-50 flex items-center justify-center ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                } transition-opacity duration-300`}
        >
            <div
                className="
                relative bg-white rounded-lg shadow-md
                w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%]
                max-h-[80vh] overflow-y-auto
                p-6 sm:p-8
                "
            >
                {/* Tombol close */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-1 right-1 size-8 cursor-pointer hover:bg-gray-300"
                    onClick={onClickClose}
                >
                    <CgClose className="size-5" />
                </Button>

                {/* Title */}
                {title && (
                    <h2 className="text-center text-lg sm:text-xl font-bold mb-5 text-black">
                        {title}
                    </h2>
                )}

                {/* Body */}
                {children}
            </div>
        </div>
    );
};
