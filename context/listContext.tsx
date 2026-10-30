"use client";
import { Faviorate_Storage, List_Storage } from "@/constants";
import { ListContextType, ListType } from "@/types";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";

const listContext = createContext<ListContextType | null>(null);

const storedList = sessionStorage.getItem(List_Storage);
const storedFavList = localStorage.getItem(Faviorate_Storage);

const initialList = () => {
    const state = {
        items: storedList ? JSON.parse(storedList) : [], 
        favItems: storedFavList ? JSON.parse(storedFavList) : [],
    };
    return state;
}

const ListContextProvider = ({children}:{children:ReactNode}) => {
    const [ list , setList ] = useState<ListType>(initialList);

    const value = useMemo(()=>({
        list,setList
    }),[list])

    return <listContext.Provider value={value}>
        {children}
    </listContext.Provider>
};

export default ListContextProvider;

export const useList = () => {
    const context = useContext(listContext);
    if(!context) throw new Error("no component consume the list context");
    return context;
}