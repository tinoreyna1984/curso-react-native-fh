import {pokeApi} from '../../config/api/pokeApi';
import {Pokemon} from '../../domain/entities/Pokemon';
import {
  PokeAPIPaginatedResponse,
  PokeAPIPokemon,
} from '../../infrastructure/interfaces/pokeapi.interfaces';
import {PokemonMapper} from '../../infrastructure/mappers/pokemon.mapper';

export const getPokemons = async (
  page: number,
  limit: number = 20,
): Promise<Pokemon[]> => {
  try {
    const url = `/pokemon?offset=${page * 10}&limit=${limit}`;
    const {data} = await pokeApi.get<PokeAPIPaginatedResponse>(url);

    const pokemonPromises = data.results.map((info: any) => {
      return pokeApi.get<PokeAPIPokemon>(info.url);
    });

    const pokeApiPokemons = await Promise.all(pokemonPromises);

    const pokemonsPromises = pokeApiPokemons.map(item =>
      PokemonMapper.pokeApiPokemonToEntity(item.data),
    );

    return await Promise.all(pokemonsPromises);
  } catch (error) {
    console.log(error);
    throw new Error('No hay pokemons...');
  }
};
