import React, {Component} from 'react';
import {Picker, Form, Item as FormItem} from 'native-base';
const Item = Picker.Item;
export default class ComparedPicker extends React.Component{
    constructor(props){
        super(props);
        this.handleComparedChange=this.handleComparedChange.bind(this);
        this.handleLabelChange=this.handleLabelChange.bind(this);
    }
    handleComparedChange(value){
        
        this.props.onComparedChange(value);
    }
    handleLabelChange(label){
        this.props.onLabelChange(label)
    }
    render(){
        const wcurrency = this.props.wcurrency;
        return(
            <Form>
            <Picker
                selectedValue={wcurrency}
                onValueChange={this.handleComparedChange}
                onLabelChange={this.handleLabelChange}>
                <Item label='United Arab Emirates Dirham'  value='AED'/>
                <Item label='Australian Dollar'            value='AUD'/>
                <Item label='Swiss Franc'                  value='CHF'/>
                <Item label='Chinese Yuan'                 value='CNY'/>
                <Item label='Egyptian Pound'               value='EGP'/>
                <Item label='Euro'                         value='EUR'/>
                <Item label='Indian Rupee'                 value='INR'/>
                <Item label='Japanese Yen'                 value='JPY'/>
                <Item label='Kenyan Shilling'              value='KES'/>
                <Item label='Hong Kong Dollar'             value='HKD'/>
                <Item label='Mexican Peso'                 value='MXN'/>
                <Item label='South Korean Won'             value='KRW'/>
                <Item label='Namibian Dollar'              value='NAD'/>
                <Item label='New Zealand Dollar'           value='NZD'/>
                <Item label='Moroccan Dirham'              value='MAD'/>
                <Item label='Swedish Krona'                value='SEK'/>
                <Item label='Malaysian Ringgit'            value='MYR'/>
                <Item label='Nigerian Naira'               value='NGN'/>
                <Item label='United States Dollar'         value='USD'/>
                <Item label='South African Rand'           value='ZAR'/>
            </Picker>
            </Form>
            );
        }
}
