import React, {Component} from 'react';
import Exchange from './components/ExchangeScreen';
import {Router, Scene} from 'react-native-router-flux';
import Home from './components/HomeScreen';
import Calculator from './components/CalculatorScreen';
import {createStore, applyMiddleware} from  'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default class App extends React.Component {

  
  render(){
   
    return (
      <Provider store={store}>      
      <Router hideNavBar="true" >
        <Scene key="root">
          {/* <Scene key="Home" component={Home}  title='Cryptotrader' /> */}
          <Scene key="Exchange" component={Exchange}  title='Exchange Card'  initial={true}/>
          <Scene key="Calculator" component={Calculator}  title='Amount Calculator'/>                              
          {/* <Exchange/> */}
        </Scene>
      </Router>
      </Provider>
     );

  }
}