import React from 'react';
import {
    HomeScreen,
    LocationScreen,
    RequestScreen,
    NearByScreen,
    TrackingScreen,
    RatingScreen,
    CallingScreen,
    HistoryScreen,
    NotificationScreen,
    SettingScreen,
    ProfileScreen,
    PaymentScreen,
    AddPaymentScreen,
    PaymentMessageScreen,
    InviteScreen,
    WalletScreen,
    ChatScreen
} from '../../Screens';
import RouteNames from '../routeNames';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name={RouteNames.Home} component={HomeScreen} />
            <Stack.Screen name={RouteNames.Location} component={LocationScreen} />
            <Stack.Screen name={RouteNames.Request} component={RequestScreen} />
            <Stack.Screen name={RouteNames.NearBy} component={NearByScreen} />
            <Stack.Screen name={RouteNames.Tracking} component={TrackingScreen} />
            <Stack.Screen name={RouteNames.Rating} component={RatingScreen} />
            <Stack.Screen name={RouteNames.Payment} component={PaymentScreen} />
            <Stack.Screen name={RouteNames.PaymentMessage} component={PaymentMessageScreen} />
            <Stack.Screen name={RouteNames.AddPayment} component={AddPaymentScreen} />
            <Stack.Screen name={RouteNames.Call} component={CallingScreen} />
            <Stack.Screen name={RouteNames.Chat} component={ChatScreen} />
        </Stack.Navigator>
    )
}
export default HomeStack;
