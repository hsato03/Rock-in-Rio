import React from 'react';
import EventList from '../../components/EventList';

export default function AllEventsList({ navigation, events, favoriteEventsId, toggleFavorite }) {
  return (
    <EventList
      navigation={navigation}
      events={events}
      favoriteEventsId={favoriteEventsId}
      toggleFavorite={toggleFavorite}
    />
  );
}
