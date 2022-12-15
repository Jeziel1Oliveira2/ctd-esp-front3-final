import { StoryIten } from "./IStoryIten";

export interface Story {
    available: string;
    returned: string;
    collectionURI: string;
    itens: StoryIten[];
}