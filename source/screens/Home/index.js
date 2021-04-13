import  React, {useState, useEffect, useRef} from 'react';
import { View,
    Text,
    ImageBackground,
    Pressable,
    ScrollView,
} from 'react-native';
import styles from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

import HzOne from '../../components/HzscrollOne';
import HzTwo from '../../components/HzscrollTwo';
import HzThree from '../../components/HzscrollThree';
import HzFour from '../../components/HzscrollFour';
import HzFive from '../../components/HzscrollFive';

const HomeScreen = (props) => {
    const navigation = useNavigation();

    const post = props.post;
    
        return (

            
    <ScrollView>   

        <View style={styles.container}>

                <Pressable
                style={styles.searchButton}
                onPress={() => navigation.navigate('Destination Search')}>
                    
                    <FontAwesome5 name={'search'} size={25} color={"#f15454"} />
                    <Text style={styles.searchbuttonText}>Where are you going?</Text>
                </Pressable>

            <ImageBackground
            source={require('../../../assets/images/wallpaper.jpg')}
            style={styles.image}>
                
                <Text style={styles.title} >Go Near</Text>


                <Pressable
                style={styles.button}
                onPress={() => console.warn('Explore Btn Clicked')}>

                    <Text style={styles.buttonText}>Explore Nearby stays</Text>
                </Pressable>

            </ImageBackground>

            <HzOne/>
                    
        </View>
            
            <HzTwo/>  
        
            <HzThree/>
    
            <HzFour/>

            <HzFive/>
        
    </ScrollView>
    
    );
};

export default HomeScreen;