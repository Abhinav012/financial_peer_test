import React, {useState} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import styles from '../styles/styles';
import {launchCamera} from 'react-native-image-picker';

const SelfieScreen = () => {
  const [selfieImage, setSelfieImage] = useState('');
  async function launchPlatformCamera() {
    var photo = await launchCamera({mediaType: 'photo'});
    console.log(photo.assets[0].uri);
    setSelfieImage(photo.assets[0].uri);
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={launchPlatformCamera}
        style={styles.captureBtn}>
        <Text style={styles.btnText}>Capture</Text>
      </TouchableOpacity>
      {selfieImage !== '' && (
        <Image source={{uri: selfieImage}} style={styles.bannerImage} />
      )}
    </View>
  );
};

export default SelfieScreen;
