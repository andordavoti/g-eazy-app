import React from 'react';
import { Text, View, TouchableOpacity, Linking, Image } from 'react-native';

export default function AboutScreen() {
  return (
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
      </View>
  );
}

AboutScreen.navigationOptions = {
  title: 'About',
  headerTitleStyle: { flex: 1, textAlign: 'center' },
};

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
  }
}