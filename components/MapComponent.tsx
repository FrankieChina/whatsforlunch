import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { IconSymbol } from '@/components/ui/icon-symbol';

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
      initialRegion={{
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
    >
      <Marker coordinate={{latitude: location.coords.latitude, longitude: location.coords.longitude}}>
        <View style={styles.centerPin}>
          <IconSymbol name="person.fill" size={16} color="#FFFFFF" />
        </View>
      </Marker>
    </MapView>
  );
}

const styles = StyleSheet.create({
  centerPin: {
    backgroundColor: '#D95B00',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#D95B00',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
});
