import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function EventCard({ event }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: event.images[0] }} />
      <View style={styles.containerInfo}>
        <View style={styles.info}>
          <Text style={styles.title}>{event.artista}</Text>
          <Text style={styles.infoText}>{event.data}</Text>
          <Text style={styles.infoText}>{event.endereco}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F6F6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginBottom: 16,
    width: '95%',
    alignSelf: 'center',
    borderRadius: 6,
  },
  title: {
    color: '#E30613',
    fontWeight: 'bold',
    lineHeight: 24,
    fontSize: 18,
    marginBottom: 8,
  },
  infoText: {
    color: '#737380',
    lineHeight: 20,
    fontSize: 14,
  },
  info: {
    gap: 6,
    marginBottom: 16,
  },
  image: {
    margin: 0,
    width: 200,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 6,
  },
  containerInfo: {
    height: 150,
    width: 150,
    justifyContent: 'space-around',
  },
});
