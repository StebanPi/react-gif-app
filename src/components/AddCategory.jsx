import { useState } from "react";

const AddCategory = ({ onNuevaCategoria }) => {
  const [valorInput, setValorInput] = useState("");

  const handleValor = (e) => {
    setValorInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoValorInput = valorInput.trim();
    if (nuevoValorInput.length <= 1) return;
    onNuevaCategoria(nuevoValorInput);
    setValorInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        onChange={handleValor}
        value={valorInput}
      ></input>
    </form>
  );
};

export default AddCategory;
