import React, {Component} from 'react';
import {Button,Text, Card, CardItem, Content, List, ListItem} from 'native-base';
import ResultCard from './ResultCard';
import {resultsFetchData} from '../actions/results';
// import {savedResults} from '../actions/savedResults';
import {Actions} from 'react-native-router-flux';
import Calculator from './CalculatorScreen';
import {connect} from 'react-redux';


const cryptocurrencies=['BTC', 'KES']
const wcurrencies=['AED','AUD','CHF','CNY','EGP','EUR','INR','JPY','KES','HKD','MXN','KRW','NAD','NZD','MAD','SEK','MYR','NGN','USD','ZAR']
class ExchangeList extends Component{
    componentDidMount(){
        // var cryptocurrency=cryptocurrencies.map(cryptocurrency=>  this.props.cryptocurrency);
        // var wcurrency=wcurrencies.map(wcurrencies=>  this.props.wcurrencies);
    }
    render(){
        const savedResults=this.props.savedResults;    
        // if (this.props.savedResults.savedResult==='undefined'){
        //     <Text>create new exchange </Text>
        // }    
        return(
            <List
                dataArray={savedResults}
                renderRow={(savedResult)=>{
                    <ListItem>
                        {/* <ResultCard key={savedResult.id}
                                    results={savedResult}
                                    cryptocurrency={cryptocurrencies[cryptocurrency]}
                                    wcurrency={wcurrencies[wcurrency]}
                                    onClick={()=> {Actions.Calculator()}}/> */}
                    </ListItem>
                }}>

            </List>
        );
    }
}
const mapStateToProps = (state)=>{
    return{
        savedResults: state.savedResults
    };
}


// const mapDispatchToProps=(dispatch)=>{
// return{
//     savedResults: (results)=>dispatch(saveFetchResults(results))
// };
// }
export default connect(mapStateToProps)(ExchangeList);