import  React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const TripsScreen = (props) => {
  const navigation = useNavigation();

  const post = props.post;
  
    return (
      <View style={styles.container}>

        <Text style={styles.title}>Trips</Text>

        <Text style={styles.subtitle}>When you're ready to plan your next trip,
        we're here to help.
        <Text style={styles.subtitlebold}> Learn More</Text>
        </Text>

        <View style={styles.tripbuttoncontainer}>
          
        <Pressable style={styles.tripbutton}>
        <Text style={styles.tripbuttonText}>Explore Airbnb</Text>
        </Pressable>
        
        </View>
        

        <View style={styles.imagecontainer}>

          <Image 
          style={styles.tripimage}
          source={require('../../../assets/images/tripimage.jpg')}
          />
          
        </View>

        <View style={styles.bottomcontainer}>
        <Text style={styles.bottomtext}>Can't find your reservation here?
        <Text style={styles.bottomtextbold}> Visit the Help Center.</Text>
        </Text>
        </View>

      </View>
      
    );
};

export default TripsScreen;