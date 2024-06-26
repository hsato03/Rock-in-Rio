import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native';
import YouTubePlayer from 'react-native-youtube-iframe';
import MapView, { Marker } from 'react-native-maps';
import { AntDesign } from '@expo/vector-icons';

import BuyTickets from '../../components/BuyTickets';
import LinkWithIcon from '../../components/LinkWithIcon';
import { formatDate } from '../../services/dateUtils';

export default function About ({ navigation, route }) {
  const {event} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent} style={{ width: '100%' }}>
        <View style={styles.back}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={26} color="#E30613" />
          </TouchableOpacity>
        </View>
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

        <View style={styles.scheduleContainer}>
          <Text style={styles.subtitle}>Quando e onde acontecerá?</Text>
          <Text style={styles.scheduleText}>{event.endereco}</Text>
          <Text style={styles.scheduleDate}>{formatDate(event.data)}</Text>
          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: event.geo.lat,
                longitude: event.geo.lng,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker
                coordinate={{ latitude: event.geo.lat, longitude: event.geo.lng }}
              />
            </MapView>
          </View>
        </View>

        <View style={styles.pricingContainer}>
          <Text style={styles.subtitle}>Valores</Text>
          <Text style={styles.pricingText}>Inteira: <Text style={styles.price}>R$ {event.valor.inteira}</Text></Text> 
          <Text style={styles.pricingText}>Meia-Entrada: <Text style={styles.price}>R$ {event.valor.meiaEntrada}</Text></Text>
          <BuyTickets url={event.comprarIngressoUrl} />
        </View>

        <View>
          <Text style={styles.subtitle}>Siga {event.artista}</Text>
          <View style={styles.iconContainer}>
            {
              Object.keys(event.redesSociais).map((key, index) => <LinkWithIcon
                key={index}
                url={`${event.redesSociais[key]}`}
                iconName={`${key}`}
                iconSize={30}
                iconColor="#FFF"
              />
              )
            }
          </View>
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
    fontSize: 28,
    fontStyle: 'italic',
    marginBottom: 8,
    alignSelf: 'center',
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
  pricingContainer: {
    marginBottom: 18, 
    alignItems: 'center'
  },
  pricingText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold'
  },
  price: {
    fontSize: 18,
    fontStyle: 'italic',
  },
  scheduleContainer: {
    alignItems: 'center',
    width: '95%',
    marginBottom: 18,
  },
  scheduleText: {
    fontSize: 16,
    color: '#FFF',
    paddingVertical: 8
  },
  scheduleDate: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 16
  },
  mapContainer: {
    width: '90%',
    height: 200,
    marginBottom: 10,
    borderRadius: 6,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  back: {
    position: 'absolute',
    left: 15,
    top: 35
  }
});