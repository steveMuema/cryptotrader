import React, {Component} from 'react';
import {Card, CardItem, Text, Body, Left} from 'native-base';

export default class ResultCard extends React.Component{
    constructor(props){
        super(props);
        this.handleResultChange=this.handleResultChange.bind(this);
    }
    handleResultChange(value){
        this.props.onResultChange(value);
    }
    render(){
        const result = this.props.result;
        return(
            <Card>
            <CardItem header>
                <Text> Conversion result </Text>
            </CardItem>
            <CardItem>
                <Body>
                    <Text onChange={this.handleResultChange}>
                        {result}    
                    </Text>
                    
                </Body>
            </CardItem>
            </Card>
        );
    }
}
