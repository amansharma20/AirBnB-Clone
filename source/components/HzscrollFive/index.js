import  React, {useState, useEffect, useRef} from 'react';
import { View,
    Text,
    flatlist,
    Dimensions,
} from 'react-native';
import styles from './styles';
import PostCarouselItemFive from '../../components/PostCarouselItemFive';
import feedfive from '../../../assets/data/feedfive';
// import feedfour from '../../../assets/data/feedfour';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

const HzFive = (props) => {
    return(
        <View style={styles.container}>

        <Text style={styles.maintext}>Stay Informed</Text>

        <FlatList 
                    ref={flatlist}
                    // data={feedfour}
                    data={feedfive}
                    renderItem={({item}) => <PostCarouselItemFive 
                    post={item} 
                    />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToAlignment={"center"}
                    decelerationRate={"fast"}
                    snapToAlignment={'start'}
                    decelerationRate={'fast'}
                    snapToInterval={Dimensions.get('window').width}
                    snapToInterval={260}
                    />

        </View>
    );
};

export default HzFive;
