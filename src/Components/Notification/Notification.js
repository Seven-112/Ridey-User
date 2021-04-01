import React from 'react';
import { View, Text, Image,TouchableOpacity } from 'react-native';
import styles from './Notification.styles';
import NotificationData from '../../Mocks/NotificationMocks'
import backIcon from '../../assets/images/backIcon.png';
import bellIcon from '../../assets/images/bell.png';
import MenuIcon from '../../assets/images/menu.png';

// this.id = id;
// this.title = title;
// this.details = details;
// this.time = time;
const NotificationItem = ({ item }) => {
    return (
        <View style={styles.notificationItem} key={item.id}>
            <View style={styles.notificationContent}>
                <View style={styles.imageIconContainer}>
                    <Image style={styles.imageIcon} source={bellIcon} />
                </View>
                <View style={{ width: '90%',marginTop:5 }}>
                    <View style={styles.notificationHeader}>
                        <Text style={styles.itemHeaderText} >{item.title}</Text>
                        <Text style={styles.itemHeaderTime}>{item.time}</Text>
                    </View>
                    <Text style={styles.itemDetails}>{item.details}</Text>
                </View>
            </View>


        </View>
    )
}


const Notification = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                {/* <Image source={backIcon}/> */}
                <TouchableOpacity onPress={() => { navigation.toggleDrawer() }} style={styles.menuContainer}>
                    <Image resizeMode="contain" source={MenuIcon} style={styles.menu} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Notifications</Text>
            </View>
            <View style={styles.contentContainer}>
                {
                    NotificationData.map((item,index) => <NotificationItem key={index} item={item} />)
                }
            </View>
        </View>
    )
}

export default Notification;