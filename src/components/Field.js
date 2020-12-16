import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import params from '../params'
import Mine from './Mine'
import Flag from './Flag'

export default props => {
    const { mined, opened, nearMines, exploded, flagged } = props

    const styleField = [styles.field]
    if (opened) styleField.push(styles.opened)
    if (exploded) styleField.push(styles.exploded)
    if (flagged) styleField.push(styles.flagged)
    if (!opened && !exploded) styleField.push(styles.regular)

    let color = null
    if (nearMines > 0) {
        if (nearMines == 1) color = '#2A28D7'
        if (nearMines == 2) color = '#2B520F'
        if (nearMines == 3) color = '#F9060A'
        if (nearMines == 4) color = '#161643'
        if (nearMines == 5) color = '#41121C'
        if (nearMines == 6) color = '#F221A9'
        if (nearMines >= 7) color = '#451237'
    }

    return (
        <View style={styleField}>
            {!mined && opened && nearMines > 0 ?
                <Text style={[styles.label, { color: color }]}>
                    {nearMines}
                </Text> 
            : false}
            {mined && opened ? <Mine /> : false}
            {flagged && !opened ? <Flag /> : false}
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
    },
    opened: {
        backgroundColor: '#0998E3',
        borderColor: '#0363FA',
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        fontWeight: 'bold',
        fontSize: params.fontSize
    },
    exploded: {
        backgroundColor: 'red',
        borderColor: 'red'
    }
})