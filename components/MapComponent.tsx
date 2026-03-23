import React from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

interface MapComponentProps {
  location: {
    coords: {
      latitude: number;
      longitude: number;
    }
  } | null;
}

export default function MapComponent({ location }: MapComponentProps) {
  if (!location) return null;

  return (
    <MapView 
      style={StyleSheet.absoluteFillObject}
      showsUserLocation={true}
      followsUserLocation={true}
      initialRegion={{
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.02, // zoomed in slightly closer for city tracking
        longitudeDelta: 0.02,
      }}
    />
  );
}

const styles = StyleSheet.create({});
