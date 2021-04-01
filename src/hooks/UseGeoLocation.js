import React, { useEffect, useState } from 'react';
import { PERMISSIONS, request, check, } from 'react-native-permissions';
// import GeoLocation from 'react-native-geolocation-service';
import GeoLocation from '@react-native-community/geolocation';
navigator.geolocation = require('@react-native-community/geolocation');



const useGeoLocation = () => {
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: { lat: '', lng: '' }
    })
    const [granted, setGranted] = useState(false);
    const geolocationOptions = {
        enableHighAccuracy: true,
        timeout: 30000, // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
        maximumAge: 3000
        // maximumAge: 1000 * 3600 * 24 // 24 hour
    };
    const handleLocationPermissions = async () => {
        const res = await check(PERMISSIONS.IOS.LOCATION_ALWAYS);
        if (res === 'granted') {
            setGranted(true)
        } else if (res === 'denied') {
            const res2 = await request(PERMISSIONS.IOS.LOCATION_ALWAYS);
            setGranted(falses)
        }
    };
    const onSuccess = (location) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude
            }
        })
    }
    const onError = error => {
        setLocation({
            loaded: true,
            error
        })
    }

    useEffect(() => {
        handleLocationPermissions();
    })


    useEffect(() => {
        if (granted) {
            GeoLocation.getCurrentPosition(onSuccess,onError,geolocationOptions)
            // GeoLocation.getCurrentPosition(onSuccess,onError,geolocationOptions)
        }
    },[location.coordinates.lat])

    return location;

}
export default useGeoLocation;