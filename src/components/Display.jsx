import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default CalcDisplay = ({value}) => {
    return (
        <View style={ style.display }>
            <Text style={style.displayValue} numberOfLines={1}>{value}</Text>
        </View>
)};

const style = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#00000099'
    },
    displayValue: {
        fontSize: 60,
        color: '#fff'

    }
})