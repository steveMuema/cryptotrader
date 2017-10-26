import React, {Component} from 'react';
import {Picker, Form, Item as FormItem} from 'native-base';
const Item = Picker.Item;
export default class BasePicker extends React.Component{
    constructor(props){
        super(props);
        this.handleBaseChange = this.handleBaseChange.bind(this);
    }

    handleBaseChange(value){
        
        this.props.onBaseChange(value);
    }
    render(){
        const cryptocurrency = this.props.cryptocurrency;
        return(
            <Form>
                <Picker
                    selectedValue={cryptocurrency}
                    onValueChange={this.handleBaseChange}>
                    <Item label="Bitcoin" value="BTC"/>
                    <Item label="Ethereum" value="ETH"/>
                </Picker>
            </Form>
            
        );
    }
}