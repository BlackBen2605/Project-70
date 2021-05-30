import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Header } from 'react-native-elements';

export default class ReadScreen extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: 'white' }}>
        <Text
          style={{
            fontSize: 50,
            fontFamily: 'Comic Sans MS',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#99E5FF',
            textAlign: 'center',
            color: 'white',
          }}>
          Story Hub
        </Text>

        <Image
          source={require('../assets/readingBook.jpg')}
          style={{ marginTop: 20, width: 125, height: 150, marginLeft: 105 }}
        />

        <Text
          style={{
            fontSize: 30,
            fontFamily: 'Comic Sans MS',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F5554D',
            textAlign: 'center',
            color: 'white',
          }}>
          READING SCREEN
        </Text>
      </View>
    );
  }
}
