import React, {useState} from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import styles from '../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import getDrinksFromAPI from '../network/NetworkCall';

const DataParsedAndServiceScreen = () => {
  const data = require('../data/data.json');
  const [jsonFileData, setJsonFileData] = useState('');
  const [drinksData, setDrinksData] = useState([]);
  const [showFileData, setToggleForFileData] = useState(true);
  const [showLoader, setLoaderStatus] = useState(false);

  const setData = async () => {
    try {
      const storageData = JSON.stringify(data);
      await AsyncStorage.setItem('fileData', storageData);
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async () => {
    try {
      const fetchedData = await AsyncStorage.getItem('fileData');
      setJsonFileData(JSON.parse(fetchedData));
      setToggleForFileData(true);
    } catch (e) {
      console.log(e);
    }
  };

  //API call using Axios
  const getDrinksData = async () => {
    setLoaderStatus(true);
    const drinks = await getDrinksFromAPI();
    setDrinksData(drinks.drinks);
    setToggleForFileData(false);
    setLoaderStatus(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.captureBtn} onPress={() => setData()}>
        <Text style={styles.btnText}>Save Data</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.captureBtn} onPress={() => getData()}>
        <Text style={styles.btnText}>Show Data</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.captureBtn}
        onPress={() => getDrinksData()}>
        <Text style={styles.btnText}>Show Drinks</Text>
      </TouchableOpacity>
      {showFileData && <FlatList data={jsonFileData} renderItem={renderItem} />}
      {showLoader ? (
        <ActivityIndicator style={styles.indicatorStyle} />
      ) : (
        !showFileData && (
          <FlatList data={drinksData} renderItem={renderDrinks} />
        )
      )}
    </View>
  );
};

const renderItem = ({item}) => {
  return (
    <View>
      <Text style={styles.dataTitle}>{item.title}</Text>
      <Text style={styles.dataBody}>{item.body}</Text>
    </View>
  );
};

const renderDrinks = ({item}) => {
  return (
    <View style={styles.drinkView}>
      <Image source={{uri: item.strDrinkThumb}} style={styles.drinkImage} />
      <Text style={styles.dataBody}>{item.strDrink}</Text>
    </View>
  );
};

export default DataParsedAndServiceScreen;
