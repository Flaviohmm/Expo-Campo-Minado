import React from 'react'
import { View, StyleSheet } from 'react-native'
import params from '../params'

export default props => {
    const styleField = [styles.field]
    // Outros Estilos Aqui
    if (styleField.length === 1) styleField.push(styles.regular)

    return (
        <View style={styleField}>

        </View>
    )
}

const styles = StyleSheet.create({
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize
    },
    regular: {
        backgroundColor: '#027EFA',
        borderLeftColor: '#09B2E3',
        borderTopColor: '#09B2E3',
        borderRightColor: '#0B3DE6',
        borderBottomColor: '#0B3DE6'
    }
})