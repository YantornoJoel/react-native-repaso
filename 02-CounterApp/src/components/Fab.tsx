import React from 'react'
import { Text, View, StyleSheet, TouchableNativeFeedback, Platform, TouchableOpacity } from 'react-native';


interface Props {
    number: string;
    position?: 'br' | 'bl';
    onPress: () => void;
}

export const Fab = ({ number, onPress, position = 'br' }: Props) => {

    const ios = () => {

        return (
            <TouchableOpacity
                activeOpacity={ 0.8 }
                onPress={onPress}
                style={[
                    styles.fabLocationBR,
                    (position === 'bl') ? styles.left : styles.right
                ]}
            >

                <View style={styles.fab}>
                    <Text style={styles.fabText}> {number} </Text>
                </View>
            </TouchableOpacity>
        )
    }


    const android = () => {

        return (
            <View
                style={[
                    styles.fabLocationBR,
                    (position === 'bl') ? styles.left : styles.right
                ]}
            >
                <TouchableNativeFeedback
                    onPress={onPress}
                    background={TouchableNativeFeedback.Ripple('#28425B', true, 30)}
                >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}> {number} </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }


    return( Platform.OS === 'ios' ) ? ios() : android()

}


const styles = StyleSheet.create({
    fabLocationBR: {
        position: 'absolute',
        bottom: 30,
    },
    right: {
        right: 30
    },
    left: {
        left: 30
    },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    fabText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})
