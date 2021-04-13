import  React, {useState, useEffect, useRef} from 'react';
import { View,
    Text,
    flatlist,
    Dimensions,
} from 'react-native';
import styles from './styles';
import PostCarouselItemTwo from '../../components/PostCarouselItemTwo';
import feedtwo from '../../../assets/data/feedtwo';
import {FlatList} from 'react-native-gesture-handler';

const HzTwo = (props) => {
    return(

        <View style={styles.liveanywherecontainer}>

        <View style={{marginTop:10}}>
            <Text style={styles.liveanywheretext}>Live Anywhere</Text>
        </View>
        
            
            <FlatList
                ref={flatlist}
                data={feedtwo}
                renderItem={({item}) => <PostCarouselItemTwo post={item} />}
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

export default HzTwo;
