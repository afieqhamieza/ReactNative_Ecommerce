import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AppLoading } from 'expo';
import { MaterialIcons } from '@expo/vector-icons';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, StackRouter } from 'react-navigation';

export default function Header({ navigation }) {
    const goToCart = () => {
        navigation.navigate('Checkout')
    } 

    return (

        <View style={styles.header}>
            <View>
                <Text style={styles.headerText}>ONESIZE</Text>
            </View>

            <TouchableOpacity style={styles.headerCart} onPress={goToCart}>
                <MaterialIcons name='shopping-bag' size={25} color={'#220901'} />
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    header: {
        height: 120,
        backgroundColor: '#f7f7ff',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 3,

    },

    headerCart: {
        marginLeft: 60,
        marginTop: 40,
    },

    headerText: {
        fontSize: 20,
        marginTop: 40,
        marginLeft: '40%',
        fontWeight: '200',
        color: '#292929',
        letterSpacing: 10,
    },
});
