import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { AppLoading } from 'expo';
import { MaterialIcons } from '@expo/vector-icons';

import Card from '/Users/afieqhamieza/Documents/Ecommerce_repo/ReactNative_Ecommerce/myApp/src/components/card.js';

export default function Home() {

    const [product, setProduct] = useState([
        { key: '1', name: 'LAURA NOTCHED COLLAR DRESS CRIMSON', group: 'dresses', imagePath: require('/Users/afieqhamieza/Documents/Ecommerce_repo/ReactNative_Ecommerce/myApp/src/images/dresses/laurra_notched_collar_dress_crimson.png'), price: '$207', details: '' },
        { key: '2', name: 'PUFF DENIM DRESS MID BLUE', group: 'dresses', imagePath: require('/Users/afieqhamieza/Documents/Ecommerce_repo/ReactNative_Ecommerce/myApp/src/images/dresses/puff_denim_dress_mid_blue.png'), price: '$161', details: '' },
        { key: '3', name: 'PUFF SLEEVE DENIM DRESS LIGHT BLUE', group: 'dresses', imagePath: require('/Users/afieqhamieza/Documents/Ecommerce_repo/ReactNative_Ecommerce/myApp/src/images/dresses/puff_sleeve_denim_dress_light_blue.png'), price: '$161', details: '' },
        { key: '4', name: 'SERENA SHIRT DRESS RUST', group: 'dresses', imagePath: require('/Users/afieqhamieza/Documents/Ecommerce_repo/ReactNative_Ecommerce/myApp/src/images/dresses/serena_shirt_dress_rust.png'), price: '$277', details: '' },
        { key: '5', name: 'LINEN BLEND CROP JACKET SKY BLUE', group: 'jackets', imagePath: require('/Users/afieqhamieza/Documents/Ecommerce_repo/ReactNative_Ecommerce/myApp/src/images/jackets/linen_blend_crop_jacket_sky_blue.png'), price: '$254', details: '' },
        { key: '6', name: 'RINA LINEN JACKET BEIGE', group: 'jackets', imagePath: require('/Users/afieqhamieza/Documents/Ecommerce_repo/ReactNative_Ecommerce/myApp/src/images/jackets/rina_linen_jacket_beige.png'), price: '$301', details: '' },
        { key: '7', name: 'SERENA STRAIGHT JEAN CREAM', group: 'pants', imagePath: require('/Users/afieqhamieza/Documents/Ecommerce_repo/ReactNative_Ecommerce/myApp/src/images/pants/serena_straight_jean_cream.png'), price: '$158', details: '' },
        { key: '8', name: 'UTILITY BALLOON PANTS BLACK', group: 'pants', imagePath: require('/Users/afieqhamieza/Documents/Ecommerce_repo/ReactNative_Ecommerce/myApp/src/images/pants/utility_balloon_pants_black.png'), price: '$280', details: '' },
        { key: '9', name: 'PEARL BUTTON CARDIGAN BLACK', group: 'tops', imagePath: require('/Users/afieqhamieza/Documents/Ecommerce_repo/ReactNative_Ecommerce/myApp/src/images/tops/pearl_button_cardigan_black.png'), price: '$102', details: '' },
        { key: '10', name: 'PEARL BUTTON CARDIGAN BLUE', group: 'tops', imagePath: require('/Users/afieqhamieza/Documents/Ecommerce_repo/ReactNative_Ecommerce/myApp/src/images/tops/pearl_button_cardigan_blue.png'), price: '$117', details: '' },
    ]);

    return (

        <View style={styles.container}>
            <FlatList
                // numColumns = {2}
                data={product}
                renderItem={({ item }) => (
                    <View>
                        <Card>
                            <Image
                                style={styles.productImage}
                                source={item.imagePath}
                            />
                            <Text style={styles.productName}>{item.name}</Text>
                            <Text style={styles.productPrice}>{item.price}</Text>
                        </Card>
                    </View>
                )}
            />


        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,

    },

    productName: {
        // marginTop: 20,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    productPrice: {
        // marginTop: 20,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    productImage: {
        width: 120,
        height: 180,
    },
});
