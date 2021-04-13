import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import ExploreNavigator from './ExploreNavigator';
import SavedScreen from '../screens/Saved';
import TripsScreen from '../screens/Trips';
import InboxScreen from '../screens/Inbox'; 
import ProfileScreen from '../screens/Profile';

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
    return (
      <Tab.Navigator
      tabBarOptions={{
          activeTintColor: '#f15454',
          style: {bottom: 2}
         }}>
        <Tab.Screen
            name={"Explore"}
            // component={PostScreen}
            component={ExploreNavigator}
            options={{
                tabBarIcon: ({color}) => (
                    <Fontisto name="search" size={25} color={color} />
                )
            }}
        />
        <Tab.Screen
            name={"Saved"}
            component={SavedScreen}
            options={{
                tabBarIcon: ({color}) => (
                    <FontAwesome name="heart-o" size={25} color={color} />
                )
            }}
        />
        <Tab.Screen
            name={"Trips"}
            component={TripsScreen}
            options={{
                tabBarIcon: ({color}) => (
                    <FontAwesome5 name="airbnb" size={25} color={color} />
                )
            }}
        />
        <Tab.Screen
            name={"Inbox"}
            component={InboxScreen}
            options={{
                tabBarIcon: ({color}) => (
                    <Feather name="message-square" size={25} color={color} />
                )
            }}
        />
        <Tab.Screen
            name={"Profile"}
            component={ProfileScreen}
            options={{
                tabBarIcon: ({color}) => (
                    <EvilIcons name="user" size={38} color={color} />
                )
            }}
        />
      </Tab.Navigator>
    );
}

export default HomeTabNavigator;
