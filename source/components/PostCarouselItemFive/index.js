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
        
      </View>
      
        <View style={styles.title}>

          <Text style={styles.titletext}>
              {post.title}
          </Text>

          <Pressable onPress={goToPostPage} >
            <View style={styles.row}>

                <Text style={styles.subtitleOnetext}>
                {post.subtitleOne}
                </Text>
                <Text style={styles.subOnetext}>   
                {post.subOnetext}
                </Text>

            </View>

            <View style={styles.row}>

                <Text style={styles.subtitleOnetext}>
                {post.subtitleTwo}
                </Text>
                <Text style={styles.subOnetext}>   
                {post.subTwotext}
                </Text>
                
            </View>   

            <View style={styles.lastrow}>

                <Text style={styles.subtitleOnetext}>
                {post.subtitleThree}
                </Text>
                <Text style={styles.subOnetext}>   
                {post.subThreetext}
                </Text>
                
            </View>   

          </Pressable>

        </View>
      
    </Pressable>
  );
};

export default Post;
