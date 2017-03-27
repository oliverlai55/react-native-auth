import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: false };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBCWHsJ4QKWDFE-Z9WW4o13lr6fJn6_5Fg',
      authDomain: 'authentication-b981c.firebaseapp.com',
      databaseURL: "https://authentication-b981c.firebaseio.com",
      storageBucket: "authentication-b981c.appspot.com",
      messagingSenderId: "438698945980"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  render() {
    return  (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;

// npm install --save-dev eslint-config-rallycoding
