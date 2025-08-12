import { Button } from "@/components/ui/button";
import { DoorOpen } from "lucide-react";

interface PopUpCardProps {
    isOpen: boolean;
    onClickClose: () => void;
    children: React.ReactNode;
    title?: string;
}

export const PopUpCard: React.FC<PopUpCardProps> = (props) => {
    const { isOpen: open, onClickClose, children, title } = props;
    return (
        <>
            <div className={`fixed inset-0 flex justify-center bg-black/50 z-50 ${open ? 'block' : 'hidden'}`}>
                <div className="absolute left-1/2 top-1/2 md:w-[50%] transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-white rounded-lg shadow-md p-8 mb-4">
                        <Button variant="ghost" size="icon" className="absolute top-2 right-2 size-8 cursor-pointer" onClick={onClickClose}>
                            <DoorOpen className="size-5" />
                        </Button>
                        <h2 className="text-md font-bold mb-5 text-black">{title}</h2>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}