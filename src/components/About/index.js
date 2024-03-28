import * as React from 'react';
import { Text, View, StyleSheet, Button, Linking, Platform} from 'react-native';

export default function SingerDetails ({ route, navigation }) {
  const {singer} = route.params;
  
  const mapUrl = Platform.select({
   ios: `maps:0,0?q=${singer.geo.lat},${singer.geo.lng}`,
   android: `geo:0,0?q=${singer.geo.lat},${singer.geo.lng}`
  });

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.contactName}>{singer.name}</Text>
        <Text style={styles.contactDetails}>E-mail: {singer.email}</Text>
        <Text style={styles.contactDetails}>Telefone: {singer.phone}</Text>
      </View>
      <View style={styles.button} >
          <Button onPress={() => Linking.openURL(`mailto:${singer.email}`) }
            title="Enviar E-mail" />
        </View>
        <View style={styles.button} >
        <Button onPress={() => Linking.openURL(`tel:${singer.phone}`) }
          title="Ligar" />
        </View>
        <View style={styles.button} >
        <Button onPress={() => Linking.openURL(mapUrl) }
          title="Localizar" />
        </View>
      <View style={styles.button} >
        <Button title="Voltar" onPress={() => navigation.navigate('SingerList')} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
    height: 44,
  },
  contactDetails: {
    fontSize: 16,
    height: 44,
  },
  button: {
    padding: 15
  }
});