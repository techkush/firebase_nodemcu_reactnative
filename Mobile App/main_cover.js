
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Title, Body, Left, Right, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

import HomePage from './home_page';
import AboutPage from './about_page';


export default class main_cover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab1: true,
            tab2: false,
            index: 0
        };

    }
    toggleTab1() {
        this.setState({
            tab1: true,
            tab2: false,
        });
        this.switchScreen(0);
    }
    toggleTab2() {
        this.setState({
            tab1: false,
            tab2: true,
        });
        this.switchScreen(1);
    }
    switchScreen(index) {
        this.setState({ index: index })
    }

    render() {
        let AppComponent = 0;
        if (this.state.index == 0) {
            AppComponent = HomePage;
        } else if(this.state.index == 1) {
            AppComponent = AboutPage;
        }

        return (
            <Container>
                <Header>
                    <Body>
                    <Title> HASystem - HomeControl</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name="search" />
                        </Button>
                        <Button transparent>
                            <Icon name="heart" />
                        </Button>
                        <Button transparent>
                            <Icon name="more" />
                        </Button>
                    </Right>
                </Header>

                <Content padder>
                    <AppComponent/>
                </Content>

                <Footer>
                    <FooterTab>
                        <Button vertical active={this.state.tab1} onPress={() => this.toggleTab1()}>
                            <Icon active={this.state.tab1} name="home" />
                            <Text>Home</Text>
                        </Button>
                        <Button vertical active={this.state.tab2} onPress={() => this.toggleTab2()}>
                            <Icon active={this.state.tab2} name="contact" />
                            <Text>About</Text>
                        </Button>

                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF"
    }
});