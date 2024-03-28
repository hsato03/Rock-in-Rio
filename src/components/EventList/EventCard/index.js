import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, Linking } from 'react-native';

export default function EventCard({ event }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} 
                source={{uri: event.images[0]}} />
            <View style={styles.containerInformacoes}>
                <View style={styles.informacoes}>
                    <Text style={styles.title}>{event.artista}</Text>
                    <Text style={styles.informacoesTexto}>{event.data}</Text>
                </View>
                <Text style={styles.ingressos}
                        onPress={() => Linking.openURL(event.comprarIngressoUrl)}>Comprar ingressos</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F6F6F6',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 10,
        marginBottom: 16,
        width: '95%',
        alignSelf: 'center',
        borderRadius: 6,
    },
    title: {
        color: "#E30613",
        fontWeight: "600",
        lineHeight: 24,
        fontSize: 18,
        marginBottom: 8
    },
    informacoesTexto: {
        color: "#737380",
        lineHeight: 20,
        fontSize: 14,
    },
    informacoes: {
        gap: 6,
        fontFamily: 'PoppinsRegular',
        marginBottom: 16
    },
    image: {
        margin: 0,
        width: 200,
        height: 150,
        resizeMode: 'cover',
        borderRadius: 6,
    },
    containerInformacoes: {
        height: 150,
        width: 150,
        justifyContent: 'space-around',
        alignItems: 'flex-en'
    }
})