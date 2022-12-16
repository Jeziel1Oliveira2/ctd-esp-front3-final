import { useState } from "react";
import { useQuery } from "react-query";
import { getComics } from "./marvel.service";


export function useComics() {
 const [page, setPage] = useState(1)
 const {data} = useQuery(["getComics", page], () => getComics(page, 12))


 const loadingMoreComics = () => setPage((old) =>old + 1);
 const loadingLessComics = () => setPage((old) =>Math.max(old - 1, 1));
  return {
    page,
    data,
    loadingMoreComics,
    loadingLessComics,
  } 
};
