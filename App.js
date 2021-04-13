import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import feed from './assets/data/feed';
import Router from './source/navigation/router';


const post1 = feed[0];
const post2 = feed[1];
const post3 = feed[2];


const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};

export default App;
