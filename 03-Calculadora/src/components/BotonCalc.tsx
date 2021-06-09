import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../themes/appThemes';


interface Props {
    texto: string;
    color?: string;
    btn0?: boolean;
    accion: (numeroTexto: string) => void
}

export const BotonCalc = ({ texto, color = '#2D2D2D', btn0 = false, accion }: Props) => {
    return (
        <TouchableOpacity
            onPress={() => accion(texto)}
        >
            <View style={{
                ...styles.boton,
                backgroundColor: color,
                width: (btn0) ? 180 : 80
            }}>
                <Text style={{
                    ...styles.botonTexto,
                    color: (color === '#9B9B9B') ? 'black' : 'white'
                }}>
                    {texto}
                </Text>
            </View >
        </TouchableOpacity>
    )
}
