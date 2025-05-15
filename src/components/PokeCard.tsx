import type { Pokemon } from "../api/fetchPokemon"

interface Props {
    pokemon: Pokemon;
    onClick: (pokemon: Pokemon) => void;
    disabled?: boolean;
}

const PokeCard: React.FC<Props> = ({ pokemon, onClick, disabled }) => {
    return (
        <div className={"poke-card " + (disabled ? "disabled" : "")}
        onClick={() => {
            if (!disabled) {
            onClick(pokemon)
        }
      }}
    >
        {!disabled && (
        <img src={pokemon.sprites.other['official-artwork'].front_default}
            alt={pokemon.name} />
        )}
        <h3>{pokemon.name}</h3>
        <div>
            {pokemon.types.map((t) => (
                <span key={t.type.name}>{t.type.name}</span>
            ))}
        </div>
        </div>
    )}

    export default PokeCard;