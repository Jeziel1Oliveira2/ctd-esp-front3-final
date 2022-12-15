import { ComicIten } from "./IComicIten";

export interface Comic {
    available: string;
    returned: string;
    collectionURI: string;
    itens: ComicIten[];
} 