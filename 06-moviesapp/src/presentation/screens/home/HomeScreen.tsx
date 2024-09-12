import React from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useMovies} from '../../hooks/useMovies';
import { PosterCarousel } from '../../components/movies/PosterCarousel';
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel';
import { Loading } from '../../components/shared/Loading';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage} = useMovies();

  if (isLoading) {
    return (
      <Loading />
    );
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 30}}>

        {/* Principal */}
        <PosterCarousel movies={nowPlaying} title='En cartelera' />

        {/* Populares */}
        <HorizontalCarousel movies={popular} title='Populares' loadNextPage={popularNextPage} />

        {/* Mayor votación */}
        <HorizontalCarousel movies={topRated} title='Mayor votación' />

        {/* Próximos estrenos */}
        <HorizontalCarousel movies={upcoming} title='Próximos estrenos' />
      </View>
    </ScrollView>
  );
};
