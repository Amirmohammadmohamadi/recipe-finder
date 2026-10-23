"use client";
import { searchContextType } from "@/types";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";

const searchValueContext = createContext<searchContextType | null>(null);

const SearchValueContextProvider = ({children}:{children:ReactNode}) => {
    const [state,setState] = useState<string | undefined>();

    const value = useMemo(()=>({
        state,setState
    }),[state]);

    return <searchValueContext.Provider value={value}>
        {children}
    </searchValueContext.Provider>
};

export default SearchValueContextProvider;

export const useSearchValue = () => {
    const context = useContext(searchValueContext);

    if(context) {
        return context
    }
    throw new Error("no componet use context provider");
}