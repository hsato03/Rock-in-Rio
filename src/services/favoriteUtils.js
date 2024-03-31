import AsyncStorage from '@react-native-async-storage/async-storage';

export async function favoriteEvent(eventId) {
  try {
    const favorites = await getFavoriteEvents();
    favorites.push(eventId);
    
    await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
  } catch (error) {
    console.error('Erro ao favoritar evento:', error);
  }
};

export async function unfavoriteEvent(eventId) {
  try {
    const favorites = await getFavoriteEvents();
    const updatedFavorites = favorites.filter((id) => id !== eventId);
    console.log(updatedFavorites);

    await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  } catch (error) {
    console.error('Erro ao desfavoritar evento: ', error);
  }
};

export async function getFavoriteEvents() {
  try {
    const favorites = await AsyncStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error('Erro ao recuperar eventos favoritos: ', error);
    return [];
  }
};
