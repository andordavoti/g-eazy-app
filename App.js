import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/the-beautiful-and-damned.jpg'),
      require('./assets/images/when-its-dark-out.jpg'),
      require('./assets/images/these-things-happen.jpg'),
      require('./assets/images/must-be-nice.jpg'),
      require('./assets/images/andor-davoti.png'),
      require('./assets/images/big.jpg'),
      require('./assets/images/b-sides.jpg'),
      require('./assets/images/g-eazy.jpg'),
      require('./assets/images/g-eazy-about.png'),
      require('./assets/images/icon.png'),
      require('./assets/images/must-be-twice.jpg'),
      require('./assets/images/nothing-wrong.jpg'),
      require('./assets/images/quarantine.jpg'),
      require('./assets/images/splash.png'),
      require('./assets/images/step-brothers.jpg'),
      require('./assets/images/the-endless-summer.jpg'),
      require('./assets/images/the-epidemic.jpg'),
      require('./assets/images/the-fresh.jpg'),
      require('./assets/images/the-outsider.jpg'),
      require('./assets/images/these-things-also-happened.jpg'),
      require('./assets/images/the-sikkis-on-the-planet.jpg'),
      require('./assets/images/the-tipping-point.jpg'),
      require('./assets/images/the-vault.jpg'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
