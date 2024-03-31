import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import Home from './src/pages/Home';
import About from './src/pages/About';
import AllEventsList from './src/pages/AllEventsList';
import FavoriteEventsList from './src/pages/FavoriteEventsList';

import { loadEvents, loadFavoriteEvents } from './src/services/loadData';
import { favoriteEvent, unfavoriteEvent } from './src/services/favoriteUtils';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerRoutes() {
  const [allEvents, setEvents] = useState(loadEvents());
  const [favoriteEvents, setFavoriteEvents] = useState([]);

  async function toggleFavorite(eventId) {
    if (favoriteEvents.map((event) => event.id).includes(eventId)) {
      await unfavoriteEvent(eventId);
    } else {
      await favoriteEvent(eventId);
    }
    setFavoriteEvents(await loadFavoriteEvents());
  }

  useEffect(() => {
    loadFavoriteEvents().then(setFavoriteEvents);
  }, []);

  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: '#E30613',
        drawerStyle: {
          backgroundColor: '#000',
        },
        drawerLabelStyle: {
          color: '#FFF',
          fontSize: 16,
          fontWeight: '400',
          lineHeight: 20,
        },
        swipeEnabled: false,
        drawerActiveBackgroundColor: '#e30613ab',
      }}
    >
      <Drawer.Screen
        name="Lista de todos os eventos"
        options={{
          drawerLabel: 'Todos eventos',
          drawerIcon: () => <FontAwesome name="list" size={24} color="white" />,
          headerTransparent: true,
          title: '',
        }}
      >
        {(props) => (
          <AllEventsList
            {...props}
            events={allEvents}
            favoriteEventsId={favoriteEvents.map(event => event.id)}
            toggleFavorite={toggleFavorite}
          />
        )}
      </Drawer.Screen>
      <Drawer.Screen
        name="Lista dos eventos favoritos"
        options={{
          drawerLabel: 'Meus favoritos',
          drawerIcon: () => (
            <AntDesign name="pushpin" size={24} color="white" />
          ),
          headerTransparent: true,
          title: '',
        }}
      >
        {(props) => (
          <FavoriteEventsList
            {...props}
            events={favoriteEvents}
            favoriteEventsId={favoriteEvents.map(event => event.id)}
            toggleFavorite={toggleFavorite}
          />
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Drawer" component={DrawerRoutes} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
