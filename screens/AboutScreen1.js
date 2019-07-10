import React, { Component } from 'react';
import { View, TouchableOpacity, Linking, Image, Text, ScrollView } from 'react-native';
import Header from '../components/Header';

class AboutScreen extends Component {
  render() {
      return (
        <React.Fragment>
              <Header headerText={'About'} />

              <ScrollView>
                  <View style={Styles.ContainerStyle}>

                      <Text style={Styles.HeaderStyle}>Artist:</Text>

                      <Image
                          source={require('../assets/images/g-eazy-about.png')}
                          style={Styles.imageStyle}
                      />

                      <Text style={Styles.NameStyle}>G-Eazy</Text>

                      <TouchableOpacity
                          onPress={() => Linking.openURL('https://g-eazy.com')}>
                          <Text style={Styles.LinkStyle}>www.g-eazy.com</Text>
                      </TouchableOpacity>
                      <Text style={Styles.HeaderStyle}>Developer:</Text>

                      <Image
                          source={require('../assets/images/andor-davoti.png')}
                          style={Styles.imageStyle}
                      />

                      <Text style={Styles.NameStyle}>Andor Davoti</Text>

                      <TouchableOpacity
                          onPress={() => Linking.openURL('https://andordavoti.com')}>
                          <Text
                              style={Styles.LinkStyle}>
                              www.andordavoti.com</Text>
                      </TouchableOpacity>

                      <Text style={Styles.VersionStyle}>Version: 1.0.1</Text>

                  </View>
              </ScrollView>
              </React.Fragment>
      );
  }
}

const Styles = {
  ContainerStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  imageStyle: {
      marginTop: 15,
      justifyContent: 'center',
      alignItems: 'center',
      width: 150,
      height: 150
  },
  HeaderStyle: {
      width: 150,
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 20
  },
  NameStyle: {
      paddingTop: 30,
      textAlign: 'center',
      fontSize: 15
  },
  LinkStyle: {
      color: 'blue',
      padding: 30,
      textAlign: 'center',
      fontSize: 15
  },
  VersionStyle: {
      paddingBottom: 15,
      textAlign: 'center',
      fontSize: 15
  },
}

export default AboutScreen;