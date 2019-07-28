import React from 'react';
import { View } from 'react-native';
import EPsList from '../components/EPsList';

export default function LinksScreen() {
  return (
    <View style={{ flex: 1 }}>
      <EPsList />
    </View>
  );
}

LinksScreen.navigationOptions = {
  title: 'EPs',
  headerTitleStyle: { flex: 1, textAlign: 'center' },
};
