import { useEffect, useState } from "react";
import getGifs from "./../helpers/getGifs.js";

const useFetchGifs = (categoria) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const nuevosGifs = await getGifs(categoria);
    setImages(nuevosGifs);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    images,
    isLoading,
  };
};

export default useFetchGifs;
