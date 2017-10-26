import React, {Component} from 'react';
import {View, Fab, Button, Icon} from 'native-base';

export default class FloatingSave extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
                <Fab 
                    direction='up'
                    containerStyle={{ }}
                    style={{backgroundColor:'#FFD400'}}
                    position="bottomRight">
                    <Icon name ='bookmarks'/>
                </Fab>
        );
    }
}