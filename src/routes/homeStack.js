import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, StackRouter } from 'react-navigation';

import Home from '/Users/afieqhamieza/Documents/Ecommerce_repo/ReactNative_Ecommerce/myApp/src/screens/home/home.js';
import Details from '/Users/afieqhamieza/Documents/Ecommerce_repo/ReactNative_Ecommerce/myApp/src/screens/details/details.js';
import Checkout from '/Users/afieqhamieza/Documents/Ecommerce_repo/ReactNative_Ecommerce/myApp/src/screens/checkout/checkout.js';
import Header from '/Users/afieqhamieza/Documents/Ecommerce_repo/ReactNative_Ecommerce/myApp/src/components/header.js';

const screens = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions:{
            title: '',
            headerStyle: {
                height: 0,
                // padding: 0
            }
        }
    },

    Details: {
        screen: Details,
        navigationOptions:{
            title: '',
            headerStyle: {
                // height: 30,
                // padding: 0
                // backgroundColor: '#f7f7ff',
            }
        }
    },

    Checkout: {
        screen: Checkout,
        navigationOptions:{
            title: '',
            
        }
    },

    Header: {
        screen: Header,
        navigationOptions:{
            title: '',
            
        }
    },
}, {
    initialRouteName: "Home"
});


const HomeStack = createAppContainer(screens);
export default HomeStack;
