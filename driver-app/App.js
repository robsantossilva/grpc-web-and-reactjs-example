import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';

export default function App() {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  
  const [lastLocation, setLastLocation] = useState([]);

  useEffect( () => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }else{

        //let location = await Location.getCurrentPositionAsync({});
        //setLocation(location.coords.longitude);

        const LOCATION_SETTINGS = {
          //accuracy: Location.Accuracy.Balanced,
          //timeInterval: 200,
          //distanceInterval: 0,
          enableHighAccuracy: true
        };

        Location.watchPositionAsync(LOCATION_SETTINGS, (location) => {
          console.log(location.coords.longitude);
          setLocation(location.coords.longitude);
        });
      }
    })();
  });

  let text = 'Location:';
  if (errorMsg) {
    text = errorMsg;
  }

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Text>{location}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
