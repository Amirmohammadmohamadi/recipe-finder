import { Dispatch, SetStateAction } from "react";

export interface IconPropType {
    color: string;
    size: number | string;
};

export interface searchContextType {
    state: string | undefined;
    setState: Dispatch<SetStateAction<string | undefined>>;
};

export interface ListType {
    id: number;
    title: string;
    image: string;
};

export interface ListContextType {
    list: ListType[];
    setList: Dispatch<SetStateAction<ListType[]>>;
};

export interface ItemType {
    image: string;
    title: string;
    summary: string;
    extendedIngredients: IngredientsType[];
};

export interface IngredientsType {
    consistency: string;
    name: string;
    amount: string;
    unit: string;
    id: string;
    image: string;
}

export interface FaviorateContextType{
    state: IngredientsType[];
    setState: Dispatch<SetStateAction<ListType[]>>;
}