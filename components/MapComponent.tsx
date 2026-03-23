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
  restaurants?: Array<{
    id: string;
    name: string;
    latitude: number;
    longitude: number;
    tags: string[];
  }>;
}

export default function MapComponent({ location, restaurants = [] }: MapComponentProps) {
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
    >
      {restaurants.map(r => (
        <Marker 
          key={r.id} 
          coordinate={{latitude: r.latitude, longitude: r.longitude}} 
          title={r.name} 
          description={r.tags.join(', ')}
        >
           <View style={styles.restaurantPin}>
             <IconSymbol name="fork.knife" size={12} color="#FFFFFF" />
           </View>
        </Marker>
      ))}
    </MapView>
  );
}

const styles = StyleSheet.create({
  restaurantPin: {
    backgroundColor: '#10B981',
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
});
