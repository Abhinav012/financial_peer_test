import React, {useState} from 'react';
import {FlatList, View, Image} from 'react-native';
import styles from '../styles/styles';

const BannersScreen = () => {
  const [images, setImages] = useState([
    require('../assets/sample-1.jpg'),
    require('../assets/sample-2.jpg'),
    require('../assets/sample-3.jpg'),
    require('../assets/sample-4.jpg'),
    require('../assets/sample-5.jpg'),
  ]);

  return (
    <View style={styles.bannerContainer}>
      <FlatList
        data={images}
        renderItem={({item, index}) => (
          <Image source={item} key={index} style={styles.bannerImage} />
        )}
      />
    </View>
  );
};

export default BannersScreen;
