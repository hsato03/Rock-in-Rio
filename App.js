import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Home from './src/pages/Home';
import About from './src/pages/About';
import AllEventsList from './src/pages/AllEventsList';
import FavoriteEventsList from './src/pages/FavoriteEventsList';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerRoutes() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const test = await AsyncStorage.getItem('favorites');
      setFavorites(JSON.parse(test));
      console.log(test)
    }
    setTimeout(fetchData, 1000);
    
  }, [favorites]);

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
        drawerActiveBackgroundColor: '#e30613ab',
      }}
    >
      <Drawer.Screen
        name="Lista de todos os eventos"
        options={{
          drawerLabel: 'Todos eventos',
          // drawerIcon: () => (
          //   <Image
          //     source={require('../assets/dasdas.png')}
          //     style={{ width: 24, height: 24 }}
          //   />
          // ),
          headerTransparent: true,
          title: '',
        }}
      >
        {(props) => (
          <AllEventsList {...props} setFavorites={setFavorites} />
        )}
      </Drawer.Screen>
      <Drawer.Screen
        name="Lista dos eventos favoritos"
        options={{
          drawerLabel: 'Meus favoritos',
          // drawerIcon: () => (
          //   <Image
          //     source={require('../assets/dasdas.png')}
          //     style={{ width: 24, height: 24 }}
          //   />
          // ),
          headerTransparent: true,
          title: '',
        }}
      >
        {(props) => (
          <FavoriteEventsList {...props} setFavorites={setFavorites} />
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
