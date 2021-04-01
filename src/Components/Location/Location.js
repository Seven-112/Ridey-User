import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import Geocoder from 'react-native-geocoding';
import MapPin from '../../assets/images/mapPin.png';
import LocationIcon from '../../assets/images/current-location.png'
import backIcon from '../../assets/images/backIcon.png';
import closeIcon from '../../assets/images/closeIcon.png';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import styles from './Location.styles';
import COLORS from '../../Constants/Theme/Color';

const Location = ({navigation}) => {

    let markerRef = useRef();
    let mapRef = useRef(null);
    Geocoder.init('AIzaSyBTfypSbx_zNMhWSBXMTA2BJBMQO7_9_T8',{language:'en'})

    const [location, setlocation] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
    });
    const [address, setAddress] = useState('');
    const [region, setRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 1,
        longitudeDelta: 1,
    })

    onDragEnd = (coords) => {
        console.log("coords", coords)
    }
    onRegionChange = (newRegion) => {
        setRegion(newRegion);
        setlocation({ latitude: newRegion.latitude, longitude: newRegion.longitude })
    }
    onRegionChangeComplete = (newRegion) => {
        setRegion(newRegion);
        setlocation({ latitude: newRegion.latitude, longitude: newRegion.longitude })
        Geocoder.from({
            latitude: newRegion.latitude,
            longitude: newRegion.longitude
        }).then(json => {
            var addressComponent = json.results[0].formatted_address;
            setAddress(addressComponent)
            console.log("address", addressComponent);
        })
            .catch(error => console.warn(error));
    }
    
    handleChangetextComplete = () => {
        console.log("called")
        Geocoder.from(address).then(json => {
            var addressComponent = json.results[0].geometry.location;
            setRegion({
                latitude: addressComponent.lat, longitude: addressComponent.lng, latitudeDelta: 1,
                longitudeDelta: 1,
            });
            setlocation({ latitude: addressComponent.lat, longitude: addressComponent.lng })
            mapRef.current.animateCamera(
                {
                    center: {
                        latitude:addressComponent.lat,
                        longitude: addressComponent.lng
                    },
                    zoom: 15
                },
                5000
            );
        })
            .catch(error => console.warn(error));
    }

    return (
        <View style={styles.container}>
            <MapView
                ref={mapRef}
                onRegionChange={(e) => console.log("new Region", e)}
                onRegionChangeComplete={(e) => onRegionChangeComplete(e)}
                showsCompass={true}
                showsUserLocation={true}
                provider={PROVIDER_GOOGLE}
                followsUserLocation={true}
                style={styles.map}
                initialRegion={region}
            >
                <Marker
                    ref={markerRef}
                    coordinate={{
                        latitude: location.latitude,
                        longitude: location.longitude
                    }}
                    title="Current Location"
                >
                    <Image style={styles.marker} source={MapPin} />
                </Marker>
            </MapView>
            <View style={styles.topContainer}>
                <Image style={{ height: 22, width: 22, marginLeft: 10 }} source={backIcon} />
                <TextInput style={styles.textInput} value={address} onEndEditing={handleChangetextComplete} onChangeText={(text) => setAddress(text)} placeholder="Pick a Location" />
                <Image style={{ height: 28, width: 28 }} source={closeIcon} />
            </View>
            <View style={styles.locationContainer}>
                <Image style={{ width: 25, height: 25 }} source={LocationIcon} />
            </View>
            <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.bottomContainer}>
                <Text style={{ fontSize: 18, fontWeight: '600', color: COLORS.WHITE }}>Apply</Text>
            </TouchableOpacity>

        </View>
    )
};
export default Location