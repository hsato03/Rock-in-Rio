import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, Linking } from 'react-native';

export default function EventCard({ event }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} 
                source={{uri: event.images[0]}} />
            <View style={styles.containerInfo}>
                <View style={styles.info}>
                    <Text style={styles.title}>{event.artista}</Text>
                    <Text style={styles.infoText}>{event.data}</Text>
                </View>
                <TouchableOpacity style={styles.button} 
                    onPress={() => Linking.openURL(event.comprarIngressoUrl)}>
                    <Text style={styles.textButton}>Comprar ingressos</Text>
                </TouchableOpacity>
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
        fontWeight: "bold",
        lineHeight: 24,
        fontSize: 18,
        marginBottom: 8
    },
    infoText: {
        color: "#737380",
        lineHeight: 20,
        fontSize: 14,
    },
    info: {
        gap: 6,
        marginBottom: 16
    },
    image: {
        margin: 0,
        width: 200,
        height: 150,
        resizeMode: 'cover',
        borderRadius: 6,
    },
    containerInfo: {
        height: 150,
        width: 150,
        justifyContent: 'space-around',
        alignItems: 'flex-en'
    },
    button: {
        borderRadius: 8,
        backgroundColor: '#E30613',
        shadowColor: 'rgba(0, 0, 0, 0.12)',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4,
        padding: 13,
        margin: 15,
        width: '100%',
        maxWidth: 150,
        alignSelf: 'center',
      },
    textButton: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '600',
    },
})