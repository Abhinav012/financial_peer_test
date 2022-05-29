import React from 'react';
import {View, ImageBackground, Text} from 'react-native';
import styles from '../styles/styles';

const BackgroundImageScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://i.pinimg.com/736x/fe/a3/d8/fea3d8e6eb72e3c48ee98d2b37d984c3--samsun-galaxy-k.jpg',
        }}
        resizeMode="cover"
        style={styles.image}>
        <Text style={styles.imageText}>Background Image Screen</Text>
      </ImageBackground>
    </View>
  );
};

export default BackgroundImageScreen;
