import React, { useState, useEffect,useRef } from 'react';
import GeoLocation from '@react-native-community/geolocation';




const useWatchLocation = () => {

    const [location, setLocation] = useState();
    const [error, setError] = useState('');
    const locationWatchId = useRef(null);

    const geolocationOptions = {
        enableHighAccuracy: true,
        timeout: 1, // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
        maximumAge: 1000 * 3600 * 24 // 24 hour
    };

    const handleSuccess = position => {
        const { latitude, longitude } = position.coords;
        setLocation({
            latitude,
            longitude
        });
    };
    
    const handleError = error => {
        setError(error.message);
    };

    const cancelLocationWatch = () => {
        if (locationWatchId.current) {
         GeoLocation.clearWatch(locationWatchId.current);
        }
      };

    useEffect(() => {
        // ...
    
        // Start to watch the location with the Geolocation API
        locationWatchId.current = GeoLocation.watchPosition(handleSuccess, handleError, geolocationOptions);
        return cancelLocationWatch;
        // ...
      }, [geolocationOptions]);

    return { location, cancelLocationWatch, error };
};
export default useWatchLocation;