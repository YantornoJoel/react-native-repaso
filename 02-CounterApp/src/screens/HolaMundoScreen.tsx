import React from 'react'
import { Text, View } from 'react-native'


export const HolaMundoScreen = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#f2f2f2',
            justifyContent: 'center'
          }}>
            <Text style={{
              fontSize: 45,
              textAlign: 'center'
            }}>
              Holaa
            </Text>
          </View>
    )
}
