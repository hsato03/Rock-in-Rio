import eventosJson from '../mocks/eventos.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { sortByDateTime } from './dateUtils';

export const loadEvents = () => {
    eventosJson.sort(sortByDateTime);
    return eventosJson;
}

export const loadFavoriteEvents = async () => {
    try {
        const favoriteEventsId = await AsyncStorage.getItem('favorites');
        return loadEvents().filter((event) => favoriteEventsId.includes(event.id));
    } catch (error) {
        console.error('Erro ao carregar eventos favoritos: ', error);
        return [];
    }
}
