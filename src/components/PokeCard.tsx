import type { Pokemon } from "../api/fetchPokemon"

interface Props {
    pokemon: Pokemon;
    onClick: (pokemon: Pokemon) => void;
}

const PokeCard: React.FC<Props> = ({ pokemon, onClick }) => {
    return (
        <div className="poke-card" onClick={() => onClick(pokemon)}>
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