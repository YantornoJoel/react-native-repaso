import React from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native';


const { height, width } = Dimensions.get('window')


export const DimensionesScreen = () => {
    return (
        <View>
            <View style={styles.container} >

                {/* <Text> DimensionesScreen </Text> */}
                <View style={styles.cajaVioleta} />
                <View style={styles.cajaNaranja} />

            </View>

            <Text style={styles.title}> H: {height} - W: { width } </Text>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        width: '100%',
        height: 300
    },
    cajaVioleta: {
        backgroundColor: '#5856D6',
        width: '50%',
        height: '50%'
    },
    cajaNaranja: {
        backgroundColor: '#F0A23B',
        width: '50%',
        height: '50%'
    },
    title: {
        fontSize: 20,

    }
});