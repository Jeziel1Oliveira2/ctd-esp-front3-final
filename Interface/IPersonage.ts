import { URL } from "./IUrl";
import { Image } from "./IImage";
import { Comic } from "./IComic";
import { Story } from "./IStory";

export interface Personage {
    id: string;
    name: string;
    description: string;
    modified: string;
    resourceURI: string;
    urls: URL[];
    image: Image;
    comics: Comic;
    stories: Story;
    events: Comic;
    series: Comic;
}