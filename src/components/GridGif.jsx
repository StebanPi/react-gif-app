import useFetchGifs from "../hooks/useFetchGifs.js";
import GifCard from "./GifCard.jsx";

const GridGif = ({ categoria }) => {
  const { images, isLoading } = useFetchGifs(categoria);

  return (
    <>
      <h3>{categoria}</h3>
      {isLoading && <h2>Cargando...</h2>}

      <div className="flex flex-row flex-wrap justify-center">
        {images.map((image) => (
          <GifCard key={image.id} {...image}></GifCard>
        ))}
      </div>
    </>
  );
};

export default GridGif;
