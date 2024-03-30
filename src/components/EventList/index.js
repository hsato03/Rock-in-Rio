import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import EventCard from './EventCard';

export default function EventList({ navigation, events, setFavorites }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.gambiarra}></View>
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={'#E30613'} />
        </View>
      ) : (
        <View>
          <FlatList
            data={events}
            keyExtractor={(event) => event.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('About', { event: item })}
              >
                <EventCard event={item} setFavorites={setFavorites} />
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    width: '100%',
    height: '100%',
  },
  loading: {
    color: '#E30613',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gambiarra: {
    height: 50
  }
});
