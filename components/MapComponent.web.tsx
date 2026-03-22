import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MapComponent({ location }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Map is not supported on Web.</Text>
      <Text style={styles.subtext}>Please use Expo Go on your phone.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3EFE9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#1F2937',
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 4,
  },
  subtext: {
    color: '#6B7280',
    fontSize: 12,
  }
});
