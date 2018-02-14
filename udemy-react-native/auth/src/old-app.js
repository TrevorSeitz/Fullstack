import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCs2vkkB9wrzhcJ9jPX9g6E4UP0k9OD8Gc',
      authDomain: 'auth-be3f3.firebaseapp.com',
      databaseURL: 'https://auth-be3f3.firebaseio.com',
      projectId: 'auth-be3f3',
      storageBucket: 'auth-be3f3.appspot.com',
      messagingSenderId: '727166433779'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  // renderContent() {
  //   if(this.state.loggedIn) {
  //     return (
  //       <Button>
  //         Log Out
  //       </Button>
  //     );
  //   }
  //   return <LoginForm />
  // }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Button>
          Log Out
        </Button>;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render () {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App
