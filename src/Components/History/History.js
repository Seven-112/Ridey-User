import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator, ScrollView, FlatList } from 'react-native';
import styles from './History.styles';
import HistoryMock from '../../Mocks/HistoryMocks';
import MapPin from '../../assets/images/mapPin.png';
import location from '../../assets/images/current-location.png';
import dollarIcon from '../../assets/images/dollarIcon.png';
import rightIcon from '../../assets/images/rightArrow.png';
import MenuIcon from '../../assets/images/menu.png';


const HistoryItem = ({item}) => {
    console.log(item)
    const styleItem =
        item.status === "Completed" ?
            styles.itemTextCompleted : item.status === "Cancelled" ?
                styles.itemTextCancelled : styles.itemTextGoing
    return (
        <View key={item.id} style={styles.itemContainer}>
            <View style={styles.locationContainer}>
                <Image style={styles.itemIcon} source={location} />
                <Text style={styles.itemText}>{item.source}</Text>
            </View>
            <View style={styles.locationContainer}>
                <Image style={styles.itemIcon} source={MapPin} />
                <Text style={styles.itemText}>{item.destination}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.priceContainer}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={styles.itemIcon} source={dollarIcon} />
                    <Text style={styles.itemText}>{`$${item.fare}`}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styleItem}>{item.status}</Text>
                    <Image style={styles.itemIcon} source={rightIcon} />
                </View>
            </View>
        </View>
    )
}
const handleGetUserTrips = (actions, userId, setLoading) => {
    const data = {
        userId
    }
    setLoading(true)
    actions.user
        .getUserTrips(data)
        .then(() => { })
        .catch((e) => console.log("ERROR", e))
        .then(() => { });
    setLoading(false);


}

const History = ({ actions, navigation, userTrips, userId }) => {

    const tripData = userTrips ? userTrips : []
    const [loading, setLoading] = useState(false);
    useEffect(() => {

        handleGetUserTrips(actions, userId, setLoading)


    }, [])

    return (
        <View style={styles.container} >
            <ScrollView>
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => { navigation.toggleDrawer() }} style={styles.menuContainer}>
                        <Image resizeMode="contain" source={MenuIcon} style={styles.menu} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>HISTORY</Text>
                </View>



                {
                    loading ?
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <ActivityIndicator size="large" color="orange" />
                        </View>

                        :
                        <View style={styles.contentContainer}>
                            {tripData.map((item, index) => <HistoryItem key={index} item={item} />)}
                        </View>

                }
                <View  style={{height:350}}/>
            </ScrollView>

        </View>
    )
};

export default History;