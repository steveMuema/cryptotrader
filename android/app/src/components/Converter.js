import React, {Component} from 'react';
import {Button,Text, Card, CardItem, Content} from 'native-base';
import ComparedPicker from './ComparedPicker';
import BasePicker from './BasePicker';
import ResultCard from './ResultCard';

export default class Converter extends React.Component{
    constructor(props){
        super(props);
        this.handleBaseChange=this.handleBaseChange.bind(this);
        this.handleComparedChange=this.handleComparedChange.bind(this);
        this.handleResultChange=this.handleResultChange.bind(this);
        this.state={
            cryptocurrency: 'BTC',
            wcurrency: 'KES',
            result: '--:--'
        }
    }
    handleBaseChange(value){
        this.setState({cryptocurrency: value});
    }
    handleComparedChange(value){
        this.setState({wcurrency: value});
    }
    handleResultChange(result){
        this.setState({result});
    }
    
    render(){
        const cryptocurrency= this.state.cryptocurrency;
        const wcurrency=this.state.wcurrency;
        const result=this.state.result;
        return(
            <Content>
                <Card>
                <CardItem header>
                    <Text> Choose a base crypto-currency</Text>
                </CardItem>

                <BasePicker 
                    cryptocurrency={cryptocurrency}
                    onBaseChange={this.handleBaseChange}/> 

                <CardItem header>
                    <Text> Compare to a world currency</Text>                            
                </CardItem>

                <ComparedPicker
                    wcurrency={wcurrency}
                    onComparedChange={this.handleComparedChange}/>   

                {/* <CardItem > */}
                    <Button full success>
                        <Text> CONVERT </Text>
                    </Button>
                {/* </CardItem> */}
                </Card>
                <ResultCard 
                    result={result}
                    onResultChange={this.handleResultChange}/> 
            </Content>
        );
    }
}