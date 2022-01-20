import * as React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  TextInput,
  Platform,
} from 'react-native';
import { TouchableOpacity as TO } from 'react-native-gesture-handler';

import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main  from './components/main';
import ProductsList from './components/productsList';
import ShowProduct from './components/showProduct';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="main" detachInactiveScreens>
        <Stack.Screen name="main" component={Main} />
        <Stack.Screen name="productsList" component={ProductsList} />
        <Stack.Screen name="showProduct" component={ShowProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
