import React, { Component } from 'react';
import { Image } from 'react-native';
import {  Card, CardItem,Text } from 'native-base';
class Chart extends React.Component {
  render() {
    return (
          <Card>
            <CardItem header>
              <Image source={{uri: '../chartpic.png'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem cardBody>
              <Text>Welcome to Cryptotrader; to Get Started, Press the + button to choose an exchange rate between cryptocurrencies, bitcoin(BTC) and Ethereum(ETH), and compare to 20 selected major world currencies with real-time update on the exchange rate. In the Exchange screen you can click on the results to open the amounts calculator for the intended exchange currencies. Enjoy!! </Text>
            </CardItem>
          </Card>
    );
  }
}
export default Chart;