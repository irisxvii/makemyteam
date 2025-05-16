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
      {[...Array(6)].map((_, i) => {
        const member = team[i]
        return (
          <div key={i} className="team-member">
            {member ? (
              <>
                <img
                  src={member.sprites.other['official-artwork'].front_default}
                  alt={member.name}
                />
                <h4>{member.name}</h4>
              </>
            ) : (
              <div className="placeholder">
                <p>-</p>
              </div>
            )}
          </div>
    )
  })}
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