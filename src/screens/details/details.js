import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Button, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, StackRouter } from 'react-navigation';

import Tab from '/Users/afieqhamieza/Documents/Ecommerce_repo/ReactNative_Ecommerce/myApp/src/components/tabs.js';

export default function Details({ navigation }) {

    const goToCart = (idTest) => {
        // console.log(idTest)
        navigation.navigate('Checkout')
    } 

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.productName}>LAURA NOTCHED COLLAR DRESS CRIMSON</Text>

            <View style={{ borderBottomWidth: 0.2, }} />

            <View style={styles.priceAndButton}>
                <Text style={styles.productPrice}>$ 207</Text>

                <TouchableOpacity style={styles.addToCartButtonBackground} onPress={goToCart}>
                    <Text style={styles.addToCartButtonText}>ADD TO CART</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.addShadow}>
                <Image
                    style={styles.productImage}
                    source={require('/Users/afieqhamieza/Documents/Ecommerce_repo/ReactNative_Ecommerce/myApp/src/images/dresses/laurra_notched_collar_dress_crimson.png')}
                />
            </View>


            <View >
                <Text style={styles.infoSubheader}>INFORMATION</Text>
                <Text style={styles.infoDetails}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>

                <View style={{ borderBottomWidth: 0.2, paddingVertical: 20, }} />

                <Text style={styles.infoSubheader}>FABRIC & STYLING</Text>
                <Text style={styles.infoDetails}>
                    {`- senectus et netus et malesuada
                    \n- facilisi etiam dignissim diam quis enim
                    \n- porttitor massa id neque aliquam vestibulum`}                </Text>

                <View style={{ borderBottomWidth: 0.2, paddingVertical: 20, }} />

                <Text style={styles.infoSubheader}>DELIVERY & RETURNS</Text>
                <Text style={styles.infoDetails}>
                    {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    \nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    `}
                </Text>

                <View style={{ borderBottomWidth: 0.2, marginBottom: 100}} />
            </View>


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
        // borderRadius: 20,
    },

    productName: {
        letterSpacing: 2,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },

    priceAndButton: {
        flexDirection: 'row', 
        alignItems: 'center', 
        marginVertical: 30,
    },

    productImage: {
        width: 350,
        height: 550,
        borderRadius: 20,
        marginBottom: 100,
        marginTop: 10,
        alignSelf: 'center',
    },

    productPrice: {
        // marginHorizontal: 30,
    },

    addToCartButtonBackground: {
        backgroundColor: '#000',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 5,
        alignItems: 'center',
        alignSelf: 'center',
        marginLeft: 150,
    },

    addToCartButtonText: {
        color: '#fff',
        letterSpacing: 3,
    },

    addShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },

    infoSubheader: {
        marginTop: 40, 
        marginBottom: 20, 
        fontWeight: '700', 
        letterSpacing: 2, 
    },

    infoDetails: { 
        color: '#6c757d', 
        fontWeight: '500' 
    },


})