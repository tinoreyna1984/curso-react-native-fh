import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'
import { RootStackParams } from '../../navigation/Navigation'
import { useMovie } from '../../hooks/useMovie'
import { MovieHeader } from '../../components/movie/MovieHeader'
import { Loading } from '../../components/shared/Loading'
import { MovieDetails } from '../../components/movie/MovieDetails';
import { ScrollView } from 'react-native-gesture-handler'

interface Props extends StackScreenProps<RootStackParams, 'Details'>{};

export const DetailsScreen = ({route} : Props) => {

  const { movieId } = route.params;
  const {isLoading, movie, cast = []} = useMovie(movieId);

  if(isLoading)
    return (<Loading />);
  
  return (
    <ScrollView>
        <MovieHeader poster={movie!.poster} title={movie!.title} originalTitle={movie!.originalTitle} />
        <MovieDetails movie={movie!} cast={cast} />
    </ScrollView>
  )
}
