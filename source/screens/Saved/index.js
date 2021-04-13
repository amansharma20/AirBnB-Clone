import  React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const SavedScreen = (props) => {
  
    return (
      <View style={styles.container}>
        <Text style={styles.title} >Saved</Text>
        <Text style={styles.subtitle} >Collect places to stay and things to do by tapping the heart icon.</Text>
        <View style={styles.imagecontainer}>
          <Image 
          style={styles.savedimage}
          source={require('../../../assets/images/savedimage.jpg')}
          />
        </View>
      </View>
    );
};

export default SavedScreen;

