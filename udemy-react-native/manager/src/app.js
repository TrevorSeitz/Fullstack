import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyAZnD0gHWdwkASOKLRM2eKyFHkrcWX94Aw',
      authDomain: 'manager-8ccf4.firebaseapp.com',
      databaseURL: 'https://manager-8ccf4.firebaseio.com',
      projectId: 'manager-8ccf4',
      storageBucket: 'manager-8ccf4.appspot.com',
      messagingSenderId: '535943620965'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
