import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Main from './src/screens/Main';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ProductDetail from './src/screens/ProductDetail';
import Cart from './src/screens/Cart';

const Stack = createNativeStackNavigator();
const AppNAvigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNAvigator;

const styles = StyleSheet.create({});
