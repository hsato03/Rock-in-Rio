import * as React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, BackHandler, SafeAreaView, StatusBar } from 'react-native';

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.areaView}>
        <StatusBar />
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../../../assets/logo.png')} />
      </View>
      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate('EventList')}>
          <Text style={styles.textButton}>Ver Cantores</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <TouchableOpacity onPress={() => BackHandler.exitApp() }>
          <Text style={styles.textButton}>Sair</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  areaView: {
    backgroundColor: '#000',
    width: '100%',
    height: '100%'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  logo: {
    width: '100%',
    resizeMode: 'contain',
  },
  title: {
    padding: 30,
    fontSize: 18,
  },
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
    elevation: 4, // Adiciona a elevação para sombra no Android
    padding: 13,
    margin: 15,
    width: 200,
    alignSelf: 'center',
  },
  textButton: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});
