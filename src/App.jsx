import { useState } from "react";
import { AddCategory, GridGif } from "./components";

const App = () => {
  const [categorias, setCategorias] = useState(["lego"]);

  const addCategory = (categoriaNueva) => {
    const categoriasLower = categorias.map((categoria) =>
      categoria.toLowerCase()
    );
    if (categoriasLower.includes(categoriaNueva.toLowerCase())) return;
    setCategorias([categoriaNueva, ...categorias]);
  };

  return (
    <>
      <h1>Gif App</h1>
      <AddCategory onNuevaCategoria={addCategory} />

      {categorias.map((categoria) => (
        <GridGif key={categoria} categoria={categoria}></GridGif>
      ))}
    </>
  );
};

export default App;
