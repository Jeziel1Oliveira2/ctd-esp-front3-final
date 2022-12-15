import { persona } from "../Types/persona";

export type Comic = {
    id: string;
    title: string;
    thumbnail: {
        path: string;
        extension: string;
    };
    price: number;
    stock: number;
    characters: persona;
};