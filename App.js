import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './store/reducers/rootReducer'
import AppNavigator  from './routes/homeStack'

const store = createStore(rootReducer, applyMiddleware(thunk))

export default function App() {
  return (
    <Provider store= {store}>
      <AppNavigator/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
