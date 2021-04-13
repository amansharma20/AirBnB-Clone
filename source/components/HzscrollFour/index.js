import  React, {useState, useEffect, useRef} from 'react';
import { View,
    Text,
    flatlist,
    Dimensions,
} from 'react-native';
import styles from './styles';
import PostCarouselItemFour from '../../components/PostCarouselItemFour';
import feedfour from '../../../assets/data/feedfour';
import {FlatList} from 'react-native-gesture-handler';

const HzFour = (props) => {
    return(

        <View style={styles.joincontainer}>

            <View style={styles.joininnercontainer}>
                <Text style={styles.jointext}>Join millions of hosts on Airbnb</Text>
            </View>


                <FlatList
                    ref={flatlist}
                    data={feedfour}
                    renderItem={({item}) => <PostCarouselItemFour post={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToAlignment={"center"}
                    decelerationRate={"fast"}
                    snapToAlignment={'start'}
                    decelerationRate={'fast'}
                    snapToInterval={Dimensions.get('window').width}
                    snapToInterval={300}
                    />

        </View> 
    );
};

export default HzFour;
