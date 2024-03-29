import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Linking } from 'react-native';

export default function BuyTickets({ url }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => Linking.openURL(url)}
    >
      <Text style={styles.textButton}>Comprar ingressos</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    backgroundColor: '#E30613',
    shadowColor: 'rgba(0, 0, 0, 0.12)',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
    padding: 13,
    margin: 15,
    width: '100%',
    maxWidth: 200,
    alignSelf: 'center',
  },
  textButton: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});
