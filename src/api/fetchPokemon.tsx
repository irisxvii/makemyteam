import axios from "axios";

export interface PokeType {
    type: {
        name: string;
    }
}

export interface PokeStats {
    base_stat: number;
    stat: {
        name: string;
    }
}

export interface Pokemon{
    id : number;
    name: string;
    sprites: {
        other: {
            "official-artwork": {
                front_default: string;
            }   
        }
    }
        types: PokeType[]
        stats: PokeStats[]
}

export const fetchPokemon = async ():
Promise<Pokemon[]> => {
    const limit = 500;
    const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
    )

    const results = response.data.results

    const pokeData = await Promise.all(
        results.map(async (pokemon: {url:string}) => {
            const response = await axios.get(pokemon.url)
            return response.data as Pokemon
        })
    )
    return pokeData
}