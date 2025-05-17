import type { Pokemon } from "../api/fetchPokemon";

interface Props {
    team: Pokemon[];
}

const TeamStats: React.FC<Props> = ({ team }) => {
    const calculateTeamStats = (team: Pokemon[]) => {
        const totalStats: Record<string, number> = {
            hp: 0,
            attack: 0,
            defense: 0,
            "special-attack": 0,
            "special-defense": 0,
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
        Object.entries(totalStats).forEach(([key, val]) => {
            averageStats[key] = team.length > 0 ? Math.round(val / team.length) : 0;
        })

        return { totalStats, averageStats };
    }

    const { totalStats, averageStats } = calculateTeamStats(team);

    return(
        <div className="team-stats">
            <h3>Total Stats</h3>
            {Object.entries(totalStats).map(([statName, total]) => (
                <div key={statName} className="stat-row">
                    <span>{statName}</span> <span>{total} (avg: {averageStats[statName]})</span>
                </div>
            ))}
        </div>
    )
}

export default TeamStats;