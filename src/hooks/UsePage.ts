import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useEffect, useState } from "react";

type PageState = {
    page: string;
    history: string[];
    setPage: (page: string) => void;
    back: () => void;
}

export const usePage = create<PageState>()(
    persist(
        (set) => ({
            page: "home",
            history: [],
            setPage: (page) =>
                set((state) => ({
                    ...state,
                    history: [...state.history, state.page],
                    page,
                })),
            back: () =>
                set((state) => {
                    const lastPage = state.history.pop() || "home";
                    return { ...state, page: lastPage, history: [...state.history] };
                }),
        }),
        {
            name: "page-storage", // unique name for the storage
            storage: {
                getItem: async (key) => {
                    const value = sessionStorage.getItem(key);
                    return value ? JSON.parse(value) : null;
                },
                setItem: async (key, value) => {
                    sessionStorage.setItem(key, JSON.stringify(value));
                },
                removeItem: async (key) => {
                    sessionStorage.removeItem(key);
                },
            }
        }
    )
)

export const UseHasHydrated = () => {
    const [hasHydrated, setHasHydrated] = useState(false);

    useEffect(() => {
        setHasHydrated(true); // Set to true after the first render
    }, []);
    return hasHydrated;
}; // Export the store for easier access