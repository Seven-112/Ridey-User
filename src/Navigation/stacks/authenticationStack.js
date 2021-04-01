import React from 'react';
import {
    LoginScreen,
    SignUpScreen,
    OnBoardingScreen,
    OtpScreen
} from '../../Screens';
import RouteNames from '../routeNames';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const AuthenticationStack = () => (
    <>
        <Stack.Screen name={RouteNames.OnBoarding} component={OnBoardingScreen} />
        <Stack.Screen name={RouteNames.Login} component={LoginScreen} />
        <Stack.Screen name={RouteNames.SignUp} component={SignUpScreen} />
        <Stack.Screen name={RouteNames.Otp} component={OtpScreen} />
    </>
)
export default AuthenticationStack;

