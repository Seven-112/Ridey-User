import React, { useRef, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Geocoder from 'react-native-geocoding';
import MapViewDirections from 'react-native-maps-directions';
import MapPin from '../../assets/images/mapPin.png';
import backIcon from '../../assets/images/backIcon.png';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import styles from './Request.styles';
import COLORS from '../../Constants/Theme/Color';
import CarData from '../../Mocks/RequestMocks';
import RouteNames from '../../Navigation/routeNames';
import KEYS from '../../Constants/appConstants/Global';
import { getBoundByRegion } from '../../utils/Delta';


const renderRequestOptions = (item, time, distance, setSelected) => {
    const data = calculateLocationCredentials(time, distance, item);
    const newTime = time / 60 > 1 ? `${time / 60} hours` : `${time} min`;
    const timeSlot = time / 60 > 1 ? 'hours' : 'min';
    const selectedData = {
        time: `${newTime} ${timeSlot} `,
        distance: distance,
        item: {item},
        fare: data
    }
    return (
        <TouchableOpacity onPress={() => setSelected(selectedData)} style={styles.carContainer} key={item.id}>
            <Image resizeMode="contain" style={styles.carImage} source={item.image} />
            <View style={styles.textContentContainer}>
                <View style={styles.textContainer}>
                    <Text style={{ fontSize: 18, color: COLORS.SECONDARY_ORANGE, fontWeight: '600' }}>{item.type}</Text>
                    <Text style={{ color: 'red', fontSize: 18, fontWeight: '700' }}>{`$ ${data}`}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={{ color: COLORS.DISABLED_TEXT_GREY }}>Recommended</Text>
                    <Text>{`Almost ${parseInt(newTime)} ${timeSlot}`}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const calculateLocationCredentials = (time, distance, item) => {
    let fare = 0;
    if (item.type === 'UberX') {
        fare = distance * 0.07 * (time * 0.8)
    }
    else {
        fare = distance * 0.05 * (time * 0.8)
    }
    return parseInt(fare);
}

const handleCreateRequest = (actions,navigation,user,requestData) => {
    const data = {
        date:`${new Date().getDay()}-${new Date().getMonth()}-${new Date().getFullYear()}`,
        userId:user.userId,
        user:user,
        source:requestData.address.pickup,
        destination:requestData.address.destination,
        distance:requestData.selected.distance,
        status:'Pending'
    }
    const nearByData = {
       latitude:31.4515431,
       longitude:74.3949027,
    }

    console.log("respose object",data);
    actions.request
    .createRequest(data)
    .then(()=>actions.request.actionGetNearByDrivers(nearByData))
    .then(()=>navigation.navigate(RouteNames.NearBy, { requestData: data }))
    .catch((e) => console.log(e))
    .then(() =>{});


}



const Request = ({ actions, navigation, requestError, requestStatus, source, destination, address,user }) => {


    let mapRef = useRef(null);
    console.log(source, destination)

    Geocoder.init(KEYS.GEO_CODER_KEY, { language: 'en' })
    const [sourcelocation, setSourceLocation] = useState({
        latitude: source.lat,
        longitude: source.lng
    });
    const [destinatonlocation, setDestinationLocation] = useState({
        latitude: destination.lat,
        longitude: destination.lng
    });


    const [time, setTime] = useState(0);
    const [distance, setDistance] = useState(0)
    const [selected, setSelected] = useState();
    const [region, setRegion] = useState({
        latitude: source.lat,
        longitude: destination.lng,
        latitudeDelta: distance == 0 ? 0.6 : maxLat - minLat,
        longitudeDelta: distance == 0 ? 0.6 : maxLng - minLng
    })
    const { maxLat, maxLng, minLat, minLng } = getBoundByRegion(region, 5)
    const handleGetData = (item) => {
        setDistance(item.distance);
        setTime(item.duration)
    }
    const requestData = {
        selected: selected,
        region: region,
        sourcelocation: sourcelocation,
        destinatonlocation: destinatonlocation,
        address: address

    }

    return (
        <View style={styles.container}>
            <MapView
                pitchEnabled={true}
                ref={mapRef}
                showsCompass={true}
                showsUserLocation={true}
                provider={PROVIDER_GOOGLE}
                followsUserLocation={true}
                style={styles.map}
                initialRegion={region}
            >
                <Marker
                    coordinate={{
                        latitude: sourcelocation.latitude,
                        longitude: sourcelocation.longitude
                    }}
                    title="source Location"
                    tracksViewChanges={false}
                    icon={MapPin}
                >
                </Marker>
                <Marker
                    coordinate={{
                        latitude: destinatonlocation.latitude,
                        longitude: destinatonlocation.longitude
                    }}
                    title="destination Location"
                    icon={MapPin}
                    tracksViewChanges={false}
                >
                </Marker>
                <MapViewDirections
                    origin={sourcelocation}
                    destination={destinatonlocation}
                    apikey={KEYS.GEO_CODER_KEY}
                    strokeWidth={4}
                    strokeColor={COLORS.SECONDARY_BLACK}
                    precision="high"
                    lineCap="butt"
                    onReady={(item) => handleGetData(item)}
                />
            </MapView>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.topContainer}>
                <Image style={{ height: 20, width: 20 }} source={backIcon} />
            </TouchableOpacity>
            <View style={styles.bottomContainer}>
                <View style={styles.headerBottom}>
                    <Text style={styles.headerText}>Pick A Ride</Text>
                </View>
                <View style={styles.bottomContent}>

                    {
                        CarData.map((item) => renderRequestOptions(item, time, distance, setSelected))
                    }

                </View>
                <TouchableOpacity disabled={selected ? false : true} onPress={() =>handleCreateRequest(actions,navigation,user,requestData)}
                    style={selected ? styles.buttonContainer : { ...styles.buttonContainer, backgroundColor: COLORS.DISABLED_BUTTON_GREY }}
                >
                    <Text style={{ fontSize: 18 }}>Request</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
};
export default Request