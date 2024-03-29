import React from 'react';
import { TouchableOpacity, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function LinkWithIcon ({ url, iconName, iconSize, iconColor }){
  const handlePress = () => {
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={{ marginHorizontal: 10 }}>
      <FontAwesome name={iconName} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
};
