/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { RatingScreen } from './src/Screens';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator, StackNavigator } from './src/Navigation';
import  STORE from './src/Store/store'



const App = () => {
  return (
    <Provider store={STORE}>
      <NavigationContainer>
        <AppNavigator />
        {/* <StackNavigator /> */}
      </NavigationContainer>
    </Provider>

  );
};

export default App;
