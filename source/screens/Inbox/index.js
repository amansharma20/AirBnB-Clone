import  React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const InboxScreen = (props) => {
  
    return (
      <View style={styles.container}>

        <Text style={styles.title} >Inbox</Text>
        <Text style={styles.subtitlebold}>You have no unread messages</Text>
        <Text style={styles.subtitle} numberOfLines={4}>When you contact a host or send a reservation request, you'll see your messages here.</Text>
        
      </View>
    );
};

export default InboxScreen;

