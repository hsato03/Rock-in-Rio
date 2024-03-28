import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Button, ActivityIndicator, ScrollView, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';

import eventosJson from '../../mocks/eventos.json'

import EventCard from './EventCard';

export default function EventList({ navigation }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
        setLoading(false);
    }, 2500);
  }, []);

    return(
      <SafeAreaView style={styles.container}>
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={'#E30613'} />
        </View>
      ) : (
        <View>
        <FlatList
          data={eventosJson}
          renderItem={({item}) =>
          <TouchableOpacity onPress={ () => navigation.navigate('About', {event: item})}>
            <EventCard event={item} />
          </TouchableOpacity>}
        />
        <Button title="Voltar" onPress={() => navigation.navigate('Home')} />
        </View>
      )}
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
   padding: 15,
   backgroundColor: '#000',
   width: '100%',
   height: '100%'
  },
  loading: {
    color: "#E30613",
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})