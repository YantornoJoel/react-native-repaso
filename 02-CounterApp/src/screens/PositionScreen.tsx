import React from 'react'
import { View, StyleSheet } from 'react-native';



export const PositionScreen = () => {
    return (
        <View style={styles.container}>

            <View style={styles.cajaMorada} />
            <View style={styles.cajaNaranja} />
            <View style={styles.cajaVerde} />

        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: 300,
        height: 400,
        backgroundColor: '#28C4D9'
    },
    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        right: 10,
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: '#F0A23b',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 10,
        right: 10
    },
    cajaVerde: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom:0,
        // ...StyleSheet.absoluteFillObject - Lo que hace es posicion absoluta y si no tiene height y width, ocupa toda la pantalla
    }
});