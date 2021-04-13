import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // width: width - 1000,
    marginTop: 10,
    height: 300,
    padding: 7,
    // shadowColor: "#000",
    // shadowOffset: {width: 0, height: 5},
    // shadowOpacity: 0.34,
    // shadowRadius: 6.27,
    // elevation: 10,
  },
    innerContainer: {
  },
    image: {
    height: 250,
    aspectRatio: 1,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    color: 'white',
    marginTop: 10,
    fontWeight: 'bold',
  },
  titletext: {
    fontSize: 16.5,
    color: 'white',
    fontWeight: 'bold',
  },
  subtitletext: {
    fontSize: 12,
    color: 'white',
  },
});

export default styles;
