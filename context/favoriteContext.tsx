"use client";
import { Faviorate_Storage } from "@/constants";
import { FaviorateContextType , ListItemType } from "@/types";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";

interface PropType {
    children: ReactNode;
};

const FavoriteContext = createContext<FaviorateContextType | null>(null);

const storege = localStorage.getItem(Faviorate_Storage);

const initialize = () => {
    if(storege) return JSON.parse(storege);
    return [];
}

const FavoriteContextProvider = ({ children }:PropType) => {
    const [state , setState] = useState<ListItemType[]>(initialize);

    const value = useMemo(()=>(
        { state ,setState}
    ),state)

    return <FavoriteContext.Provider value={value}>
        {children}
    </FavoriteContext.Provider>
}

export default FavoriteContextProvider;

export const useFav = () => {
    const context = useContext(FavoriteContext);
    if(context) return context;
    throw new Error("there isn't any faviorate item");
}