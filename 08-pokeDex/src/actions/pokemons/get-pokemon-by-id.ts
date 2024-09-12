import { pokeApi } from "../../config/api/pokeApi";
import { Pokemon } from "../../domain/entities/Pokemon";
import { PokeAPIPokemon } from "../../infrastructure/interfaces/pokeapi.interfaces";
import { PokemonMapper } from "../../infrastructure/mappers/pokemon.mapper";

export const getPokemonById = async (id: number): Promise<Pokemon> => {
    try {
        const {data} = await pokeApi.get<PokeAPIPokemon>(`/pokemon/${id}`);
        const pokemon = await PokemonMapper.pokeApiPokemonToEntity(data);
        return pokemon;
    } catch (error) {
        console.log(error);
        throw new Error(`No hay pokemon con el id: ${id}`);
    }
}