import React from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function FavoriteButton({ event, isFavorite, toggleFavorite }) {
  return (
    <AntDesign name={isFavorite ? 'star' : 'staro'} size={26} color="#E30613" onPress={() => toggleFavorite(event.id)} />
  );
};
