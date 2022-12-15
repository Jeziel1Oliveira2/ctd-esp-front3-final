import { getComic } from "./marvel.service";



const MaxItens = 9;
const MaxLeft = (MaxItens -  1) / 2;


const pagination = (limit: Number, total: Number, offset: Number ) => {
    conts limit = limit;
    const pagePresent = offset ? (offset / limit ) + 1;
    const totalPages =  Math.ceil(total / limit);
    const firstPage = Math.max(pagePresent - MaxLeft, 1) 
    return (
        <div>
            <ul>
                {Array.from({ length: MaxItens}).map((_, index) => index +firstPage)}
            </ul>
        </div>
    );
};