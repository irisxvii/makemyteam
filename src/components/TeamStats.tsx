import type { Pokemon } from "../api/fetchPokemon";

interface Props {
    team: Pokemon[];
}

const TeamStats: React.FC<Props> = ({ team }) => {
    const calculateTeamStats = (team: Pokemon[]) => {
        const totalStats: Record<string, number> = {}

        team.forEach((pokemon) => {
            pokemon.stats.forEach((stat) => {
                if (!totalStats[stat.stat.name]) {
                    totalStats[stat.stat.name] = stat.base_stat;
                }
                totalStats[stat.stat.name] += stat.base_stat;
            })
        })
        return totalStats;
    }

    const teamStats = calculateTeamStats(team)
    return(
        <div className="team-stats">
            <h3>Total Stats</h3>
            {Object.entries(teamStats).map(([statName, total]) => (
                <div key={statName} className="stat-row">
                    <span>{statName}</span> : <span>{total}</span>
        </div>
            ))}
        </div>
    )
}

export default TeamStats;