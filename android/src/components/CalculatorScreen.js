import React,{Component} from 'react';
import { Content, Card, Text,CardItem } from 'native-base';
import {connect} from 'react-redux';

class Calculator extends Component {
  constructor(props) {
    super(props);
    super(props);
    this.handleBaseChange=this.handleBaseChange.bind(this);
    this.handleComparedChange=this.handleComparedChange.bind(this);
    this.state = {
      cryptocurrency: '',
      wcurrency: '',
    };
  }
  handleBaseChange(fsym){
    this.setState({cryptocurrency: fsym});
}
handleComparedChange(tsym){
  this.setState({wcurrency: tsym});
}

handleAmountChange(conv_result){
  this.setState({results: conv_result})
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

  render() {
    return (  
      <Content>
        <Card>
        <CardItem header>
          <Text> Enter the amount to convert</Text>
        </CardItem> 
        <ResultCard handleBaseChange={this.handleBaseChange}
                    handleComparedChange={this.handleComparedChange}
                    handleAmountChange={this.handleAmountChange}
                    cryptocurrency={cryptocurrency}
                    wcurrency={wcurrency}
                    results={results}/>
        </Card>

      </Content>
    );
  }
}
const mapStateToProps = (state)=>{
  return{
      results: state.results
  };
}
export default connect(mapStateToProps)(Calculator);