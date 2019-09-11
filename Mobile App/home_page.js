import React, { Component } from 'react';

import { Body, Button, Card, CardItem, Container, Content, Icon, Text, Thumbnail } from 'native-base';
import { ScrollView, StyleSheet, Image } from "react-native";


import firebase from '@firebase/app'
import '@firebase/auth'
import "@firebase/database";


export default class home_page extends Component {


    constructor(props) {
        super(props);

        this.state = {
            isWorking: true,
            value: null
        }
    }

    componentWillMount() {
        var config = {
            apiKey: "AIzaSyA8qcwweMniJ6LKqY9N8kSfD2w2QSP_vPI",
            authDomain: "hasystem-b6df4.firebaseapp.com",
            databaseURL: "https://hasystem-b6df4.firebaseio.com",
            projectId: "hasystem-b6df4",
            storageBucket: "hasystem-b6df4.appspot.com",
            messagingSenderId: "891785841120"
        };
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }

        //Retrive Data
        firebase.database().ref('singhaelectronics/pr1_ch1_res').on('value', (data) => {
            this.setState({
                value: data.val().res_message
            });
        });
    }

    switchOn() {
        firebase.database().ref('singhaelectronics/pr1_ch1_res').update(
            {
                led_status: 'on'
            }
        ).then(() => {
            console.log('Inserted!');
        }).catch((error) => {
            console.log(error);
        });

    }

    switchOff() {
        firebase.database().ref('singhaelectronics/pr1_ch1_res').update(
            {
                led_status: 'off'
            }
        ).then(() => {
            console.log('Inserted!');
        }).catch((error) => {
            console.log(error);
        });

    }

    render() {

        if (this.state.value == 'son') {
            btnState = (
                <Button block danger onPress={this.switchOff}>
                    <Icon name='power' style={styles.icon} />
                    <Text>Switch Off</Text>
                </Button>
            );
            imageBox = (
                <Image source={require('./img/homeon.png') }
                style={{width: 200, height: 200}} />
            );


        } else {
            btnState = (
                <Button block success onPress={this.switchOn}>
                    <Icon name='power' style={styles.icon} />
                    <Text>Switch On</Text>
                </Button>
            );
            imageBox = (
                <Image source={require('./img/homeoff.png') }
                style={{width: 200, height: 200}} />
            );
        }
        return (
            <ScrollView>
                <Card style={styles.mb}>
                    <CardItem header bordered>
                        <Text>Home Automation.</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>Home automation or domotics is building automation for a home,
                                called a smart home or smart house. A home automation system will control lighting,
                                climate, entertainment systems, and appliances. </Text>
                            <Text></Text>
                        </Body>
                    </CardItem>
                </Card>
                <Card style={styles.mb}>
                    <CardItem header bordered>
                        <Text>Control your home switch</Text>
                    </CardItem>

                    <CardItem>
                        <Body style={styles.img}>
                            {imageBox}
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Body>
                            {btnState}
                        </Body>
                    </CardItem>
                </Card>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        margin: 2,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1'
    },
    mb: {
        marginBottom: 3,
        flex: 1
    },
    mb15: {
        marginBottom: 20
    },
    icon: {
        color: '#fff',
        fontSize: 30
    },
    img: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
})