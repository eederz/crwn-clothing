import React from 'react';

import {HomePage} from './pages/homepage/homepage.component';
import { ShopPage } from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import './App.css';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      currentUser:null
    }
  }

unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {

      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState(
            {
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      this.setState({currentUser: userAuth});
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  };

  render(){
    return (
      <div >
      <Header currentUser = {this.state.currentUser}></Header>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route path='/signin' component={SignInSignUpPage}></Route>
        </Switch>

      </div>
    );
  };
}

export default App;
