import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container}>

            <Text style={styles.title}> Box Object Model </Text>



        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red"
    },
    title: {
        paddingHorizontal: 20,
        borderWidth: 2,
        marginHorizontal: 20,
        marginVertical: 15,
        textAlign: 'center',
        fontSize: 20
    }
})