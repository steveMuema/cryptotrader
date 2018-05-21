import React, {Component} from 'react';
import {Button,Text, Card, CardItem, Content, List, ListItem} from 'native-base';
import ComparedPicker from './ComparedPicker';
import BasePicker from './BasePicker';
import ResultCard from './ResultCard';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {saveFetchResults} from '../actions/savedResults';
import {Actions} from 'react-native-router-flux';
import Home from './HomeScreen';
import {resultsFetchData} from '../actions/results';


class Converter extends Component{
    constructor(props){
        super(props);
        this.handleBaseChange=this.handleBaseChange.bind(this);
        this.handleComparedChange=this.handleComparedChange.bind(this);
        // this.handleLabelChange=this.handleLabelChange.bind(this);
        // this.handleResultChange=this.fetchData.bind(this);
        this.state={
            cryptocurrency: 'BTC',
            wcurrency: 'KES',
        }
    }
    
    handleBaseChange(value){
        this.setState({cryptocurrency: value});
    }
    handleComparedChange(value){
        this.setState({wcurrency: value});
    }
    componentDidMount(){
        var cryptocurrency= this.state.cryptocurrency;
        var wcurrency=this.state.wcurrency;
        var results=this.props.results;
        this.props.fetchData(cryptocurrency, wcurrency);
        
    }
    shouldComponentUpdate(){
        var cryptocurrency= this.state.cryptocurrency;
        var wcurrency=this.state.wcurrency;
        var results=this.props.results;        
        this.props.fetchData(cryptocurrency, wcurrency);
        return true;
        
    }

    
    render(){
        const cryptocurrency= this.state.cryptocurrency;
        const wcurrency=this.state.wcurrency;
        const results=this.props.results;
        // const currencylabel =this.state.currencylabel;
        // if(this.props.hasErrored){
        //     return <Text> Error fetching data</Text>
        // }
        // if(this.props.isLoading){
        //     return <Text> Loading data</Text>
        // }
        
        
        return(
            <Content>
                <Card >
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
                <Button full success
                    onPress={()=> {Actions.pop();}}
                    onSave={(results)=>{this.props.savedResults(results)}}
                    >
                    <Text> SAVE RESULT </Text>
                </Button>
                </Card>
                <ResultCard 
                            cryptocurrency={cryptocurrency}
                            wcurrency={wcurrency}
                            results={results}/>
            </Content>
        );
    }
}

const mapStateToProps = (state)=>{
        return{
            results: state.results
        };
    }
const mapDispatchToProps=(dispatch)=>{
    return{
        savedResults: (results)=>dispatch(saveFetchResults(results)),
        fetchData: (cryptocurrency, wcurrency)=> dispatch(resultsFetchData(cryptocurrency, wcurrency)),
        
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Converter);