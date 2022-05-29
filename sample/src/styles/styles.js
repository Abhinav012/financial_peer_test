import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  imageText: {
    textAlign: 'center',
    color: 'white',
  },
  bannerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerImage: {
    alignSelf: 'center',
    width: 360,
    height: 400,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  captureBtn: {
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
    width: 120,
    height: 40,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
  btnText: {
    paddingLeft: 22,
    paddingRight: 22,
    paddingTop: 10,
  },
  dataTitle: {
    margin: 6,
    width: Dimensions.get('window').width * 0.8,
    fontSize: 16,
    fontWeight: '700',
  },
  dataBody: {
    margin: 6,
    fontSize: 14,
    fontWeight: '400',
  },
  drinkView: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
  },
  drinkImage: {
    width: Dimensions.get('window').width,
    height: 300,
    resizeMode: 'contain',
  },
  locationText: {
    marginTop: 20,
    alignSelf: 'center',
  },
  indicatorStyle: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default styles;
