import React, { Component } from 'react';

import { Body, Card, CardItem, Text } from 'native-base';
import { ScrollView, StyleSheet, Image } from "react-native";

export default class About_page extends Component {
  render() {
    return (
      <ScrollView>
        <Card style={styles.mb}>
          <CardItem header bordered>
            <Text>About.</Text>
          </CardItem>
          <CardItem>
            <Body style={styles.img}>
              <Image source={require('./img/logo.png')}
                style={{ width: 300, height: 300 }} />

              <Text>Home automation system. Made by Singha Electronics and ULB Software Solutions.
                This is a custom Application for your daily use. If you have any problem you can contact us.</Text>
              <Text>Contacts : 071-9895701 / 0763445801 </Text>
            </Body>
          </CardItem>
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mb: {
      marginBottom: 3,
      flex: 1
  },
  img: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
  }
})

