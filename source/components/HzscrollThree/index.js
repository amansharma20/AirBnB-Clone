import  React, {useState, useEffect, useRef} from 'react';
import { View,
    Text,
    flatlist,
    Dimensions,
} from 'react-native';
import styles from './styles';
import PostCarouselItemThree from '../../components/PostCarouselItemThree';
import feedthree from '../../../assets/data/feedthree';
import {FlatList} from 'react-native-gesture-handler';

const HzThree = (props) => {
    return(

        <View style={styles.experiencecontainer}>

        <Text style={styles.experiencetext}>Experience the world</Text>
        <Text style={styles.experiencesubtext}>Activities to book with your upcoming stay.</Text>

        <FlatList
        ref={flatlist}
        data={feedthree}
        renderItem={({item}) => <PostCarouselItemThree post={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment={"center"}
        decelerationRate={"fast"}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').width}
        snapToInterval={250}
        />

        </View>  

    );
};

export default HzThree;
