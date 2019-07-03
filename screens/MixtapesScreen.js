import React from 'react';
import {
  View,
} from 'react-native';

import MixtapeList from '../components/MixtapeList';

export default function MixtapesScreen() {
  return (
    <View style={{ flex: 1 }}>
      <MixtapeList/>
    </View>
  );
}

MixtapesScreen.navigationOptions = {
  title: 'Mixtapes',
  headerTitleStyle: { flex: 1, textAlign: 'center' },
};
