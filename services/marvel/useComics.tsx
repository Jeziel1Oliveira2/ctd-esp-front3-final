import { useState } from "react";
import { useQuery } from "react-query";
import { getComics } from "./marvel.service";

export function useComics() {
    const [comicLimit, setComicLimit] = useState(12);
    const {data, isLoading} = useQuery(
        ["getComics", comicLimit], () => getComics(0, comicLimit),
        {keepPreviousData: true}   
    )
    const limitTotal = data?.data?.total / 12;

  const loadingMoreComics = () =>
    setComicLimit((prevState) => Math.min(prevState + 12, limitTotal));

  const loadingLessComics = () =>
    setComicLimit((prevState) => Math.max(prevState - 12, 12));

  return {
    data,
    isLoading,
    loadingMoreComics,
    loadingLessComics,
  } 
};
