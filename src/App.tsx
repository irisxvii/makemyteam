import { useQuery } from "@tanstack/react-query"
import { fetchPokemon} from "./api/fetchPokemon"
import type { Pokemon } from "./api/fetchPokemon"
import PokeCard from "./components/PokeCard"

const App = () => {
  const {data: pokemons} =
  useQuery<Pokemon[]>({
    queryKey: ["pokemons"],
    queryFn: fetchPokemon,
  })

  return (
    <div>
      <h1 className="heading">Pick Your Dream Team</h1>
      <div className="poke-grid">
        {pokemons?.map((pokemon) => (
          <PokeCard key={pokemon.id} pokemon={pokemon} />
        ))}

      </div>
    </div>
  )
}

export default App