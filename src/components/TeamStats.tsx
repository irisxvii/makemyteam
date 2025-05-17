import type { Pokemon } from "../api/fetchPokemon";

interface Props {
    team: Pokemon[];
}

const statKeys = ['hp', 'attack', 'defense', 'speed'];
const TeamStats: React.FC<Props> = ({ team }) => {
    const calculateTeamStats = (team: Pokemon[]) => {
        const totalStats: Record<string, number> = {
            hp: 0,
            attack: 0,
            defense: 0,
            speed: 0,
        }

        team.forEach((pokemon) => {
            pokemon.stats.forEach((stat) => {
                const statName = stat.stat.name;
                if (totalStats[statName] !== undefined) {
                    totalStats[statName] += stat.base_stat;
                }
            })
        })

        const averageStats: Record<string, number> = {};
        statKeys.forEach((key) => {
            averageStats[key] = team.length > 0 ? Math.round(totalStats[key] / team.length) : 0;
        })

        return averageStats;
    }

    const averageStats = calculateTeamStats(team);

    return(
        <div className="team-stats">
            <h3>Average Team Stats</h3>
            {statKeys.map((statName) => (
                <div key={statName} className="stat-row">
                    <span>{statName}</span>
                    <div className="stat-container">
                        <div className="stat-fill"
                        style={{ width: `${(averageStats[statName] / 225) * 100}%` }}>
                        </div>
                    </div>
                    <span>{averageStats[statName]}</span>
                </div>
            ))}
        </div>
    )
}

export default TeamStats;