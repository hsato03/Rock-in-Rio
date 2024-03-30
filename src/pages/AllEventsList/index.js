import React, { useEffect, useState } from 'react';
import EventList from '../../components/EventList';

import { loadEvents } from '../../services/carregaDados';

export default function AllEventsList({ navigation,setFavorites }) {
  return (
    <EventList navigation={navigation} events={loadEvents()} setFavorites={setFavorites} />
  );
}
