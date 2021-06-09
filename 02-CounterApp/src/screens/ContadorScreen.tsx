import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {

    const [contador, setContador] = useState(10)


    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Contador: {contador}
            </Text>

            <Fab
                number="+1"
                onPress={() => setContador(contador + 1)}
            />

            <Fab
                number="-1"
                position="bl"
                onPress={() => setContador(contador - 1)}
            />

        </View>
    )
}




const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        top: -15
    }
})