import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './homeStack';
import {
    HistoryScreen,
    NotificationScreen,
    SettingScreen,
    ProfileScreen,
    InviteScreen,
    WalletScreen
} from '../../Screens';
import RouteNames from '../routeNames';
import COLORS from '../../Constants/Theme/Color';
import DrawerComponent from '../../Components/DrawerComponent';


const Drawer = createDrawerNavigator();

const DrawerStack = () => {

   

    return (
        <Drawer.Navigator drawerContent={DrawerComponent}
            drawerContentOptions={{ activeBackgroundColor: COLORS.SECONDARY_GREY, activeTintColor: COLORS.SECONDARY_ORANGE }}
            labelStyle={{ fontSize: 20 }}

        >
            <Drawer.Screen name={RouteNames.Home} component={HomeStack} />
            <Drawer.Screen name={RouteNames.Profile} component={ProfileScreen} />
            <Drawer.Screen name={RouteNames.History} component={HistoryScreen} />
            <Drawer.Screen name={RouteNames.Notification} component={NotificationScreen} />
            <Drawer.Screen name={RouteNames.Wallet} component={WalletScreen} />
            <Drawer.Screen name={RouteNames.Invite} component={InviteScreen} />
            <Drawer.Screen name={RouteNames.Settings} component={SettingScreen} />
        </Drawer.Navigator>

    )
}
export default DrawerStack;
