import React from 'react';
import {View} from 'react-native';

import MixtapeList from '../components/MixtapeList';
import Header from '../components/Header';

export default function MixtapesScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText={'Mixtapes'} />
      <MixtapeList />
    </View>
  );
}

MixtapesScreen.navigationOptions = {
  header: null,
  title: 'Mixtapes',
  headerTitleStyle: { flex: 1, textAlign: 'center' },
};
