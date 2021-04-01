import React, { useState, useRef } from 'react';
import { View, Text, Image, TextInput, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import MapPin from '../../assets/images/mapPin.png';
import CurrentLocation from '../../assets/images/current-location.png';
import MapIcon from '../../assets/images/mapIcon.png'
import styles from './ModalPlaces.styles';
import RouteNames from '../../Navigation/routeNames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Geocoder from 'react-native-geocoding';

const recentLocations = [
    "University of Washington",
    "WoodLand Park",
    "Husky Stadium",
    "Ravenna Park"
]

const RenderList = () => {
    return (
        <View style={styles.listContainer}>
            {
                recentLocations.map((item, index) =>
                    <View key={index} style={styles.listItem}>
                        <Image style={{ width: 20, height: 20 }} source={MapPin} />
                        <Text style={{ marginHorizontal: 10, fontSize: 16 }}>{item}</Text>
                    </View>
                )
            }
        </View>
    )
}


const ModalPlaces = ({ setShowModal, navigation, setLocationData, setSourceCoords,setDestinationCoords }) => {

    Geocoder.init('AIzaSyBTfypSbx_zNMhWSBXMTA2BJBMQO7_9_T8', { language: 'en' })
    // onPress={()=>setShowModal(false)}
    const placesRef = useRef();

    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [showContent, setShowContent] = useState(false);
    const [showDestination, setShowDestination] = useState(false);
   
    const transformSourceCoordinates = async (data,setSourceCoords) => {
        Geocoder.from(data)
            .then(json => {
                var location = json.results[0].geometry.location;
                console.log(location)
                setSourceCoords(location);
            })
            .catch(error => console.log(error));
    }

    const transformDestinationCoordinates = async (data,setDestinationCoords) => {
        Geocoder.from(data)
            .then(json => {
                var location = json.results[0].geometry.location;
                console.log(location)
                setDestinationCoords(location);
            })
            .catch(error => console.log(error));
    }

    const handleDestinationChange = async (data, details = null, setShowModal, setLocationData,setDestinationCoords) => {
        setShowDestination(false);
        setDestination(data.description);
        await transformDestinationCoordinates(data.description,setDestinationCoords);
        if (source !== '' && destination !== '' && showDestination) {
            setLocationData({ pickup: source, destination: data.description });
            setTimeout(() => {
                    setShowModal(false)
            }, 3000)

        }
    }
    const handlePressSource = async (data, details = null,setSourceCoords) => {
        setShowContent(false);
        setSource(data.description);
        await transformSourceCoordinates(data.description,setSourceCoords);
    }


    return (
        <TouchableWithoutFeedback style={{ backgroundColor: 'red' }}>
            <View style={styles.container}>
                <View style={{ ...styles.bottomView, height: showContent && !showDestination ? 400 : !showContent && showDestination ? 480 : 180 }} >
                    <View style={styles.topbar} />
                    <View style={{ ...styles.pickUpContainer }}>
                        <View style={{ ...styles.leftImageContainer, height: 50 }}>
                            <Image style={{ width: 20, height: 20 }} source={CurrentLocation} />
                            <View style={{ width: '90%' }}>
                                <Text style={styles.locationHeader}>PICKUP</Text>
                                <View style={{ width: '100%', height: showContent && !showDestination ? 400 : !showContent && showDestination ? 0 : 180 }}>
                                    <GooglePlacesAutocomplete
                                        enablePoweredByContainer={false}
                                        ref={placesRef}
                                        placeholder="Pick Up"
                                        // keyboardShouldPersistTaps='always'
                                        returnKeyType="default"
                                        onPress={(data,details)=>handlePressSource(data,details,setSourceCoords)}
                                        textInputProps={{
                                            onChangeText: (text) => setSource(text),
                                            onResponderStart: () => setShowContent(true),
                                        }}
                                        query={{
                                            key: 'AIzaSyBTfypSbx_zNMhWSBXMTA2BJBMQO7_9_T8',
                                            language: 'en',
                                            components: 'country:pk'
                                        }}
                                        currentLocation={true}
                                        currentLocationLabel='Current Location'
                                        fetchDetails={true}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles.dropOffContainerDivider} />
                        {!showContent && <View style={{ ...styles.rightImageContainer, height: showContent && !showDestination ? 0 : 180 }}>
                            <Image style={{ width: 20, height: 20 }} source={MapPin} />
                            <View >
                                <Text style={styles.locationHeader}>DROP-OFF</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ height: showDestination ? 400 : 180, width: '85%' }}>
                                        <GooglePlacesAutocomplete
                                            enablePoweredByContainer={false}
                                            ref={placesRef}
                                            placeholder="DROP OFF"
                                            autoFocus={false}
                                            keyboardShouldPersistTaps='always'
                                            returnKeyType="default"
                                            onPress={(data, details) => handleDestinationChange(data, details, setShowModal, setLocationData,setDestinationCoords )}
                                            textInputProps={{
                                                onResponderStart: () => setShowDestination(true),
                                                onChangeText: (text) => setDestination(text),
                                            }}
                                            query={{
                                                key: 'AIzaSyBTfypSbx_zNMhWSBXMTA2BJBMQO7_9_T8',
                                                language: 'en',
                                                components: 'country:pk'
                                            }}
                                            currentLocation={true}
                                            currentLocationLabel='Current Location'
                                            fetchDetails={true}
                                        />
                                    </View>
                                    {/* <TextInput onChangeText={(text) => setDestination(text)} value={destination} placeholder="105 Willaim Street ,Chicago Washington" style={styles.textLocation} /> */}
                                    <TouchableOpacity onPress={() => {
                                        setShowModal(false),
                                            navigation.navigate(RouteNames.Location)
                                    }} style={styles.mapImageContainer}>
                                        <Image style={{ width: 22, height: 22 }} source={MapIcon} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>}
                    </View>
                </View>
                <View style={styles.divider} />
                <View style={styles.contentContainer}>

                    <Text style={styles.headerPopular}>RECENT LOCATIONS</Text>
                    <RenderList />
                </View>

            </View>
        </TouchableWithoutFeedback>
    )
};
export default ModalPlaces;