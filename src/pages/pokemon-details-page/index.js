import { useState, useEffect, useContext } from "react";
import { getPokemon } from "../../services/requestApi";
import { useParams } from "react-router";
import { ThemeContext } from "../../contexts/theme-context";
import { PokemonDetails } from "../../components/pokemon-details";

const PokemonDetailsPage = () => {
  const [pokemon, setPokemon] = useState();
  const { theme } = useContext(ThemeContext);

  const { name } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(name);
      setPokemon(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {pokemon !== undefined ? (
        <PokemonDetails pokemon={pokemon} />
      ) : (
        "No pokemon found"
      )}
    </div>
  );
};

export { PokemonDetailsPage };
