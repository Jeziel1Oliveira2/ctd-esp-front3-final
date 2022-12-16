import { itens } from "./items";


export type characters = {
    available: number;
    returned: number;
    collectionURI: string;
    items: itens[];
};