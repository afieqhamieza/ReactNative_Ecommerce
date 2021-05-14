import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { MaterialIcons } from '@expo/vector-icons';

export default class Header extends React.Component {
    render() {
        return (

            
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.logo}>S H O P A R A</Text>
                    <MaterialIcons name='shopping-cart' size={20} color={'#220901'} style={styles.cart} />
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    header: {
        height: 120,
        marginTop: 0,
        backgroundColor: '#f7f7ff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
    },

    cart: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 40,
        left: 20,
    },

    logo: {
        fontSize: 20,
        marginLeft: 10,
        marginTop: 40,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: '#292929',
    },
});
