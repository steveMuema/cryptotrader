import React, {Component} from 'react';
import {Card, CardItem, Text, Body, Left, List, ListItem, H1, Toast, Button} from 'native-base';
import {connect} from 'react-redux';
import {resultsFetchData} from '../actions/results';
import {Actions} from 'react-native-router-flux';



class ResultCard extends React.Component{
    constructor(props){
        super(props);
    }

    componentWillMount(){
        
    
    var results=this.props.results;
    
    }
    render(){
        const results=this.props.results;
        // const currencylabel=this.props.currencylabel;
        // const currency = this.props.currency;
        const cryptocurrency = this.props.cryptocurrency;
        const wcurrency = this.props.wcurrency;
        
        return(
            <Card>
            <CardItem header>
                <Text style={{ fontSize: 17}}> Exchange Rate: </Text>
            </CardItem>
            
            <List 
            dataArray={results}
                  renderRow={(result) => 
                    <ListItem>
                        <Button bordered success
                            onPress={()=> Actions.Calculator()}
                                >
                            <Text style={{ fontSize: 26}} >{cryptocurrency}/{wcurrency}: {result}</Text>
                        </Button>
                    </ListItem>
                }>
            </List>
            
            </Card>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        results: state.results,
        hasErrored: state.hasErrored,
        isLoading: state.isLoading
    };
}
const mapDispatchToProps=(dispatch)=>{
return{
    fetchData: (cryptocurrency, wcurrency)=> dispatch(resultsFetchData(cryptocurrency, wcurrency)),
    // saveResults: (result)=>dispatch(saveResults(result))
};
}
export default connect(mapStateToProps, mapDispatchToProps)(ResultCard);
