import React, { useEffect } from 'react';
import {StyleSheet, View} from 'react-native';
import { Map } from '../../components/maps/Map';
import { useLocationStore } from '../../store/location/useLocationStore';
import { LoadingScreen } from '../loading/LoadingScreen';

export const MapScreen = () => {
  const {lastKnownLocation, getLocation}  = useLocationStore();

  useEffect(() => {
    if(lastKnownLocation === null){
      getLocation();
    }
  }, [])
  

  if(lastKnownLocation === null){
    return (<LoadingScreen />);
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Map initialLocation={lastKnownLocation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
