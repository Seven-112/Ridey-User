import React from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AuthenticationStack, HomeStack, DrawerStack } from './stacks';
import RouteNames from './routeNames';




const Stack = createStackNavigator();

export function StackNavigator(loginData) {
    return (

        <Stack.Navigator
            //  initialRouteName={loginData ? RouteNames.Splash : RouteNames.Landing}
            headerMode={'none'}>
            {AuthenticationStack()}
        </Stack.Navigator>
    );
}


export default function AppNavigator() {
    // TODO: Replace this with better logic
    const loginData = useSelector((state)=>state.auth.loginData);
    const tryAutoLogin = useSelector((state)=>state.auth.didTryAutoLogin);
  
    return tryAutoLogin ? DrawerStack() : StackNavigator(loginData);
  }

// export default function AppNavigator() {
//     return DrawerStack()
// }