/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/styles';
import GetLocation from 'react-native-get-location';

const CurrentLocationScreen = () => {
  const [location, setLocation] = useState('');
  const [showLocation, setShowLocation] = useState(false);

  useEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    }).then(loc => {
      setLocation(loc);
      setShowLocation(true);
    });
  }, []);

  return (
    <View>
      {showLocation && (
        <View>
          <Text style={styles.locationText}>Longitude: {location.longitude}</Text>
          <Text style={styles.locationText}>Latitude:     {location.latitude}</Text>
        </View>
      )}
    </View>
  );
};

export default CurrentLocationScreen;
