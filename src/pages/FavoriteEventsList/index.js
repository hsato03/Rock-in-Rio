import React, { useEffect, useState } from 'react';
import EventList from '../../components/EventList';

import { loadFavoriteEvents } from '../../services/carregaDados';

export default function FavoriteEventsList({ navigation, setFavorites }) {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setEvents(await loadFavoriteEvents());
        }
        setTimeout(fetchData, 1000);
    }, [events]);

    return (
        <EventList navigation={navigation} events={events} setFavorites={setFavorites} />
    );
}