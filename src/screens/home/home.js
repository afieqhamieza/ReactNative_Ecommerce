import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { AppLoading } from 'expo';
import { MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, StackRouter } from 'react-navigation';

import Card from '/Users/afieqhamieza/Documents/Ecommerce_repo/ReactNative_Ecommerce/myApp/src/components/card.js';

export default function Home({ navigation }) {

    const [product, setProduct] = useState([
        { key: '1', name: 'LAURA NOTCHED COLLAR DRESS CRIMSON', group: 'dresses', imagePath: require('/Users/afieqhamieza/Documents/Ecommerce_repo/ReactNative_Ecommerce/myApp/src/images/dresses/laurra_notched_collar_dress_crimson.png'), price: '$ 207', details: '', inCart: 0},
        { key: '2', name: 'PUFF DENIM DRESS MID BLUE', group: 'dresses', imagePath: require('/Users/afieqhamieza/Documents/Ecommerce_repo/ReactNative_Ecommerce/myApp/src/images/dresses/puff_denim_dress_mid_blue.png'), price: '$ 161', details: '', inCart: 0 },
        { key: '3', name: 'PUFF SLEEVE DENIM DRESS LIGHT BLUE', group: 'dresses', imagePath: require('/Users/afieqhamieza/Documents/Ecommerce_repo/ReactNative_Ecommerce/myApp/src/images/dresses/puff_sleeve_denim_dress_light_blue.png'), price: '$ 161', details: '', inCart: 0 },
        { key: '4', name: 'SERENA SHIRT DRESS RUST', group: 'dresses', imagePath: require('/Users/afieqhamieza/Documents/Ecommerce_repo/ReactNative_Ecommerce/myApp/src/images/dresses/serena_shirt_dress_rust.png'), price: '$ 277', details: '', inCart: 0 },
        { key: '5', name: 'LINEN BLEND CROP JACKET SKY BLUE', group: 'jackets', imagePath: require('/Users/afieqhamieza/Documents/Ecommerce_repo/ReactNative_Ecommerce/myApp/src/images/jackets/linen_blend_crop_jacket_sky_blue.png'), price: '$ 254', details: '', inCart: 0 },
        { key: '6', name: 'RINA LINEN JACKET BEIGE', group: 'jackets', imagePath: require('/Users/afieqhamieza/Documents/Ecommerce_repo/ReactNative_Ecommerce/myApp/src/images/jackets/rina_linen_jacket_beige.png'), price: '$ 301', details: '', inCart: 0 },
        { key: '7', name: 'SERENA STRAIGHT JEAN CREAM', group: 'pants', imagePath: require('/Users/afieqhamieza/Documents/Ecommerce_repo/ReactNative_Ecommerce/myApp/src/images/pants/serena_straight_jean_cream.png'), price: '$ 158', details: '', inCart: 0 },
        { key: '8', name: 'UTILITY BALLOON PANTS BLACK', group: 'pants', imagePath: require('/Users/afieqhamieza/Documents/Ecommerce_repo/ReactNative_Ecommerce/myApp/src/images/pants/utility_balloon_pants_black.png'), price: '$ 280', details: '', inCart: 0 },
        { key: '9', name: 'PEARL BUTTON CARDIGAN BLACK', group: 'tops', imagePath: require('/Users/afieqhamieza/Documents/Ecommerce_repo/ReactNative_Ecommerce/myApp/src/images/tops/pearl_button_cardigan_black.png'), price: '$ 102', details: '', inCart: 0 },
        { key: '10', name: 'PEARL BUTTON CARDIGAN BLUE', group: 'tops', imagePath: require('/Users/afieqhamieza/Documents/Ecommerce_repo/ReactNative_Ecommerce/myApp/src/images/tops/pearl_button_cardigan_blue.png'), price: '$ 117', details: '', inCart: 0 },
    ]);

    

    const goToDetails = (item_in) => {
        console.log(item_in)
        navigation.navigate('Details', {
            item_in
        })
        // navigation.navigate('details')
    }

    const goToCart = (idTest) => {
        console.log(idTest)
        navigation.navigate('Checkout')
    } 

    const addToCartButtonClicked = (item_in) => {
        console.log(item_in.name)
        // let temp = item_in.name + ' is added to your cart';
        Alert.alert('This item is added to your cart');
        // navigation.navigate('details')
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.productGroupHeader}>
                <Text style={styles.productGroupHeaderText}>DRESSES</Text>

                <MaterialIcons name='circle' size={5} />

                <Text style={styles.productGroupHeaderText}>JACKETS</Text>

                <MaterialIcons name='circle' size={5} />

                <Text style={styles.productGroupHeaderText}>PANTS</Text>

                <MaterialIcons name='circle' size={5} />

                <Text style={styles.productGroupHeaderText}>TOPS</Text>
            </View>


            <FlatList
                numColumns={2}
                data={product}
                renderItem={({ item }) => (
                    <View>
                        <Card>
                            <Image
                                style={styles.productImage}
                                source={item.imagePath}
                            />

                            <TouchableOpacity onPress={(goToDetails)}>
                                <Text style={styles.productName}>{item.name}</Text>
                            </TouchableOpacity>

                            <View style={styles.priceAndPlus}>
                                <Text style={styles.productPrice}>{item.price}</Text>

                                <TouchableOpacity onPress={() => addToCartButtonClicked(item)}>
                                    <MaterialIcons name='add-circle' size={30} color={'#767b91'} style={styles.addToCartIcon} />
                                </TouchableOpacity>
                            </View>
                        </Card>
                    </View>
                )}
            />


        </ScrollView>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 10,
        borderRadius: 20,
    },

    productGroupHeader: {
        flexDirection: 'row',
        marginBottom: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        justifyContent: "center",
        alignItems: "center",
    },

    productGroupHeaderText: {
        padding: '4.3%',
        fontWeight: 'bold',
        letterSpacing: 1.5,
    },

    productName: {
        height: 90,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    priceAndPlus: {
        flexDirection: 'row',
        alignItems: "center",
    },

    productPrice: {
        padding: 10,
        fontWeight: '800',
    },

    addToCartIcon: {
        marginLeft: 60,
    },

    productImage: {
        width: '100%',
        height: 240,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
