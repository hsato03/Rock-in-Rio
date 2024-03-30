import React, { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function FavoriteButton({ event, setFavorites }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    checkIsFavorite();
  }, [event]);

  const checkIsFavorite = async () => {
    const favorites = await getFavoriteEvents();
    setIsFavorite(favorites.includes(event.id));
  };

  const toggleFavorite = async () => {
    if (isFavorite) {
      await unfavoriteEvent(event.id);
    } else {
      await favoriteEvent(event.id);
    }
    const favorites = await getFavoriteEvents();
    setFavorites(favorites);
    setIsFavorite(!isFavorite);
  };

  const favoriteEvent = async (eventId) => {
    try {
      const favorites = await getFavoriteEvents();
      favorites.push(eventId);

      await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
    } catch (error) {
      console.error('Erro ao favoritar evento:', error);
    }
  };

  const unfavoriteEvent = async (eventId) => {
    try {
      const favorites = await getFavoriteEvents();
      const updatedFavorites = favorites.filter((id) => id !== eventId);

      await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } catch (error) {
      console.error('Erro ao desfavoritar evento: ', error);
    }
  };

  const getFavoriteEvents = async () => {
    try {
      const favorites = await AsyncStorage.getItem('favorites');
      return favorites ? JSON.parse(favorites) : [];
    } catch (error) {
      console.error('Erro ao recuperar eventos favoritos: ', error);
      return [];
    }
  };

  return (
    <AntDesign name={isFavorite ? 'star' : 'staro'} size={26} color="#E30613" onPress={toggleFavorite} />
  );
};
