import type { Pokemon } from "../api/fetchPokemon";
import typeChart from "../data/typeChart";

interface Props {
  team: Pokemon[];
}

const TypeEffectiveness: React.FC<Props> = ({ team }) => {
  const teamTypes = team.flatMap((pokemon) => 
  pokemon.types.map(t => t.type.name));

  const typeCount = teamTypes.reduce<Record<string, number>>((acc, type) => {
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});

  const weaknesses: Record<string, number> = {};

  for (const type of Object.keys(typeCount)) {
    const data = typeChart[type];
    if (!data) continue;

    data.weakTo.forEach(w => {
      weaknesses[w] = (weaknesses[w] || 0) + typeCount[type];
    })
  }

  return (
    <div className="type-effectiveness">
      <h3>Team Type Effectiveness</h3>

      <div>
        <strong>Weaknesses:</strong> 
        {Object.keys(weaknesses).length > 0 ? (
          Object.entries(weaknesses)
            .sort((a, b) => b[1] - a[1])
            .map(([type, count]) => <span key={type}>{type} ({count}) </span>)
        ) : ' None'}
      </div>
    </div>
  )
}

export default TypeEffectiveness;