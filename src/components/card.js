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
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 3,

        marginHorizontal: 4,
        marginVertical: 6,

    },

    cardContent: {
        marginHorizontal: 18,
        marginVertical: 20,
    },
});