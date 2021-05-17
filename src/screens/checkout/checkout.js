import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { AppLoading } from 'expo';
import { MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, StackRouter } from 'react-navigation';

export default function Checkout({ navigation }) {
    const editAmount = (idTest) => {
        console.log(idTest)
    }

    const goToPage = (idTest) => {
        console.log(idTest)
    }

    const goToHome = (idTest) => {
        navigation.navigate('Home')
    } 

    const [count, setCount] = useState(1);

    const incAmount = () => {
        setCount(count+1);
    }

    const decAmount = () => {
        setCount(count-1);
    }

    return (
        <ScrollView style={styles.container}>


            <View>
                <Text style={styles.checkoutHeaderText}>CHECKOUT</Text>
            </View>

            <View style={{ borderBottomWidth: 0.2 }} />
            <View style={{ borderBottomWidth: 0.2 }} />

            <View>
                {/* <Image
                    style={{
                        flex: 1,
                        width: 50,
                        height: 50,
                        resizeMode: 'contain'
                    }}
                    source={require('/Users/afieqhamieza/Documents/Ecommerce_repo/ReactNative_Ecommerce/myApp/src/images/dresses/laurra_notched_collar_dress_crimson.png')}
                /> */}

                <Text style={styles.productName}>AURA NOTCHED COLLAR DRESS CRIMSON</Text>

                <View style={styles.priceAndEdit}>
                    <View style={styles.editAmount}>
                        <TouchableOpacity onPress={() => incAmount()}>
                            <MaterialIcons name='add-box' size={25} style={styles.incAmount} />
                        </TouchableOpacity>

                        <Text style={styles.textAmount}>{ count }</Text>

                        <TouchableOpacity onPress={() => decAmount()}>
                            <MaterialIcons name='indeterminate-check-box' size={25} style={styles.decAmount} />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.productPrice}>$ 207</Text>
                </View>

                <View style={{ borderBottomWidth: 0.2, marginTop: 20 }} />
                <View style={{ borderBottomWidth: 0.2 }} />

                <Text style={styles.productName}>PEARL BUTTON CARDIGAN BLUE</Text>

                <View style={styles.priceAndEdit}>
                    <View style={styles.editAmount}>
                        <TouchableOpacity onPress={() => incAmount()}>
                            <MaterialIcons name='add-box' size={25} style={styles.incAmount} />
                        </TouchableOpacity>

                        <Text style={styles.textAmount}>{ count }</Text>

                        <TouchableOpacity onPress={() => decAmount()}>
                            <MaterialIcons name='indeterminate-check-box' size={25} style={styles.decAmount} />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.productPrice}>$ 117</Text>
                </View>

                <View style={{ borderBottomWidth: 0.2, marginTop: 20 }} />
                <View style={{ borderBottomWidth: 0.2 }} />

                <Text style={styles.productName}>SERENA STRAIGHT JEAN CREAM</Text>

                <View style={styles.priceAndEdit}>
                    <View style={styles.editAmount}>
                        <TouchableOpacity onPress={() => incAmount()}>
                            <MaterialIcons name='add-box' size={25} style={styles.incAmount} />
                        </TouchableOpacity>

                        <Text style={styles.textAmount}>{ count }</Text>

                        <TouchableOpacity onPress={() => decAmount()}>
                            <MaterialIcons name='indeterminate-check-box' size={25} style={styles.decAmount} />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.productPrice}>$ 158</Text>
                </View>


            </View>

            <View style={{ borderBottomWidth: 0.2, marginTop: 20 }} />
            <View style={{ borderBottomWidth: 0.2 }} />

            <View style={styles.totalAmount}>
                <Text style={styles.subText}>Total</Text>
                <Text style={styles.subInput}>$ 482</Text>
            </View>


            <View style={styles.contAndCheckout}>
                <TouchableOpacity style={styles.contShopButton} onPress={goToHome}>
                    <Text style={{ fontWeight: '500' }}>CONTINUE SHOPPING</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.checkoutButton} onPress={() => goToPage("test: from detail page Go to cart form")}>
                    <Text style={{ color: '#fff', fontWeight: '500' }}>CHECKOUT</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
        // borderRadius: 20,
    },

    checkoutHeaderText: {
        margin: 20,
        fontSize: 18,
        fontWeight: '700',
        letterSpacing: 3,

    },

    contAndCheckout: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 30,
        marginBottom: 100,
    },

    contShopButton: {
        borderColor: '#1b2a41',
        borderWidth: 3,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 5,
        alignItems: 'center',
        alignSelf: 'center',
        marginLeft: 0,
    },

    checkoutButton: {
        backgroundColor: '#000',
        borderColor: '#1b2a41',
        color: '#fff',
        borderWidth: 3,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 5,
        alignItems: 'center',
        alignSelf: 'center',
        marginLeft: 15,
    },

    productName: {
        letterSpacing: 2,
        marginTop: 30,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    priceAndEdit: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 30,
    },

    productPrice: {
        fontSize: 15,
        marginLeft: 220
    },

    editAmount: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        width: 85,
    },

    textAmount: {
        // borderWidth: 2, 
        paddingVertical: 2.8, 
        paddingHorizontal: 5, 
        borderRadius: 3,
        // width:10,
    },

    incAmount: {

    },

    decAmount: {
        // marginLeft: 40,
    },

    totalAmount: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 30,
    },

    subText: {
        margin: 20,
        fontSize: 15,
        fontWeight: '700',
        letterSpacing: 3,
    },

    subInput: {
        marginLeft: 230,
        fontWeight: '600',
    },


})