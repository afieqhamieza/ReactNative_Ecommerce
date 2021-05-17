import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

export default function Card(props){
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                { props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 180,
        height: 400,
        borderRadius: 20,
        elevation: 3,
        backgroundColor: '#fff',

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,

        marginHorizontal: 7,
        marginVertical: 6,

    },

    cardContent: {
        marginHorizontal: 18,
        marginVertical: 20,
    },
});