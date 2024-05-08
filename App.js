import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppNAvigator from './AppNavigator';
import {Provider} from 'react-redux';
import { store } from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppNAvigator />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
