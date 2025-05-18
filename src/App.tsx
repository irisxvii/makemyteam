import { useQuery } from "@tanstack/react-query"
import { fetchPokemon} from "./api/fetchPokemon"
import type { Pokemon } from "./api/fetchPokemon"
import PokeCard from "./components/PokeCard"
import { useState } from "react"
import TeamStats from "./components/TeamStats"
import TypeEffectiveness from "./components/TypeEffectiveness"
import TypeDropdown from "./components/TypeDropdown"

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

  const removeFromTeam = (index: number) => {
    setTeam((prev) => prev.filter((_, i) => i !== index))
  }

  const teamIds = team.map((p) => p.id)
  const [search, setSearch] = useState("")
  const [selectedType, setSelectedType] = useState("")

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
                <button 
                  className="remove-button"
                  onClick={() => removeFromTeam(i)}
                >
                  ×
                </button>
              </>
            ) : (
              <div className="placeholder">
                <p>x</p>
              </div>
            )}
          </div>
    )
  })}
      </div>
        <TeamStats team={team}/>
        <TypeEffectiveness team={team} />
      </div>

      <div className="left-scroll">
      <h1 className="heading">Pick Your Dream Team</h1>
      <p className="subheading">
        Click on any Pokemon to add it to your team. You can choose up to 6</p>

      <div className="filter">
      <input
        type="text"
        placeholder="Search for a Pokemon"
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <TypeDropdown
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />

      </div>

      <div className="poke-grid">
        {pokemons?.filter(
          (p) => p.name.toLowerCase().includes(search) &&
          (selectedType === "" || p.types.some((t) => t.type.name === selectedType)))
          .map((pokemon) => (
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