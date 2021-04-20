import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, Modal, TouchableOpacity, ActivityIndicator } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import IO from 'socket.io-client';
import ModalPlaces from '../ModalPlaces';
import styles from './Home.styles';
import COLORS from '../../Constants/Theme/Color';
import MapPin from '../../assets/images/mapPin.png';
import CurrentLocation from '../../assets/images/current-location.png';
import MenuIcon from '../../assets/images/menu.png';
import UseWatchLocation from '../../hooks/UseWatchLocation';
import useLocation from '../../hooks/UseLocation';
import routeNames from '../../Navigation/routeNames';
import Geocoder from 'react-native-geocoding';
import { mapStyle } from '../../utils/mapStyle';






const Home = ({ navigation }) => {

    Geocoder.init('AIzaSyBTfypSbx_zNMhWSBXMTA2BJBMQO7_9_T8', { language: 'en' })
    const [loading, setLoading] = useState(false);
    const [region, setRegion] = useState({ latitude: 37.78825, longitude: -122.4324 });
    const { location: currentLocation, error: currentError } = useLocation();
    const { location, cancelLocationWatch, error } = UseWatchLocation();
    const [isWatchinForLocation, setIsWatchForLocation] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [locationData, setLocationData] = useState({ pickup: 'Pick Up Location', destination: 'Drop Off Location' })
    const [sourceCoords, setSourceCoords] = useState({});
    const [destinationCoords, setDestinationCoords] = useState({});

    let mapRef = useRef(null);
    useEffect(() => {
        if (!location) return;
        //  Cancel location watch after 3sec
        setTimeout(() => {
            cancelLocationWatch();
            setIsWatchForLocation(false);
        }, 1000);

    });










    return (
        <View style={styles.container}>
            <MapView

                loadingEnabled={true}
                loadingIndicatorColor="red"
                ref={(mapref) => mapRef = mapref}
                minZoomLevel={16}
                maxZoomLevel={20}
                followsUserLocation={true}
                showsUserLocation={true}
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: region.latitude,
                    longitude: region.longitude,
                    latitudeDelta: 1,
                    longitudeDelta: 1,
                }}
                customMapStyle={mapStyle}
            >

                <Marker
                    coordinate={{
                        latitude: region.latitude,
                        longitude: region.longitude
                    }}
                    title="Current Location"
                    tracksViewChanges={false}
                    // icon={MapPin}
                >
                </Marker>
            </MapView>
            <TouchableOpacity onPress={() => { navigation.toggleDrawer() }} style={styles.profileContainer}>
                <Image resizeMode="contain" source={MenuIcon} style={styles.menu} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => mapRef.animateCamera({ center: region })} style={styles.currentLocation}>
                <Image style={{ height: 25, width: 25, backgroundColor: 'white', padding: 10, }} source={CurrentLocation} />
            </TouchableOpacity>
            <View style={styles.bottomView} >
                <View style={styles.topbar} />
                <View style={styles.pickUpContainer}>
                    <View style={styles.leftImageContainer}>
                        <Image style={{ width: 20, height: 20 }} source={CurrentLocation} />
                        <View >
                            <Text style={styles.locationHeader}>PICKUP</Text>
                            <Text style={styles.textLocation}>{locationData.pickup}</Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', height: 1, borderWidth: 0.3, borderColor: COLORS.TRANSPARENT_LIGHT_GREY, marginVertical: 10 }} />
                    <View style={styles.rightImageContainer}>
                        <Image style={{ width: 20, height: 20 }} source={MapPin} />
                        <TouchableOpacity onPress={() => setShowModal(true)} >
                            <Text style={styles.locationHeader} >DROP-OFF</Text>
                            <Text style={styles.textLocation}>{locationData.destination} </Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.buttonContainer} onPress={() => {
                        navigation.navigate(routeNames.Request, {
                        sourceCoords: sourceCoords,
                        destinationCoords: destinationCoords,
                        address: locationData
                    })
                    setLocationData({ pickup: 'Pick Up Location', destination: 'Drop Off Location' })
                    }} >
                        <Text style={styles.buttonText}>CONFIRM</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Modal animationType="slide" visible={showModal} >
                <ModalPlaces navigation={navigation} setLocationData={setLocationData} setSourceCoords={setSourceCoords} setDestinationCoords={setDestinationCoords} setShowModal={setShowModal} />
            </Modal>
        </View>
    )
};

export default Home;