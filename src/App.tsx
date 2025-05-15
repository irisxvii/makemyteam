import { useQuery } from "@tanstack/react-query"
import { fetchPokemon} from "./api/fetchPokemon"
import type { Pokemon } from "./api/fetchPokemon"
import PokeCard from "./components/PokeCard"
import { useState } from "react"

const App = () => {
  const {data: pokemons} =
  useQuery<Pokemon[]>({
    queryKey: ["pokemons"],
    queryFn: fetchPokemon,
  })

  const [team, setTeam] = useState<Pokemon[]>([])
  const addToTeam = (pokemon: Pokemon) => {
    if (team.length < 6) {
      setTeam((prev) => [...prev, pokemon])
    } else {
      alert("you can only have 6 pokemons in your team")
    }
  }

  const teamIds = team.map((p) => p.id)

  return (
    <div className="page-layout">
      <div className="right-static">
      <h2>Your Team</h2>
      <div className="team-section">
        {team.map((pokemon) => (
          <div key={pokemon.id} className="team-member">
            <img src={pokemon.sprites.other['official-artwork'].front_default} 
            alt={pokemon.name} />
            <h4>{pokemon.name}</h4>
      </div>
        ))}
      </div>
    </div>

      <div className="left-scroll">
      <h1 className="heading">Pick Your Dream Team</h1>

      <div className="poke-grid">
        {pokemons?.map((pokemon) => (
          <PokeCard 
            key={pokemon.id} 
            pokemon={pokemon}
            onClick={addToTeam}
            disabled={teamIds.includes(pokemon.id)} />
        ))}
      </div>
      </div>
    </div>
  )
}

export default App