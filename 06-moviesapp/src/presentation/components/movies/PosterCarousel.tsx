import React from 'react'
import { Text, View } from 'react-native'
import { Movie } from '../../../core/entities/movie.entity'
import { ScrollView } from 'react-native-gesture-handler';
import { MoviePoster } from './MoviePoster';

interface Props {
    movies: Movie[];
    height?: number;
    title?: string;
}

export const PosterCarousel = ({height = 440, movies, title} : Props) => {
  return (
    <View style={{height: title ? 460 : 440}}>
        {
            title && 
            <Text style={{
                fontSize: 30,
                fontWeight: '300',
                marginLeft: 10,
                marginBottom: 10,
            }}>
                {title}
            </Text>
        }
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}>
        {
            movies.map(movie => <MoviePoster key={movie.id} movie={movie} />)
        }
        </ScrollView>
    </View>
  )
}
