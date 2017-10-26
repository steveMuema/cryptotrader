import React, {Component} from 'react';
import {Container, Button, Icon, Header, Left, Body, Title, Right, Content, Text, Card, CardItem, Fab, Form, Picker, Item as FormItem} from 'native-base';
import Converter from './Converter';
import FloatingSave from './FloatingSave';

class Exchange extends React.Component{   
    render(){
        return(
            <Container>
                <Header androidStatusBarColor='#FFD440' style={{backgroundColor: '#FFD400'}}>
                    <Left>
                        <Button transparent>
                            <Icon name = "arrow-back"/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>New Exchange Card </Title>
                    </Body>
                </Header>
                <Content style={{flex: 1}}>
                    
                    <Converter/>
                    <FloatingSave/>
                </Content>
            </Container>
        );
    }
}
export default Exchange;