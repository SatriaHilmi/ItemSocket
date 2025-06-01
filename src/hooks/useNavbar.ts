import { create } from "zustand";

interface NavbarState {
    active: string;
    setActive: (page: string) => void;
}

export const useNavbar = create<NavbarState>((set) => ({
    active: 'home',
    setActive: (page: string) => set({ active: page }),
}));