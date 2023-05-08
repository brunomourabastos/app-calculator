import React from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableHighlight, StatusBar } from 'react-native';

export default CalcButton = ({ label, double, triple, operation, onClick }) => {
    const stylesButton = [styles.button]

    double && stylesButton.push(styles.doubleButton)
    triple && stylesButton.push(styles.tripleButton)
    operation && stylesButton.push(styles.operationButton)

    return (
        <TouchableHighlight onPress={() => onClick(label)} >
            <Text style={stylesButton}>{label}</Text>
        </TouchableHighlight>
)};

const styles = StyleSheet.create({
    button: { 
        fontSize: 40,
        height: Dimensions.get('window').width/4,
        width: Dimensions.get('window').width/4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
    },
    operationButton: {
        backgroundColor: '#fa8231',
        color: '#fff'
    },
    doubleButton: {
        width: (Dimensions.get('window').width/4)*2,
    },
    tripleButton: {
        width: (Dimensions.get('window').width/4)*3
    }
})