import React from 'react';
import {View} from 'react-native';

import TourList from '../components/TourList';

export default function TourScreen() {
  return (
    <View style={{ flex: 1 }}>
      <TourList/>
    </View>
  );
}

TourScreen.navigationOptions = {
  title: 'Tour',
  headerTitleStyle: { flex: 1, textAlign: 'center' },
};