import {AxiosAdapter} from './http/axios.adapter';

// Obtener valor de api_key en https://www.themoviedb.org/
// Declarar THE_MOVIE_DB_KEY=algunValor en la raíz, en el archivo .env

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: process.env.THE_MOVIE_DB_KEY || '',
    language: 'es-MX',
  },
});
