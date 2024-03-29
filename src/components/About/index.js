import * as React from 'react';
import { Text, View, StyleSheet, Button, Linking, Platform, SafeAreaView, Image, ScrollView, Dimensions } from 'react-native';
import YouTubePlayer from 'react-native-youtube-iframe';

export default function About ({ route, navigation }) {
  const {event} = route.params;
  
  const mapUrl = Platform.select({
   ios: `maps:0,0?q=${event.geo.lat},${event.geo.lng}`,
   android: `geo:0,0?q=${event.geo.lat},${event.geo.lng}`
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent} style={{ width: '100%' }}>
        <View>
          <Text style={styles.title}>{event.artista}</Text>
        </View>
        <Image style={styles.image} source={{uri: event.images[1]}} />
        <View style={styles.summaryContainer}>
          {
            event.resumoArtista.map((resumo, index) => <Text key={index} style={styles.summary}>{resumo}</Text>)
          }
        </View>

        <View style={styles.videoContainer}>
          <YouTubePlayer
            height={300}
            width={'100%'}
            play={false}
            videoId={event.videoId}
            webViewProps={{
              allowsFullscreenVideo: true,
              javaScriptEnabled: true,
              domStorageEnabled: true,
            }}
          />
        </View>

        <View style={styles.pricingContainer}>
          <Text style={styles.subtitle}>Valores</Text>
          <Text style={styles.pricingText}>Inteira: <Text style={styles.price}>R$ {event.valor.inteira}</Text></Text> 
          <Text style={styles.pricingText}>Meia-Entrada: <Text style={styles.price}>R$ {event.valor.meiaEntrada}</Text></Text>
        </View>

        <View style={styles.button} >
          <Button onPress={() => Linking.openURL(mapUrl) }
            title="Localizar" />
        </View>

        <View style={styles.button} >
          <Button title="Voltar" onPress={() => navigation.navigate('EventList')} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#000',
    width: '100%',
    height: '100%',
    alignItems: 'center',
   },
   scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 20,
   },
   title: {
    color: "#E30613",
    fontWeight: "bold",
    fontSize: 42,
    fontStyle: 'italic',
    marginBottom: 8,
    alignSelf: 'center',
    marginVertical: 20,
  },
  subtitle: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 32,
    fontStyle: 'italic',
    marginBottom: 8,
    alignSelf: 'center',
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
  },
  image: {
    width: '90%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 6,
    marginVertical: 20,
  },
  summaryContainer: {
    width: '90%',
    textAlign: 'center'
  },
  summary: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
    margin: 15
  },
  videoContainer: {
    marginTop: 20,
    flex: 1,
    height: 250,
    width: '95%'
  },
  pricingText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold'
  },
  price: {
    fontSize: 18,
    fontStyle: 'italic',
  }
});