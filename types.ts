import { Dispatch, SetStateAction } from "react";

export interface IconPropType {
    color: string;
    size: number | string;
};

export interface searchContextType {
    state: string | undefined;
    setState: Dispatch<SetStateAction<string | undefined>>;
};

export interface ListItemType {
    id: number;
    title: string;
    image: string;
};

export interface ListType {
    items: ListItemType[];
    favItems:ListItemType[];
};

export interface ListContextType {
    list: ListType;
    setList: Dispatch<SetStateAction<ListType>>;
};

export interface AnalyzedInstructionsSteps {
    equipment: {name:string}[];
    ingredients: {name: string}[];
    number: number;
    step: string;
}

export interface ItemType {
    image: string;
    title: string;
    summary: string;
    extendedIngredients: IngredientsType[];
    cookingMinutes?: number;
    healthScore?: number;
    pricePerServing?: number;
    preparationMinutes?: number;
    analyzedInstructions?: { steps: AnalyzedInstructionsSteps[]}[];
};

export interface IngredientsType {
    consistency: string;
    name: string;
    amount: string;
    unit: string;
    id: number;
    image: string;
}

export interface FaviorateContextType{
    state: ListItemType[];
    setState: Dispatch<SetStateAction<ListItemType[]>>;
}