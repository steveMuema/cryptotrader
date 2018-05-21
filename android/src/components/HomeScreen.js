import React, {Component} from 'react';
import { Container, Header, View, Button, Icon, Fab, Content } from 'native-base';
import {Converter} from './Converter';
import {Actions} from 'react-native-router-flux';
import {Exchange} from './ExchangeScreen'


export default class Home extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state={
  //     active: false
  //   }
  // } 
  // handleBaseChange(cryptocurrency){
  //   this.setState({cryptocurrency: cryptocurrency});
    
  // }
  // handleComparedChange(wcurrency){
  //   this.setState({wcurrency: wcurrency});
    
  // }
 

  render() {

    return (  
      <Container>
            <Converter/>         
        <View style={{ flex: 1,backgroundColor: "#e0e0e0" }}>
            <Fab
                direction="up"
                containerStyle={{ }}
                style={{ backgroundColor: '#5067FF' }}
                position="bottomRight"
                onPress={()=>{Actions.Exchange()}}>
                <Icon name="bookmarks" />
            </Fab>
        </View>
      </Container>
    );
  }
}