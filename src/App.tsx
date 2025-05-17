import { useQuery } from "@tanstack/react-query"
import { fetchPokemon} from "./api/fetchPokemon"
import type { Pokemon } from "./api/fetchPokemon"
import PokeCard from "./components/PokeCard"
import { useState } from "react"
import TeamStats from "./components/TeamStats"

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
      {team.length > 0 && <TeamStats team={team}/>}
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

      <select className="dropdown" value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}>
        <option value="">All Types</option>
        <option value="grass">Grass</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="bug">Bug</option>
        <option value="normal">Normal</option>
        <option value="poison">Poison</option>
        <option value="electric">Electric</option>
        <option value="ground">Ground</option>
        <option value="fairy">Fairy</option>
        <option value="fighting">Fighting</option>
        <option value="psychic">Psychic</option>
        <option value="rock">Rock</option>
        <option value="ghost">Ghost</option>
        <option value="ice">Ice</option>
        <option value="dragon">Dragon</option>
        <option value="dark">Dark</option>
        <option value="steel">Steel</option>
        <option value="flying">Flying</option>
      </select>
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