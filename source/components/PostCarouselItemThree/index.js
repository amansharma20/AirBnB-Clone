import React from 'react';
import { View, Text, Image, useWindowDimensions, Pressable } from "react-native";
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';

const Post = (props) => {

  const post = props.post;
//   const width = useWindowDimensions().width;

  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate('Post', {postId: post.id});
  }

  return (
    <Pressable onPress={goToPostPage} style={styles.container}>
        
      <View style={styles.innerContainer}>
        {/* Image  */}
        <Image
          style={styles.image}
          source={{uri: post.image}}/>
      
      
        <View style={styles.title}>
          <Text style={styles.titletext}>
              {post.title}
          </Text>

          <Text style={styles.subtitletext}>
              {post.subtitle}
          </Text>
        </View>
        </View>
      
    </Pressable>
  );
};

export default Post;
