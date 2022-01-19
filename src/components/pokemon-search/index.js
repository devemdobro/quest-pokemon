import { useState } from "react";

const PokemonSearch = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value)
  }

  return (
    <form>
      <label htmlFor="search">Search your pokemon</label>
      <input
        type="text"
        id="search"
        name="search"
        onChange={handleInputChange}
        value={input}
      ></input>
    </form>
  );
};

export { PokemonSearch };
