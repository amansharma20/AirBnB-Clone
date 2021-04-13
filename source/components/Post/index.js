import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

const Post = (props) => {

  const post = props.Post;
  
    return (
      <View style={styles.container} >
        {/* image */}
        <Image
        style={styles.image}
        source={{uri: post.image}}
        />
        {/* bed and bedroom */}
        <Text style={styles.bedroom}>
          {post.bed} bed {post.bedroom} bedroom
        </Text>

        {/* type and description */}
        <Text style={styles.description} numberOflines={2}>
          {post.type}. {post.title}
          
        </Text>

        {/* old price and new price */}
        
        
        <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice} </Text>
        <Text style={styles.newprice}> ${post.newPrice}</Text>
          /night
        </Text>

        {/* total price */}
        <Text style={styles.totalPrice}>${post.totalPrice}</Text>
      </View>
    );
  };

export default Post;