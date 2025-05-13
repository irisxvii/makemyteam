import type { Pokemon } from "../api/fetchPokemon"

interface Props {
    pokemon: Pokemon;
}

const PokeCard: React.FC<Props> = ({ pokemon }) => {
    return (
        <div className="poke-card">
            <img src={pokemon.sprites.other['official-artwork'].front_default}
            alt={pokemon.name} />
        <h3>{pokemon.name}</h3>
        <div>
            {pokemon.types.map((t) => (
                <span key={t.type.name}>{t.type.name}</span>
            ))}
        </div>
        </div>
    )}

    export default PokeCard;