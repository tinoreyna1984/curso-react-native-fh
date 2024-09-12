import { Pokemon } from "../../domain/entities/Pokemon";
import { getPokemonById } from "./get-pokemon-by-id";

export const getPokemonsByIds = async (ids: number[]): Promise<Pokemon[]> => {
    try {
        const pokemonPromises: Promise<Pokemon>[] = ids.map(
            id => {
                return getPokemonById(id);
            }
        );
        return Promise.all(pokemonPromises);
    } catch (error) {
        console.log(error);
        throw new Error(`Cannot find pokemons with IDs: ${ids}`);
    }
}