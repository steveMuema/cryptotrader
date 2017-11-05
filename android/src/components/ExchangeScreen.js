import React, {Component} from 'react';
import {Container, Button, Icon, Header, Left, Body, Title, Right, Content, Text, Card, CardItem, Fab, Form, Picker, Item as FormItem} from 'native-base';
import Converter from './Converter';
import FloatingSave from './FloatingSave';
import {Actions} from 'react-native-router-flux';


class Exchange extends Component{
    constructor(props){
        super(props);        
        // this.handleBaseChange=this.handleBaseChange.bind(this);
        // this.handleComparedChange=this.handleComparedChange.bind(this);
        // this.state={
        //     cryptocurrency: 'BTC',
        //     wcurrency:'KES',
        // }
    }

   

    componentDidMount(){
        // const cryptocurrency=this.state.cryptocurrency;
        // const wcurrency = this.state.wcurrency;

    }
   
    render(){
        // const cryptocurrency=this.state.cryptocurrency;
        // const wcurrency = this.state.wcurrency;
        return(
                <Container>
                    {/* <Header androidStatusBarColor='#FFD440' style={{backgroundColor: '#FFD400'}}>
                        <Left>
                            <Button transparent
                                onPress={()=> {Actions.pop(); }}>
                                <Icon name = "arrow-back"/>
                            </Button>
                        </Left>
                        <Body>
                            <Title>New Exchange Card </Title>
                        </Body>
                    </Header> */}
                    <Content style={{backgroundColor: "#e0e0e0"}}>
                        
                        <Converter />
                    </Content>
                </Container>
        );
    }
}
// const mapDispatchToProps=(dispatch)=>{
//     return{
//         // saveResults: (result)=>dispatch(saveResults(result))
//     };
//     }
// export default connect(mapDispatchToProps)(Exchange);
export default Exchange;